import React from 'react';
import XboxConsoles from './XboxConsoles';
import XboxBestSellers from './XboxBestSellers';
import './Xbox.css'

const Xbox = () => {
    return(
        <div>
           <XboxBestSellers/>
           <XboxConsoles/>
        </div>
    )
}
export default Xbox;
