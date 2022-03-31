import React, { Component } from "react";
import "./bikeservice.css";
import Slider from "react-slick";

export default class bikeservice extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: -1,
        autoplay:true,
        autoplayspeed:5000
    };
    return (
      <>
        <div style={{margin:'0'}} className="service-main-container row">
          <div className="service-text-container col col-lg-5 col-md-5 col-sm-12 col-xm-12">
            <div style={{width:'100%',height:'1rem',backgroundColor:'black'}} className="service-text-first-container"></div>
            <div className="service-text-second-container">
              <div className="bike-header">
                <div className="bike-header-first"> </div>
                <div className="bike-header-second card-heading">
                  <h1>Bike</h1>
                </div>
                <div className="bike-header-third">
                  <div className="bike-header-third-ser card-heading">
                    <h1>Service</h1>
                  </div>
                  <div className="bike-header-third-vice card-heading">
                    <h1>At Home</h1>
                  </div>
                </div>
              </div>
              <div className="bike-para">
                <p>
                  Best Bike Repair Service In Cities across India. 24/7
                  Breakdown Assistance. Genuine Service in PAN India . We Have a
                  Well-Trained & Experienced Bike Service Expert. Quality
                  Service at Your Doorstep. Lowest Rate. All Original Spare
                  Parts.
                </p>
                <p>
                  We provide high quality services @ reasonable prices. We offer
                  a free pickup and drop on all our services
                </p>
              </div>
              <div className="bike-button">
              <a href="https://api.whatsapp.com/send?phone=+917291921804&Hii, Speedforce"> <button type="button" class="btn btn-outline-danger mb-3">Best Bike Repair Service @home</button></a>
              <a href="https://api.whatsapp.com/send?phone=+917291921804&Hii, Speedforce"> <button type="button" class="btn btn-danger">Contact us</button></a>
              </div>
            </div>
          </div>

          <div className="service-image-container col col-lg-7 col-md-7 col-sm-12 col-xm-12">
            
            
              <div className="service-image-slider">
              <Slider {...settings}>
                  <div className="slider-container">
                      <div className="slider-1">
                          {/* <img src="https://toppng.com/uploads/preview/yamaha-r6s-motorcycle-bike-11523884723zonf5nmtzs.png" alt="" /> */}
                      </div>
                  </div>

                  <div className="slider-container">
                      <div className="slider-2">
                          {/* <img src="https://toppng.com/uploads/preview/yamaha-r6s-motorcycle-bike-11523884723zonf5nmtzs.png" alt="" /> */}
                      </div>
                  </div>


              </Slider>
              <div className="service-image-bottom">
            
            </div>
              </div> 
               </div>
        </div>
        

      </>
    );
  }
}