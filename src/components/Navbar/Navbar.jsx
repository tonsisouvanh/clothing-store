import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [click, setClick] = useState(false);
  const [toggleBag, setToggleBag] = useState(false);
  const [hidetopbar, setHidetopbar] = useState(false);

  const clickHandle = () => {
    setClick(!click);
  };

  const bagHandle = () => {
    setToggleBag(!toggleBag);
  };

  const closeMobileMenu = () => setClick(false);

  const hideTopbar = () => {
    if (window.scrollY >= 384) {
      setHidetopbar(true);
    } else {
      setHidetopbar(false);
    }
  };
  window.addEventListener("scroll", hideTopbar);
  return (
    <>
      <nav className="navbar-container">
        {/* <div className="nox">nox</div> */}
        <div
          id={hidetopbar ? "topbar" : ""}
          // className={hideTopbar ? "topbar hide-topbar" : "topbar"}
          className="topbar"
        >
          <i
            id="menu-active"
            onClick={clickHandle}
            class={click ? "fas fa-times" : "fas fa-bars"}
          ></i>
          <h1 id="logo" className="logo">
            STARS
          </h1>
          <div className="search-wrapper">
            <form action="" className="search-form">
              <input type="text" placeholder="search products..."></input>
              <button className="search-submit">Search</button>
            </form>
          </div>
          <div className="profile">
            <i class="far fa-user"></i>
            <i class="far fa-heart"></i>
            <i onClick={bagHandle} class="fas fa-shopping-bag">
              <p>2</p>
            </i>
            {/* <div className={toggleBag ? "bag-detail bag-active" : "bag-detail"}>
              <p>1x Luis</p>
              <p>2x Channel</p>
              <p>See all</p>
            </div> */}
          </div>
        </div>
        <div
          id={click ? "nav-menu-bar-active" : ""}
          className="nav-menu-bar"
        >
          <div className="nav-links">
            <Link to="/" className="link home-active">
              <a>Home</a>
            </Link>
            <Link to="/" className="link catalog-link">
              <a>Catalog</a>
              <span>
                <i class="fas fa-angle-down"></i>
              </span>
              <div id="sub-nav-catalog-active" className="sub-catalog-link">
                <Link to="/womens" className="sub-link">
                  <a>WOMENS</a>
                  <img
                    className="top-img"
                    src="https://s7g3.scene7.com/is/image/soloinvest/n00554A?$big_image_web$"
                    alt=""
                  />
                </Link>
                <Link to="/mens" className="sub-link">
                  <a>MENS</a>
                  <img
                    src="https://s7g3.scene7.com/is/image/soloinvest/n00571A?$big_image_web$"
                    alt=""
                  />
                </Link>
                <Link className="sub-link">
                  <a>KIDS</a>
                  <img
                    src="https://i.pinimg.com/564x/e4/4f/9c/e44f9c7a841f9f6cc295de9ca8d53fe0.jpg"
                    alt=""
                  />
                </Link>
              </div>
            </Link>

            <Link className="link page-link">
              <a>Pages</a>
              <span>
                <i class="fas fa-angle-down"></i>
              </span>
              <ul className="sub-menu-page">
                <Link to="/page/products" className="sub-link-page">
                  <li>Products</li>
                </Link>
                <Link className="sub-link-page">
                  <li>Fanchise</li>
                </Link>
                <Link className="sub-link-page">
                  <li>About</li>
                </Link>
              </ul>
            </Link>
            <Link className="link">
              <a>Contact</a>
            </Link>
          </div>
          <div className="social-media">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram-square"></i>
            <i class="fab fa-twitter-square"></i>
          </div>
        </div>

        {/* MOBILE NAVBAR */}
        <div id={click ? "mobile-nav-active" : ""} className="mobile-nav">
          <div className="mobile-nav-links">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="mobile-link mobile-home-active"
            >
              <a>Home</a>
            </Link>
            <Link className="mobile-link">
              <a>
                Catagory
                <span>
                  <i class="fas fa-angle-down"></i>
                </span>
              </a>
              <ul className="mb-sub-catagory mb-sub-active">
                <Link className="mb-sub-link">
                  <li>MENS</li>
                </Link>
                <Link className="mb-sub-link">
                  <li>WOMENS</li>
                </Link>
                <Link className="mb-sub-link">
                  <li>KIDS</li>
                </Link>
              </ul>
            </Link>
            <Link
              to="/page/products"
              onClick={closeMobileMenu}
              className="mobile-link"
            >
              <a>Pages</a>
            </Link>
            <Link className="mobile-link">
              <a>Contact</a>
            </Link>
          </div>
          <div className="mobile-social-media">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram-square"></i>
            <i class="fab fa-twitter-square"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
