import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/user-profile/UserProfile";
import ProductDetail from "./pages/product-detail/ProductDetails";
import ProductList from "./pages/product-list/ProductList";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/checkout/Checkout";

const App = () => {
  return (
    <>
      <div id="root">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user-profile" element={<ProtectedRoute element={User} />} />
            <Route path="/checkout" element={<ProtectedRoute element={Checkout} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;

