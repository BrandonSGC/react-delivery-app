const steps = [
  { id: 1, imageURL: "/img/paso_1.png" },
  { id: 2, imageURL: "/img/paso_2.png" },
  { id: 3, imageURL: "/img/paso_3.png" },
];

export const HowItWorks = () => {
  return (
    <section className="steps">
      <img className="steps__wave" src="/img/wave.svg" alt="wave image" />
      <div className="steps__content">
        <h2 className="steps__heading">
          Cómo funciona?{" "}
          <span className="steps__heading--description">
            tan fácil como 1, 2 y 3
          </span>
        </h2>
        <div className="steps__grid contenedor">
          {steps.map((step) => (
            <div key={step.id} className="steps__step">
              <img
                className="steps__image"
                src={step.imageURL}
                alt="step image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
