import React from 'react';
import './Xbox.css'

const XboxConsoles = () => {
    return(
        <div>
            <div className='xboxConsole-section'>
                <h1>Consoles</h1>
            </div>

            <div className='xboxConsole-container'>
                <div className='xboxConsole-items'>
                    <img 
                    src='https://assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Xbox  <br/> Series X</p>
                </div>
                
                <div className='xboxConsole-items'>
                    <img 
                    src='https://assets.xboxservices.com/assets/bf/b0/bfb06f23-4c87-4c58-b4d9-ed25d3a739b9.png?n=389964_Hero-Gallery-0_A1_857x676.png'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Xbox <br/> Series S </p>
                </div>

                <div className='xboxConsole-items'>
                    <img 
                    src='https://media.gamestop.com/i/gamestop/10138875/Microsoft-Xbox-One-S-Console'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Xbox One S  <br/>Console - 1TB</p>
                </div>

                <div className='xboxConsole-items'>
                    <img 
                    src='https://media.gamestop.com/i/gamestop/10115705?$pdp$'
                    alt="Description "
                    width='300'
                    height='300'></img>
                    <p>Xbox One - 1TB</p>
                </div>
            </div>
        </div>
    )
}

export default XboxConsoles;