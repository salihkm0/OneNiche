import {Route ,Routes } from 'react-router-dom';
import About from "./Pages/About";
import {Cart} from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Wishlist from "./Pages/Wishlist";
import NotFoundPage from "./Pages/Error404";
import { UserProfile } from "./Pages/UserProfile";
import { SignUp } from './Pages/SignUp';
import ProductList from "./Pages/ProductList";

export default function Router() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/products/:catagory" element={<ProductList />} />
    <Route path="/products/:catagory/:flter" element={<ProductList />} />
    <Route path="/user/profile" element={<UserProfile />} />
    <Route path="/user/signup" element={<SignUp/>} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
  )
}