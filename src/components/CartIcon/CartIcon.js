import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { toggleCart } from '../../features/cart/cartSlice';
import './CartIcon.css';

const CartIcon = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  // Calculate the total quantity of items in the cart
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-icon-container">
      <AiOutlineShoppingCart
        className="nav-icons"
        onClick={() => dispatch(toggleCart())}
      />
      {totalQuantity > 0 && (
        <div className="cart-badge">
          {totalQuantity}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
