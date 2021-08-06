import React, { useState, useEffect } from "react";
import sample from "../../images/sample.jpg";
import hover from "../../images/sample.jpg";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ id, name, img, hoverImg, assets, price }) {
  const [images, setImages] = useState(assets);
  // useEffect(() => {
  //   setImages(assets);
  // }, []);

  return (
    <>
      <div className="card">
        <div className="image-stack">
          <img src={img} alt="" />
          <img className="hover-img hover-img-active" src={hoverImg} alt="" />
          <div className="action">
            <Link to="#">
              <i class="fas fa-heart"></i>
            </Link>
            <Link to={`/page/products/product-detail/${id}`}>
              <i class="fas fa-search"></i>
            </Link>
          </div>
        </div>
        <Link className="link" to={`/page/products/product-detail/${id}`}>
          <h3 className="title">{name}</h3>
        </Link>
        <div className="price-wrapper">
          <span className="sale">20000</span>
          <span className="price">{price}</span>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
