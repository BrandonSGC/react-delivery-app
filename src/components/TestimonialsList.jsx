import { TestimonialCard } from "./";

export const TestimonialsList = ({ testimonials }) => {
  return (
    <>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </>
  );
};
