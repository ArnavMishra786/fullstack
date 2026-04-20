Real-Time WebSocket Chat Application

A real-time messaging application built using Spring Boot and React that enables multiple users to chat instantly through WebSocket communication using the STOMP protocol.

Messages are delivered instantly to all connected users without refreshing the page.

📸 Application Preview
Chat Interface

Multiple Users Messaging

(Place your screenshots inside the screenshots folder)

🚀 Features

✔ Real-time messaging using WebSockets
✔ Multiple users can chat simultaneously
✔ Instant message broadcasting
✔ Clean messaging UI
✔ Spring Boot backend with STOMP messaging
✔ React + Vite frontend
✔ Lightweight and fast architecture

🏗️ Tech Stack
Layer	Technology
Backend	Java 21, Spring Boot
Messaging Protocol	WebSocket + STOMP
Frontend	React + Vite
Libraries	SockJS, STOMP.js
Build Tool	Maven
📂 Project Structure
project-root
│
├── backend
│   └── src/main/java/com/AML3A/Demo_WebSocket
│
├── frontend
│   └── src
│       └── components
│           ├── Chat.jsx
│           ├── MessageInput.jsx
│           └── MessageList.jsx
│
└── screenshots
    ├── screenshot1.png
    └── screenshot2.png

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/yourusername/websocket-chat-app.git
cd websocket-chat-app

🔧 Backend Setup (Spring Boot)
Open the backend project in Eclipse / IntelliJ
Navigate to:
RestApiApplication.java

Run the application:
Right Click → Run As → Java Application


Server will start at:

http://localhost:8080

💻 Frontend Setup (React)

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Run the application:

npm run dev


Frontend will start at:

http://localhost:5173

🔄 How the Chat System Works
User enters their username
A WebSocket connection is established with the server at:
/ws

Messages are sent to:
/app/chat

Spring Boot broadcasts messages to all users through:
/topic/messages

Every connected client instantly receives the new message.
📦 Dependencies
Frontend

Install required libraries:

npm install sockjs-client @stomp/stompjs


These libraries handle WebSocket communication between React and Spring Boot.

Backend (Spring Initializr)

Add the following dependencies:

Spring Web
Spring WebSocket
Spring Boot DevTools
⚠️ Important Notes

✔ Always start the Spring Boot backend first
✔ Then run the React frontend

If using Vite, ensure the following fixes:

vite.config.js
define: {
  global: "globalThis"
}

main.jsx

Add polyfills for SockJS compatibility:

import { Buffer } from "buffer"
window.Buffer = Buffer

👨‍💻 Author

Developed by Arnav Mishra

SCREENSHOTS 
![BACKEND](https://github.com/ArnavMishra786/fullstack/blob/c1f2d81dbdbddb913ae2ee269ff2afc2cc452829/frontend/SS/Screenshot%202026-04-17%20145102.png)
![CHAT1](https://github.com/ArnavMishra786/fullstack/blob/c1f2d81dbdbddb913ae2ee269ff2afc2cc452829/frontend/SS/Screenshot%202026-04-17%20150800.png)
![CHAT2](https://github.com/ArnavMishra786/fullstack/blob/c1f2d81dbdbddb913ae2ee269ff2afc2cc452829/frontend/SS/Screenshot%202026-04-17%20150805.png)
