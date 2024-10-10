import React from "react";
import { useParams } from "react-router-dom";
import gameList from "../../data/gameData";
import './ItemPage.css'


const ItemPage = () => {
    const {gameName} = useParams()
    const game = gameList.find(game => gameName == game.name)

    return(
        <div className="item-wrapper">
            <div className='item-container'>     
                <img className="item-img"
                    src={game.imageUrl}
                    alt="Description "
                    width='600'
                    height='600'>
                </img>
                <div className="item-info">
                    <h1 className="item-name">{game.name}</h1>    
                    <h2 className="item-price">${game.price}</h2>
                    <br/>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    )


}

export default ItemPage;