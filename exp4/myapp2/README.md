A simple Counter application built using React, Redux Toolkit, and Vite.

This project demonstrates how to set up Redux in a modern React application using best practices.

📌 Features

✅ Increment counter

✅ Decrement counter

✅ Global state management with Redux Toolkit

✅ Clean folder structure

✅ Fast development with Vite

🛠 Tech Stack

⚛️ React

🧰 Redux Toolkit

🔗 React Redux

⚡ Vite

📦 Node.js

📂 Project Structure
myapp2/
│
├── src/
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   └── counter/
│   │       └── counterSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── package.json
└── vite.config.js

🧠 How Redux Works in This Project
1️⃣ counterSlice.js

Defines initial state

Contains reducers:

increment

decrement

2️⃣ store.js

Configures Redux store using configureStore

Registers counter reducer

3️⃣ main.jsx

Wraps <App /> inside <Provider>

Gives Redux access to entire app

4️⃣ App.jsx

Uses:

useSelector() → to read state

useDispatch() → to update state

⚙️ Installation & Setup
1️⃣ Navigate into the project
cd myapp2

2️⃣ Install dependencies
npm install


If Redux is not installed:

npm install @reduxjs/toolkit react-redux

3️⃣ Run development server
npm run dev


App runs on:

http://localhost:5173/

🎯 Learning Objectives

This project helps in understanding:

Redux store configuration

Creating slices with Redux Toolkit

Connecting Redux to React

Managing global state

Debugging common React-Redux errors

🚧 Future Improvements

Add Reset button

Add custom increment value

Add styling with CSS or Tailwind

Add localStorage persistence

Add multiple counters

SCREENSHOTS
![decrement](https://github.com/ArnavMishra786/fullstack/blob/58a42c688852618d54828b6f55bb792798c9e096/exp4/myapp2/ss/decre.png)
![increment](https://github.com/ArnavMishra786/fullstack/blob/58a42c688852618d54828b6f55bb792798c9e096/exp4/myapp2/ss/incre.png)
