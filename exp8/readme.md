# EXP8 - Student Management REST API (Spring Boot)

This project is a backend application built using Spring Boot that provides a complete REST API for managing student records. It supports all basic CRUD operations and is integrated with a MySQL database using Spring Data JPA.

---

## 📁 Project Structure

The main runnable project is located inside the **`try`** folder.

---

## 🛠️ Tech Stack

* Java 21
* Spring Boot
* Spring Web (MVC)
* Spring Data JPA
* MySQL
* Maven Wrapper (`mvnw / mvnw.cmd`)

---

## 🚀 Functionalities

* Add new student records
* Fetch all students
* Retrieve a student by ID
* Modify existing student details
* Remove a student from the database

---

## 🌐 Base API URL

```
http://localhost:8080/api/students
```

---

## 📌 API Endpoints

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| GET    | `/api/students`      | Retrieve all students    |
| GET    | `/api/students/{id}` | Retrieve a student by ID |
| POST   | `/api/students`      | Add a new student        |
| PUT    | `/api/students/{id}` | Update student details   |
| DELETE | `/api/students/{id}` | Delete a student         |

---

## 🗄️ Database Configuration (MySQL)

1. Create a database:

```sql
CREATE DATABASE spring_hibernate_db;
```

2. Navigate to:

```
try/src/main/resources/application.properties
```

3. Update your MySQL credentials (username & password) if required.

---

## ▶️ Running the Application

Move into the **`try`** directory and run the following:

### On Windows:

```bash
mvnw.cmd spring-boot:run
```

### On macOS/Linux:

```bash
./mvnw spring-boot:run
```

---

## ✅ Notes

* Ensure MySQL is running before starting the application.
* Default server port is **8080**.
* You can test APIs using tools like Postman or any REST client.

---

SCREENSHOTS 
![tmcot](https://github.com/ArnavMishra786/fullstack/blob/2b410f36c5adde509bc7ca2036c4e43cd9dd1485/exp8/try/image.jpeg)
![post](https://github.com/ArnavMishra786/fullstack/blob/2b410f36c5adde509bc7ca2036c4e43cd9dd1485/exp8/try/image1.jpeg)
![get](https://github.com/ArnavMishra786/fullstack/blob/2b410f36c5adde509bc7ca2036c4e43cd9dd1485/exp8/try/image2.jpeg)
![put](https://github.com/ArnavMishra786/fullstack/blob/2b410f36c5adde509bc7ca2036c4e43cd9dd1485/exp8/try/image3.jpeg)
![delete](https://github.com/ArnavMishra786/fullstack/blob/2b410f36c5adde509bc7ca2036c4e43cd9dd1485/exp8/try/image4.jpeg)
![output](https://github.com/ArnavMishra786/fullstack/blob/2b410f36c5adde509bc7ca2036c4e43cd9dd1485/exp8/try/imag5.jpeg)

