import React from 'react';
import Testimonials from '../../About/Testimonial/Testimonials/Testimonials';
import Sponsore from '../../Sponsore/Sponsore';
import Trendy from '../../Trendy/Trendy';
import TrendyCollection from '../../TrendyCollection/TrendyCollection';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Header/>
        <Banner></Banner>
        <Products></Products>
        <Trendy></Trendy>
        <Sponsore/>
        <TrendyCollection></TrendyCollection>
         <Testimonials/>
        <Footer></Footer>
        </div>
    );
};

export default Home;