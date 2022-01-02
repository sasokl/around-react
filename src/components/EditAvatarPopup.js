import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function EditAvatarPopup({isOpen, onClose, onSubmit}) {
    return (
        <PopupWithForm
            popupType="avatar"
            popupTitle="Change profile picture"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            submitButtonText="Save">
            <Input
                type="url"
                name="avatar-image-link"
                value=""
                handleChange={()=>{}}
                placeholder="Image link"
                isRequired={true}/>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;