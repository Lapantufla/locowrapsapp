import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si no hay hash, resetear al tope inmediatamente
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Si hay hash (ej. #coleccion), esperar un breve momento a que el DOM renderice
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      
      if (element) {
        // Scroll suave hacia el elemento
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // Si el elemento no existe (ej. navegando desde otra página), reintentar un poco después
        setTimeout(() => {
          const retryElement = document.getElementById(id);
          if (retryElement) {
            retryElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
      }
    }
  }, [pathname, hash]);

  return null;
};
