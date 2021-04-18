import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ImageGallery from '../ImageGallery/ImageGallery';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Welcome from '../Welcome/Welcome';


const Home = () => {
    return (
        <div>
        <Header></Header>
        <Welcome></Welcome>
        <Service></Service>
        <ImageGallery></ImageGallery>
        <Review></Review>
        <Footer></Footer>
         
        </div>
    );
};

export default Home;