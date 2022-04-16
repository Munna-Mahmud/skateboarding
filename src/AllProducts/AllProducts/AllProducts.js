import React from 'react';
import { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';


const AllProducts = () => {
    const [product, setProducts] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (

        <div id="allproducts">
            <div className=" products-bg ">
                <div className="container">
                <div className="">
                        <h2  style={{ fontWeight: "600", fontSize: "50px", paddingTop: "6rem", color: "white" }}>Our unique <span style={{ color: "#ff5209" }}>collections</span></h2>
                        <p className="text-white " style={{ paddingBottom: "2rem" }}>Non odio euismod lacinia at quis risus.</p>
                    </div>
                    <div className=" row row-cols-1 row-cols-md-4 g-3  ">

                        {
                            product.map(product => <SingleProduct
                                key={product.key}
                                product={product}
                            > </SingleProduct>)
                        }

                    </div>
                </div>
            </div>
        </div>

    );
};

export default AllProducts;