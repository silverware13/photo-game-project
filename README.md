# Photo Game Project

This application allows users to play a game where they view photos and select the correct option for each photo
in an attempt to get a high score. Privileged users can also create new categories, submit new photos, update photos, or delete photos.

This is a hobby project that uses the following technologies:
- React + TypeScript + Redux for the UI
- Node + TypeScript + Express for the REST API
- Node + Apollo for the Graph API
- MySQL for the database

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm startDev`

The same as `npm start` but forces the application into development mode.

### `npm startProd`

The same as `npm start` but forces the application into production mode.

### `npm run build`

Builds the app for deployment in the `build` folder.\
It correctly bundles React and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed.

### `npm run buildDev`

The same as `npm build` but forces the application into development mode.

### `npm run buildProd`

The same as `npm build` but forces the application into production mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm testAll`

Launches the test runner with watch mode disabled so that every test is always ran.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Setting up ESLint and Prettier

To keep code consistent we require ESLint and Prettier.

## Run ESLint on save in VS Code

- Go to extensions in VS Code and install 'ESLint'.
- Open up your command palette (Ctrl+Shift+P).
- Search for 'Preferences: Open Settings (JSON)'.
- Add the following to the settings.json file:

```
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  }
```

## Run Prettier on save in VS Code

- Go to extensions in VS Code and install 'Prettier'.
- Open up your command palette (Ctrl+Shift+P).
- Search for 'Preferences: Open Settings (JSON)'.
- Add the following to the settings.json file:

```
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
```
