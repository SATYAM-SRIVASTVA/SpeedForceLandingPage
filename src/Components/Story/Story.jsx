import React, { Component } from "react";
import "./Story.css";

class Story extends Component {
  render() {
    return (
      <>
        <div className="story-main-page">
          <div className="image-div"><div className="story-image"></div></div>
          <div className="mid-container">
            <div className="mid-container-text">
              <p>
                With each passing day, we strive to make the ride and the riding
                experience better for every individual. We ensure that you
                enjoy your ride while we take care of the
                rest during the ride.
              </p>
            </div>
          </div>

          <div className="right-container">
            <div className="right-container-heading card-heading">
              <h1>OUR STORY</h1> <br />
            </div>
            <div className="right-container-para card-heading">
              <p>
                We started in 2012 and we are growing speedily across the
                nation. Our franchises are operational in 16 different states of
                the country and is speedily counting more. We are majorly into
                “ORGANISING THE UNORGANISED SECTOR” in which provide on-job
                training to an individual and turn them into skilled and
                professional service providers.
              </p>
            </div>
            <div className="right-contact">
              <div className="right-contact-text">
                <a href="https://api.whatsapp.com/send?phone=+917291921804&Hii, Speedforce"><button type="button " class="btn btn-lg contact-button">
                  <p>Contact Us</p>
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Story;
