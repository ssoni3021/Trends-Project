import React from "react";
import Nav from "../../components/Navigation/Nav";
import Footer from "../../components/Footer/Footer";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Nav />
      <div className="checkout-container">
        <div className="checkout-message">
          <h1>Order Successfully Submitted!</h1>
          <p>
            Thank you for your purchase. Your order has been placed
            successfully.
          </p>
          <Link
            to="/"
            className="back-home-btn"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
