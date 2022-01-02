import Popup from "./Popup";

function PopupWithForm({popupType, popupTitle, isOpen, onClose, onSubmit, submitButtonText, children}) {
    return (
        <Popup
            popupType={popupType}
            containerType="form"
            isOpen={isOpen}
            onClose={onClose}>
                <h2 className="popup__title">{popupTitle}</h2>
                {/* I don't see a reason to do a form component YET, because there is only 1 form type in the whole
                    project, so there is no code duplication. But I did a component for text inputs.*/}
                <form
                    className={`popup__form popup__form_type_${popupType}`}
                    action="#"
                    name={`popup-${popupType}-form`}>
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