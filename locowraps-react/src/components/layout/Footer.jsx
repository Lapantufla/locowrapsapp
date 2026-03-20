import React from 'react';
import { Instagram } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>LOCOWRAPS</h3>
          <p>El alma creativa y sofisticada.</p>
        </div>
        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Archivo</a></li>
            <li><a href="#">Historia</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Atención</h4>
          <ul>
            <li><a href="#">Cuidado de las joyas</a></li>
            <li><a href="#">Guía de tallas</a></li>
            <li><a href="#">Envíos y devoluciones</a></li>
          </ul>
        </div>
        <div className="footer-links social-links">
          <h4>Comunidad</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/locowraps/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={20} />
                <span>@locowraps</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>© 2026 Locowraps. Todos los derechos reservados.</p>
        <p>Hecho a mano en plata 950.</p>
      </div>
    </footer>
  );
};
