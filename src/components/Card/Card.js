import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({
  id,
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  company,
  color,
  category,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id,
        img,
        title,
        reviews,
        prevPrice,
        newPrice,
        company,
        color,
        category,
      })
    );
  };

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={img} alt={title} className="card-img" />
        <div className="card-overlay">
          <button
            className="overlay-button"
            onClick={() => navigate(`/product/${id}`)}
          >
            <MdRemoveRedEye className="overlay-icon" />
            View Product
          </button>
          <button className="overlay-button" onClick={handleAddToCart}>
            <BsFillBagFill className="overlay-icon" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">({reviews})</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
