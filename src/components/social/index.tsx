import React from "react";
import Instagram from "@/assets/jpg/instagram-01.jpg";
import Instagram1 from "@/assets/jpg/instagram-02.jpg";
import Instagram2 from "@/assets/jpg/instagram-03.jpg";
import Instagram3 from "@/assets/jpg/instagram-04.jpg";
import Instagram4 from "@/assets/jpg/instagram-05.jpg";
import Instagram5 from "@/assets/jpg/instagram-06.jpg";
import Image from "next/image";
import "./styles.css";

function Social() {
  return (
    <section className="section" id="social">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Social Media</h2>
              <span>
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row images">
          <div className="col-2">
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Fashion</h6>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <Image src={Instagram} alt="" />
            </div>
          </div>
          <div className="col-2">
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>New</h6>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <Image src={Instagram1} alt="" />
            </div>
          </div>
          <div className="col-2">
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Brand</h6>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <Image src={Instagram2} alt="" />
            </div>
          </div>
          <div className="col-2">
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Makeup</h6>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <Image src={Instagram3} alt="" />
            </div>
          </div>
          <div className="col-2">
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Leather</h6>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <Image src={Instagram4} alt="" />
            </div>
          </div>
          <div className="col-2">
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Bag</h6>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <Image src={Instagram5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
