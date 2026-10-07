# Todo Management System

A full-stack Todo Management System built using **Java, Spring Boot, Spring Data JPA, and MySQL**. The application allows users to manage their tasks through a REST API and a simple web interface.

## 🚀 Features

* Create and manage users
* Create Todo tasks
* View Todo tasks
* Update Todo tasks
* Delete Todo tasks
* RESTful APIs using Spring Boot
* Database integration using Spring Data JPA
* Simple web-based frontend
* MVC-based project structure
* Exception handling and request/response processing

## 🛠️ Technologies Used

### Backend

* Java
* Spring Boot
* Spring Data JPA
* REST API
* Maven

### Database

* MySQL

### Frontend

* HTML
* CSS
* JavaScript

### Tools

* IntelliJ IDEA
* Git
* GitHub
* Postman

## 📂 Project Structure

```text
Todo/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com.todoSample.Todo/
│   │   │       ├── Controller/
│   │   │       │   ├── TodoController.java
│   │   │       │   └── UserController.java
│   │   │       ├── Model/
│   │   │       │   ├── Todo.java
│   │   │       │   └── User.java
│   │   │       ├── Reporsitory/
│   │   │       │   ├── TodoRepository.java
│   │   │       │   └── UserReporsitory.java
│   │   │       ├── Service/
│   │   │       │   ├── TodoService.java
│   │   │       │   └── UserService.java
│   │   │       └── TodoApplication.java
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── app.js
│   │       │   ├── index.html
│   │       │   ├── style.css
│   │       │   └── todo.html
│   │       └── application.properties
│   └── test/
│       └── java/
├── pom.xml
├── mvnw
└── mvnw.cmd
```

## 🔄 Application Flow

```text
User
  ↓
Web Interface / Postman
  ↓
REST Controller
  ↓
Service Layer
  ↓
Repository Layer
  ↓
MySQL Database
```

## 🔗 API Operations

The application provides REST APIs for managing users and Todo tasks.

Typical operations include:

| Method | Operation               |
| ------ | ----------------------- |
| GET    | Retrieve Todo/User data |
| POST   | Create Todo/User        |
| PUT    | Update Todo/User        |
| DELETE | Delete Todo/User        |

> Check the controller classes for the exact API endpoints implemented in this project.

## ⚙️ Prerequisites

Make sure the following are installed:

* Java 17 or compatible Java version
* Maven
* MySQL
* Git

Check Java:

```bash
java -version
```

Check Maven:

```bash
mvn -version
```

## 🗄️ Database Configuration

Create a MySQL database for the application.

Update your `application.properties` with your local database configuration:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/todo_db
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

**Do not commit real database passwords or API keys to GitHub.**

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/sanjayc12/Todo_project.git
```

### 2. Open the project

Open the `Todo` folder in IntelliJ IDEA or your preferred Java IDE.

### 3. Configure MySQL

Create the database and update `application.properties`.

### 4. Build the project

```bash
mvn clean install
```

### 5. Run the application

```bash
mvn spring-boot:run
```

Or run:

```text
TodoApplication.java
```

from IntelliJ IDEA.

### 6. Open the application

Open the application URL shown by Spring Boot in your browser.

## 🧪 Testing

The REST APIs can be tested using:

* Postman
* Browser for GET requests
* Frontend interface

## 📌 Future Improvements

* User authentication and authorization using Spring Security
* JWT-based authentication
* Todo status and priority management
* Pagination and sorting
* Input validation
* Global exception handling
* Docker support
* Deployment to cloud

## 👨‍💻 Author

**Sanjay C**

GitHub: https://github.com/sanjayc12

## 📄 License

This project is created for learning and portfolio purposes.
