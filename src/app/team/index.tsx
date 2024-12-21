import TeamMember1 from "@/assets/jpg/team-member-01.jpg";
import TeamMemeber2 from "@/assets/jpg/team-member-02.jpg";
import TeamMember3 from "@/assets/jpg/team-member-03.jpg";
import Image from "next/image";

function Team() {
  return (
    <section className="our-team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Amazing Team</h2>
              <span>
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item">
              <div className="thumb">
                <div className="hover-effect">
                  <div className="inner-content">
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
                <Image src={TeamMember1} alt="" />
              </div>
              <div className="down-content">
                <h4>Ragnar Lodbrok</h4>
                <span>Product Caretaker</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item">
              <div className="thumb">
                <div className="hover-effect">
                  <div className="inner-content">
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
                <Image src={TeamMemeber2} alt="" />
              </div>
              <div className="down-content">
                <h4>Ragnar Lodbrok</h4>
                <span>Product Caretaker</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item">
              <div className="thumb">
                <div className="hover-effect">
                  <div className="inner-content">
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
                <Image src={TeamMember3} alt="" />
              </div>
              <div className="down-content">
                <h4>Ragnar Lodbrok</h4>
                <span>Product Caretaker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
