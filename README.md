# Venture Build Setup Guide

## Summary

This document guides the setup for the Venture Build frontend application. Below the steps to setup the frontend will be outlined.

## Team

| Name | Role | Contact |
|---|---|---|
| Jessica | Product Owner | <jessica@africanimpactinitiative.com> |
| Yuhao | Design + UX | <yhao.wang@mail.utoronto.ca> |
| Saad | SWE | <saad.makrod@mail.utoronto.ca> |
| Man Hei | SWE | <man.ho@mail.utoronto.ca> |
| Alykhan | SWE | <alykhan.versi@mail.utoronto.ca> |

## Development Guide

Currently we have general project tracking on [Notion](https://www.notion.so/8ba829f8b0dd48e8a17ebd28df4d2d9a?v=81c9ee79dec94beda40c150972ceff65). Please make sure you have access to the link. We will track specific tasks and tickets using GitHub Projects. Navigate to the project tab in the repository to view the task plan.

On Notion, you should also add comments at least once a week. Jessica (the project manager) reviews the comments for the latest status every Friday.

Furthuremore for the sake of consistency we will have a branch naming convention as follows `[fea/hotfix/chore]/change-description`.

- `[fea/hotfix/chore]` indicates whether a full feature is being done, a chore update, or a hotfix on the develop branch for a bug
- `change-description` is a small desciption of the change based on the ticket assigned in the project

Upon completion of a feature please open a pull request and add those who you would like to review. Once approved the branch can be merged and deleted.

Some additional resources:

- **Meeting notes**: [Google Docs Link](https://docs.google.com/document/d/14ANfxa0CUgF6XR9H8Xx3c1zYaqNO5UxUAivhAaCX-ww/edit?usp=sharing)
- **Figma file**: [Figma Link](https://www.figma.com/file/o1aa3g3c8wKzJ0wgPhDmoe/Venture-Build-Design-Delivery?type=design&node-id=0-1&mode=design&t=afHZOu4M6Cui13YX-0)

## Background

What is Venture Build?

Venture Build is a entrepreneurship platform developed to aid African startups begin their ventures as part of the African Impact Challenge. The platform is currently in development with the goal of completing a MVP by October 2023.

The frontend of the application will be developed using React with a heavy reliance on Redux architecture. Furthermore, the frontend is written in TypeScript.

To learn more about setting up the application for local development, please continue reading below.

## Preliminary Steps

Git will need to be installed please see the official documentation at <https://github.com/git-guides/install-git>. Once git is installed navigate to the directory of your choosing and execute `git clone https://github.com/African-Impact-Initiative/frontend.git`.

## Frontend

The setup steps for the frontend.

### Installation Steps

This guide will assume that you already have Node.js installed. At the time of development the Node.js version being used is v20.4.0 and the npm version is 9.8.0. To download Node and npm please see <https://docs.npmjs.com/downloading-and-installing-node-js-and-npm> for steps and <https://nodejs.org/en/download> for the installation link.

Navigate to `./frontend` in the terminal. You will see a file called `package.json`, this file contains all the package information related to the frontend project. To install all the packages run `npm install` in terminal. If there are any issues with installing a package run `npm install --force`. Note do not upgrade any of the packages unless you know for sure that it will not cause versioning errors with other packages.

To start the frontend project run `npm start` in the frontend folder. If there are no issues the application will start at <http://localhost:3000/>.

We have a hooks folder at the root of the project responsible for creating GitHub hooks. Currently we have a single pre-push hook which runs in order to remind developers to fix their lint errors. The hooks should be configured when running `npm install` but in case you have any issues run: `git config --local core.hooksPath hooks`.

### Project Structure

The project structure is straight-forward. The `src` folder contains all of the project code, and the public folder contains `index.html`  and a few static files such as images.

Below is a description of the `src` directory:

- **components**: React renders TypeScript components for users to see. This folder contains all the components that will be rendered.
- **reducers**: In Redux architecture when an action is dispatched reducers are called to manipulate the application state. All the reducers are located in this folder
- **services**: To communicate with the Django Server the frontend needs a way to send and receive requests. This folder contains all the services which are used to communicate with the server. In the folder there is a file called token.js which is used to manage the user tokens and headers for the requests
- **App.js**: This is the main component with the React Router. The React Router is in charge of rendering components based on the URL the application is on
- **index.js**: Wraps App.js with the router and the store (used in redux)
- **store.js**: Manages the store for redux, the store contains the state of the application

### **Useful Resources**

- Full Stack Open: <https://fullstackopen.com/en/#course-contents>
- React Docs: <https://reactjs.org/>
- Redux Docs: <https://redux.js.org/>
- Material UI Docs: <https://mui.com/>
- Google OAuth Docs: <https://developers.google.com/identity/protocols/oauth2>
- Axios Docs: <https://axios-http.com/docs/intro>
