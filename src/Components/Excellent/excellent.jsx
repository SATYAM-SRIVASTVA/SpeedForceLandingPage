import React from 'react'
import './excellent.css'

const excellent = ({children}) => {
  return (
     <>
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
          <div className='container mt-5'>
    <button type='button' className='btn submit-button' data-bs-toggle='modal' data-bs-target="#myModal">Contact us</button>
    <div className='modal' id='myModal'>
        <div className='modal-dialog' >
            <div className='modal-content'>
                <div className='modal-header contact-us'>
                    <button type='button' className='btn-close ' data-bs-dismiss="modal"></button>
                </div>
              {children}
            </div>
        </div>
    </div>
    </div>
        </div>
      </div>
      </div>
     </>
  )
}

export default excellent