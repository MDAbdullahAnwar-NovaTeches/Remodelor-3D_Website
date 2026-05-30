function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <p className="footer-kicker">Kitchen and bathroom remodelors</p>
        <h2>Bring clients into the finished space before construction begins.</h2>
        <div className="footer-stats" aria-label="Project highlights">
          <span>
            <strong>45+</strong>
            <small>Five-star reviews</small>
          </span>
          <span>
            <strong>8+</strong>
            <small>Projects per week</small>
          </span>
          <span>
            <strong>Years</strong>
            <small>Serving homeowners</small>
          </span>
          <span>
            <strong>1</strong>
            <small>Premium design team</small>
          </span>
        </div>
        <div className="footer-info-grid" aria-label="Contact information">
          <div>
            <strong>Address</strong>
            <span>12 Design Studio Lane, Mumbai, India</span>
          </div>
          <div>
            <strong>Studio</strong>
            <span>Serving homeowners and contractors with immersive remodel visuals.</span>
          </div>
        </div>
      </div>
      <div className="footer-contact">
        <p>Reach out for design direction, pricing, and availability.</p>
        <div className="footer-contact-box">
          <a className="footer-btn footer-btn-email" href="mailto:hello@remodelor.local">
            hello@remodelor.local
          </a>
          <a className="footer-btn footer-btn-phone" href="tel:+919000000000">
            +91 90000 00000
          </a>
        </div>
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer">
            Pinterest
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
