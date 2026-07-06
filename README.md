# Basic Authentication System

This repository hosts a fundamental backend application demonstrating a basic user authentication system. Built with Node.js and Express.js, it features user registration, JSON Web Token (JWT) based authentication, and protected routes using cookies. It connects to a MongoDB database for user data management.

##  Key Features

*   **User Registration**: Allows new users to sign up with a username, email, and password.
*   **JWT-Based Authentication**: Securely authenticates users using JSON Web Tokens.
*   **Cookie-Based Session Management**: Stores JWTs in HTTP-only cookies for persistent and secure sessions.
*   **Protected Routes**: Demonstrates how to secure API endpoints, only allowing authenticated users access.
*   **MongoDB Integration**: Utilizes Mongoose for robust database interactions.
*   **Modular Project Structure**: Organized code for maintainability and scalability.

## Technologies Used

### Languages
*   JavaScript

### Frameworks
*   Express.js

### Tools & Libraries
*   Node.js
*   MongoDB (and Mongoose ODM)
*   jsonwebtoken
*   cookie-parser
*   dotenv

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: [Download & Install Node.js](https://nodejs.org/en/download/)
*   **MongoDB**: [Download & Install MongoDB Community Server](https://www.mongodb.com/try/download/community)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/nitin864/basic_auth_system.git
    cd basic_auth_system
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Create a `.env` file**:
    Create a file named `.env` in the root directory of the project and add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/auth_db
    JWT_SECRET=your_jwt_secret_key_here # Use a strong, random string
    ```
    *   Replace `mongodb://localhost:27017/auth_db` with your actual MongoDB connection string if it's different.
    *   Replace `your_jwt_secret_key_here` with a complex, secret string for production use.

4.  **Start the server**:
    ```bash
    node server.js
    ```
    The server will start on the port specified in your `.env` file (default: `3000`). You should see a message like `Server is running on port 3000` in your console.

## 📖 API Documentation & Usage

The API provides endpoints for user authentication and managing posts. All API routes are prefixed with `/api/`.

### Authentication Routes (`/api/auth`)

*   **`POST /api/auth/register`**
    *   **Description**: Registers a new user with a unique username, email, and password.
    *   **Request Body**:
        ```json
        {
            "username": "testuser",
            "email": "test@example.com",
            "password": "securepassword123"
        }
        ```
    *   **Response**: Upon successful registration, a JWT token is set as an HTTP-only cookie (`token`), and user details (excluding password) are returned.
        ```json
        {
            "message": "User registered successfully",
            "user": {
                "_id": "65b7a8c9d0e1f2g3h4i5j6k7",
                "username": "testuser",
                "email": "test@example.com",
                "createdAt": "2024-01-30T12:00:00.000Z",
                "updatedAt": "2024-01-30T12:00:00.000Z"
            }
        }
        ```

*   **`POST /api/auth/login`** (Implied by project structure, but specific code not provided)
    *   **Description**: Authenticates an existing user and sets a JWT token.
    *   **Request Body**:
        ```json
        {
            "email": "test@example.com",
            "password": "securepassword123"
        }
        ```
    *   **Response**: Similar to registration, a JWT token is set as an HTTP-only cookie (`token`) upon successful login.

### Post Routes (`/api/post`)

*   **`POST /api/post/create`**
    *   **Description**: Creates a new post. This route requires authentication; a valid `token` cookie must be present in the request.
    *   **Request Body**:
        ```json
        {
            "title": "My First Protected Post",
            "content": "This is the content of my new post, accessible only by authenticated users."
        }
        ```
    *   **Response**:
        ```json
        {
            "message": "Post created successfully",
            "post": {
                "_id": "65b7a8c9d0e1f2g3h4i5j6k8",
                "title": "My First Protected Post",
                "content": "This is the content of my new post, accessible only by authenticated users.",
                "owner": "65b7a8c9d0e1f2g3h4i5j6k7", // ID of the authenticated user
                "createdAt": "2024-01-30T12:05:00.000Z",
                "updatedAt": "2024-01-30T12:05:00.000Z"
            }
        }
        ```
    *   **Error Responses**:
        *   `401 Unauthorized`: If no `token` cookie is present or the provided token is invalid/expired.

## ⚙️ Configuration

The application uses environment variables for sensitive information and configuration. Create a `.env` file in the root directory of your project with the following variables:

*   **`PORT`**: The port number on which the server will run (e.g., `3000`).
*   **`MONGODB_URI`**: The connection string for your MongoDB database (e.g., `mongodb://localhost:27017/auth_db`).
*   **`JWT_SECRET`**: A secret key used to sign and verify JSON Web Tokens. **It is crucial to use a strong, randomly generated string for production environments and keep it confidential.**

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1.  **Fork** the repository.
2.  **Create a new branch** (`git checkout -b feature/YourFeature`).
3.  **Make your changes**.
4.  **Commit your changes** (`git commit -m 'Add some feature'`).
5.  **Push to the branch** (`git push origin feature/YourFeature`).
6.  **Open a Pull Request**.

Please ensure your code adheres to the project's style and passes any existing tests.

## 📄 License

This project is currently **unlicensed**. You are free to fork and modify it for personal use, but it does not come with any explicit license granting broad permissions for commercial use or redistribution.

## 🙏 Acknowledgments

*   This project serves as a practical learning exercise to understand basic authentication principles using Node.js, Express.js, and MongoDB.
