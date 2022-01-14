import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import {useEffect, useState} from "react";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [isImagePreviewPopupOpen, setIsImagePreviewPopupOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});
  const [cardToDelete, setCardToDelete] = useState('');

  function logError(err) {
    console.log(err);
  }

  useEffect(() => {
    api.getUser()
      .then(user => {
        setCurrentUser(user);

        api.getCards()
          .then((cardsResultList) => {
            setCards(cardsResultList);
          })
          .catch(logError);
      })
      .catch(logError);
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddCardClick = () => {
    setIsAddCardPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card)
    setIsImagePreviewPopupOpen(true);
  }

  function handleCardDeleteClick(cardID) {
    setCardToDelete(cardID);
    setIsDeleteCardPopupOpen(true);
  }

  function handleCardLike(card) {
    const isLiked = card['likes'].some(i => i['_id'] === currentUser['_id']);

    api.changeLikeCardStatus(card['_id'], isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c['_id'] === card['_id'] ? newCard : c));
      })
      .catch(logError);
  }

  const handleUpdateUser = (user) => {
    return api.setUser(user.name, user.about)
      .then(res => {
        setCurrentUser(res);
      });
    // ***
    /* Since the result of this function is used only in the 'EditProfilePopup' component, I don't know exactly where
     it is better to put the catch - here, or in the component itself at the end. At the moment, I assume that it is
     more logical to put the catch at the end (in the component). If I'm wrong, please point it out to me in the
     'NEEDS IMPROVEMENT' message.
    */
  }

  const handleUpdateAvatar = (avatar) => {
    return api.setAvatarPicture(avatar)
      .then(res => {
        setCurrentUser(res);
      });
    // ***
    /* Same here. ('EditAvatarPopup')
    */
  }

  const handleAddPlace = (card) => {
    return api.addCard(card.name, card.link)
      .then(newCard => {
        setCards([newCard, ...cards]);
      });
    // ***
    /* Same here. ('EAddPlacePopup')
    */
  }

  function handleCardDelete(cardID) {
    return api.deleteCard(cardID)
      .then(() => {
        setCards((state) => state.filter((c) => c['_id'] !== cardID));
      });
    // ***
    /* Same here. ('DeleteCardPopup')
    */
  }


  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsDeleteCardPopupOpen(false);

    setSelectedCard({name: '', link: ''});
    setIsImagePreviewPopupOpen(false);
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header/>
          <Main
            cards={cards}
            onEditAvatarClick={handleEditAvatarClick}
            onEditProfileClick={handleEditProfileClick}
            onAddCardClick={handleAddCardClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDeleteClick}/>
          <Footer/>
        </div>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onUpdateUser={handleUpdateUser}
          onClose={closeAllPopups}/>
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onUpdateAvatar={handleUpdateAvatar}
          onClose={closeAllPopups}/>
        <AddPlacePopup
          isOpen={isAddCardPopupOpen}
          onAddPlace={handleAddPlace}
          onClose={closeAllPopups}/>
        <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          cardToDelete={cardToDelete}
          onDeleteCard={handleCardDelete}
          onClose={closeAllPopups}/>
        <ImagePopup
          isOpen={isImagePreviewPopupOpen}
          selectedCard={selectedCard}
          onClose={closeAllPopups}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
