import { Link } from "react-router-dom";

export const Delivery = () => {
  return (
    <section className="delivery">
      <h2 className="delivery__heading">Gana dinero con AppComida</h2>

      <div className="delivery__grid contenedor">
        <div className="delivery__image">
          <img src="/public/img/repartidor.jpg" alt="delivery image" />
        </div>

        <div className="delivery__content">
          <p className="delivery__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            rerum sed aliquam fugiat totam molestiae! Repellat minus, velit
            totam est ipsam soluta vitae odit atque magnam sapiente rem saepe.
          </p>
          <p className="delivery__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            rerum sed aliquam fugiat totam molestiae! Repellat minus, velit
            totam est ipsam soluta vitae odit atque magnam sapiente rem saepe.
          </p>

          <Link to="/" className="delivery__button">
            Más Información
          </Link>
        </div>
      </div>
    </section>
  );
};
