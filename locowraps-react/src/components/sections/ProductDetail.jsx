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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="product-detail-page">
      <Navbar />
      
      <main className="detail-main">
        <div className="split-layout">
          {/* LADO IZQUIERDO: IMAGEN STICKY */}
          <div className="detail-visual">
            <motion.div 
              className="image-container"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} />
              <div className="detail-vignette"></div>
            </motion.div>
          </div>

          {/* LADO DERECHO: CONTENIDO SCROLLABLE */}
          <div className="detail-info">
            <motion.div 
              className="info-scroll-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <section className="info-hero-section">
                <motion.span className="detail-tag" variants={itemVariants}>{product.tag}</motion.span>
                <motion.h1 className="detail-title" variants={itemVariants}>{product.name}</motion.h1>
                <motion.p className="detail-material" variants={itemVariants}>{product.material}</motion.p>
                <motion.div className="detail-divider" variants={itemVariants}></motion.div>
                <motion.p className="detail-description" variants={itemVariants}>{product.description}</motion.p>
              </section>

              {product.specs && (
                <motion.section className="info-section specs-section" variants={itemVariants}>
                  <h3 className="section-subtitle">Especificaciones</h3>
                  <div className="specs-grid">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <span className="spec-label">{key}</span>
                        <span className="spec-value">{value}</span>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {product.process && (
                <motion.section className="info-section process-section" variants={itemVariants}>
                  <h3 className="section-subtitle">El Proceso</h3>
                  <p className="process-text">{product.process}</p>
                </motion.section>
              )}

              <motion.section className="info-actions" variants={itemVariants}>
                {!product.sold ? (
                  <button 
                    onClick={() => setIsFormOpen(true)}
                    className="btn btn-primary full-width"
                  >
                    Consultar Disponibilidad
                  </button>
                ) : (
                  <div className="sold-status">
                    <span className="sold-dot"></span>
                    <span className="sold-out-text">Pieza de Colección Privada</span>
                  </div>
                )}
                
                <div className="btn-back-wrapper">
                  <Link to="/#coleccion" className="link-back">
                    <span className="arrow">←</span> Volver al archivo
                  </Link>
                </div>
              </motion.section>
            </motion.div>
          </div>
        </div>
      </main>

      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        productName={product.name} 
      />
      <Footer />
    </div>
  );
};
