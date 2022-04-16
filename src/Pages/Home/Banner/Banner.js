import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div >
            <div className="col-md-12  banner">
                <div className="col-md-6  ">
                    <div className="text-white banner-text  ">
                        <p>FUN   .   EASY   .   JOYFUL</p>
                        <h1 className="text-white fw-bold  ">Lets break the  barriers <br /> <span style={{color:"#ff5209"}}>together</span> </h1>
                        <p className="fw-lighter" >Dedicated to all the skaters, we together join forces to make the skateboarding safe, <br /> fun, challenging and passionate.</p>
                        <button className="btn text-white me-4">SHOP NOW</button>
                        <button className=" know-btn text-white ">KNOW MORE</button>
                    </div>
                </div>
                <div className="col-md-6">

                </div>

            </div>
        </div>
    );
};

export default Banner;