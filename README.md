# Welcome to TootSkeet

TootSkeet is a simple web application that allows you to compose a post and publish it simultaneously to both Mastodon and Bluesky. It's designed to streamline your social media experience by letting you share your thoughts accross platforms from a single place.

**Please note**: This app is still in the very early stages and is most certainly filled with bugs. Use it at your own risk, and feel free to contribute to its improvement!

## Table of Contents

- [Features](#Features)
- [How it Works](#How-it-Works)
- [Requirements](#Requirements)
- [Installation](#Installation)
- [Usage](#Usage)
- [Known Issues](#Known-Issues)
- [Contributing](#Lincense)
- [Disclaimer](#Disclaimer)

## Features

- **Dual Posting**: Write a post once and publish it to both Mastodon and Bluesky
- **Basic AF Interface**: A straightforward and minimalistic design for easy use.
- **Open Source**: Review, modify, and contribute to the codebase.

## How it Works

TootSkeet uses Node.js with Express for the backend and basic HTML, CSS, and TypeScript for the frontend. It interacts with the Mastodon and Bluesky APIs to post your content to your accounts on these platforms.

### Mastodon Integration

- **API Usage**: Communicates with your Mastodon instance's API to post statuses.
- **Authentication**: Requires your Mastodon access token and instance URL.
- **Posting**: Supports text posts.

### Bluesky Integration

- **API Usage**: Utilizes the Bluesky API via the @atproto/api package.
- **Authentication**: Requires your Bluesky identifier and password.
- **Rich Text Support**: Detects links and other rich text facets in your posts.

## Requirements

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)
- Accounts on Mastodon and Bluesky
- Access tokens and credentials for both platforms

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/tootskeet.git
```

2. **Navigate to the Project Directory**

```bash
cd tootskeet
```

3. **Install Dependencies**

```bash
npm install
```

4. **Set Up Environment Variables**
   Creat a .env file and in the backend directory and add your credentials:

```env
# Mastodon Configuration
MASTODON_BASE_URL=https://your-mastodon-instance.com
MASTODON_ACCESS_TOKEN=your_mastodon_access_token

# Bluesky Configuration
BLUESKY_IDENTIFIER=your_bluesky_username
BLUESKY_PASSWORD=your_bluesky_password
```

5. **Build the Project**

- **Backend**

```bash
cd backend
npm start
```

- **Frontend**

```bash
cd frontend
npm run build
```

6. **Start the Server**
   From the backend directory, run:

```bash
npm sart
```

7. **Access the App**
   Open your browser and navigate to http//::localhost:3000

## Usage

1. **Compose Your Post**

- Enter your message in the text area.
- Select the platforms (Mastodon and/or Bluesky) you want to post to.

2. **Publish**

- Click the Post Button
- Your message will be posted to the selected platforms.

## Known Issues

- The application may crash unexpectedly due to unhandled exceptions.
- Error messages are not user-friendly.
- OAuth authentication flows are not fully implemented; credentials are stored in environment variables.
- Posts with media attachments are not supported yet.
- Input validation is minimal; special characters may cause issues.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**
   Click the Fork button at the top right corner of the repository page.

2. **Create a new Branch**

```bash
git checkout -b feature/your-feature-name
```

3. **Make your Changes**
   Implement your feature or bug fix.

4. **Commit and Push**

```bash
git commit -m "Description of your changes"
git push origin feature/your-feature-name
```

5. **Submit a Pull Request**
   Open a pull request on the original repository with a description of your changes.

## License

This project is licensed under the MIT License.

## Disclaimer

TootSkeet is in active development. The application may have bugs and is not recommended for production use. Please use it responsibly and report any issues you encounter.

---

Thank you for trying out TootSkeet! Your feedback and contributions are invaluable as we work to improve this app. If something is not clear or you get stuck with something be sure to reach to me on either [Bluesky](https://bsky.app/profile/jaycruz.bsky.social) or [Mastodon](https://fosstodon.org/@jaycruz)
