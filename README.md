# AI-Powered Code Reviewer 
<img src="/Frontend/src/assets/screenshot.png"/>

The AI-Powered Code Reviewer is a MERN stack-based application designed to help developers review their code efficiently. It uses Google's Gemini AI to analyze code and provide detailed feedback on code quality, best practices, performance, and more. This tool is perfect for developers who want to improve their code quality and adhere to industry standards.

---

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Introduction
The AI-Powered Code Reviewer is a web application that allows developers to submit their code for review. The application uses Google's Gemini AI to analyze the code and provide feedback on various aspects such as code quality, best practices, performance, and security. The feedback is displayed in a clean, readable Markdown format, making it easy for developers to understand and implement the suggestions.

## Features
- **Code Editor**: Write and edit code directly in the browser.
- **AI-Powered Review**: Get instant feedback on your code using Google's Gemini AI.
- **Markdown Support**: Review feedback is displayed in a clean, readable Markdown format.
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.
- **Social Media Links**: Connect with the developer via GitHub, LinkedIn, and Twitter.

## Technologies Used
### Frontend
- **React**: JavaScript library for building the user interface.
- **React Simple Code Editor**: For the code editor component.
- **PrismJS**: For syntax highlighting.
- **Axios**: For making API requests to the backend.
- **CSS**: Custom styles for a modern and responsive design.

### Backend
- **Express.js**: Node.js framework for building the backend server.
- **Google Gemini AI**: For generating code reviews.
- **CORS**: To enable cross-origin requests.

### Tools
- **VS Code**: Recommended code editor.
- **Nodemon**: For automatically restarting the backend server during development.
- **npm**: Package manager for installing dependencies.

## Setup Instructions

### Frontend Setup
Navigate to the frontend folder:
```bash
cd frontend
```
Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```
Open your browser and visit:
```
http://localhost:5173
```

### Backend Setup
Navigate to the backend folder:
```bash
cd backend
```
Install dependencies:
```bash
npm install
```
Start the backend server:
```bash
npx nodemon
```
The backend will run on:
```
http://localhost:3000
```

## Environment Variables
Create a `.env` file in the backend folder and add the following:
```env
GOOGLE_GEMINI_KEY=your_google_gemini_api_key_here
```

## Running the Project
Start the backend server:
```bash
cd backend
npx nodemon
```
Start the frontend development server:
```bash
cd frontend
npm run dev
```
Open your browser and visit:
```
http://localhost:5173
```

## API Endpoints
### POST `/ai/get-review`
**Description**: Submit code for review.

#### Request Body:
```json
{
  "code": "function sum() { return 1 + 1; }"
}
```
#### Response:
```json
{
  "response": "Your code review feedback..."
}
```

## Folder Structure
```
AI-Powered-Code-Reviewer/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.jsx
│   │   │   ├── Footer.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   ├── package.json
├── backend/
│   ├── controllers/
│   │   ├── ai.controller.js
│   ├── routes/
│   │   ├── ai.routes.js
│   ├── services/
│   │   ├── ai.service.js
│   ├── app.js
│   ├── package.json
├── .env
├── README.md
```

## Contributing
Contributions are welcome! Follow these steps:

1. **Fork the repository**.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a pull request**.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments
- **Google Gemini AI**: For providing the AI model for code review.
- **React Community**: For creating amazing tools and libraries.

This README provides a comprehensive guide to setting up, running, and contributing to the AI-Powered Code Reviewer project. Let me know if you need further assistance! 🚀
