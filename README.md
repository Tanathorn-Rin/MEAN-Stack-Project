# MERN Stack Workout Tracker

A full-stack workout tracking application built while following [The Net Ninja's MERN Stack Tutorial](https://github.com/iamshaunjp/MERN-Stack-Tutorial). This project demonstrates the implementation of a complete CRUD application using MongoDB, Express.js, React, and Node.js.

## 📚 About This Project

This is a learning project created by following The Net Ninja's comprehensive MERN Stack tutorial series. The application allows users to manage their workout routines with full Create, Read, Update, and Delete (CRUD) functionality, featuring a modern React frontend and a RESTful API backend.

## 🎯 Learning Objectives

Through this project, I gained hands-on experience with:

- Building RESTful APIs with Express.js and Node.js
- Database modeling and operations with MongoDB and Mongoose
- Creating interactive UIs with React and React Hooks
- Managing application state with Context API
- Implementing routing with React Router
- Connecting frontend and backend applications
- Environment variable management and security
- Modern JavaScript (ES6+) features and best practices

## 🚀 Features

- ✨ **Create Workouts**: Add new workout entries with title, reps, and load
- 📋 **View Workouts**: Display all workouts in a clean, organized list
- ✏️ **Update Workouts**: Edit existing workout information
- 🗑️ **Delete Workouts**: Remove workouts from the database
- ⚡ **Real-time Updates**: Instant UI updates using React Context
- 📱 **Responsive Design**: Mobile-friendly interface
- 🎨 **Modern UI**: Clean and intuitive user experience

## 🛠️ Tech Stack

### Frontend
- ![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=white) - JavaScript library for building user interfaces
- ![React Router](https://img.shields.io/badge/React_Router-7.9.5-CA4245?style=flat&logo=react-router&logoColor=white) - Declarative routing for React
- **date-fns** (v4.1.0) - Modern JavaScript date utility library
- **Context API** - State management solution

### Backend
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) - JavaScript runtime environment
- ![Express.js](https://img.shields.io/badge/Express.js-5.1.0-000000?style=flat&logo=express&logoColor=white) - Fast, minimalist web framework
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) - NoSQL document database
- ![Mongoose](https://img.shields.io/badge/Mongoose-8.19.2-880000?style=flat) - Elegant MongoDB object modeling

### Development Tools
- **Nodemon** (v3.1.10) - Auto-restart server during development
- **dotenv** (v17.2.3) - Load environment variables from .env file

## 📁 Project Structure

```
MERN-Stack-Project/
├── backend/
│   ├── controller/
│   │   └── workoutController.js    # Business logic for workout operations
│   ├── models/
│   │   └── workoutModel.js         # Mongoose schema for workouts
│   ├── routes/
│   │   └── workouts.js             # API route definitions
│   ├── server.js                   # Express server configuration
│   ├── package.json
│   └── .env                        # Environment variables (not tracked)
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/            # Reusable React components
│   │   ├── context/               # React Context for state management
│   │   ├── hook/                  # Custom React hooks
│   │   ├── pages/                 # Page components
│   │   ├── App.js                 # Main App component
│   │   ├── index.js               # React entry point
│   │   └── index.css              # Global styles
│   └── package.json
│
└── .gitignore
```

## 🔧 Installation & Setup

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Local installation](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
- **npm** or **yarn** package manager

### Step 1: Clone the Repository
```bash
git clone https://github.com/Tanathorn-Rin/MERN-Stack-Project.git
cd MERN-Stack-Project
```

### Step 2: Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/workout-db
# Or use MongoDB Atlas connection string:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/workout-db
```

4. Start the backend server:
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

✅ Backend server should be running on `http://localhost:4000`

### Step 3: Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

✅ Frontend application should automatically open at `http://localhost:3000`

## 🌐 API Documentation

### Base URL
```
http://localhost:4000/api
```

### Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/api/workouts` | Retrieve all workouts | N/A |
| `GET` | `/api/workouts/:id` | Retrieve a specific workout | N/A |
| `POST` | `/api/workouts` | Create a new workout | `{ title, reps, load }` |
| `PATCH` | `/api/workouts/:id` | Update a workout | `{ title, reps, load }` |
| `DELETE` | `/api/workouts/:id` | Delete a workout | N/A |

### Example API Requests

#### Create a Workout
```bash
POST http://localhost:4000/api/workouts
Content-Type: application/json

{
  "title": "Bench Press",
  "reps": 10,
  "load": 60
}
```

#### Response
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Bench Press",
  "reps": 10,
  "load": 60,
  "createdAt": "2025-11-05T18:30:00.000Z",
  "updatedAt": "2025-11-05T18:30:00.000Z"
}
```

## 💡 Usage

1. **Start MongoDB**: Ensure your MongoDB server is running
   ```bash
   # If using local MongoDB
   mongod
   ```

2. **Start Backend Server**: 
   ```bash
   cd backend && npm run dev
   ```

3. **Start Frontend Server**: 
   ```bash
   cd frontend && npm start
   ```

4. **Access the Application**: Open your browser to `http://localhost:3000`

5. **Add Workouts**: Click the form to add your first workout!

## 🧪 Testing

### Frontend Tests
```bash
cd frontend
npm test
```

### Launch Test Runner
```bash
npm test -- --coverage
```

## 📦 Build for Production

### Create Production Build
```bash
cd frontend
npm run build
```

This creates an optimized production build in the `frontend/build` folder, ready for deployment.

## 🚀 Deployment

The application can be deployed to various platforms:

- **Frontend**: Vercel, Netlify, GitHub Pages
- **Backend**: Heroku, Railway, Render, DigitalOcean
- **Database**: MongoDB Atlas (cloud-hosted)

## 🎓 What I Learned

- ✅ Setting up a full-stack MERN application from scratch
- ✅ Creating RESTful API endpoints with Express.js
- ✅ Database modeling with Mongoose schemas
- ✅ React hooks (useState, useEffect, useContext)
- ✅ Custom React hooks for reusable logic
- ✅ Context API for global state management
- ✅ Handling asynchronous operations with async/await
- ✅ CORS configuration for connecting frontend and backend
- ✅ Error handling in both client and server
- ✅ MVC (Model-View-Controller) architecture pattern

## 🙏 Acknowledgments

- **The Net Ninja** - For the excellent [MERN Stack Tutorial](https://github.com/iamshaunjp/MERN-Stack-Tutorial)
- **YouTube Channel**: [The Net Ninja](https://www.youtube.com/@NetNinja)
- Tutorial source code: [iamshaunjp/MERN-Stack-Tutorial](https://github.com/iamshaunjp/MERN-Stack-Tutorial)

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [The Net Ninja YouTube Channel](https://www.youtube.com/@NetNinja)

## 👤 Author

**Tanathorn Rin**
- GitHub: [@Tanathorn-Rin](https://github.com/Tanathorn-Rin)
- Learning Project: Built while following The Net Ninja's MERN Stack Tutorial

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📧 Contact

For questions or feedback, please open an issue on this repository.

---

⭐ **If you found this project helpful for your learning journey, please give it a star!**

*This project was created as part of my journey to learn the MERN stack. Special thanks to The Net Ninja for the amazing tutorial!*
