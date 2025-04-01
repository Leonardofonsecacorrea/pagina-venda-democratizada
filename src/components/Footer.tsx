
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-secondary/70">
            © {currentYear} - Todos os direitos reservados
          </div>
          
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-secondary/70 hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <a 
              href="https://wa.me/5551985503161?text=Olá,%20vim%20através%20da%20sua%20página.%20Estou%20aqui%20para%20falar%20sobre:%20"
              className="text-sm text-secondary/70 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
