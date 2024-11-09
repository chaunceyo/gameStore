import React from 'react';
import './Home.css'
import GameItem from './GameItem';
import gameList from '../../data/gameData';


const NewReleases = () => {
    //add game names and imageURLs to an array of objects
    return(
        <div>
            <div className='new-section'>
                <h1>New Releases</h1>
            </div>
            <div className='new-container'>
                {/* Map through array of games here */}
                {gameList.map(game => {
                    return  <GameItem key={game.id} game={game}/>
                })}
            </div>
        </div>
    )
}
export default NewReleases;