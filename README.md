# React Hooks - Global State Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses React Hooks to implement a global store.

## Architecture

### `src`

The entry point of the application.

#### `App.js`

The component that provides a layout and navigation to the application.

#### `store`

The store provides global state to the application. `StoreProvider` wraps the entire application, and `useStore` updates the provided key value of `initialState`.

#### `hooks`

Each hook returns an object representing a stored value. The object contains the state of the store item and helper methods for updating state.

#### `pages`

Pages are functional representations of one route's content.

#### `components`

Components are functional representations of each HTML element rendered by the browser.

## Scripts

In the project directory, you can run:

- `npm start` runs the app in development mode on [3000](http://localhost:3000).
- `npm test` launches the test runner. There are currently no tests.
- `npm run build` builds the app for production to the `build` folder.
