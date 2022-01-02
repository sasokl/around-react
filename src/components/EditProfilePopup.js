import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onCloseButtonClick, onSubmit}) {
    return (
        <PopupWithForm
            popupType="profile"
            popupTitle="Edit profile"
            isOpen={isOpen}
            onCloseButtonClick={onCloseButtonClick}
            onSubmit={onSubmit}
            submitButtonText="Save">
            <label className="popup__label">
                <input
                    type="text"
                    name="name"
                    id="profile-name-input"
                    className="popup__input"
                    value=""
                    minLength="2"
                    maxLength="40"
                    required
                    placeholder="Name"
                />
                <span className="popup__input-error profile-name-input-error"/>
            </label>

            <label className="popup__label">
                <input
                    type="text"
                    name="about"
                    id="profile-about-input"
                    value=""
                    className="popup__input"
                    minLength="2"
                    maxLength="200"
                    required
                    placeholder="About me"
                />
                <span className="popup__input-error profile-about-input-error"/>
            </label>
        </PopupWithForm>
    );
}

export default EditProfilePopup;