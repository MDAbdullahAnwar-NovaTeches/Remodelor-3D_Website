type Testimonial = {
  quote: string
  name: string
  role: string
  accent: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'The walkthrough made it easy to feel the finished kitchen before a single cabinet was installed. It sold the vision immediately.',
    name: 'Ariana M.',
    role: 'Homeowner',
    accent: 'Warm reveal',
  },
  {
    quote:
      'We used the bathroom sequence in client presentations and it changed the conversation from uncertainty to excitement.',
    name: 'Daniel R.',
    role: 'Designer',
    accent: 'Spa finish',
  },
  {
    quote:
      'Every frame feels intentional. The movement, light, and transitions make the remodel look cinematic and premium.',
    name: 'Priya S.',
    role: 'Builder',
    accent: 'Cinematic flow',
  },
]

function Testimonials() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-orbit" aria-hidden="true" />
      <div className="testimonials-header">
        <p>Client stories</p>
        <h2 id="testimonials-title">
          Testimonials that feel as polished as the remodel itself.
        </h2>
        <span>
          Proof from the people who experienced the transformation before the first tool ever came out.
        </span>
      </div>

      <div className="testimonials-layout">
        <article className="testimonial-feature">
          <div className="testimonial-glow" aria-hidden="true" />
          <p className="testimonial-kicker">Featured review</p>
          <blockquote>
            "We could finally show the space in a way that felt emotional and real. The whole project felt elevated the moment this walkthrough was shared."
          </blockquote>
          <div className="testimonial-meta">
            <strong>Elena P.</strong>
            <span>Kitchen renovation client</span>
          </div>
        </article>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <p>{testimonial.accent}</p>
              <blockquote>{testimonial.quote}</blockquote>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
