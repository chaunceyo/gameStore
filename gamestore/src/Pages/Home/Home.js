import React from 'react';
import './Home.css'

const Home = () => {
    return(
        <div>
            <div className='home-header'>
                <h1>Home</h1>
            </div>

            <div className='new-section'>
                <h1>New Releases</h1>
            </div>

            <div className='Home-container'>
                <div className='new-items'>
                <img 
                src='https://image.api.playstation.com/vulcan/ap/rnd/202405/2216/cbb03393f0ab1149f2b89a8194ce19e596a24fa5bec6526a.png'
                alt="Description "
                width='300'
                height='300'></img>
                <p>Dragon Ball: Sparking! Zero</p>
                </div>

                <div className='new-items'>
                <img 
                src='https://image.api.playstation.com/vulcan/ap/rnd/202406/0521/47126dbd889a804f04e5b80ea35973622b041c060c9e1249.jpg'
                alt="Description "
                width='300'
                height='300'></img>
                <p>NBA 2K25</p>
                </div>

                <div className='new-items'>
                <img 
                src='https://image.api.playstation.com/vulcan/ap/rnd/202308/0312/aff71a0ced271048f5079b1fcf715bcb45110efc13e9704a.png'
                alt="Description "
                width='250'
                height='300'></img>
                <p>Tekken 8</p>
                </div>

                <div className='new-items'>
                <img 
                src='https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png'
                alt="Description "
                width='300'
                height='300'></img>
                <p>God of War Ragnarök</p>
                </div>
            </div>
        </div>
    )
}
export default Home;
