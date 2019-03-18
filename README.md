# React Hooks - Global State Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses React Hooks to implement a global store.

## Architecture

### App

Provides route paths and application layout.

### Store

Provides a `useStore` function and a `StoreProvider` component. `StoreProvider` wraps the entire application, providing `useStore` the context to update the `initialState`.

### Hooks

Each hook returns an object for a different store item. The object contains the state of the store item and helper methods for updating that item's state.

### Pages

The content of each page.

### Components

The building blocks of each page.

## Scripts

In the project directory, you can run:

- `npm start` runs the app in development mode on [3000](http://localhost:3000).
- `npm test` launches the test runner. There are currently no tests.
- `npm run build` builds the app for production to the `build` folder.
