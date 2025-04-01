
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
export const Hero = () => {
  return <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-accent to-white px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
        <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium mb-4">Landing Pages Profissionais e Acessíveis</span>
        
        <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
          Sua Presença Online
          <span className="block text-secondary mt-2">Seu Espaço exclusivo</span>
        </h1>

        <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto">Dê um passo para posicionar seu negócio na internet. Tenha uma página de vendas profissional e otimizada.
Seu domínio, sua identidade, seu futuro.</p>

        <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105" onClick={() => window.open("https://wa.me/5551985503161?text=Olá,%20vim%20através%20da%20sua%20página.%20Estou%20aqui%20para%20falar%20sobre:%20")}>
          Começar Agora
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>;
};
