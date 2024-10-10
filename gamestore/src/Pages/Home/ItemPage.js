import React from "react";
import { useParams } from "react-router-dom";
import gameList from "../../data/gameData";


const ItemPage = ({gameIMG}) => {
    const {gameName} = useParams()
    const game = gameList.find(game => gameName == game.name)

    return(
        <div className="item-wrapper">
            {console.log(gameName)}
            {console.log(game)}
            <div className='item-container'>     
            <h1>{game.name}</h1>    
            <h2>${game.price}</h2>
                 <img 
                    src={game.imageUrl}
                    alt="Description "
                    width='750'
                    height='750'></img>
            </div>
        </div>
    )


}

export default ItemPage;