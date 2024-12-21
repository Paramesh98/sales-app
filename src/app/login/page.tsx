import LeftBannerImage from "@/assets/jpg/left-banner-image.jpg";
import Image from "next/image";
import "./styles.css";

function Login() {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6">
          <form id="subscribe" action="" method="get">
            <div className="row">
              <div className="col-md-12">
                <h4>Login</h4>
                <span>Please Login with your username and password</span>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                  />
                </fieldset>
              </div>
              <div className="col-md-12 mt-4">
                <fieldset>
                  <input
                    name="email"
                    type="text"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    placeholder="Your Email Address"
                  />
                </fieldset>
              </div>
              <div className="col-md-12 mt-4">
                <fieldset>
                  <button
                    type="submit"
                    id="form-submit"
                    className="main-dark-button px-4"
                  >
                    Submit
                  </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <Image src={LeftBannerImage} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
}

export default Login;
