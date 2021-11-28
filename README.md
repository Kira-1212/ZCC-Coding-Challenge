# ZCC-Coding-Challenge

Zendesk Ticket Viewer

Application Overview:

This application was built for the Zendesk Coding Challenges as per the requirements given below.
Frontend has been constructed using React and the server side code i.e. the backend code was developed using Node.

Requirements:

Zendesk is a customer service tool that allows the creation and management of support tickets.
Your company needs you to build a Ticket Viewer that will:

1. Connect to the Zendesk API
2. Request all the tickets for your account
3. Display them in a list
4. Display individual ticket details
5. Page through tickets when more than 25 are returned

Steps needed to run the code:

In order to run the code locally, the following system requirements should be fullfilled.

1. Node
2. GIT

Running the code:

Backend:

We need to run the backend code first, so that the frontend will be able to make api calls to get the data.

1. Open the command prompt and terminal in the code folder.
2. Then run the command - npm install
3. This will install all the packages that are needed for the code to run
4. After this the command - npm start should be executed
5. This will start up the server and host it on "URL"

Frontend:

Once the server is up, we can now run the frontend code

1. We need to open the folder that contains the frontcode
2. Open up the command prompt or terminal here
3. Run the command - npm install
4. This will install all the required packages
5. After this is done run the command - npm start
6. This will start the server and host it on the url

Note:

In the env file in the backend code, we need to give the user specific details such as username, password and api url

Example:

    NAME=yourloginid@gmail.com
    PASS=yourpassword
    API_PATH=https://yoururl.zendesk.com

Functionality:

Backend:

The backend contains the api that acts as interface between the frontend UI and the Zendesk APi services.
It fetches the user information required for making the call from .env file and gets the data by connecting to Zendesk.
On running the code, it exposes the endpoint /tickets on http://localhost:3001.

Frontend:

The sole functionality of the UI code is to display the tickets, to fetch these tickets, the react code makes call to the backend.
On success, it lists the tickets in the grid, at a time 25 tickets will be visible to the user, this can changed using the dropdown.
There's a feasibility of getting next set of tickets by clicking on the ">" and "<" buttons.
On clicking the particular ticket, additional details will be displayed in a popup window.
If there's some issue with code, related error messages will be displayed in a pop up window.
