import React from 'react';

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <div className='Home-container'>
                <div className='item'>
                <img 
                src='https://images.footballfanatics.com/dallas-mavericks/dallas-mavericks-jordan-statement-edition-swingman-jersey-navy-luka-doncic-unisex_ss4_p-13365080+u-qx71rxwoemdyo63go58p+v-b4b51bc54e3e41b0aae8ca20961780dd.jpg?_hv=2&w=600'
                alt="Description "
                width='300'
                height='300'></img>
                <p>Luka Jersey</p>
                </div>

                <div className='item'>
                <img 
                src='https://images.footballfanatics.com/dallas-mavericks/dallas-mavericks-nike-city-edition-swingman-jersey-23-black-kyrie-irving-unisex_ss5_p-200822768+u-zqmbp4zqncgtwe2t7nze+v-gc8hf4lhcfclc9lwg11d.jpg?_hv=2'
                alt="Description "
                width='300'
                height='300'></img>
                <p>Kyrie Jersey</p>
                </div>

                <div className='item'>
                <img 
                src='https://dks.scene7.com/is/image/GolfGalaxy/22NIKMNBWRRRSBLCRGSW?qlt=70&wid=600&fmt=webp&op_sharpen=1'
                alt="Description "
                width='250'
                height='300'></img>
                <p>Curry Jersey</p>
                </div>

                <div className='item'>
                <img 
                src='https://fanatics.frgimages.com/baltimore-ravens/mens-nike-lamar-jackson-black-baltimore-ravens-legend-jersey_pi3167000_ff_3167132_full.jpg?_hv=2'
                alt="Description "
                width='300'
                height='300'></img>
                <p>Lamar Jersey</p>
                </div>
            </div>
        </div>
    )
}
export default Home;
