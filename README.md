# AngularTest

This project is an Angular application generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9 and Node.js version 8.17.0.

## Development server

To run the development server, follow these steps:

1. Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
2. Install Angular CLI globally by running `npm install -g @angular/cli`.
3. Clone this repository to your local machine.
4. Navigate to the project directory in your terminal.
5. Run `npm install` to install project dependencies.
6. Run `ng serve` for a dev server.
7. Navigate to `http://localhost:4200/` in your browser to view the application.
8. The app will automatically reload if you change any of the source files.

## JSON server

This project uses JSON Server as a mock backend. To run the JSON server, follow these steps:

1. Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
2. Install JSON Server globally by running `npm install -g json-server`.
3. Make sure you have a `dataBase.json` file in the root directory of your project.
4. Run `json-server --watch dataBase.json` for a dev server.
5. Navigate to `http://localhost:8000/` in your browser to access the JSON server.

## Additional Notes

- The `dataBase.json` file should contain your mock data in JSON format.
- Make sure to configure your Angular application to interact with the JSON server endpoints as needed.

