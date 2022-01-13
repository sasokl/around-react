function Input({type ,name, value, handleChange, placeholder, minLength=0, maxLength=1024, isRequired }) {
    return (
        <label className="popup__label">
            <input
                type={type}
                name={name}
                id={`${name}-input`}
                className="popup__input"
                value={value || ''}
                onChange={handleChange}
                minLength={minLength}
                maxLength={maxLength}
                required={isRequired}
                placeholder={placeholder}
            />
            <span className={`popup__input-error ${name}-input-error`}/>
        </label>
    );
}

export default Input;