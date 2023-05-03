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
  
3) Save your secret API Key in the .env file in place of "YOUR_API_KEY_HERE" OR add API Key into input field under Generate Button
4) Run `npm start` from the root and access site in http://localhost:3000

