import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({isOpen, onCloseButtonClick, onSubmit}) {
    return (
        <PopupWithForm
            popupType="delete-card"
            popupTitle="Are you sure?"
            isOpen={isOpen}
            onCloseButtonClick={onCloseButtonClick}
            onSubmit={onSubmit}
            submitButtonText="Yes"/>
    );
}

export default DeleteCardPopup;