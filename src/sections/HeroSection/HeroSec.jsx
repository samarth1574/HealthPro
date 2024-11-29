import { Link } from "react-router-dom";
import womenExpectingBaby from "../../assets/images/herosection/black-white-portrait-woman-expecting-baby (3) (1).png";
import pointer from "../../assets/images/herosection/Group 1000002382.png";
import CircularProgress from "../../components/CircularProgressbar/Circularbar";
import "./HeroSec.css";

function HeroSection() {
  return (
    <>
      <div className="hero-section-container">
        <div className="hero-section">
          <div>
            <div className="content">
              <Link to="/">
                <h1 className="calculator-redirect">
                  &larr; IVF Success Rate Calculator
                </h1>
              </Link>
              <div className="header-content">
                <img
                  src={pointer}
                  className="pointer-icon"
                  alt="Pointer Icon"
                />

                <h1 className="hero-heading">
                  Your estimated IVF Success Rate is
                </h1>
              </div>
              <div className="circularProgress">
                <CircularProgress />
              </div>
            </div>
            <p className="ivf-cycle-count">With 1 IVF Cycle</p>
          </div>
          <div className="image-container">
            <img src={womenExpectingBaby} alt="Woman Expecting Baby" />
          </div>
          <div className="private-consultation">
            <button>Start private consultation</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
