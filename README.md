# LearnR

LearnR is an educators application that aims to bring together students and teachers. A teacher will be able to add lesson notes on the platform while will enable students to learn any course syllabus from home. Students can add comments and questions to teachers’ notes. 

Live Preview: [https://cindyeme.github.io/learnR/](https://cindyeme.github.io/learnR/)


## Screenshots
![Landing page](./screenshots/home.jfif)
![About page](./screenshots/about.jfif)
![Courses page](./screenshots/courses.jfif)
![Teachers page](./screenshots/teacher.jfif)


<!-- ## Documentation Content -->

<!-- * [UI](#ui)
    * [Tools used](#ui-tools-used)
    * [Product](#ui-product)

* [APIs](#api)
    * [Tools Used](#api-tools-used)
    * [Endpoints](#endpoints)
    * [Responses](#responses)
    * [Product](#api-product)
* [Getting started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installing](#installing)
    * [Run the server](#run-the-server)
    * [Run the test](#run-the-test)

* [Contributors](#contributors)
* [Copyright](#copyright) -->


## Getting Started.

Make sure you have nodejs installed by running the following command:

```bash
node -v
```

If the output is not the version of your nodejs installation, install nodejs from [here](https://nodejs.org/en/download/)

After installing nodejs install [yarn](https://www.npmjs.com/package/yarn) if you don't have it installed then run `yarn` to install all the project's dependencies:


## Starting the Development Server
```bash
yarn start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Yarn Commands

To add a dependency, run.
### `yarn add [package]`

To remove a dependency, run.

### `yarn remove [package] `

## Editor setup

We're using eslint for linting and prettier for code formating, make sure you install eslint and prettier plugins in your editor so you can
see linting errors as you code and have your code formatted on save by prettier. If formatOnSave doesn't work please google how to set up
format on save for the eslint & prettier plugins in your editor 🙃

## Project structure

- All components are in the components folder and styles for those components are in the styles folder.
- Assets are in the assets folder, including images

## Contributing

For detailed information on how to go about contribution. Check out the [Contribution Guide](docs/CONTRIBUTING.md)

**Before sending a PR or making a merge make sure you code is properly formatted.** You can easily do that by running

```bash
yarn format # in project directory
```