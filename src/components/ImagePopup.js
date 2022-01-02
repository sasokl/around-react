import Popup from "./Popup";

function ImagePopup({isOpen, onCloseButtonClick, selectedCard}) {
    return (
        <Popup
            popupType="image-preview"
            containerType="image-preview"
            isOpen={isOpen}
            onCloseButtonClick={onCloseButtonClick}>
            <figure className="popup__figure">
                <img src={selectedCard.imgUrl} alt="default" className="popup__figure-image"/>
                <figcaption className="popup__figure-caption">{selectedCard.title}</figcaption>
            </figure>
        </Popup>
    );
}

export default ImagePopup;