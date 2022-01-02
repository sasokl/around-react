function Card({title, imgUrl, likesCount, onCardClick}) {
    return (
        <div className="card">
            <button type="button" className="card__delete-button"/>
            <img
                src={imgUrl}
                onClick={()=> {
                    onCardClick({
                        title:title,
                        imgUrl: imgUrl});
                }}
                alt="default"
                className="card__image"/>
                <div className="card__content">
                    <h2 className="card__title">{title}</h2>
                    <div className="card__like-container">
                        <button type="button" className="card__like-button"/>
                        <span className="card__likes-count">{likesCount}</span>
                    </div>
                </div>
        </div>
    );
}

export default Card;