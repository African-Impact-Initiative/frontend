# Venture Build Setup Guide

## Summary

This document guides the setup for the Venture Build application. Below the steps to setup both the backend and the frontend will be outlined.

## Team

| Name | Role | Contact |
|---|---|---|
| Jessica | Product Owner | <jessica@africanimpactinitiative.com> |
| Yuhao | Design + UX | <yhao.wang@mail.utoronto.ca> |
| Saad | SWE | <saad.makrod@mail.utoronto.ca> |
| Okoli | SWE | <okolijohnson69@gmail.com> |
| Joy | SWE | <ibinichinasajoy@gmail.com> |
| Man Hei | SWE | <man.ho@mail.utoronto.ca> |
| Alykhan | SWE | <alykhan.versi@mail.utoronto.ca> |

## Development Guide

Currently we are managing our project tracking on [Notion](https://www.notion.so/8ba829f8b0dd48e8a17ebd28df4d2d9a?v=81c9ee79dec94beda40c150972ceff65). Please make sure you have access to the link.

The fields we'll be using most are:

- Assigned To
- Progress
- Due Date

You should also add comments, at least once a week. Jessica (the project manager) reviews the comments for the latest status on Fridays.

Furthuremore for the sake of consistency we will have a branch naming convention as follows `[feature/hotfix/chore]/[fe/be]/change-description`.

- `[feature/hotfix/chore]` indicates whether a full feature is being done, a small chore update, or a hotfix on the develop branch for a bug
- `[fe/be]` indicates whether change applies to the frontend (fe) or backend (be)
- `change-description` is a small desciption of the change

Upon completion of a feature please open a pull request and add those who you would like to review. Once approved the branch can be merged and deleted.

Some additional resources:

- **Meeting notes**: <https://docs.google.com/document/d/14ANfxa0CUgF6XR9H8Xx3c1zYaqNO5UxUAivhAaCX-ww/edit?usp=sharing>
- **Figma file**: <https://www.figma.com/file/o1aa3g3c8wKzJ0wgPhDmoe/Venture-Build-Design-Delivery?type=design&node-id=0-1&mode=design&t=afHZOu4M6Cui13YX-0>

## Background

What is Venture Build?

Venture Build is a entrepreneurship platform developed to aid African startups begin their ventures as part of the African Impact Challenge. The platform is currently in development with the goal of completing a MVP by October 2023.

The frontend of the application will be developed using React with a heavy reliance on Redux architecture.

The backend of this application has been developed using Django with a heavy reliance on the Django Rest Framework.

To learn more about setting up the application for local development, please continue reading below.

## Preliminary Steps

Note that at this time the project does not have a Git repository. Once the repository is finalized information will be placed here with instruction on how to get access to the code and how to clone the repository.

For this Git will need to be installed please see the official documentation at <https://github.com/git-guides/install-git>

## Frontend

The setup steps for the frontend.

### Installation Steps

This guide will assume that you already have Node.js installed. At the time of development the Node.js version being used is v20.4.0 and the npm version is 9.8.0. To download Node and npm please see <https://docs.npmjs.com/downloading-and-installing-node-js-and-npm> for steps and <https://nodejs.org/en/download> for the installation link.

Navigate to `./frontend` in the terminal. You will see a file called `package.json`, this file contains all the package information related to the frontend project. To install all the packages run `npm install` in terminal. If there are any issues with installing a package run `npm install --force`. Note do not upgrade any of the packages unless you know for sure that it will not cause versioning errors with other packages.

To start the frontend project run `npm start` in the frontend folder. If there are no issues the application will start at <http://localhost:3000/>.

### Project Structure

The project structure is straight-forward. The `src` folder contains all of the project code, and the public folder contains `index.html`  and a few static files such as images.

Below is a description of the `src` directory:

- **components**: React renders JavaScript components for users to see. This folder contains all the components that will be rendered.
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

## Backend

The setup steps for the backend.

### Installation Steps

This guide will assume that you already have Python installed. To install Python please see <https://wiki.python.org/moin/BeginnersGuide/Download>. At the time of development the Python version being used is 3.9.12, the Django version is 4.2.3, and the Django Rest Framework version is 3.14.0.

Navigate to `./backend` in the terminal. Next, you will need to setup a Python virtual environment to do so run the following command in the directory you would like to keep the project: `python -m venv venv`. Note that this names the virtual environment as `venv` feel free to rename it to your preference.

Activate the virtual environment with the following command `.\venv\Scripts\activate` on Windows and `source venv/bin/activate` on Mac. Now the virtual environment is active. In the root of the repository you will find a requirements.txt with the following contents (excluding comments):

```powershell
# Django
Django==4.2.3
# Used in development to allow port 3000 (react frontend) to communicate with server
django-cors-headers==4.2.0
# rest framework
djangorestframework==3.14.0
# used for user authentication (not just social auth)
drf-social-oauth2==2.1.3
# swagger framework
drf-yasg==1.21.7
# for files on backend (temporary)
Pillow=10.0.0
```

You can install all the packages by running `pip install -r requirements.txt`. Now you should have all the project requirements.

Make sure to create the migrations if necessary by navigating to the backend folder and running the commands: `python manage.py makemigrations` and then `python manage.py migrate`

To start the API run `python manage.py runserver` in the backend folder. If there are no issues the server will start at <http://127.0.0.1:8000/>.

Now we must set up the **authentication backend**. Note that currently these steps specify the setup for user credentials (username and passwords); this will be updates when OAuth is implemented. To set up authentication perform the following steps:

1. First a superuser must be created. In the terminal (in the directory with `manage.py`) run the command `python manage.py createsuperuser` and follow the necessary steps.
2. Now make sure the server is running and navigate to <http://127.0.0.1:8000/admin> and log in.
3. You will see a section that says **DJANGO OAUTH TOOLKIT**, click on applications.  ![image](https://github.com/jessicaAII/VentureBuild/assets/53048085/bb4038ca-f7ab-4e64-9cd7-9cfeab0dbafb)
4. Once you click on applications you will have to create a new app for password-based authentication. The resource type is **Resource owner password based** and client type is **public**. Name is not important you can include it if you would like. To do this click on add application in the top right corner. Make sure to copy down the `client ID` and `secret` before saving them since you cannot find them again.  ![image](https://github.com/jessicaAII/VentureBuild/assets/53048085/35333aed-fe4e-427d-b633-daf9cd14da77)
5. Save the new app. You should see something like this below:  ![image](https://github.com/jessicaAII/VentureBuild/assets/53048085/8ab6b4c2-f773-4776-b66a-95cb313b0505)
6. Now the corresponding values that need to be updated in the env file in the `frontend` folder are `VITE_APP_REGULAR_LOGIN_CLIENT_ID`, and `VITE_APP_REGULAR_LOGIN_CLIENT_SECRET`. To do this please create a file called `.env` and copy the contents of `.env.example` into it. Fill out the necessary information.

Now the frontend and backend should be able to communicate with each other. You will have to restart the app for the new changes to apply.

### Project Structure

The project structure is straight-forward, each main API endpoint has its own folder. The home folder with `settings.py` and main URLs is `venturebuild`. The contents of the folder should be familiar as all Django Rest Framework projects consist of similar file contents. Below is a description of what each folder contains.

- **models.py**: Contains the database schema relating to the resource managed by the folder (e.g. `organizations`’ `models.py` manages the `Organization` schema)
- **views.py**: Contains the logic required to generate a response to the client, heavily relies on the Django Rest Framework. It is recommended to see the video below to completely understand this
- **serializers.py**: Data sent to and from the server must be serialized in some way, this specifies the serializers needed for the resource. Again this heavily relies on the Django Rest Framework
- **urls.py**: Specifies the routes of the API (i.e. connects a view `views.py` to a URL)
- **apps.py**: Basic app metadata
- **admin.py**: Registers resources to admin dashboard

### **Useful Resources**

- Django Docs: <https://docs.djangoproject.com/en/4.2/>
- Django Rest Framework Docs: <https://www.django-rest-framework.org/>
- Django Rest Framework Tutorial (long but good): <https://www.youtube.com/watch?v=c708Nf0cHrs>
- DRF Social Auth Docs: <https://github.com/wagnerdelima/drf-social-oauth2>
- Note that the DRF social auth docs are quite weak (imo) so this video may be better <https://www.youtube.com/watch?v=wlcCvzOLL8w>
- Django CORS Headers Docs: <https://pypi.org/project/django-cors-headers/>

## Swagger

The API for venture build also supports both a Swagger and Redoc. To access the docs ensure that you are logged in at <http://127.0.0.1:8000/admin>. To access the docs in Swagger format navigate to <http://127.0.0.1:8000/swagger/> and to access the docs in Redoc format navigate to <http://127.0.0.1:8000/redoc/>. Note that the docs are managed by the `drf-yasg` package so they may not be perfect; any questions can be directed to the backend development team.
