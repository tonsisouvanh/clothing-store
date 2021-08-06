import React, { useState, useContext } from "react";
import "./ProductDetail.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
// CONTEXT
import ProductContext from "../../ContextApi/ProductContext";
function ProductDetail() {
  const { id } = useParams();
  const { products, loading, error } = useContext(ProductContext);
  console.log("detail", products);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {products &&
        products
          .filter((match) => match.id === id)
          .map((product) => (
            <div className="product-detail">
              <div className="pagination">
                <h1>{product.name}</h1>
                <div>
                  <span>
                    <Link className="link" to="/page/products/">
                      All
                    </Link>
                  </span>
                  <span className="span">/</span>
                  <span>{product.name}</span>
                </div>
              </div>

              <div className="product-grid">
                <div className="product-img">
                  <img
                    className="main-img"
                    src={product.assets
                      .filter((pd, index) => index === 0)
                      .map((item) => item.url)}
                    alt=""
                  />
                  <div className="mini-img">
                    {product.assets.map((img) => (
                      <img src={img.url} alt=""></img>
                    ))}
                  </div>
                </div>
                <div className="product-info">
                  <div className="title">
                    <h1>{product.name}</h1>
                    <div className="rating">
                      <ul className="stars">
                        <li>
                          <i class="fas fa-star"></i>
                        </li>
                        <li>
                          <i class="fas fa-star"></i>
                        </li>
                        <li>
                          <i class="fas fa-star"></i>
                        </li>
                        <li>
                          <i class="fas fa-star"></i>
                        </li>
                        <li>
                          <i class="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat dolores obcaecati perspiciatis alias officia iste
                      distinctio vero, nobis earum expedita quia enim, id
                      incidunt aperiam. Corrupti id quibusdam perferendis
                      dignissimos!
                    </p>
                  </div>
                  <div className="properties">
                    <ul>
                      <li>
                        <p className="prop-name">Price:</p>
                        <div>
                          <span className="sale">20000</span>
                          <span className="price">120000</span>
                        </div>
                      </li>
                      <li>
                        <p className="prop-name">Size:</p>
                        <div className="size-wrapper">
                          <p className="size">M</p>
                          <p className="size">XL</p>
                        </div>
                      </li>
                      <li>
                        <p className="prop-name">Brand:</p>
                        <div>
                          <p>Graphix</p>
                        </div>
                      </li>
                      <li>
                        <p className="prop-name">Product Type:</p>
                        <div>
                          <p>Hat</p>
                        </div>
                      </li>
                      <li>
                        <p className="prop-name">Availability:</p>
                        <div>
                          <p>In Stock</p>
                        </div>
                      </li>
                      <li>
                        <p className="prop-name">Quantity:</p>
                        <div>
                          <p>In Stock</p>
                        </div>
                      </li>
                      <li>
                        <p className="prop-name">Subtotal:</p>
                        <div>
                          <p className="price">120000</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons-grid">
                    <button className="add-cart">Add to cart</button>
                    <button className="like">Add to whish list</button>
                    <button className="buy">Buy it now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  );
}

export default ProductDetail;
