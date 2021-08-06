import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-info-wrapper">
          <div className="col about">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              consectetur doloribus doloremque ad culpa architecto esse
              explicabo accusamus ullam? Mollitia velit voluptates illum aut
              numquam quasi iusto quos dolores sunt.
            </p>
          </div>
          <ul className="col">
            <li>
              <h2>Information</h2>
            </li>
            <Link className="link" to="#">
              <li>Search</li>
            </Link>
            <Link className="link" to="#">
              <li>Store Location</li>
            </Link>
            <Link className="link" to="#">
              <li>Order & Return</li>
            </Link>
            <Link className="link" to="#">
              <li>Privacy Policy</li>
            </Link>
          </ul>
          <ul className="col">
            <li>
              <h2>Support</h2>
            </li>
            <Link className="link" to="#">
              <li>Contact Us</li>
            </Link>
            <Link className="link" to="#">
              <li>About us</li>
            </Link>
            <Link className="link" to="#">
              <li>Career</li>
            </Link>
            <Link className="link" to="#">
              <li>Delivery</li>
            </Link>
          </ul>
          <ul className="col">
            <li>
              <h2>Help</h2>
            </li>
            <Link className="link" to="#">
              <li>Help & FAQ's</li>
            </Link>
            <Link className="link" to="#">
              <li>Information</li>
            </Link>
            <Link className="link" to="#">
              <li>Shipping Detail</li>
            </Link>
            <Link className="link" to="#">
              <li>Online Payment</li>
            </Link>
          </ul>
          <div className="signup">
            <form className="form" action="">
              <input className="email" type="text" placeholder="example@gmail.com"/>
              <input className="submit" type="submit" value="Sign Up"/>
            </form>
            <div className="social-media">
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-instagram-square"></i>
              <i class="fab fa-twitter-square"></i>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2021 Phommala Sisouvanh</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
