import React, { useState, useContext } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import { Link } from "react-router-dom";

//CONTEXT
import ProductContext from "../../ContextApi/ProductContext";

function ProductList() {
  const { products, loading, error } = useContext(ProductContext);
  const [current, setCurrent] = useState(0);
  const length = products.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <div className="products-container">
        <div className="pagination">
          <div>
            <h1>Products</h1>
            <span>
              <Link className="link" to="/">
                Home
              </Link>
            </span>
            <span className="span">/</span>
            <span>Products</span>
          </div>
        </div>
        <div className="grid-container">
          <div className="filter">
            <div className="box category">
              <h3 className="category-title">Category</h3>
              <ul className="cate-list">
                <Link className="cate-link">
                  <li>
                    Men'S Fashion<span>+</span>
                  </li>
                </Link>
                <Link className="cate-link">
                  <li>
                    Women'S Fashion<span>+</span>
                  </li>
                </Link>
                <Link className="cate-link">
                  <li>
                    Kid'S Fashion<span>+</span>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="box color">
              <h3 className="category-title">Shop By Color</h3>
              <div className="colors">
                <i id="color-1" class="fas fa-circle"></i>
                <i id="color-2" class="fas fa-circle"></i>
                <i id="color-3" class="fas fa-circle"></i>
                <i id="color-4" class="fas fa-circle"></i>
              </div>
            </div>
            <div className="box size">
              <h3 className="category-title">Shop By Size</h3>
              <div className="sizes">
                <p>L</p>
                <p>M</p>
                <p>S</p>
                <p>XL</p>
              </div>
            </div>
            <div className="box brand">
              <h3 className="category-title">Shop By Brand</h3>
              <div className="checkbox-wrapper">
                <label className="container">
                  <input id="input" type="checkbox" checked="checked" />
                  One
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  Two
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  Three
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  Four
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="box type">
              <h3 className="category-title">Shop By Type</h3>
              <div className="checkbox-wrapper">
                <label className="container">
                  <input type="checkbox" />
                  T-Shirt
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  Jean
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  <input type="checkbox" />
                  Hoodie
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="box best-seller">
              {/* card here */}
              <h3 className="category-title">Best Seller</h3>
              <div className="best-seller-wrapper">
                <i onClick={prevSlide} class="fas fa-chevron-left"></i>
                <i onClick={nextSlide} class="fas fa-chevron-right"></i>
                {/* BEST SELLER ITEMS NEED TO BE MODEFIED */}
                {products.map((product, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                    >
                      {index === current && (
                        <ProductCard
                          key={product.permalink}
                          id={product.id}
                          name={product.name}
                          img={
                            product.assets &&
                            product.assets
                              .filter((pd, index) => index === 0)
                              .map((img) => img.url)
                          }
                          hoverImg={
                            product.assets &&
                            product.assets
                              .filter((pd, index) => index === 1)
                              .map((img) => img.url)
                          }
                          assets={product.assets}
                          price={product.price.formatted_with_code}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="cards-container">
            <div className="sort">
              <p>VIEW:</p>
              <div className="sort-feature">
                <p>
                  SHOW:
                  <span className="numbers">
                    <select name="" id="" value="">
                      <option value="0">12</option>
                      <option value="1">16</option>
                      <option value="2">20</option>
                      <option value="3">24</option>
                    </select>
                  </span>
                </p>
                <p>
                  SORT BY:
                  <span className="Featured">
                    <select name="" id="" value="">
                      <option value="0">Featured</option>
                      <option value="1">Price, low to high</option>
                      <option value="2">Price, high to low</option>
                      <option value="3">Best Selling</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div className="items">
              {products &&
                products.map((product) => {
                  return (
                    <ProductCard
                      key={product.permalink}
                      id={product.id}
                      name={product.name}
                      img={
                        product.assets &&
                        product.assets
                          .filter((pd, index) => index === 0)
                          .map((img) => img.url)
                      }
                      hoverImg={
                        product.assets &&
                        product.assets
                          .filter((pd, index) => index === 1)
                          .map((img) => img.url)
                      }
                      assets={product.assets}
                      price={product.price.formatted_with_code}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      {/* {productList.map((item) => {
        return <ProductCard name={item.name}/>;
      })} */}
    </>
  );
}

export default ProductList;
