import React from 'react';

import './Sponsore.css'
import img1 from '../../assets/sponsore/1.jpg'
import img2 from '../../assets/sponsore/2.jpg'
import img3 from '../../assets/sponsore/3.jpg'
import img4 from '../../assets/sponsore/4 (1).jpg'
import img5 from '../../assets/sponsore/6.jpg'

const Sponsore = () => {
    return (
        <div className=" sponsore-img">
            <div class="container   p-4 ">
                <div class="row">
                    <div class="col"><img src={img1} alt="" /></div>
                    <div class="col"><img src={img2} alt="" /></div>
                    <div class="col"><img src={img3} alt="" /></div>
                    <div class="col"><img src={img4} alt="" /></div>
                    <div class="col"><img src={img5} alt="" /></div>
                   
                </div>
            </div>
        </div>
    );
};

export default Sponsore;