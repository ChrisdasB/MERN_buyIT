// Import Scenes
import HomePage from './scenes/HomePage';
import ItemPage from './scenes/ItemPage';
import CategoryPage from './scenes/CategoryPage';
import CartPage from './scenes/CartPage';
import CheckOut from './scenes/CheckOut';

// Import Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="container overflow-x-hidden mx-auto lg:px-20 px-5 p-3">
      <NavBar/>
      <HomePage/>    
      <Footer/>
    </div>
  );
}

export default App;
