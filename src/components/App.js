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

  function handleCardLike(card) {
    const isLiked = card['likes'].some(i => i['_id'] === currentUser['_id']);

    api.changeLikeCardStatus(card['_id'], isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c['_id'] === card['_id'] ? newCard : c));
      })
      .catch(logError);
  }

  function handleCardDelete(card) {
    api.deleteCard(card['_id'])
      .then(() => {
        setCards((state) => state.filter((c) => c['_id'] !== card['_id']));
      })
      .catch(logError)
  }

  const handleUpdateUser = (user) => {
    return api.setUser(user.name, user.about)
      .then(res => {
        setCurrentUser(res);
      });
  }

  const handleUpdateAvatar = (avatar) => {
    return api.setAvatarPicture(avatar)
      .then(res => {
        setCurrentUser(res);
      });
  }

  const handleAddPlace = (card) => {
    return api.addCard(card.name, card.link)
      .then(newCard => {
        setCards([newCard, ...cards]);
      });
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
            onCardDelete={handleCardDelete}/>
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
          onSubmit={() => console.log("delete-card submit")}
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
