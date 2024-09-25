import React from 'react';
import './Playstation.css';
import PSConsoles from './PSConsoles';
import PSBestSellers from './PSBestSellers';

const PlayStation = () => {
    
    return(
        <div>
            <PSBestSellers/>
            <PSConsoles/>
        </div>
    )
}
export default PlayStation;
