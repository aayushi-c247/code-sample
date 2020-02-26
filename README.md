This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and it is implemented using react+redux.

Project Structure:
All source code for the React app is located in the /src folder. Inside the src folder there is a app folder where all the components and containers are there, and redux logics are written in this folders(actions,logic, reducer) and a bunch of folders for common code that can be shared across different parts of the app (config, helpers, common, interface) and one for the graphql mutation definition.

The index.js files in each folder are barrel files that group all the exported modules together so they can be imported using the folder path instead of the full module path and to enable importing multiple modules in a single import.

## Available Scripts

In the project directory, run this command to install all dependencies:

### `yarn install`
 
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
