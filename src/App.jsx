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
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

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