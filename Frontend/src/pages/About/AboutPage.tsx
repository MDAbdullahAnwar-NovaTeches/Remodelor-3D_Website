const services = [
  {
    title: 'Concept + mood direction',
    copy: 'Spatial storytelling, palette studies, and premium room narratives that help clients visualize the outcome early.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Interior design planning',
    copy: 'Kitchen, bath, living, and whole-home design with layered material choices, lighting rhythm, and furniture scale.',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Visualization + client approval',
    copy: 'Before/after storytelling and walkthrough-style visuals that reduce friction and make sign-off easier.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
]

const portfolio = [
  {
    label: 'Kitchen transformation',
    before: 'Closed, dated, low light',
    after: 'Bright, open, layered stone and timber',
    beforeImage:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Bathroom spa upgrade',
    before: 'Compact, utilitarian layout',
    after: 'Soft lighting, calm materials, spa feel',
    beforeImage:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Living room refresh',
    before: 'Flat finishes and weak flow',
    after: 'Warm volume, texture, and focal lighting',
    beforeImage:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
]

const pricing = [
  {
    plan: 'Lite',
    price: '₹24k',
    note: 'Best for quick direction and focused spaces',
    items: ['Moodboard and style direction', '1 room concept', '2 revision rounds'],
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    plan: 'Pro',
    price: '₹68k',
    note: 'Most popular for remodel-ready clients',
    items: ['Multi-room concepting', 'Material and lighting guidance', '3D-style presentation'],
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
  },
  {
    plan: 'Premium',
    price: 'Custom',
    note: 'For full-service, high-touch projects',
    items: ['Leadership through delivery', 'Vendor coordination', 'Priority scheduling'],
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
]

const leadership = [
  {
    name: 'Aarav Shah',
    role: 'Creative Director',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Meera Iyer',
    role: 'Design Lead',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Kabir N.',
    role: 'Project Strategy',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  },
]

const testimonials = [
  {
    quote: 'The visual clarity made everything feel more valuable and more certain.',
    name: 'Ritika',
    role: 'Homeowner',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
  },
  {
    quote: 'We were able to approve materials faster because the presentation felt premium.',
    name: 'Suresh',
    role: 'Client',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    quote: 'Every detail reads like a high-end experience, not a standard renovation pitch.',
    name: 'Aditi',
    role: 'Designer',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80',
  },
]

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="about-kicker">About Remodelor</p>
          <h1>Premium interior design that feels cinematic, tactile, and confident.</h1>
          <span>
            We shape kitchens, bathrooms, and full-home remodels into experiences that clients can feel
            before the work begins.
          </span>
          <div className="about-hero-actions">
            <a className="hover-card clickable" href="#services">
              Explore services
            </a>
            <a href="#portfolio" className="ghost hover-card clickable">
              View portfolio
            </a>
          </div>
        </div>
        <div className="about-hero-card">
          <div className="hero-card-ring" aria-hidden="true" />
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
              alt="Modern interior design workspace"
            />
          </div>
          <p>Homeowner first</p>
          <strong>45+ five-star reviews</strong>
          <span>Serving the city for years with an average of 8+ projects a week.</span>
          <div className="hero-mini-stats">
            <span><strong>45+</strong><small>5-star reviews</small></span>
            <span><strong>8</strong><small>Projects / week</small></span>
            <span><strong>100%</strong><small>Design focus</small></span>
          </div>
        </div>
      </section>

      <section className="about-section" id="services">
        <div className="section-heading">
          <p>Services</p>
          <h2>Interior design services built to move from idea to approval with style.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="glass-card service-card" key={service.title}>
              <div className="card-image">
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="portfolio">
        <div className="section-heading">
          <p>Portfolio</p>
          <h2>Before and after stories that feel like a reveal.</h2>
        </div>
        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <article className="portfolio-card" key={item.label}>
              <div className="portfolio-split">
                <span className="portfolio-frame hover-card">
                  <img src={item.beforeImage} alt={`${item.label} before`} />
                  <small>Before</small>
                  {item.before}
                </span>
                <span className="portfolio-frame hover-card">
                  <img src={item.afterImage} alt={`${item.label} after`} />
                  <small>After</small>
                  {item.after}
                </span>
              </div>
              <strong>{item.label}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="pricing">
        <div className="section-heading">
          <p>Pricing</p>
          <h2>Simple tiers for lightweight guidance or fully managed delivery.</h2>
        </div>
        <div className="pricing-grid">
          {pricing.map((plan) => (
            <article className={`pricing-card ${plan.plan === 'Pro' ? 'featured' : ''}`} key={plan.plan}>
              <div className="pricing-visual hover-card">
                <img src={plan.image} alt={`${plan.plan} plan preview`} />
              </div>
              <p>{plan.plan}</p>
              <strong>{plan.price}</strong>
              <span>{plan.note}</span>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="leadership">
        <div className="section-heading">
          <p>Leadership</p>
          <h2>A senior team that balances taste, clarity, and execution.</h2>
        </div>
        <div className="leadership-grid">
          {leadership.map((person) => (
            <article className="glass-card leadership-card" key={person.name}>
              <div className="leadership-avatar hover-card">
                <img src={person.image} alt={person.name} />
              </div>
              <strong>{person.name}</strong>
              <span>{person.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-testimonials" id="testimonials">
        <div className="section-heading">
          <p>Testimonials</p>
          <h2>Homeowners trust us because the process feels clear and premium.</h2>
        </div>
        <div className="testimonial-strip">
          {testimonials.map((item) => (
            <article className="testimonial-pill hover-card" key={item.name}>
              <div className="testimonial-avatar hover-card">
                <img src={item.image} alt={item.name} />
              </div>
              <blockquote>{item.quote}</blockquote>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-metrics">
        <article className="metric-card">
          <strong>45+</strong>
          <span>Five-star reviews from homeowners and design clients</span>
        </article>
        <article className="metric-card">
          <strong>8+</strong>
          <span>Average projects handled per week across the studio</span>
        </article>
        <article className="metric-card">
          <strong>3D</strong>
          <span>Premium visual experience with depth and motion</span>
        </article>
      </section>
    </main>
  )
}

export default AboutPage
