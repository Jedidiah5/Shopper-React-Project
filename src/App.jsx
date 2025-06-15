import Banner from "./components/Banner"
import DetailsPage from "./components/DetailsPage";
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import WomenProduct from "./components/WomenProduct"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar/>
      {isHomePage && <Banner/>}
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/details/:id' element={<DetailsPage/>}/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App 