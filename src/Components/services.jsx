import React, { Component } from 'react'
import './services.css'

export default class services extends Component {
  render() {
    return (
        <>
      <div className="bike-services">
          <div className="bikes">
              <div className="combine-container">

              <div className="block-container">
              <div className="container-text"><h1>IN NEED OF A BIKE 
                                <br />    SERVICE?
                  </h1></div>

          </div>

          <div className="text-paragraph">
              <p>Our ultimate objective is to develop a chain of <br /> multi-brand two-wheeler workshops across <br /> the nation which can help us to reach our <br /> br
              customers in the quickest time possible.</p>
          </div>

           
          
             <div className="final-button">
                 <button type="button " class="btn btn-lg contact-button">Yes I'm Interested</button>
             </div>  

              </div>

         
          
          </div>
         
      </div>
      </>
    )
  }
}
