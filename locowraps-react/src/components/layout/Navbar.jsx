import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.1,
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div className="nav-brand" variants={itemVariants}>
        <Link to="/">LOCOWRAPS</Link>
      </motion.div>
      <motion.div className="nav-links" variants={navVariants}>
        {[
          { label: 'El Alma', href: '/#manifesto' },
          { label: 'El Archivo', href: '/#coleccion' },
          { label: 'A Medida', href: '/#bespoke' }
        ].map((item) => (
          <motion.div key={item.label} variants={itemVariants}>
            <Link to={item.href}>
              {item.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="nav-actions" variants={itemVariants}>
        <button className="menu-btn" aria-label="Abrir menú">
          <span></span>
          <span></span>
        </button>
      </motion.div>
    </motion.nav>
  );
};
