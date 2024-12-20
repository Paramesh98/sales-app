import React from "react";
import Logo from "@/assets/jpg/logo.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link href="/" className="logo">
                <Image className="pt-3" src={Logo} alt={"logo"} title="logo" />
              </Link>
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#men">Men&apos;s</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#women">Women&apos;s</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#kids">Kid&apos;s</a>
                </li>
                <li className="submenu">
                  <a href="javascript:;">Pages</a>
                  <ul className="pl-0">
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
                <li className="submenu">
                  <a href="javascript:;">Features</a>
                  <ul className="pl-0">
                    <li>
                      <a href="#">Features Page 1</a>
                    </li>
                    <li>
                      <a href="#">Features Page 2</a>
                    </li>
                    <li>
                      <a href="#">Features Page 3</a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/page/4"
                        target="_blank"
                      >
                        Template Page 4
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="scroll-to-section">
                  <a href="#explore">Explore</a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
