import SingleProduct from "@/assets/jpg/single-product-01.jpg";
import SingleProduct2 from "@/assets/jpg/single-product-02.jpg";
import Image from "next/image";
import "./styles.css";

function Product() {
  return (
    <>
      <section className="section mt-10" id="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-images">
                <Image src={SingleProduct} alt="" />
                <Image src={SingleProduct2} alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <h4>New Green Jacket</h4>
                <span className="price">$75.00</span>
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
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod kon tempor incididunt ut labore.
                </span>
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiuski smod.
                  </p>
                </div>
                <div className="quantity-content">
                  <div className="left-content">
                    <h6>No. of Orders</h6>
                  </div>
                  <div className="right-content">
                    <div className="quantity buttons_added">
                      <input type="button" className="minus" />
                      <input
                        type="number"
                        step="1"
                        min="1"
                        max=""
                        name="quantity"
                        title="Qty"
                        className="input-text qty text"
                        pattern=""
                      />
                      <input type="button" className="plus" />
                    </div>
                  </div>
                </div>
                <div className="total">
                  <h4>Total: $210.00</h4>
                  <div className="main-border-button">
                    <a href="#">Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
