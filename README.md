# The Chores Board

Welcome to The Chores Board. It is a user-specific CRUD app that creates virtual notecards representing Chores for each user to complete.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

## Installing

First, you'll need to clone down the repo into a directory. Open your terminal and type:
```
git clone git@github.com:MelanieJaneBond/Chores-Board-Capstone.git
```
After you hit "enter," type "code ." and "enter" to open up the files.
Then, you will need to do the following:
+ 1. go into the `api/database.json.example` file
+ 2. Cmd + A (on Mac) or Ctrl + A (on Windows) to copy all of the example database
+ 3. While in the `api` directory, make a new file and call it `database.json`
+ 4. Cmd + V (on Mac) or Ctrl + V (on Windows) to paste `database.json.example`

You will need to install node modules, so, run the command:
```
npm install
```
Now, you're ready to run the application. In your terminal, run the following command:
```
npm start
```
Open a new window of your Terminal, and, cd all the way in to the `api` directory of your copy of The Chores Board app. Type the command:
```
json-server -p 5002 -w database.json
```
##### You are now ready to use The Chores Board.

## First Time User Instructions
* A Welcome message should appear when you first access the React App in your browser
* Click the "Here" button under the message to go to the Registration and Login page
* You will need to register a new user in order to begin building your chores; type a name and password and hit "Register"
* After you have Registered, you will be taken to the main page where you can create Notecards that represent Chores you'd like to get done.
* Each Chore you create can be edited, re-saved, set as "Finished" and viewed in the "Completed Chores" page where you can see what you've done and you can delete notecards you do not want to keep any more.
* When you're done creating and finishing chores for the day, hit the "Logout" link in the NavBar and you will be able to log back in the next time you access the app.

### We hope you enjoy The Chores Board!

##Built With

* [VanillaJS](http://es6-features.org/#Constants) - The language used
* [React](https://reactjs.org/) - Framework
* [Bootstrap4.3](https://getbootstrap.com/) - Used for some of the styling

## Author
* **Melanie Jane Bond**