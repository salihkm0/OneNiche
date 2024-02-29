import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Wishlist from "./Pages/Wishlist";
import { StyledContainer } from "./UI/ContainerStyle";
import NotFoundPage from "./Pages/Error404";
import Footer from "./Components/Footer";
import { UserProfile } from "./Pages/UserProfile";

function App() {
  return (
    <>
      <Router>
        <Header />
        <StyledContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </StyledContainer>
        <Footer />
      </Router>
    </>
  );
}

export default App;
