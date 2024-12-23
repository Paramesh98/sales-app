import React from "react";
import AboutLeft from "@/assets/jpg/about-left-image.jpg";
import Image from "next/image";

function Skills() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-image">
              <Image src={AboutLeft} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-content">
              <h4>About Us &amp; Our Skills</h4>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod kon tempor incididunt ut labore.
              </span>
              <div className="quote">
                <i className="fa fa-quote-left"></i>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiuski smod kon tempor incididunt ut labore.
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod kon tempor incididunt ut labore et dolore magna aliqua
                ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip.
              </p>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
