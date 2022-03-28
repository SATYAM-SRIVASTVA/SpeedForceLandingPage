import React, { Component } from 'react';
import './Cards.css';
import {AiOutlineHome} from 'react-icons/ai'
import {GiAutoRepair} from 'react-icons/gi'
import {FcAlarmClock} from 'react-icons/fc'
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
                           <div><AiOutlineHome className="icon-1"/></div>

                            <h5 className="card-title">Door Step Service</h5>
                            <p className="card-text"></p>
                            <a href="#" class="btn "></a>
                        </div>
               </div>
               <div className="card card-customize"  >
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div className="card-body">
                           <div><GiAutoRepair className="icon-2"/></div>

                            <h5 className="card-title">On Road Breakdown Assistance</h5>
                            <p className="card-text"></p>
                            <a href="#" class="btn "></a>
                        </div>
               </div>
               <div className="card card-customize"  >
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div className="card-body">
                           <div><FcAlarmClock className="icon-3"/></div>

                            <h5 className="card-title">Timely Service Reminders</h5>
                            <p className="card-text"></p>
                            <a href="#" class="btn "></a>
                        </div>
               </div>
               
                </div>
                <div className="card-container-2">
                <div className=" card card-customize"  >
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div className="card-body">
                           <div><AiOutlineHome className="icon-4"/></div>

                            <h5 className="card-title">Door Step Service</h5>
                            <p className="card-text"></p>
                            <a href="#" class="btn "></a>
                        </div>
               </div>
               <div className="card card-customize"  >
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div className="card-body">
                           <div><AiOutlineHome className="icon-5"/></div>

                            <h5 className="card-title">Door Step Service</h5>
                            <p className="card-text"></p>
                            <a href="#" class="btn "></a>
                        </div>
               </div>
               <div className="card card-customize"  >
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        <div className="card-body">
                           <div><AiOutlineHome className="icon-6"/></div>

                            <h5 className="card-title">Door Step Service</h5>
                            <p className="card-text"></p>
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