# SOCIAL SCRAPBOOK

*** SETUP / INSTALLATION ***
1. Install dependencies
[ ] Install your npm dependencies: run npm install in your terminal
Start application (see note below)
[ ] To start your node server and compile the boilerplate React application, run the following: npm run dev-mac OR
npm run dev-win
[ ] To 'access' your React application in the browser, visit: http://localhost:8080/

2. Note: while the React app runs on http://localhost:8080, our server is going to be running on http://localhost:3000 so if you are planning to test with Postman instead of (or in addition to) using the React app, send your Postman requests to http://localhost:3000.

3. *** PLEASE NOTE *** THE DEV-SERVER MUST RUN ON LOCALHOST:8080. This is hard-coded into our webpack-config on line 47 if you'd like to change that and also hard-coded into api.js on line 29. Because the dev-server is forced to run on localhost:8080 at the moment, if you have a Live Share session open or any other app that runs on localhost:8080 before you run the dev-server, IT WILL GLITCH OUT.

*** SETTING UP OATH ***
To start the project, you will have to set up your google cloud platform.

1. Please go to https://console.cloud.google.com/
2. On the left tap, please click APIs & Services 
3. Click Credentials 
4. You will see + Create Credentials
5. Click OAuth ClientID
6. Click Web Application
7. Name w/e you want
8. Authorized Javascript Origins: http://localhost:3000
9. Authorized Redirect URIs: http://localhost:3000/api/login/google
10. Save it!

*** SAVE IT! ***

1. Go to OAuth consent screen
2. Set up your name 
3. Scopes for Google APIs should have 
 - email 	
 - profile	
 - openid
4. save it!
*** SAVE IT! ***

*** Now go to server/controllers/loginController.js ***
and change your client id and client secret in two places in line 7 and 32
    const oauth2Client = new google.auth.OAuth2(
        'Client_ID',
        'Client_Secret',
        'http://localhost:3000/api/login/google'
    );

*** SETTING UP THE DATABASE ***
1. Set up an ElephantSQL database in the cloud and create a new instance. Copy 
 
2. Set up your database connection
Add your connection URL to the ElephantSQL database into PG_URI in models.js (line 3) - you will be using this connection string to connect to the database via a pool.

3. Run the following command in your terminal to create empty tables in the database (omit the carrots). This will create 3 empty tables, as specified in the file:
psql -d <INSERT YOUR PG_URI HERE> -f scratch-project_postgres_create.sql

