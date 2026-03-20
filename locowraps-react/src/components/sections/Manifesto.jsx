import React from 'react';
import { motion } from 'framer-motion';
import './Manifesto.css';

export const Manifesto = () => {
  return (
    <section id="manifesto" className="manifesto section-padding">
      <div className="container text-center">
        <motion.h2 
          className="manifesto-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Cada pieza, nacida de la pasión y la creatividad, es una expresión tangible del alma, elaborada a mano con materiales de alta calidad para ofrecer elegancia, sofisticación y un toque distintivo a quienes la portan.
        </motion.h2>
        <motion.p 
          className="manifesto-author"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          - El Alma de Lisandro -
        </motion.p>
      </div>
    </section>
  );
};
