# To-do List Site

## A to-do list website where users can keep track of the tasks that they need to complete or have completed.

Click <a href="">here</a> for a live version of the app!

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

## commands used

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

Note: 
For some reason, I was unable to connect the .env file to the config.js file, so I created the file .sequelizerc to help fix that issue and it did. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
