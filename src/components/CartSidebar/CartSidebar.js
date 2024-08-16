import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  loadCart,
} from "../../features/cart/cartSlice";
import { AiOutlineDelete } from "react-icons/ai";
import "./CartSidebar.css";
import { useNavigate } from "react-router-dom";

const CartSidebar = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.cart);
  const redirect = useNavigate();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  const calculateTotal = () => {
    return items
      .reduce(
        (total, item) =>
          total + (parseFloat(item.newPrice) || 0) * item.quantity,
        0
      )
      .toFixed(2);
  };

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      {items.length > 0 && (
        <button
          className="clear-cart-btn"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      )}

      <button className="close-btn" onClick={() => dispatch(toggleCart())}>
        &times;
      </button>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-img-container">
                <img
                  src={item.img}
                  alt={item.title}
                  className="cart-item-img"
                />
              </div>
              <div className="cart-item-details">
                <h3>
                  {item.title} ( {item.company} )
                </h3>
                <p>
                  <del className="prev-price">{item.prevPrice}</del> $
                  {item.newPrice}
                </p>
                <p>Color: {item.color}</p>
                <p>Category: {item.category}</p>
                <div className="cart-item-controls">
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>
                  <AiOutlineDelete
                    onClick={() => dispatch(removeItem(item.id))}
                    className="delete-icon"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="checkout-container">
            <div className="cart-total">
              <h3>Total Price: ${calculateTotal()}</h3>
            </div>
            <button
              className="checkout-cart-btn"
              onClick={() => {
                dispatch(toggleCart());
                dispatch(clearCart());
                redirect("/checkout");
              }}
            >
              check out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
