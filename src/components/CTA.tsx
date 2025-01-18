import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-primary px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
        <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">
          Pronto para começar?
        </span>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Transforme seu negócio com uma
          <span className="block mt-2">página de vendas profissional</span>
        </h2>

        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Invista R$500 e tenha sua landing page pronta em 7 dias.
          Comece agora mesmo e destaque-se online!
        </p>

        <Button 
          size="lg"
          className="group bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          onClick={() => window.open("https://wa.me/seu_numero?text=Olá! Gostaria de criar uma landing page profissional.")}
        >
          Falar pelo WhatsApp
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};