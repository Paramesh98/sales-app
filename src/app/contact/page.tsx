import StickyHeader from "@/components/sticky-header";
import Subscription from "@/components/subscription";
import React from "react";
import "./styles.css";

function Contact() {
  return (
    <>
      <StickyHeader
        title="Check Our Products"
        description="Awesome & Creative HTML CSS layout by TemplateMo"
      />
      <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth"
                  width="100%"
                  height="400px"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Say Hello. Don't Be Shy!</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Your name"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        id="email"
                        placeholder="Your email"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message"
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset />
                    <button
                      type="submit"
                      id="form-submit"
                      className="main-dark-button"
                    >
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Subscription />
    </>
  );
}

export default Contact;
