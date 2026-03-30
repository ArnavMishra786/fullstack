# Exp9 – JWT Authentication REST API

## 📌 Project Overview

This project demonstrates the implementation of **JWT (JSON Web Token) based authentication** in a REST API using **Spring Boot**.
The system allows users to **register, login, and access protected endpoints** securely using a generated JWT token.

JWT authentication is widely used in modern web applications because it provides **stateless, scalable, and secure authentication mechanisms**.

---

## 🎯 Objectives

* To understand the concept of **JWT Authentication**
* To implement **secure login and registration APIs**
* To protect REST endpoints using **Spring Security**
* To generate and validate **JWT tokens**

---

## 🛠️ Technologies Used

* Java
* Spring Boot
* Spring Security
* JWT (JSON Web Token)
* Maven
* REST API
* Eclipse / VS Code
* Git & GitHub

---

## ⚙️ Features

* User Registration
* User Login
* JWT Token Generation
* Token Validation
* Secure API Endpoints
* Stateless Authentication
* Password Encryption

---

## 🏗️ Project Structure

```
JWT-Auth
│
├── controller
│     └── AuthenticationController
│
├── service
│     └── UserService
│
├── security
│     ├── JwtUtil
│     ├── JwtFilter
│     └── SecurityConfig
│
├── model
│     └── User
│
├── repository
│     └── UserRepository
│
└── JwtAuthApplication.java
```

---

## 🔐 How JWT Authentication Works

1. User sends **login credentials** (username & password).
2. Server **verifies credentials**.
3. If valid, server **generates a JWT token**.
4. The token is returned to the client.
5. Client sends this token in **Authorization Header**.

Example:

```
Authorization: Bearer <JWT_TOKEN>
```

6. Server **validates the token** before giving access to protected APIs.

---

## ▶️ How to Run the Project

1. Clone the repository

```
git clone https://github.com/ArnavMishra786/fullstack.git
```

2. Navigate to the project

```
cd JWT-Auth
```

3. Run the Spring Boot application

```
mvn spring-boot:run
```

4. Access APIs using **Postman or Browser**

---

## 📡 API Endpoints

### Register User

```
POST /register
```

### Login User

```
POST /authenticate
```

### Access Protected API

```
GET /home
```

Header Required:

```
Authorization: Bearer <token>
```

---

## 📊 Advantages of JWT Authentication

* Stateless authentication
* Secure data transmission
* Scalable for microservices
* No session storage required
* Widely used in modern web applications

---

## 📚 Learning Outcomes

Through this project, we learned:

* Implementation of **JWT authentication**
* Working of **Spring Security**
* Creating **secure REST APIs**
* Managing **authentication tokens**

---
![ss](https://github.com/ArnavMishra786/fullstack/blob/a495020ecb006ed535a4bce7caa52f5f97fd50cb/screenshot/Screenshot%202026-03-11%20100710.png)

![ss2](https://github.com/ArnavMishra786/fullstack/blob/a495020ecb006ed535a4bce7caa52f5f97fd50cb/screenshot/Screenshot%202026-03-11%20100653.png)
![ss3](https://github.com/ArnavMishra786/fullstack/blob/a495020ecb006ed535a4bce7caa52f5f97fd50cb/screenshot/Screenshot%202026-03-11%20100642.png)
![ss4](https://github.com/ArnavMishra786/fullstack/blob/a495020ecb006ed535a4bce7caa52f5f97fd50cb/screenshot/Screenshot%202026-03-11%20100633.png)

GitHub Repository:
https://github.com/ArnavMishra786/fullstack
