# To-do List Site

## A to-do list website where users can keep track of the tasks that they need to complete or have completed.

Click <a href="">here</a> for a live version of the app!

## Route Paths

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/api/tasks` | Index page listing all tasks |
 GET | `/api/tasks/:id` | Index page that lists 1 specific task |
| GET | `/api/tasks/form` | View form for creating a task |
| POST | `/api//tasks/form` | Create a new task |
| GET | `/api/tasks/form/edit/:id` | View a task you would like to edit |
| PUT | `/api/tasks/form/edit/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Commands Used

We installed react by typing the following into the terminal: 
- npx create-react-app milestone-project-2 cd milestone-project-2 (this creates a react application code template)
We included other dependencies from React by installing the following into the terminal.
- npm i react-router-dom@6
- npm install --save react-circular-progressbar
- npm install react-bootstrap bootstrap

We installed .env by typing the following into the terminal: 
- npm install dotenv --save

We installed express by typing the following into the terminal: 
- npm install express (recall that express basically makes a server for your repo)

Make sure to install the following sequelize commands to this repo: 
- npm i sequelize (installs sequelize as a dependency)
- npm i pg pg-hstore (installs the native Postgres drivers)
- npm i -g sequelize-cli (globally installs the Sequelize CLI package, recall that Sequelize CLI is an npm package that lets us run commands through the terminal for generating models (tables/columns) and more).
- npx sequelize init (this CLI command generates an empty 
Sequelize project into your app; note: I created a folder named sequelize and installed the empty project there for organizational purposes since we are using other languages within this app)
- npx sequelize-cli model:generate --name ToDoList --attributes day:string,tasks:string,complete:boolean (this creates a model and makes the migration for you)
- npx sequelize-cli db:migrate (runs a migration)

## Note: 
For some reason, I was unable to connect the .env file to the config.js file, so I created the file .sequelizerc to help fix that issue and it did. 
