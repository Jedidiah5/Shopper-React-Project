import Banner from "./components/Banner"
import DetailsPage from "./components/DetailsPage";
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import WomenProduct from "./components/WomenProduct"
import MenProducts from "./components/MenProducts";
import WomenProducts from "./components/WomenProducts";
import CartPage from "./components/CartPage";
import { CartProvider, useCart } from "./context/CartContext";
import Notification from "./components/Notification";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import CheckoutForm from "./components/CheckoutForm";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { notification, setNotification } = useCart();

  return (
    <>
      <Navbar/>
      {isHomePage && <Banner/>}
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/men' element={<MenProducts/>}/>
        <Route path='/women' element={<WomenProducts/>}/>
        <Route path='/details/:id' element={<DetailsPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutForm/>}/>
        <Route path='/checkout-success' element={
          <div className="container mx-auto px-4 py-8 sm:py-16 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">Thank you for your order!</h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">Your order has been placed successfully. A confirmation email will be sent to you soon.</p>
            <Link to="/" className="bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-orange-600 transition-colors text-sm sm:text-base">Back to Home</Link>
          </div>
        }/>
      </Routes>
      <Notification
        message={notification.message}
        isVisible={notification.show}
        onClose={() => setNotification({ show: false, message: '' })}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App 