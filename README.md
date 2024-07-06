# CatastroBuddy

CatastroBuddy is the prototype for a full-stack web app to easily submit records of household items to an insurance company before or after a catastrophe. Instead 
of going through the difficult process of collecting data on household items after a catastrophe, clients can use CatastroBuddy to complete the 
process without questions on what to submit to an adjuster or how to submit information. 

This app was built using [React](https://react.dev/) on the frontend. It calls a Flask REST API to save data on a MongoDB server.

## Starting the Frontend
Clone the repository cd into **CatastroBuddy-Frontend**
0. Follow instructions for how to download [NodeJS](https://nodejs.org/en/download/package-manager) on your local machine
1. Run `npm install -g yarn` to install the [yarn](https://yarnpkg.com/) package manager if it is not already installed
2. Run `yarn install` to install dependencies
3. Start the app with `yarn start`. The app should run on http://localhost:3000, the default port for node applications

## How to Use the App
The backend must be set up before the app is run. Go to (https://github.com/DevonSchwartz/CatastroBuddy-Backend) for how to set up the backend
1. Login with one of two usernames "John Doe" or "Jane Doe"
2. Click **Add Item** to add an item to your profile. 
3. Click **Edit Item** to save information about your household item and then click **Save Changes** when complete — this will save information to the database
4. After you save your changes, you can add another item to your portfolio
5. If your item is damaged, toggle the **Damaged** switch and upload a photo of a damaged item.
6. Click the red **X** to delete an item from your portfolio

