import React from 'react';
import { motion } from 'framer-motion';
import './Bespoke.css';

export const Bespoke = () => {
  return (
    <section id="bespoke" className="bespoke-section">
      <div className="bespoke-image">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={`${import.meta.env.BASE_URL}images/bespoke-photo.jpg`}
          alt="Joyería a medida Locowraps" 
        />
      </div>
      <div className="bespoke-content">
        <motion.span 
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Encargos Personalizados
        </motion.span>
        <motion.h2 
          className="title-serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Servicio A Medida
        </motion.h2>
        <motion.p 
          className="body-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Tu historia forjada en metal. Trabajamos en conjunto para idear amuletos únicos, anillos de compromiso alternativos y piezas que resuenan con tu esencia, con la integridad de la plata 950.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href={`https://wa.me/5491122334455?text=${encodeURIComponent("Hola Lisandro, me gustaría iniciar un proceso creativo para una pieza personalizada.")}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Iniciar Proceso Creativo</a>
        </motion.div>
      </div>
    </section>
  );
};
