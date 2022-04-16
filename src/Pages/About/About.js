import React from 'react';
import about from '../../assets/about 2.jpg'
import './About.css'

const About = () => {
    return (
        <div className=" pt-5 about-details text-white  ">
            <div className="container">
                <div className="row ">
                    <div className=" col-12 col-md-6 text-start">
                        <h1>Welcome to <span style={{ color: "#ff5209" }}>Surf</span></h1>
                        <p>Morbi quis venenatis nisl, eget iaculis felis. Nam pretium vehicula velit. Sed non enim elit. Pellentesque diam volutpat commodo sed egestas. Enim neque volutpat ac tincidunt. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Odio eu feugiat pretium nibh.  Suspendisse malesuada efficitur ultricies  aenean</p>


                        <h5>Come to Skate and Have Fun</h5>
                        <p>Duis hendrerit accumsan quam, vitae posuere enim. Suspendisse malesuada efficitur ultricies  aenean aliquam.</p>


                        <h5>Skateboarding keeps people balanced</h5>
                        <p>Phasellus eget condimentum nibh. Nunc id enim id velit commodo efficitur. Duis auctor, mauris in maximus cursus</p>

                    </div>
                    <div className="col-12 col-md-6">
                        <div>
                            <img className=" img-fluid" src={about} alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default About;