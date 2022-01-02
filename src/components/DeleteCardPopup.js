import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({isOpen, onClose, onSubmit}) {
    return (
        <PopupWithForm
            popupType="delete-card"
            popupTitle="Are you sure?"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            submitButtonText="Yes"/>
    );
}

export default DeleteCardPopup;