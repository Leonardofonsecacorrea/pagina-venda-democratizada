
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
export const CTA = () => {
  return <section className="py-24 bg-primary px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
        <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">
          Pronto para começar?
        </span>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Transforme seu negócio com uma
          <span className="block mt-2">página de vendas dedicada!</span>
        </h2>

        <p className="text-lg text-white/80 max-w-2xl mx-auto">Faça a escolha certa e coloque-se online. Comece agora mesmo, solicite uma consultoria.</p>

        <Button size="lg" className="group bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105" onClick={() => window.open("https://wa.me/5551985503161?text=Olá,%20vim%20através%20da%20sua%20página.%20Estou%20aqui%20para%20falar%20sobre:%20")}>
          Falar pelo WhatsApp
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>;
};
