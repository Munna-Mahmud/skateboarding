import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { name, price, img, id } = product;
    return (
        <div className=" " id="products">
            <div className="col ">
                <div className="card products-card  mb-5">
                    <img src={img} className=" card-img  card-img-top img-fluid " alt="..." />
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

export default Product;