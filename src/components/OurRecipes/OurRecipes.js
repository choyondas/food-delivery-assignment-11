import React from 'react';

const OurRecipes = () => {
    return (
        <div className='w-75 mx-auto'>
            <h2>Our Recipes</h2>

            <div className="row">
                <div className="col-md-6 ">
                    <img className="img-fluid w-75" src="https://media.timeout.com/images/105478356/image.jpg" alt="" />
                    <h4>Homemade</h4>
                    <h4>$10</h4>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid w-75" src="https://media.timeout.com/images/105478356/image.jpg" alt="" />
                    <h4>Homemade</h4>
                    <h4>$10</h4>
                </div>

            </div>
        </div>
    );
};

export default OurRecipes;