# 🍔 Food Delivery App 🍕

A **Food Delivery Web Application** built using the **MERN stack** — **MongoDB**, **Express.js**, **React.js**, and **Node.js**.  
This app allows users to browse restaurants, add food items to their cart, place orders, track deliveries, and securely process payments.  
It offers a seamless, responsive, and real-time experience for both customers and admins.

---

## 🌟 Features  

- **👤 User Authentication:**  
  Users can sign up, log in, and manage their profiles using secure JWT authentication.

- **🛒 Order Management:**  
  Add items to the cart, place orders, and track delivery status in real time.

- **💳 Dummy Payment Integration:**  
  Integrated a mock payment system to simulate the checkout process — great for testing without real transactions.

- **🧑‍💼 Admin Panel:**  
  Admins can manage restaurants, menus, and orders directly from the dashboard.

- **📱 Responsive Design:**  
  Optimized for mobile, tablet, and desktop devices for a consistent user experience.

---

## 🛠️ Tech Stack  

| Layer        | Technologies Used |
|---------------|-------------------|
| **Frontend**  | React.js, HTML5, CSS3 |
| **Backend**   | Node.js, Express.js |
| **Database**  | MongoDB |
| **Authentication** | JWT (JSON Web Token) |
| **Payment (Stripe)** | Simulated payment flow for testing |

---

## 🚀 Getting Started  

### ✅ Prerequisites  

Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

---

### ⚙️ Installation  

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/Rishika-108/Food-Delivery-App.git
````

2. **Navigate to the project directory:**

   ```bash
   cd Food-Delivery-App
   ```

3. **Install frontend dependencies:**

   ```bash
   cd frontend
   npm install
   ```

4. **Install backend dependencies:**

   ```bash
   cd ../backend
   npm install
   ```

---

### ▶️ Running the App

1. **Start the backend server:**

   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend server:**

   ```bash
   cd ../frontend
   npm start
   ```

3. **Open your browser** and visit 👉 `http://localhost:3000`

---

## 📂 Project Structure

```plaintext
Food-Delivery-App/
├── backend/
│   ├── controllers/   # API controllers for handling requests
│   ├── models/        # MongoDB models (User, Order, Restaurant)
│   ├── routes/        # API routes
│   └── server.js      # Backend entry point
│
├── frontend/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Main views (Home, Cart, Checkout, etc.)
│   └── App.js         # Root React component
│
├── .env               # Environment variables (API keys, DB URI)
├── .gitignore         # Ignored files
├── package.json       # Project dependencies
└── README.md          # Documentation
```

---

## 🧩 Environment Variables

Create a `.env` file in the **backend** directory with the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## 🤝 Contributing

Contributions are welcome! 💬
To contribute:

1. **Fork** the repository
2. **Create a new branch:**

   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes:**

   ```bash
   git commit -m "Add feature-name"
   ```
4. **Push to your branch:**

   ```bash
   git push origin feature-name
   ```
5. **Open a Pull Request**


## ✨ Author

**Rishika-108**
💼 [GitHub](https://github.com/Rishika-108)

That can make your README even more practical for developers or recruiters trying out your app.
```
