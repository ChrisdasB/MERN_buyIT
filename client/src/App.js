// Import Scenes
import HomePage from './scenes/HomePage';
import ItemPage from './scenes/ItemPage';
import CategoryPage from './scenes/CategoryPage';
import CartPage from './scenes/CartPage';
import CheckOut from './scenes/CheckOut';

// Import Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Import React Router
import { Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import './App.css';


function App() {
  // Init location
  const location = useLocation();
  console.log(location);

  return (
    
      <div className="container overflow-x-hidden mx-auto lg:px-20 px-5 p-3">
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />  
          <Route path="/category" element={<CategoryPage />} /> 
          <Route path="/item" element={<ItemPage />} /> 
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/checkout" element={<CheckOut />} /> 
        </Routes>
        <Footer/>
      </div>
    
  );
}

export default App;
