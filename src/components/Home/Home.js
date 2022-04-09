import React from 'react';
import Profile from './Profile';
import Footer from './Footer/Footer';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container'>
            <Profile></Profile>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;