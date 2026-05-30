import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'Kitchen', href: '/#kitchen' },
  { label: 'Bathroom', href: '/#bathroom' },
  { label: 'About', href: '/about' },
]

function Navbar() {
  const location = useLocation()

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.slice(1)
    }

    return location.pathname === href
  }

  return (
    <header className="site-nav" aria-label="Primary navigation">
      <Link className="brand" to="/" aria-label="Remodelor home">
        <span className="brand-mark">R</span>
        <span className="brand-copy">
          <strong>Remodelor</strong>
          <small>Immersive spaces</small>
        </span>
      </Link>
      <nav aria-label="Room sections">
        {navItems.map((item) => (
          <a
            key={item.href}
            className={isActive(item.href) ? 'nav-link active' : 'nav-link'}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <Link className="nav-action" to="/start-project">
        <span>Start Project</span>
      </Link>
    </header>
  )
}

export default Navbar
