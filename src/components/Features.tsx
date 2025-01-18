import { Check } from "lucide-react";

const features = [
  {
    title: "Design Profissional",
    description: "Layout moderno e otimizado para conversão"
  },
  {
    title: "Entrega Rápida",
    description: "Seu projeto pronto em apenas 7 dias"
  },
  {
    title: "Preço Justo",
    description: "Investimento único de R$500"
  },
  {
    title: "Foco em Resultados",
    description: "Página otimizada para gerar leads no WhatsApp"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Por que escolher nosso serviço?
          </h2>
          <p className="text-secondary/80 text-lg">
            Destaque-se online com uma página profissional e acessível
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="p-6 rounded-2xl bg-muted hover:bg-accent/20 transition-colors duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};