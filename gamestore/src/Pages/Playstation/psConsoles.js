import React from 'react';
import './Playstation.css'

const PSConsoles = () => {
    return(
        <div>
            <div className='psConsole-section'>
                <h1>Consoles</h1>
            </div>

            <div className='psConsole-container'>
                <div className='psConsole-items'>
                    <img 
                    src='https://i5.walmartimages.com/asr/257979b9-5e09-4d49-a9c3-1d0af2e3b368.0c9295d5e6d8aa8af7d454d52e9079b7.jpeg'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>PlayStation 5  <br/> Console </p>
                </div>
                
                <div className='psConsole-items'>
                    <img 
                    src='https://media.gamestop.com/i/gamestop/11108141/Sony-PlayStation-5-Digital-Edition-Console'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>PlayStation 5  <br/> Digital Edition Console </p>
                </div>

                <div className='psConsole-items'>
                    <img 
                    src='https://media.gamestop.com/i/gamestop/20009347/Sony-PlayStation-5-Slim-Console-Digital-Edition'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>PlayStation 5  <br/> Digital Edition Console - Slim</p>
                </div>

                <div className='psConsole-items'>
                    <img 
                    src='https://m.media-amazon.com/images/I/41ECK5cY-2L._AC_UF894,1000_QL80_.jpg'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>PlayStation 5  <br/> Disc Edition Console - Slim</p>
                </div>
            </div>
        </div>
    )
}

export default PSConsoles;