export const TestimonialCard = ({ imageURL, author, description }) => {
  return (
    <div className="testimonial">
      <header className="testimonial__header">
        <div className="testimonial__image">
          <img src={imageURL} alt="testimonial" />
        </div>
        <div className="testimonial__info">
          <p className="testimonial__author">{author}</p>
          <img
            className="testimonial__rating"
            src="/public/img/estrellas.png"
            alt="stars image"
          />
        </div>
      </header>

      <blockquote className="testimonial__text">{description}</blockquote>
    </div>
  );
};
