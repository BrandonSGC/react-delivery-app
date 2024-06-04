export const FavoriteCard = ({ name, imageURL, description }) => {
  return (
    <div className="favorite">
      <div className="favorite__image-container">
        <img
          className="favorite__image"
          src={imageURL}
          alt={`${name} restaurant logo`}
        />
      </div>

      <div className="favorite__content">
        <img src="/img/estrellas.png" alt="rating image" />
        <h3 className="favorite__title">{name}</h3>
        <p className="favorite__description">{description}</p>
      </div>
    </div>
  );
};
