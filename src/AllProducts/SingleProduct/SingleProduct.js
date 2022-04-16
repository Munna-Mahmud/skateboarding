import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProduct.css'

const SingleProduct = ({ product }) => {
    const { name, price, img, id } = product;
    return (
        <div className=" ">

            <div class="col ">
            <div className="card mb-5 products-card">
                    <img src={img} className="  card-img-top img-fluid " alt="..." />
                    <div className="bg-dark products-card2 text-white pt-3 pb-2">
                        <h5 className="card-title bg-danger d-inline px-3  rounded-pill">{price}</h5>
                        <p className="card-text fw-bold fs-4 fst-italic">{name}</p>
                        <Link to={`/allproducts/${id}`} > <button className="btn text-white ">Buy Now</button> </Link>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default SingleProduct;