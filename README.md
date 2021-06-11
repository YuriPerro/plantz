![go move](https://i.imgur.com/fn1z3E8.png)

<h1 align="center">
    <a>🌱 plantz</a>
</h1>
<p align="center">🔗 Application to help and notify users to take care of their plants. </p>
<div align="center">
    <img src="https://img.shields.io/static/v1?label=React-Native&message=v0.64&color=6D21B4&style=for-the-badge&logo=react" />
    <img src="https://img.shields.io/static/v1?label=Typescript&message=v4.2&color=2184B4&style=for-the-badge&logo=typescript" />
    <img src="https://img.shields.io/static/v1?label=Expo&message=v41&color=FFFFFF&style=for-the-badge&logo=expo" />
    <img src="https://img.shields.io/static/v1?label=License&message=MIT&color=8ED500&style=for-the-badge" />
<!--     <img src="https://img.shields.io/github/stars/YuriPerro/plantz?color=F50057&style=for-the-badge" /> -->
</div>

## 📦 Components

* [React Native](https://reactnative.dev/)
* [Typescript](https://www.typescriptlang.org/)
* [Expo](https://docs.expo.io/)

## 🚀 Getting Started

These instructions will get you a copy of the full project up and running on your local machine for development and testing purposes.

The project can be built with npm or yarn, so choose one of the approach bellow in case you don't have any installed on your system.

* **Npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/)

* **Yarn** is a package manager built by Facebook Team and seems to be faster than npm in general.  [Download Yarn](https://yarnpkg.com/en/docs/install)

* **React Native CLI** is a package that contains tools and helpers for React Native projects in form of a command line tool.  [Download React Native CLI](https://facebook.github.io/react-native/docs/getting-started)

* **Expo CLI** is a command line app that is the main interface between a developer and Expo tools. [Download Expo CLI](https://docs.expo.io/get-started/installation/)

## ⚒️ How to Install

⬇ To download the project follow the instructions bellow

```
1. git clone https://github.com/YuriPerro/plantz.git
2. cd plantz
```

🎯 Install the dependencies and start the server

```
3. yarn install
4. expo start
```
or
```
3. npm install
4. expo start
```
💻 Starting fake server api

1. Open Prompt command (CMD) in administration mode
2. Run ```ipconfig /all```
3. Copy the IPV4 number
4. Open file ```./src/services/api.ts``` and replace all "XX" on ```baseURL:http://XXXXXXXXXXXXX:3333/``` to YOUR_IPV4
5. Paste your IPV4 in code below and run
```
json-server ./src/services/server.json --host <YOUR_IPV4_HERE> --port 3333 --delay 700
```
## 📃License

* Licensed for users and contributors under MIT license.
* [M.I.T](https://github.com/YuriPerro/go.move/blob/main/LICENSE)

💡 PS: Feel free to send any ideas or modifications to the project

---
<p align="center">Developed with 💜 by Yuri Baumgartner</p>
