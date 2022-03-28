import React, { Component } from 'react';
import './Story.css'

class Story extends Component {
    render() {
        return (
            <>
            <div className="story-main-page">
               <div className="story-image">

               </div>
                 <div className="mid-container">
                     <div className="mid-container-text">
                     <p>With each passing <br /> day, we strive to <br /> make the ride and <br /> the riding <br /> experience better <br /> for every <br /> individual. We <br /> ensure that you <br /> enjoy your ride <br /> while we take care <br /> of the rest during <br /> the ride.</p>
                     </div>
                     
                     </div>  
                   
                 <div className="right-container">
                    
                   
                        <div className="right-container-heading">
                        <h1>OUR STORY</h1>       <br />
                        </div>
                        <div className="right-container-para">
                        <p>We started in 2012 and we are growing speedily across the nation. Our franchises are  operational in 16 different states of the country and is speedily counting more. We are majorly into “ORGANISING THE UNORGANISED SECTOR” in which provide on-job training to an individual and turn them into skilled and professional service providers.</p>
                        </div>
                         <div className="right-contact">
                             <div className="right-contact-text">
                             <button type="button " class="btn btn-lg contact-button"><p>Contact Us</p></button>
                             </div>
                         </div>

                 </div>

            </div>
                
            </>
        );
    }
}

export default Story;