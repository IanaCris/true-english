<p align="center">
  <img src="./.github/true_english.svg" alt="True English" />
</p>

<h1 name="sobre">ℹ About the Project</h1>
The True English project was built during the week of August 3-7, 2020, at Next Level Week, with over 110,000 developers participating in the event. 
True English is based on the Proffy project, which is a project in honor of National Teacher's Day! 👨‍🏫 <br>

It is a platform that connects students with teachers. 🎯

<h1 name="preview">:eyes: Project Preview</h1>
<h3>Web</h3>
<img alt="Results1" title="landing web" src=".github/landing_web.png" width="400px"/>
<h3>App Mobile (IOS & Android)</h3>
<img alt="Results2" title="landing mobile" src=".github/landing_mobile.jpg" height="400"/>

<h1 name="run">:boom: How to Run the Project</h1> <br>

- ### **Prerequisites**

  - You **must** have **[Node.js](https://nodejs.org/en/)** installed on your computer.
  - You **must** have **[Git](https://git-scm.com/)** installed and configured on your computer.
  - You **must** have a package manager, either **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**.
  - Finally, it is **essential** to have **[Expo](https://expo.io/)** installed globally on your machine.

```bash
# Clone Repository
$ git clone https://github.com/IanaCris/true-english.git
```

<h3 name='api'>📦 Start the API</h3><br>

```bash
# Go to the folder
$ cd true-english/server

# Install the dependencies
$ yarn # ou npm install

# Setting up the database and creating the tables.
$ yarn knex:migrate # ou npm run knex:migrate

# Start the API
$ yarn start # ou npm start
```
Access the API at http://localhost:3333/

<h3 name='website'>💻 View WebSite</h3><br>

```bash
# Go to the folder
$ cd true-english/web

# Install the dependencies
$ yarn # ou npm install

# Start the server
$ yarn start # ou npm start
```
Access the API at http://localhost:3000/ to see the website.

<h3 name='mob'>📱 Run project on mobile</h3><br>
To view the project on your mobile, you need to have the [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) installed or an Android/iOS emulator.
<br />
Next, fork this repository or clone it to your machine. Inside the project, run the commands:

```bash
# Go to the folder
$ cd true-english/mobile

# Install the dependencies
$ yarn # ou npm install

# Start the App
$ yarn start # ou npm start
```
It will open a tab in your browser showing a QR Code. Scan it using the Expo app to open the application. There will also be an option to run it on an emulator.

<h1 name="tecnologias">🛠 Technologies</h1>

The following tools were used to build the project:

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [axios](https://github.com/axios/axios)
