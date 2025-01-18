import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-accent to-white px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
        <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium mb-4">
          Landing Pages Profissionais por R$500
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
          Sua Presença Online
          <span className="block text-secondary mt-2">
            Profissional e Acessível
          </span>
        </h1>

        <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto">
          Destaque seu negócio com uma página de vendas profissional. 
          Entrega em 7 dias para impulsionar suas vendas pelo WhatsApp.
        </p>

        <Button 
          size="lg"
          className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          onClick={() => window.open("https://wa.me/seu_numero?text=Olá! Gostaria de criar uma landing page profissional.")}
        >
          Começar Agora
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};