function Popup({popupType, containerType, isOpen, onCloseButtonClick, children}) {
    return (
        <div className={`popup popup_type_${popupType} ${isOpen && `popup_open`}`}>
            <div className={`popup__container popup__container_type_${containerType}`}>
                <button
                    className="popup__close-button"
                    onClick={onCloseButtonClick}
                    type="button"/>
                {children}
            </div>
        </div>
    );
}

export default Popup;