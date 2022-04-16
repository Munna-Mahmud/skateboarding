import React from 'react';
import Rating from 'react-rating';
import './Testimonial.css'

const Testimonial = ({ testimonial }) => {

    const { id, url, name, description, designation, ratting,imgUrl } = testimonial
    
    console.log(testimonial)
    return (
        <>
            <div>
                <img src={imgUrl} alt="" style={{display: "block", margin: "30px auto",borderRadius: "50%"}} />
                <span> {
                    name
                }</span>
                <p>
                    {
                        description
                    }
                </p>
                <h5>
                    {
                        designation
                    }
                </h5>
                <Rating
                    initialRating={ratting}
                    readonly
                    emptySymbol="far fa-star cus-icon"
                    fullSymbol="fas fa-star cus-icon"
                />

            </div>
        </>
    );
};

export default Testimonial;