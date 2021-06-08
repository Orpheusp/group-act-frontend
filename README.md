# Group Act

Project Group Act was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), which uses **npm** to manage dependencies, **Prettier** to format code, **ESLint** to ensure coding standards, and **webpack** to bundle files for deployment

The app is built using React + javascript + CSS modules, with UI tests written with storybook, and unit tests written with Jest.

## Installation

1. In order to run the following commands, you must have installed:

   - [npm](https://www.npmjs.com/package/npm)
   - [VS Code](https://code.visualstudio.com/Download)
   - [git](https://docs.github.com/en/github/getting-started-with-github/quickstart/set-up-git)
   - [Prettier VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

2. Fork [this repository](https://github.com/Orpheusp/group-act-frontend).

3. Clone the forked repository to your local machine.

4. Set upstream repository with `git remote add upstream https://github.com/Orpheusp/group-act-frontend`.

5. Fetch the branches and their respective commits from the upstream repository using `git fetch upstream`.

6. Run `npm install` to install required npm dependencies.

## Development

We will follow the [Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) for the development of this project. In this workflow, there will be two different remote repos:

1. The "official" repo: this is the repo being forked (ttps://github.com/Orpheusp/group-act-frontend). In this repo, there are two branches:

   1. `main`: This is the branch for releases ready for deployment. Ideally, any commit to this branch will trigger a CI/CD pipeline action to bundle and deploy the app to target location.
   2. `develop`: This is where all commits should reside by default. When a feature or a set of features is complete on this branch, the team will create a pull request to merge with the `main` branch to trigger auto-deployment.

2. The "developer" repo: this is the developer's personal server-side repository, which is the one being cloned to your local machine. Branches in this repo largely mirror those of the "official" repo.

Most local development should happen under the `develop` branch of the developer's forked repository, before it is ready for review and merge. During development, it is advised to sync with the upstream "official" repository often. Once on the `develop` branch (use `git checkout develop` to switch to this branch), use commands `git fetch upstream` & `git merge upstream/develop` to merge changes from the upstream `develop` branch into your local `develop` branch. This brings your fork's default branch into sync with the upstream repository, without losing your local changes.

When it is time to submit for review, follow [this tutorial](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to create a pull request. **In most cases, you would want to set base branch to the `develop` branch of the "official" repo, and the compare branch to the `develop` branch of your forked repo.**

## Deployment

TBD

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run storybook`

Launches the storybook runner in watch mode.
