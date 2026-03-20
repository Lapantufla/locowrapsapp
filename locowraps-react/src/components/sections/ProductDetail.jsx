import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { ContactForm } from '../common/ContactForm';
import './ProductDetail.css';

export const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="error-page">
        <h2>Pieza no encontrada</h2>
        <Link to="/" className="btn btn-outline">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <Navbar />
      
      <div className="detail-hero">
        <div className="detail-bg">
          <img src={`${import.meta.env.BASE_URL}${product.image}`} alt="" />
          <div className="detail-overlay"></div>
        </div>
        
        <motion.div 
          className="detail-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="container">
            <div className="detail-text-wrapper">
              <motion.span 
                className="detail-tag"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {product.tag}
              </motion.span>
              <h1 className="detail-title">{product.name}</h1>
              <p className="detail-material">{product.material}</p>
              <div className="detail-divider"></div>
              <p className="detail-description">{product.description}</p>
              
              {!product.sold ? (
                <motion.button 
                  onClick={() => setIsFormOpen(true)}
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Consultar Disponibilidad
                </motion.button>
              ) : (
                <span className="sold-out-text">Esta pieza ya forma parte de una colección privada</span>
              )}

              <div className="btn-back-wrapper">
                <Link to="/#coleccion" className="link-back">Volver al archivo</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        productName={product.name} 
      />

      <Footer />
    </div>
  );
};
