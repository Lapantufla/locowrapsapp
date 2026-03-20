import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Check } from 'lucide-react';
import './ContactForm.css';

export const ContactForm = ({ isOpen, onClose, productName }) => {
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
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // Evita que el click en el form cierre el modal
          >
            <button className="close-btn" onClick={onClose}>
              <X size={24} />
            </button>

            {!isSent ? (
              <div className="form-content">
                <h2 className="form-title">Consultar Pieza</h2>
                <p className="form-subtitle">Inicia una conversación sobre esta joya exclusiva.</p>
                
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="form-group">
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
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn" id="submit-inquiry">
                    <span>Enviar Consulta</span>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            ) : (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="success-icon">
                  <Check size={48} />
                </div>
                <h3>Mensaje Enviado</h3>
                <p>Lisandro recibirá tu consulta en breve y se pondrá en contacto contigo.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
