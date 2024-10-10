import React from "react";
import { useParams } from "react-router-dom";
import gameList from "../../data/gameData";

const ItemPage = ({gameIMG}) => {
    const {gameName} = useParams()
    const game = gameList.find(game => gameName == game.name)
    
    return(
        <div>
            {console.log(gameName)}
            {console.log(game)}
        </div>
    )


}

export default ItemPage;