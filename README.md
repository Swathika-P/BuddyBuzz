# BuddyBuzz - Social Media Application

## Overview
BuddyBuzz is a social media application designed to connect friends, share posts, and engage with content. The application leverages modern web technologies to provide a secure, robust, and user-friendly experience. This README provides an overview of the project's structure, technologies used, and instructions for setup and usage.

## Technologies & Tools
- **Frontend**: React JS, JavaScript
- **Backend**: Node JS, Express JS
- **Authentication**: JWT (JSON Web Tokens), bcrypt
- **Database**: MongoDBAtlas, Mongoose

## Features
- **User Authentication**: Secure user registration and login using JWT and bcrypt.
- **CRUD Operations for Friends**: Add or remove friends.
- **Read and Create Posts**: Share posts with friends and engage with others' posts.
- **RESTful APIs**: Built with Express.js for seamless communication between frontend and backend.
- **Database Management**: Efficient data storage and retrieval using MongoDB and Mongoose.

## Project Structure
```
BuddyBuzz/
│
├── client/                   # Frontend code (React JS)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── scenes/
│       ├── state/
│       └── App.js
│
├── server/                   # Backend code (Node JS, Express JS)
│   ├── data/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── public/
│   └── index.js
│
├── .env                      # Environment variables
├── package.json              # Node.js dependencies
├── README.md                 # Project documentation
└── .gitignore                # Files to ignore in Git
```

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas account
- Git

### Clone the Repository
```bash
git clone https://github.com/Swathika-P/BuddyBuzz.git
cd BuddyBuzz
```

### Install Dependencies
#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd ../client
npm install
```

### Configure Environment Variables
Create a `.env` file in the `server` directory and add the following environment variables:
```
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
```

### Run the Application
#### Backend
```bash
cd server
npm start
```

#### Frontend
```bash
cd ../client
npm start
```

The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Usage
- **Register** a new account or **login** with an existing one.
- **Create** a post to share with your friends.
- **Read** and engage with posts from other users.
- **Add** or **remove** friends to manage your social circle.

## Contributing
We welcome contributions to enhance BuddyBuzz. To contribute:
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- Thanks to the developers and open-source communities behind the technologies used in this project.

For any questions or feedback, please contact [swathikaabi4477@gmail.com].