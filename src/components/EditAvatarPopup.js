import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onCloseButtonClick, onSubmit}) {
    return (
        <PopupWithForm
            popupType="avatar"
            popupTitle="Change profile picture"
            isOpen={isOpen}
            onCloseButtonClick={onCloseButtonClick}
            onSubmit={onSubmit}
            submitButtonText="Save">
            <label className="popup__label">
                <input
                    type="url"
                    name="avatar-image-link"
                    id="avatar-image-link-input"
                    value=""
                    className="popup__input"
                    required
                    placeholder="Image link"
                />
                <span className="popup__input-error avatar-image-link-input-error"/>
            </label>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;