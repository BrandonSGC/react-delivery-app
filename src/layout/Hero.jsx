import { SearchForm } from "../components/SearchForm";

export const Hero = () => {
  return (
    <section className="contenedor formulario">
      <div className="formulario__grid">
        <div className="formulario__contenido">
          <h2 className="formulario__heading">
            Encuentra y Pide comida de tu restaurante favorito
          </h2>
          <SearchForm />
        </div>
        <div className="formulario__imagen-contenedor">
          <img
            className="formulario__imagen"
            src="/img/dibujo_repartidor.svg"
            alt="imagen repartidor"
          />
        </div>
      </div>
    </section>
  );
};
