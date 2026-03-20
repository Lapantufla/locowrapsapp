import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import './Collection.css';

export const Collection = () => {
  return (
    <section id="coleccion" className="collection section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Archivo Disponible</h2>
          <a href="#" className="link-underline">Ver colección completa</a>
        </motion.div>

        <div className="grid-collection">
          {products.map((product, index) => (
            <Link to={`/producto/${product.slug}`} key={product.id} style={{ textDecoration: 'none' }}>
              <motion.article 
                className={`product-card ${index === 1 ? 'featured' : ''} ${index === 2 ? 'mt-offset' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="product-image-wrapper">
                  <img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} className="primary-img" loading="lazy" />
                  <motion.img 
                    src={`${import.meta.env.BASE_URL}${product.hoverImage}`} 
                    alt={`${product.name} (detalle)`} 
                    className="secondary-img"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    loading="lazy" 
                  />
                  <div className={`badge ${product.sold ? 'sold-out' : ''}`}>{product.tag}</div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-material">{product.material}</p>
                  <p className="product-price">{product.status}</p>
                  <span className="view-detail">Ver detalle</span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
