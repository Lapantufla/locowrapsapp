import { useScroll, useTransform } from 'framer-motion';
import './Hero.css';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <header id="hero" className="hero">
      <div className="hero-image-container">
        <motion.img 
          style={{ y }}
          src={`${import.meta.env.BASE_URL}images/hero-rings-hand.jpg`}          alt="Anillos de Locowraps en la mano" 
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Joyeria de autor – Lisandro Rodríguez
        </motion.p>
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Piezas únicas en <br /> plata 950 y minerales naturales
        </motion.h1>
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <a href="#coleccion" className="btn btn-primary">Ver Piezas</a>
          <a href="#bespoke" className="btn btn-ghost">Encargar pieza única</a>
        </motion.div>
      </div>
    </header>
  );
};
