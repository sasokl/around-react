import {useEffect, useState} from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({onEditAvatarClick, onEditProfileClick, onAddCardClick, onCardClick}) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    const [cards, setCards] = useState([]);

    function logError (err) {
        console.log(err);
    }

    useEffect(() => {
        api.getUser()
            .then(user => {
                setUserName(user['name']);
                setUserDescription(user['about']);
                setUserAvatar(user['avatar']);

                api.getCards()
                    .then((cardsResultList) => {
                        setCards(cardsResultList);
                    })
                    .catch(logError);
            })
            .catch(logError);
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__content">
                    <div
                        onClick={onEditAvatarClick}
                        className="profile__avatar">
                        <img
                            src={userAvatar}
                            className="profile__avatar-image"
                            alt="Profile avatar"/>
                        <div className="profile__avatar-overlay">
                            <div className="profile__avatar-edit-icon"/>
                        </div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-container">
                            <h1 className="profile__name">{userName}</h1>
                            <button
                                onClick={onEditProfileClick}
                                type="button"
                                className="profile__edit-button"/>
                        </div>
                        <p className="profile__about">{userDescription}</p>
                    </div>
                </div>
                <button
                    onClick={onAddCardClick}
                    type="button"
                    className="profile__add-button"/>
            </section>
            <section className="cards">
                {cards.reverse().map(cardItem => {
                    return (
                        <Card
                            title={cardItem['name']}
                            imgUrl={cardItem['link']}
                            likesCount={cardItem['likes'].length}
                            onCardClick={onCardClick}
                        />
                    );
                })}
            </section>
        </main>
    );
}

export default Main;