# Vite + React + Tailwind CSS Template

A modern starter template for React applications using Vite and Tailwind CSS.
An e-commerce platform with both frontend and backend

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## Frontend: Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Project Structure

```
├── src/
│   ├── App.jsx        # Main App component
│   ├── main.jsx       # Application entry point
│   └── index.css      # Global styles with Tailwind directives
├── index.html         # HTML entry point
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── postcss.config.js  # PostCSS configuration
```
## 🛠️ Backend (Node.js + Express + MongoDB)

The backend powers the API for the Shopper project. It handles authentication, product management, cart, and order processing.

### 🚀 Getting Started

#### 1️⃣ Navigate into the backend folder

cd backend

2️⃣ Install dependencies

npm install

3️⃣ Run the backend server

npm start

📂 Project Structure
backend/
├──  controller/     # Handles request logic
├──  middleware/     # Auth & error handling
├──  model/          # Mongoose schemas (User, Product, Cart, Order)
├──  validator/      # Joi validators
├──  index.js        # Entry point
└──  .env            # Environment variables (ignored in git)

🔑 Features
🔑 User Authentication (Register / Login with JWT)

👨‍💼 Admin Role → manage products

🛍️ Products → CRUD endpoints

🛒 Cart → add/remove/update products

📦 Orders → checkout and order management

## License

MIT 
