"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const postForm = document.getElementById("postForm");
const contentInput = document.getElementById("content");
const postMastodonCheckbox = document.getElementById('postMastodon');
const postBlueskyCheckbox = document.getElementById('postBluesky');
postForm.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const content = contentInput.value;
    const postMastodon = postMastodonCheckbox.checked;
    const postBluesky = postBlueskyCheckbox.checked;
    const requests = [];
    if (postMastodon) {
        requests.push(fetch('/mastodon/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: content }),
        }));
    }
    if (postBluesky) {
        requests.push(fetch('/bluesky/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content }),
        }));
    }
    try {
        const responses = yield Promise.all(requests);
        const results = yield Promise.all(responses.map((res) => res.json()));
        alert('Posted successfully!');
        contentInput.value = '';
    }
    catch (error) {
        console.error('Error posting:', error);
        alert('An error occurred while posting.');
    }
}));
