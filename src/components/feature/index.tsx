import React from "react";
import Men1 from "@/assets/jpg/men-01.jpg";
import Men2 from "@/assets/jpg/men-02.jpg";
import Men3 from "@/assets/jpg/men-03.jpg";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="item w-[300px] min-w-[300px]">
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
        <Image src={Men1} alt="" className="w-full" />
      </div>
      <div className="down-content">
        <h4>classNameic Spring</h4>
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
  );
};

function Feature() {
  return (
    <section className="section" id="men">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Men's Latest</h2>
              <span>
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="men-item-carousels">
              <div className="owl-men-items owl-carousels flex overflow-x-scroll gap-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
