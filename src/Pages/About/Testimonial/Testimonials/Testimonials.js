import React, { useEffect, useState } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';

import Slider from 'react-slick';
import Testimonial from '../Testimonial/Testimonial';


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('/fakeTestimonial.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    const settings = {
        infinite: true,
        slidesToShow: 2 ,
        slidesToScroll: 1,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
       <div   style={{backgroundColor:"black"}}>
            <Container className=" bg-dark pt-2 text-white">
            <Row>
                <Col className="12">
                    <div className="my-5">
                        <Slider {...settings}>

                            {

                                testimonials.slice(0,9).map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.id}></Testimonial>)
                            }

                        </Slider>
                    </div>

                </Col>
            </Row>
        </Container>
       </div>
    );
};

export default Testimonials;