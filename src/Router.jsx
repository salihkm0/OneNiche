import {Route ,Routes } from 'react-router-dom';
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Wishlist from "./Pages/Wishlist";
import NotFoundPage from "./Pages/Error404";
import { UserProfile } from "./Pages/UserProfile";

export default function Router() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    {/* <Route path="/product/:catagory" element={<Cart />} /> */}
    <Route path="/user/profile" element={<UserProfile />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
  )
}