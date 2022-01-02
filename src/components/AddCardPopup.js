import PopupWithForm from "./PopupWithForm";

function AddCardPopup({isOpen, onCloseButtonClick, onSubmit}) {
    return (
        <PopupWithForm
            popupType="add-card"
            popupTitle="New place"
            isOpen={isOpen}
            onCloseButtonClick={onCloseButtonClick}
            onSubmit={onSubmit}
            submitButtonText="Create">
            <label className="popup__label">
                <input
                    type="text"
                    name="card-title"
                    id="card-title-input"
                    className="popup__input"
                    value=""
                    minLength="1"
                    maxLength="30"
                    required
                    placeholder="Title"
                />
                <span className="popup__input-error card-title-input-error"/>
            </label>

            <label className="popup__label">
                <input
                    type="url"
                    name="card-image-link"
                    id="card-image-link-input"
                    value=""
                    className="popup__input"
                    required
                    placeholder="Image link"
                />
                <span className="popup__input-error card-image-link-input-error"/>
            </label>
        </PopupWithForm>
    );
}

export default AddCardPopup;