import React from "react";
import Men1 from "@/assets/jpg/men-01.jpg";
import Men2 from "@/assets/jpg/men-02.jpg";
import Men3 from "@/assets/jpg/men-03.jpg";
import Women1 from "@/assets/jpg/women-01.jpg";
import Women2 from "@/assets/jpg/women-02.jpg";
import Women3 from "@/assets/jpg/women-03.jpg";
import Image from "next/image";

function ProductList() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Latest Products</h2>
              <span>Check out all of our products.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <Image src={Men1} alt="" />
              </div>
              <div className="down-content">
                <h4>Classic Spring</h4>
                <span>$120.00</span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <Image src={Men2} alt="" />
              </div>
              <div className="down-content">
                <h4>Air Force 1 X</h4>
                <span>$90.00</span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <Image src={Men3} alt="" />
              </div>
              <div className="down-content">
                <h4>Love Nana ‘20</h4>
                <span>$150.00</span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <Image src={Women1} alt="" />
              </div>
              <div className="down-content">
                <h4>New Green Jacket</h4>
                <span>$75.00</span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <Image src={Women2} alt="" />
              </div>
              <div className="down-content">
                <h4>Classic Dress</h4>
                <span>$45.00</span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <Image src={Women2} alt="" />
              </div>
              <div className="down-content">
                <h4>Spring Collection</h4>
                <span>$130.00</span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <img src="assets/images/kid-01.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>School Collection</h4>
                <span>$80.00</span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <img src="assets/images/kid-02.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Summer Cap</h4>
                <span>$12.00</span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-star"></i>
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <img src="assets/images/kid-03.jpg" alt="" />
              </div>
              <div className="down-content">
                <h4>Classic Kid</h4>
                <span>$30.00</span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="pagination">
              <ul>
                <li>
                  <a href="#">1</a>
                </li>
                <li className="active">
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
