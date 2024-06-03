import { TestimonialsList } from "../components";

const testimonials = [
  {
    id: 1,
    author: "Juan Perez",
    imageURL: "/img/testimonial1.jpg",
    description:
      "Una excelente app, puedo seleccionar de una gran cantidad de opciones y pagar en tarjeta o efectivo según me convenga.",
  },
  {
    id: 2,
    author: "Katherine Mora",
    imageURL: "/img/testimonial2.jpg",
    description:
      "Una excelente app, puedo seleccionar de una gran cantidad de opciones.",
  },
  {
    id: 3,
    author: "Carlos Guzman",
    imageURL: "/img/testimonial3.jpg",
    description:
      "Una excelente app, puedo seleccionar de una gran cantidad de opciones y pagar en tarjeta o efectivo según me convenga y pagar en tarjeta o efectivo según me convenga.",
  },
  {
    id: 4,
    author: "Kasey Bermúdez",
    imageURL: "/img/testimonial4.jpg",
    description:
      "Una excelente app, puedo seleccionar de una gran cantidad de opciones y pagar en tarjeta o efectivo según me convenga.",
  },
  {
    id: 5,
    author: "Hannah Rodriguez",
    imageURL: "/img/testimonial5.jpg",
    description:
      "Una excelente app, puedo seleccionar de una gran cantidad de opciones y pagar en tarjeta o efectivo según me convenga.",
  },
];

export const Testimonials = () => {
  return (
    <section className="contenedor testimonials">
      <h2 className="testimonials__heading">Testimoniales</h2>
      <div className="testimonials__grid">
        <TestimonialsList testimonials={testimonials} />
      </div>
    </section>
  );
};
