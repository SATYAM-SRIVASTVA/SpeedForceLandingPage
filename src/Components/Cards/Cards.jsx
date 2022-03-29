import React, { Component } from 'react';
import './Cards.css';
import {AiOutlineHome} from 'react-icons/ai'
import {GiAutoRepair} from 'react-icons/gi'
import {FcAlarmClock} from 'react-icons/fc'
import {FaQuestion} from 'react-icons/fa'
import {GiBank} from 'react-icons/gi'
import {GiBouncingSpring} from 'react-icons/gi'
// import {AiOutlineHome} from 'react-icons/ai'
// import {AiOutlineHome} from 'react-icons/ai'
// import {AiOutlineHome} from 'react-icons/ai'



class Cards extends Component {
    render() {
        return (
            <>
            <div className="cards-main-container">

               <div className="header-container">
               <div className="header-text"><h1>OUR SERVICES</h1></div>
               <div className="header-rectangle"></div>
                </div> 
                
                <div className="card-container-1">
                <div className=" card card-customize"  >
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div className="card-body">
                           <div><AiOutlineHome className="card-icon"/></div>

                            <h5 className="card-title">Door Step Service</h5>
                            <p className="card-text">Be it on the road or off the road, we are always ready to help you out. We pick your two-wheelers from your house, fix it like new, and deliver it to your place again so you don’t have to move.</p>
                            <a href="#" class="btn "></a>
                        </div>
               </div>
               <div className="card card-customize"  >
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div className="card-body">
                           <div><GiAutoRepair className="card-icon"/></div>

                            <h5 className="card-title">On Road Breakdown Assistance</h5>
                            <p className="card-text">Be it anywhere anytime. We are always there to fix it up for you.</p>
                            <a href="#" class="btn "></a>
                        </div>
               </div>
               <div className="card card-customize"  >
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div className="card-body">
                           <div><FcAlarmClock className="card-icon"/></div>

                            <h5 className="card-title">Timely Service Reminders</h5>
                            <p className="card-text">We always remind you to keep your two-wheelers in check.</p>
                            <a href="#" class="btn "></a>
                        </div>
               </div>
               
                </div>
                <div className="card-container-2">
                <div className=" card card-customize"  >
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div className="card-body">
                           <div><GiBank className="card-icon"/></div>

                            <h5 className="card-title">INSURANCE</h5>
                            <p className="card-text">We also insure your two-wheelers so that the dent on your vehicle does not dent your pocket.</p>
                            <a href="#" class="btn "></a>
                        </div>
               </div>
               <div className="card card-customize"  >
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div className="card-body">
                           <div><GiBouncingSpring className="card-icon"/></div>

                            <h5 className="card-title">SPARES WARRANTY</h5>
                            <p className="card-text">Majority of our spare parts come with a warranty period so you don’t have to spend more on maintenance.</p>
                            <a href="#" class="btn "></a>
                        </div>
               </div>
               <div className="card card-customize"  >
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div className="card-body">
                           <div><FaQuestion className="card-icon"/></div>

                            <h5 className="card-title">NO LONG QUEUES NOW</h5>
                            <p className="card-text">You don’t have to wait because we won’t make you wait. Our skilled force guarantees speedy servicing.</p>
                            <a href="#" class="btn  "></a>
                        </div>
               </div>
                </div>
            </div> 
            </>
            
        );
    }
}

export default Cards;