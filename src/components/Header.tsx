import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSectorsDropdownOpen, setIsSectorsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSectorsDropdownOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSectorsDropdown = () => {
    setIsSectorsDropdownOpen(!isSectorsDropdownOpen);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    {
      to: '/sectors',
      label: 'Sectors',
      hasDropdown: true,
      dropdownItems: [
        { to: '/sectors/logistics', label: 'Logistics', subtitle: 'Al-Estilam Express Cargo Company' },
        { to: '/sectors/automotive', label: 'Automotive', subtitle: 'Leading Star Automotive Company' },
        { to: '/sectors/oil-gas', label: 'Oil & Gas', subtitle: 'Al-Gharraf Oil Services (AGOS)' }
      ]
    },
    { to: '/partners', label: 'Partners' },
    { to: '/services', label: 'Services' }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            <img src="/logo.png" alt="Numerus Group" className={styles.logoImage} />
          </Link>

          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.to} className={styles.navItem}>
                  {link.hasDropdown ? (
                    <div className={styles.dropdownWrapper}>
                      <button
                        className={`${styles.navLink} ${location.pathname.startsWith(link.to) ? styles.active : ''}`}
                        onClick={toggleSectorsDropdown}
                        aria-expanded={isSectorsDropdownOpen}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <svg
                          className={`${styles.chevron} ${isSectorsDropdownOpen ? styles.chevronUp : ''}`}
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L6 6.5L11 1.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {isSectorsDropdownOpen && (
                        <div className={styles.dropdown}>
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className={styles.dropdownItem}
                            >
                              <strong>{item.label}</strong>
                              <span className={styles.dropdownSubtitle}>{item.subtitle}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.to}
                      className={`${styles.navLink} ${location.pathname === link.to ? styles.active : ''}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </nav>

          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navLinks.map((link) => (
                <li key={link.to} className={styles.mobileNavItem}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        className={`${styles.mobileNavLink} ${location.pathname.startsWith(link.to) ? styles.active : ''}`}
                        onClick={toggleSectorsDropdown}
                      >
                        {link.label}
                        <svg
                          className={`${styles.chevron} ${isSectorsDropdownOpen ? styles.chevronUp : ''}`}
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L6 6.5L11 1.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {isSectorsDropdownOpen && (
                        <div className={styles.mobileDropdown}>
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className={styles.mobileDropdownItem}
                            >
                              <strong>{item.label}</strong>
                              <span>{item.subtitle}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.to}
                      className={`${styles.mobileNavLink} ${location.pathname === link.to ? styles.active : ''}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className={styles.mobileNavItem}>
                <Link to="/contact" className={`${styles.mobileNavLink} ${styles.contactButton}`}>
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;