import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Contact from './Pages/Contact';
import Error404 from './Pages/Error404';
import Home from "./Pages/Home";
import ProductDetails from './Pages/ProductDetails';
import Wishlist from './Pages/Wishlist';
import { StyledContainer } from './Ui/ContainerStyle';

function App() {
  return (
    <>
    <Router>
      {/* <NavBar/> */}
      <StyledContainer>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/wishlist" element={<Wishlist/>} />
         <Route path="/cart" element={<Cart/>} />
         <Route path="/product/:id" element={<ProductDetails />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/checkout" element={<Checkout />} />
         <Route path="*" element={<Error404 />} />
       </Routes>
       </StyledContainer>
       
     </Router>
    </>
  );
}

export default App;
