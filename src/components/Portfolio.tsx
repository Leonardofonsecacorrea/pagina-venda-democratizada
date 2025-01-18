import { Image } from "lucide-react";

export const Portfolio = () => {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
            Confira alguns dos projetos que já desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Primeira imagem do portfólio */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <img
              src="/lovable-uploads/35bef10c-17d8-4aa0-9810-676050262fe5.png"
              alt="Landing Page Exemplo"
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-medium">Landing Page Profissional</p>
            </div>
          </div>

          {/* Espaços reservados para futuras imagens */}
          {[1, 2].map((index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg bg-accent/10 h-[300px] flex flex-col items-center justify-center gap-4"
            >
              <Image className="w-12 h-12 text-accent/30" />
              <p className="text-secondary/50 text-sm">
                Mais projetos em breve
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};