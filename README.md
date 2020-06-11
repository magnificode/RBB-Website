<h1 align="center">Welcome to Rebuild Black Business 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> The website for https://www.rebuildblackbusiness.com/

### 🏠 [Homepage](https://www.rebuildblackbusiness.com/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Rebuild-Black-Business/RBB-Website/issues).

### How can I get involved now?

The first step is to make sure that you're a part of the [Discord Community](https://discord.gg/272XMuv). State in the #sorting-hat channel your desire to join the Developer team. This will get you access to the development channels for further information.

We're tracking all high level Web Development tasks in Trello:

- [Front-End Development Trello](https://trello.com/b/d1sguaj6/rebuild-black-business-frontend-dev)
- [Back-End Development Trello](https://trello.com/b/034hEV4X/rebuild-black-business-backend-dev)

If you see a task in the Trello that seems like something you'd like to tackle, comment on the task expressing your interest. A project manager will assign the task to you. Tasks are then elaborated on in detail within [GitHub Issues](https://github.com/Rebuild-Black-Business/RBB-Website/issues). The Trello card will have a link to the corresponding issue so you can get started!

### Branch Name Conventions

When contributing, please fork this repository by clicking the “fork” button at the top right. This creates your own copy of the repository where you’re able to make changes. Once you have forked the repository, please structure your branches using the following format.

`feature/task-description` - Feature branches are for all new feature work. The task description should be descriptive enough to quickly understand the work done in this branch. Please keep your features concise and ensure the work done in this branch directly relates to your task.

`fix/task-description` - Fix branches should be leveraged for bug fixes on existing features

`hotfix/task-description` - Hotfix branches should only ever be leveraged for _critical_ bug fixes that need attention immediately. This would only be use if there is a broken feature or bug on production that needs to be addressed urgently.

### Pull Requests

To send your changes for review, open a pull request. If you’ve never opened a pull request before, [read Thanoshan’s article on creating a pull request](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/) for more information!

Code reviewers will automatically be notified for a review.

## Terminology

- User Types - Dynamic user data for the various types of data used on the site. Currently this includes the following
  - Business In Need
  - Black Owned Business
  - Service Organization
  - Ally

## 🖥️ Tech Details

**Frontend**

The website is built using [Gatsby](https://www.gatsbyjs.org/docs/), with UI components leveraging [Chakra UI](https://chakra-ui.com/getting-started) with custom theming for rapid and consistent component driven development.

**Data**

Data for the various user types is stored in [Airtable](https://airtable.com/). Each user type has it's own table that the site pulls from and displays.

To get access to this data, please join the [Rebuild Black Business Discord](https://discord.gg/272XMuv) and express your interest in helping to your assigned Team Lead. They'll get you read access to the data in a timely manner.

## Install

**Clone the repository**

First, fork this repository by clicking the “fork” button at the top right. This creates your own copy of the repository where you’re able to make changes.

Second, clone your copy of the repo to your local machine:

```sh
# clone the repo
git clone git@github.com:YOUR_USERNAME_HERE/RBB-Website.git
# move into the new folder
cd RBB-Website/
# install dependencies
npm install
```

**Add environment variables**

This site uses Airtable to keep track of business data. We have set up a dummy database that mirrors the production database that you can get access to by signing up for Airtable via this link: https://airtable.com/invite/l?inviteId=invMvhnrpHMbuDNHe&inviteToken=50cc562d70779ebf8db6109fb31046358875f0c5c2d7b37143d433e56a9f9177

Upon clicking the above link, you will get "Read Only" access to the database.

Once you've obtained access, go to the API docs and grab your API key by visiting the following link: https://airtable.com/appFoFzjMcciPUgoK/api/docs#javascript/authentication

Or by clicking on your user image in Airtable, and finding the "API Documentation" link:

![Airtable API documentation link](docs/images/airtable-api-key-api-documentation.png)

Check the “show API key” box at the top-right, then look for yours in the code sample displayed next to the “Authentication” docs.

![Airtable API key in the docs](docs/images/airtable-api-key.png)

_Note:_ If you don't see this checkbox, make sure you're logged in to Airtable, and go to [your account settings page](https://airtable.com/account) to generate a key:

![Airtable API key in account settings](docs/images/airtable-api-key-acount-settings.png)

Once you have your API key, create a file called `.env` and add your API key:

```bash
AIRTABLE_API_KEY=YOUR_API_KEY
```

> **NOTE:** See `.env.EXAMPLE` for a copy-pasteable template to get set up!

### Airtable Base ID

Additionally, the `.env.EXAMPLE` file has the `AIRTABLE_BASE_ID` pre-defined for you. This ID references the dummy database mentioned above. Copy and paste that directly into your newly created `.env` file as well.

If you ever lose the base ID for the dummy database, it is `appkenjGlBB01wr3i`.

### Algolia

We are using Algolia for our searching backend, please ask for API keys as currently we only have database setup and I don't wanna put the keys in here.

All the Algolia keys need to be set in .env.development as Gatsby uses this method to seperate out environment variables that are loaded on the frontend from the rest.

## Cloudinary

CLOUD_NAME=rebuild-black-business

Our cloud name is used for every call to our `useImage` hook. Having this on hand will be useful.

For our search functionality, we're making use of serverless functions through Netlify.

To test locally, you're going to want to set up the [Netlify CLI](https://docs.netlify.com/cli/get-started/#installation) and run

```bash
  netlify dev
```

This will allow you to consume the env variables from our Netlify account and perform hits to our serverless functions (currently only search)

## Usage

Now that you’ve got the files and an API key, you can start the site on your machine!

```bash
npm run develop
```

This will start Gatsby and show you a local development URL. Whenever you make code changes, Gatsby will automatically reload the browser to show you your changes.

To stop the development server, press `control + C` in your terminal.

## Run tests

```sh
npm run test
```

## Author

👤 **Rebuild Black Business**

- Github: [@Rebuild-Black-Business](https://github.com/Rebuild-Black-Business)
