import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Pages/Footer/Footer';
import NewOffer from '../Pages/NewOffer/NewOffer';
import Header from '../Pages/Shared/Header/Header';
import Product from '../Products/product/Product';
import Products from '../Products/Products';
import ViewReview from './ViewReview/ViewReview';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <ViewReview></ViewReview>
            <NewOffer></NewOffer>
            <Footer></Footer>
        </div>
    );
};

export default Home;