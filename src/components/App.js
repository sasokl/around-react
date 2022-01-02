import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import {useState} from "react";
import EditAvatarPopup from "./EditAvatarPopup";
import AddCardPopup from "./AddCardPopup";
import DeleteCardPopup from "./DeleteCardPopup";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [isImagePreviewPopupOpen, setIsImagePreviewPopupOpen] = useState(false);

  const [selectedCard , setSelectedCard ] = useState('');

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

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsDeleteCardPopupOpen(false);

    setSelectedCard('');
    setIsImagePreviewPopupOpen(false);
  }



  return (
    <div className="App">
      <div className="page">
        <Header/>
        <Main
            onEditAvatarClick={handleEditAvatarClick}
            onEditProfileClick={handleEditProfileClick}
            onAddCardClick={handleAddCardClick}
            onCardClick={handleCardClick}/>
        <Footer/>
      </div>
      <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onSubmit={() => console.log("profile submit")}
          onCloseButtonClick={closeAllPopups}/>
      <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onSubmit={() => console.log("avatar submit")}
          onCloseButtonClick={closeAllPopups}/>
      <AddCardPopup
          isOpen={isAddCardPopupOpen}
          onSubmit={() => console.log("add-card submit")}
          onCloseButtonClick={closeAllPopups}/>
      <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          onSubmit={() => console.log("delete-card submit")}
          onCloseButtonClick={closeAllPopups}/>
      <ImagePopup
          isOpen={isImagePreviewPopupOpen}
          selectedCard={selectedCard}
          onCloseButtonClick={closeAllPopups}/>
    </div>
  );
}

export default App;