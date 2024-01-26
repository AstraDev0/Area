# Getting Started with Project

To launch and run the project, follow these steps. Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

## Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

## Step 2: Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

## Step 3: Configure Environment Variables

Create a `.env` file in the root of your project and populate it with the required environment variables:

```plaintext
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
REDIRECT_GOOGLE_SERVICE_MOBILE=
REDIRECT_GOOGLE_SERVICE=

DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
DISCORD_BOT=
REDIRECT_DISCORD_URL=
REDIRECT_DISCORD_MOBILE=

SPOTIFY_CLIENT_ID=
SPOTIFY_SECRET_ID=
REDIRECT_SPOTIFY_URL=
REDIRECT_SPOTIFY_MOBILE=

TOKEN_SECRET=

REDIRECT_GOOGLE_MOBILE_URL=
REDIRECT_GOOGLE_WEB_URL=
MOBILE_APP=
CLIENT_URL=
ATLAS_URI=
```

Replace the empty values with your actual credentials and URLs. These variables are essential for the proper functioning of your application.

## Step 4: Start the Project

Run the following command to start the project:

```bash
npm start
```
