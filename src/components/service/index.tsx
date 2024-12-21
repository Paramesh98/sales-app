import Serive from "@/assets/jpg/service-01.jpg";
import Service2 from "@/assets/jpg/service-02.jpg";
import Service3 from "@/assets/jpg/service-03.jpg";
import Image from "next/image";

function Service() {
  return (
    <section className="our-services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Services</h2>
              <span>
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-item">
              <h4>Synther Vaporware</h4>
              <p>
                Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed
                do eiusmod temp incididunt ut labore, et dolore quis ipsum
                suspend.
              </p>
              <Image src={Serive} alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-item">
              <h4>Locavore Squidward</h4>
              <p>
                Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed
                do eiusmod temp incididunt ut labore, et dolore quis ipsum
                suspend.
              </p>
              <Image src={Service2} alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-item">
              <h4>Health Gothfam</h4>
              <p>
                Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed
                do eiusmod temp incididunt ut labore, et dolore quis ipsum
                suspend.
              </p>
              <Image src={Service3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
