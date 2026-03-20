import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Check } from 'lucide-react';
import './ContactForm.css';

export const ContactForm = ({ isOpen, onClose, productName, productImage }) => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: `Hola Lisandro, me interesa la pieza única "${productName}". ¿Me podrías dar más detalles?`
  });

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      onClose();
      setIsSent(false);
    }, 3500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      transition: { duration: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="form-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="form-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={onClose} aria-label="Cerrar">
              <X size={20} />
            </button>

            {!isSent ? (
              <div className="form-content">
                <motion.div className="form-header" variants={itemVariants}>
                  <div className="product-context">
                    {productImage && (
                      <div className="product-thumb">
                        <img src={productImage} alt={productName} />
                      </div>
                    )}
                    <div className="header-text">
                      <h2 className="form-title">Consultar Pieza</h2>
                      <p className="form-subtitle">Interés en: {productName}</p>
                    </div>
                  </div>
                </motion.div>
                
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <motion.div className="form-group" variants={itemVariants}>
                    <label htmlFor="name">Nombre</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                    />
                  </motion.div>
                  <motion.div className="form-group" variants={itemVariants}>
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                    />
                  </motion.div>
                  <motion.div className="form-group" variants={itemVariants}>
                    <label htmlFor="message">Mensaje</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="3" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </motion.div>
                  
                  <motion.button 
                    type="submit" 
                    className="submit-btn" 
                    id="submit-inquiry"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Enviar Consulta</span>
                    <Send size={16} />
                  </motion.button>
                </form>
              </div>
            ) : (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="success-icon">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                  >
                    <Check size={64} />
                  </motion.div>
                </div>
                <h3 className="success-title">Mensaje Enviado</h3>
                <p>Lisandro recibirá tu consulta en breve. Te contactaremos pronto para conversar sobre esta pieza única.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
