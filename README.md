# MERN File Sharing Application (client + server)

This project is a full MERN-stack learning application built to understand the complete lifecycle of:

- Uploading a file from a React (Vite) frontend  
- Sending file data via Axios + multipart/form-data  
- Processing uploads in Node.js + Express + Multer  
- Storing file metadata in MongoDB using Mongoose  
- Generating and serving shareable download links  

It demonstrates how each part of the MERN architecture interacts in a real-world file sharing feature.

---

## Features

### Frontend (client) – React + Vite
- Simple file selection & upload UI  
- Uses Axios to send FormData  
- Auto-uploads on file selection  
- Displays backend upload response  
- Clean and minimal interface  

### Backend (server) – Node.js + Express
- Multer-powered file upload handling  
- Stores uploaded file metadata in MongoDB  
- Provides shareable download URLs  
- Serves file downloads using `res.download()`  
- Tracks number of times each file was downloaded  
- Handles CORS between client & server  

### Database – MongoDB + Mongoose
Stores metadata for each uploaded file:

- File path on the server  
- Original filename  
- Download count  

---

## Tech Stack

| Layer     | Technology                |
|-----------|----------------------------|
| Frontend  | React (Vite), Axios        |
| Backend   | Node.js, Express, Multer   |
| Database  | MongoDB, Mongoose          |
| Tools     | Nodemon, CORS              |

---

## Project Structure

project-root/\
│── client/\
│ ├── src/\
│ ├── package.json\
│ ├── index.html\
│ └── vite.config.js\
│\
│── server/\
│ ├── controller/\
│ │ └── image-controller.js\
│ ├── routes/\
│ │ └── routes.js\
│ ├── model/\
│ │ └── file.js\
│ ├── utils/\
│ │ └── upload.js\
│ ├── uploads/\
│ ├── database/\
│ │ └── db.js\
│ ├── server.js\
│ ├── package.json\
│ └── .env\
│\
└── README.md




## Setup Instructions

### 1\. Clone the Repository

## 

`git clone https://github.com/<your-username>/<repo-name>.git`\
`cd <repo-name>`

* * *

## 2\. Setup Backend (server)

## 

`cd server npm install`

Create a `.env` file:

`MONGO_URI=<your_mongo_connection_string> PORT=8000`

Start the backend:

`npx nodemon server.js`

Backend runs on:

`http://localhost:8000`

* * *

## 3\. Setup Frontend (client)

## 

`cd ../client npm install npm run dev`

Frontend runs on:

`http://localhost:5173`

* * *

## API Endpoints

### Upload File

## 

`POST /upload Content-Type: multipart/form-data`

Response:

`{   "message": "File uploaded successfully",   "path": "http://localhost:8000/files/<fileId>" }`

### Download File

## 

`GET /files/:fileId`

Behavior:

*   Downloads the file
    
*   Increments its download count
    

* * *

## Learning Objectives

## 

By building this project, you learn:

*   Full MERN workflow (React → Express → MongoDB → Filesystem)
    
*   How to upload files using Multer
    
*   How to serve downloads using Express
    
*   How Axios sends multipart form data
    
*   How to design clean backend folder structure
    
*   How to debug CORS, Multer, and Mongoose issues
