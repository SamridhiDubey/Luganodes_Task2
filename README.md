# Deployed URL:
https://luganodes.vercel.app

# Instructions - How to run it locally?

## Step-1: 

### `npm install`

Install all the necessary dependencies before running the app locally.

## Step-2: 

### `REACT_APP_CLERK_PUBLISHABLE_KEY=<CLERK_PUBLISHABLE_KEY>`
### `REACT_APP_BLOCK_API_KEY=<BLOCK_API_KEY>`

Create a file name ".env" in the root directory of the app and add the above block of code in the .env file which you created recently and replace the text with your actual key:

## Step-3:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

## Step-4:

### `npm install --save-dev @babel/plugin-proposal-private-property-in-object`

If you face any babel dependecies error, then follow this step, and then again run it locally.

## To run your application using Docker Compose, navigate to application's root directory (where the docker-compose.yml file is located) and execute the following command:

### `docker-compose up`

Make sure you have Docker and Docker Compose installed on your system before running the above command. Also, ensure that you have set the correct REACT_APP_CLERK_PUBLISHABLE_KEY environment variable in the .env file or in your CI/CD environment if you plan to deploy the application.

## Features:

1) As asked, the chains data are displayed in the UI for all the users from the API.
2) Also added login functionality, where user can sign in and sign out.
3) It is completely responsive and can be used with any device.
4) Made with proper Error Handling using Error Boundary in React

