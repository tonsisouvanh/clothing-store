import React from "react";
import sample from "../../images/sample.jpg";
import hover from "../../images/hover.jpg";

import { Link } from "react-router-dom";
import "./Shoptype.css";
function Shoptype() {
  return (
    <>
      <div className="container">
        <div className="best-seller">
          <p>Shop our best seller</p>
          <h1>Best/Sale Seller</h1>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="image-stack">
              <img src={sample} alt="" />
              <img className="hover-img hover-img-active" src={hover} alt="" />
              <div className="action">
                <Link to="#">
                  <i class="fas fa-heart"></i>
                </Link>
                <Link to="#">
                  <i class="fas fa-search"></i>
                </Link>
              </div>
            </div>
            <h3 className="title">Regular T-shirt</h3>
            <div className="price-wrapper">
              <span className="sale">K 40000</span>
              <span className="price">K 30000</span>
            </div>
          </div>
          <div className="card">
            <div className="image-stack">
              <img src={sample} alt="" />
              <img className="hover-img hover-img-active" src={hover} alt="" />
              <div className="action">
                <Link to="#">
                  <i class="fas fa-heart"></i>
                </Link>
                <Link to="#">
                  <i class="fas fa-search"></i>
                </Link>
              </div>
            </div>
            <h3 className="title">Regular T-shirt</h3>
            <div className="price-wrapper">
              <span className="sale">K 40000</span>
              <span className="price">K 30000</span>
            </div>
          </div>
          <div className="card">
            <div className="image-stack">
              <img src={sample} alt="" />
              <img className="hover-img hover-img-active" src={hover} alt="" />
              <div className="action">
                <Link to="#">
                  <i class="fas fa-heart"></i>
                </Link>
                <Link to="#">
                  <i class="fas fa-search"></i>
                </Link>
              </div>
            </div>
            <h3 className="title">Regular T-shirt</h3>
            <div className="price-wrapper">
              <span className="sale">K 40000</span>
              <span className="price">K 30000</span>
            </div>
          </div>
          <div className="card">
            <div className="image-stack">
              <img src={sample} alt="" />
              <img className="hover-img hover-img-active" src={hover} alt="" />
              <div className="action">
                <Link to="#">
                  <i class="fas fa-heart"></i>
                </Link>
                <Link to="#">
                  <i class="fas fa-search"></i>
                </Link>
              </div>
            </div>
            <h3 className="title">Regular T-shirt</h3>
            <div className="price-wrapper">
              <span className="sale">K 40000</span>
              <span className="price">K 30000</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Shoptype;
