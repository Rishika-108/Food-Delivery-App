# Food Delivery App 🍔🍕

A **Food Delivery App** built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js). This web application allows users to order food from their favorite restaurants, track their orders, and manage their cart. The app provides a seamless and user-friendly experience with real-time updates on food delivery statuses.

## 🌟 Features  

- **User Authentication:**  
  Users can sign up, log in, and manage their profiles.

- **Order Management:**  
  Add items to the cart, place orders, and track delivery status.

- **Admin Panel:**  
  Admins can add or remove restaurants and manage orders.

- **Responsive Design:**  
  The app is fully responsive, offering a smooth experience on mobile, tablet, and desktop devices.

## 🛠️ Tech Stack  

- **Frontend:** React.js, HTML, CSS for building an interactive UI and handling dynamic user interactions.
- **Backend:** Node.js and Express.js for creating a RESTful API to handle requests and manage data.
- **Database:** MongoDB for storing user data, orders, and restaurant information.
- **Authentication:** JWT (JSON Web Tokens) for secure login and user authentication.
  
## 🚀 Getting Started  

### Prerequisites  

Ensure the following are installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/Rishika-108/Food-Delivery-App.git  
   ```

2. Navigate to the project directory:  
   ```bash  
   cd Food-Delivery-App  
   ```

3. Install frontend dependencies:  
   ```bash  
   cd frontend  
   npm install  
   ```

4. Install backend dependencies:  
   ```bash  
   cd backend  
   npm install  
   ```

### Running the App  

1. Start the backend server:  
   ```bash  
   cd backend  
   npm start  
   ```

2. Start the frontend server:  
   ```bash  
   cd frontend  
   npm start  
   ```

3. Open the app in your browser at `http://localhost:3000`.

## 📂 Project Structure  

```plaintext  
Food-Delivery-App/  
├── backend/  
│   ├── controllers/   # API controllers for handling requests  
│   ├── models/        # MongoDB models for users, orders, etc.  
│   ├── routes/        # Routes for API requests  
│   └── server.js      # Backend server entry point  
├── frontend/  
│   ├── components/    # Reusable components for the UI  
│   ├── pages/         # Pages for each view (Home, Cart, etc.)  
│   └── App.js         # Main React component  
├── .env               # Environment variables for API keys and configurations  
├── .gitignore         # Files to ignore in version control  
├── package.json       # Project dependencies  
└── README.md          # Documentation  
```  

## 🤝 Contributing  

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## 📜 License  

This project is licensed under the [MIT License](LICENSE).
