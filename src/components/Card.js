import {CurrentUserContext} from "../contexts/CurrentUserContext";
import React from "react";

function Card({cardData, onCardClick, onCardLike, onCardDelete}) {

    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = cardData['owner']['_id'] === currentUser['_id'];

    const cardDeleteButtonClassName = (
      `card__delete-button ${isOwn ? 'card__delete-button_enabled' : ''}`
    );

    const isLiked = cardData['likes'].some(i => i['_id'] === currentUser['_id']);

// Create a variable which you then set in `className` for the like button
    const cardLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''}`;

    return (
        <div className="card">
            <button
              onClick={() => {
                onCardDelete(cardData);
              }}
              type="button"
              className={cardDeleteButtonClassName}/>
            <img
                src={cardData['link']}
                onClick={()=> {
                    onCardClick({
                        name: cardData['name'],
                        link: cardData['link']
                    });
                }}
                alt={cardData['name']}
                className="card__image"/>
                <div className="card__content">
                    <h2 className="card__title">{cardData['name']}</h2>
                    <div className="card__like-container">
                        <button
                          onClick={() => {
                              onCardLike(cardData);
                          }}
                          type="button"
                          className={cardLikeButtonClassName}
                        />
                        <span className="card__likes-count">{cardData['likes'].length}</span>
                    </div>
                </div>
        </div>
    );
}

export default Card;