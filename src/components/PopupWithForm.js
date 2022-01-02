import Popup from "./Popup";

function PopupWithForm({popupType, popupTitle, isOpen, onCloseButtonClick, onSubmit, submitButtonText, children}) {
    return (
        <Popup
            popupType={popupType}
            containerType="form"
            isOpen={isOpen}
            onCloseButtonClick={onCloseButtonClick}>
                <h2 className="popup__title">{popupTitle}</h2>
                <form
                    className={`popup__form popup__form_type_${popupType}`}
                    action="#"
                    name={`popup-${popupType}-form`}
                    noValidate>
                    <fieldset className="popup__fieldset">
                        {children}
                        <button
                            onClick={onSubmit}
                            className="popup__submit-button popup__submit-button_under-inputs"
                            type="submit">
                            {submitButtonText}
                        </button>
                    </fieldset>
                </form>
        </Popup>
    );
}

export default PopupWithForm;