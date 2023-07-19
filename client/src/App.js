// Import Scenes
import HomePage from './scenes/HomePage';
import ItemPage from './scenes/ItemPage';
import CategoryPage from './scenes/CategoryPage';
import CartPage from './scenes/CartPage';
import SuccessPage from './scenes/SuccessPage';

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

  return (
    
      <div className="container overflow-x-hidden mx-auto lg:px-20 px-0 pt-3">
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />  
          <Route path="/category" element={<CategoryPage />} /> 
          <Route path="/item" element={<ItemPage />} /> 
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/success" element={<SuccessPage />} /> 
        </Routes>
        <Footer/>
      </div>
    
  );
}

export default App;
