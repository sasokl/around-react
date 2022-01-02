import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function EditProfilePopup({isOpen, onClose, onSubmit}) {
    return (
        <PopupWithForm
            popupType="profile"
            popupTitle="Edit profile"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            submitButtonText="Save">
            <Input
                type="text"
                name="name"
                value=""
                handleChange={()=>{}}
                placeholder="Name"
                minLength="2"
                maxLength="40"
                isRequired={true}/>
            <Input
                type="text"
                name="about"
                value=""
                handleChange={()=>{}}
                placeholder="About me"
                minLength="2"
                maxLength="200"
                isRequired={true}/>
        </PopupWithForm>
    );
}

export default EditProfilePopup;