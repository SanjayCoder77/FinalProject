import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import icon from "../assets/images/Icon.webp";

import '../assets/css/bootstrap.min.css';
import '../assets/css/flex-slider.css';
import '../assets/css/font-awesome.css';
import '../assets/css/lightbox.css';
import '../assets/css/owl-carousel.css';
import '../assets/css/templatemo-hexashop.css'; 

const Navbar = () => {
  return (
    <>
      {/* ***** Preloader Start ***** */}
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* ***** Preloader End ***** */}

      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="/" className="logo">
                  <img src={icon} alt="Logo" className="Icon-nav" />
                </a>
                {/* ***** Logo End ***** */}

                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#kids">Collection</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#men">Men's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#women">Women's</a>
                  </li>
                  <li className="submenu">
                    <a href="#!">Pages</a>
                    <ul>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="products.html">Products</a>
                      </li>
                      <li>
                        <a href="single-product.html">Single Product</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#explore">Explore</a>
                  </li>
                  <a href="#search">
                    <FaSearch style={{ color: "black", margin: "11px" }} />
                  </a>
                  <a href="#cart">
                    <FaShoppingCart style={{ color: "black", margin: "10px" }} />
                  </a>
                </ul>

                <button className="menu-trigger">
                  <span>Menu</span>
                </button>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
