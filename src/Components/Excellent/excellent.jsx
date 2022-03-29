import React, {Component , useState} from "react";
import "./excellent.css";
import '../Form/form.css'

export default class Excellent extends Component {

    

    constructor(){
        super();
        this.state={
            showMessage: false
        }
    }
     onButtonClickHandler = () => {
   this.setState({showMessage: true});
  };
    
  render() {

    
    return (
      <div style={{margin:'0'}}className="excellent-container row">
        <div className="excellent-first-container col col-lg-5 col-md-5 col-sm-12 col-xm-12">
          <div className="excellent-image-container"></div>
        </div>
        <div className="excellent-second-container col col-lg-7 col-md-7 col-sm-12 col-xm-12">
            <div className="excellent-second-container-color">
          <div className="excellent-second-container-header">
            <h1>To Get Exciting Offers Book our service</h1>
          </div>
          <div className="excellent-second-container-para">
              <p>
            Get superior engine protection with premium engine oils at the best
            prices. Engine oil change and maintenance center available at your
            doorstep Multibrand two wheeler service centre.</p>
          </div>
          </div>
          <div className="excellent-second-container-button">
          <div className="App">
     {this.state.showMessage &&    <div className='login-wrapper'>
      <div class="login-form">
      <form action="/examples/actions/confirmation.php" method="post">
          <h2 class="text-center">Form</h2>       
          <div class="form-group">
              <input  type="text" class="form-control" placeholder="Fullname" required="required"/>
          </div>

          <div class="form-group">
              <input  type="text" class="form-control" placeholder="Email" required="required"/>
          </div>

          <div class="form-group">
              <input  maxLength="10" type="number" class="form-control" placeholder="Contact no." required="required"/>
          </div>

          <div class="clearfix">
            
          </div>

          <div class="form-group">
              <button  type="submit" class="btn btn-primary btn-block">Submit</button>
          </div>
                  
      </form>
     
  </div>
  </div>
 }
     <button type="button" class="btn btn-danger "onClick={this.onButtonClickHandler}>Contact us</button>
     
    </div>
        

          </div>
        </div>
      </div>
    );
  }
}