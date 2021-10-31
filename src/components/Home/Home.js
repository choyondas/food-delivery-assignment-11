import React from 'react';
import About from '../About/About';
import Menu from '../Menu/Menu';
import OurRecipes from '../OurRecipes/OurRecipes';
import Services from '../Services/Services';
import Banner from './Banner/Banner';




import Information from './Information/Information';




const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Information></Information>
            <OurRecipes></OurRecipes>
            <Services></Services>
            <Menu></Menu>
            <About></About>




        </div>
    );
};

export default Home;