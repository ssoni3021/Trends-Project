import React, { useEffect, useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import "./ProductDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import products from "../../db/data";
import Nav from "../../components/Navigation/Nav";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams(); 

  const handleBackClick = () => {
    navigate("/");
  };

  useEffect(() => {
    // Find the product by ID
    const filteredProduct = products.find((product) => product.id === id);
    setProduct(filteredProduct);
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="page-container">
        <Nav />
        <button onClick={handleBackClick} className="back-button">
          ← Back to Home
        </button>

        <div className="product-detail-container">
          <div className="product-image-container">
            <img
              src={product.img}
              alt={product.title}
              className="product-image"
            />
          </div>
          <div className="product-info-container">
            <h1 className="product-title">{product.title}</h1>
            <div className="product-reviews">
              {product.star} {product.star} {product.star} {product.star}
              <span className="total-reviews">({product.reviews} reviews)</span>
            </div>
            <div className="product-price">
              <span className="previous-price">{product.prevPrice}</span>
              <span className="current-price">{product.newPrice}</span>
            </div>
            <p className="product-description">{product.description}</p>
            <div className="product-buttons">
              <button className="product-button">
                <BsFillBagFill className="button-icon" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p className="footer-text">
            &copy; 2024 YourCompany. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default ProductDetail;
