// import { BrowserRouter as Router , createBrowserRouter, Route ,Routes } from 'react-router-dom';
// import About from './Pages/About';
// import Cart from './Pages/Cart';
// import Checkout from './Pages/Checkout';
// import Contact from './Pages/Contact';
// import Error404 from './Pages/Error404';
// import Home from './Pages/Home';
// import ProductDetails from './Pages/ProductDetails';
// import Wishlist from './Pages/Wishlist';

// export default function Routes() {
//   return (
//     <>
//       <Router>
//         <Routes>
//          <Route path="/" element={<Home/>} />
//          <Route path="/about" element={<About/>} />
//          <Route path="/contact" element={<Contact/>} />
//          <Route path="/product/:id" element={<ProductDetails />} />
//          <Route path="/cart" element={<Cart />} />
//          <Route path="/checkout" element={<Checkout/>} />
//          <Route path="/wishlist" element={<Wishlist/>} />
//          <Route path="**" element={<Error404/>} />
//         </Routes>
//       </Router>
//     </>
//   )
// }
// export const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home/>,
//       errorElement: <Error404 />,
//     },
//     {
//       path: "/contact",
//       element: <Contact />,
//     },
//     {
//       path: "/about",
//       element: <About />,
//     },
//     {
//       path: "/product/:id",
//       element: <ProductDetails />,
//     },
//     {
//       path: "/cart",
//       element: <Cart />,
//     },
//     {
//       path: "/checkout",
//       element: <Checkout />,
//     },
//     {
//       path: "/wishlist",
//       element: <Wishlist />,
//     },
// ]);