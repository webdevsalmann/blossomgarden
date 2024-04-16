import TestimonialCard from "@/components/card/TestimonialCard";
import { testimonials } from "@/lib/const";

export default function Testimonial() {
  return (
    <section className="bg-muted">
      {/* Heading */}
      <h2>What Our Regular Customer Say About Us</h2>

      {/* Content Block */}
      <div className="mt-block grid md:grid-cols-3 gap-base">
        {testimonials.map(item => (
          <TestimonialCard testimonial={item.testimonial} testimonialBy={item.testimonialBy} key={item.id} />
        ))}
      </div>
    </section>
  )
}
