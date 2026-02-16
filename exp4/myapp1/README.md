A simple Counter application built using React, Redux Toolkit, and Vite.
This project demonstrates state management using Redux in a modern React application.

🚀 Features

✅ Increment counter

✅ Decrement counter

✅ Global state management using Redux Toolkit

✅ Fast development with Vite

✅ Clean project structure

🛠️ Tech Stack

⚛️ React

🧰 Redux Toolkit

🔗 React Redux

⚡ Vite

📦 Node.js & npm

📂 Project Structure
app1/
│
├── src/
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   └── counterSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── package.json
└── vite.config.js

🧠 How It Works

counterSlice.js defines:

Initial state

Reducers (increment & decrement)

store.js configures the Redux store.

main.jsx wraps the app inside <Provider> to give Redux access to all components.

App.jsx uses:

useSelector() to read state

useDispatch() to dispatch actions

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone <your-repo-url>

2️⃣ Navigate into the project
cd app1

3️⃣ Install dependencies
npm install

4️⃣ Run the development server
npm run dev


App will run on:

http://localhost:5173/

📸 Screenshot
![decrement](exp4\myapp1\ss\decrement.png)
![increment](exp4\myapp1\ss\increment.png)
🎯 Learning Purpose

This project was created to understand:

Redux store setup

Creating slices using Redux Toolkit

Connecting Redux with React

Managing global state

📌 Future Improvements

Add reset button

Add step increment

Add UI styling

Add persistence using localStorage


