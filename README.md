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

5. Run `npm install` to install required npm dependencies.

## Development

We will follow the [Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) for the development of this project. In this workflow, there will be two different remote repos:

1. The "official" repo: this is the repo being forked (ttps://github.com/Orpheusp/group-act-frontend).

2. The "developer" repo: this is the developer's personal server-side repository, which is the one being cloned to your local machine.

Step 4 of the Installation section sets the "official" repo as the upstream of your "developer" repo, so that you can use command ``

Development happens in the developer's forked repository before it is ready for review and merge.

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
