const postForm = document.getElementById("postForm") as HTMLFormElement
const contentInput = document.getElementById("content") as HTMLTextAreaElement
const postMastodonCheckbox = document.getElementById('postMastodon') as HTMLInputElement;
const postBlueskyCheckbox = document.getElementById('postBluesky') as HTMLInputElement;

postForm.addEventListener('submit', async (e: Event) => {
  e.preventDefault();

  const content = contentInput.value;
  const postMastodon = postMastodonCheckbox.checked;
  const postBluesky = postBlueskyCheckbox.checked;

  const requests: Promise<Response>[] = [];

  if (postMastodon) {
    requests.push(
      fetch('/mastodon/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: content }),
      })
    );
  }

  if (postBluesky) {
    requests.push(
      fetch('/bluesky/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      })
    );
  }

  try {
    const responses = await Promise.all(requests);
    const results = await Promise.all(responses.map((res) => res.json()));
    contentInput.value = '';
  } catch (error) {
    console.error('Error posting:', error);
    alert('An error occurred while posting.');
  }
});