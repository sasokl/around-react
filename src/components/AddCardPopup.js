import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function AddCardPopup({isOpen, onClose, onSubmit}) {
    return (
        <PopupWithForm
            popupType="add-card"
            popupTitle="New place"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            submitButtonText="Create">
            <Input
                type="text"
                name="card-title"
                value=""
                handleChange={()=>{}}
                placeholder="Title"
                minLength="1"
                maxLength="30"
                isRequired={true}/>
            <Input
                type="url"
                name="card-image-link"
                value=""
                handleChange={()=>{}}
                placeholder="Image link"
                isRequired={true}/>/>
        </PopupWithForm>
    );
}

export default AddCardPopup;