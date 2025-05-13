import { Component } from "react"; 
import CV from "../../assets/cv.pdf";
import "./CTA.css";

class CTA extends Component {
  openCV = () => {
    window.open(CV, "_blank");
  };

  downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "cv.pdf";
    link.click();
  };

  render() {
    return (
      <div className="triangle-cta">
        <div className="cta">
          <div className="button-group">
            <button onClick={this.openCV} className="btn btn-primary">Open CV</button>
            <button onClick={this.downloadCV} className="btn btn-secondary">Download CV</button>
            <a className="btn btn-primary" href="tel:+972524641731">Let's Talk</a>
            <a href="mailto:zivsh@mh.org.il" className="btn btn-primary">Email Me</a>
          </div>
        </div>
      </div>
    );
  }
}

export default CTA;
