import React from 'react';
import './TrendyCollection.css'

import coll1 from '../../assets/trendycollection/collection-1_768x_7febc337-3716-4fca-86a3-679fe6ce7403_768x.jpg'
import coll2 from '../../assets/trendycollection/collection-2_768x_5d6c835c-34c0-4031-bee3-b77a2a1c7f29_768x.jpg'
import coll3 from '../../assets/trendycollection/collection-3_768x_5642be10-3860-4e44-89cd-40fe93115360_768x.jpg'
import Slider from 'react-slick';

const TrendyCollection = () => {

    const settings = {
        // infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div className="trendy-collection text-white">
            <div className="container w-100">
                <h1 className="pt-5">Trending <span style={{color: "#ff5209"}}>Collection</span> </h1>
                <p className="pb-3 fw-lighter">Fusce ullamcorper pulvinar enim acelem.</p>
                <Slider {...settings}>
                    <div>
                        <img className="img-fluid " src={coll3} alt="" />
                    </div>
                    <div>
                        <img className="img-fluid " src={coll2} alt="" />
                    </div>
                    <div>
                        <img  className="img-fluid" src={coll1} alt="" />
                    </div>
                   

                </Slider>
            </div>
        </div>

    );
};

export default TrendyCollection;