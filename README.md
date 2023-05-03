# App Description
GPT3-Playground is an application interacting with GPT-3 AI model created by OpenAI { https://openai.com/api/ }

In this application, users can type in a prompt and recieve an output from GPT-3 API, Users can select which GPT3 Model to use by selecting from the AI Engine box.
Application further stores all the responses in memory, hence all responses remain when user leaves and refreshes site.

# Cloning Instructions:

1) Rename .env_sample file to .env

2) Create a free account and receive an API Key from OpenAI:

  - 2a) Go to https://beta.openai.com/signup
  - 2b) Enter your email address and password
  - 2c) Verify your email address
  - 2d) Verify your phone number by entering the code that is sent to you via SMS
  - 2e) Once logged in, go to https://beta.openai.com/account/api-keys to get your secret API key
  
3) Save your secret API Key in the .env file in place of "YOUR_API_KEY_HERE"
4) Run `npm start` from the root and access site in http://localhost:3000

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

`npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

`npm test`
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

`npm run build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

`npm run eject`
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


