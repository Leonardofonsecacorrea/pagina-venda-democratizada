
import { Image } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
export const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const portfolioItems = [
    {
      id: 1,
      imageUrl: "/lovable-uploads/35bef10c-17d8-4aa0-9810-676050262fe5.png",
      title: "Landing Page Profissional"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "Loja Virtual para Boutique"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: "Site para Pequena Padaria"
    }
  ];
  
  return <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Exemplos de Páginas</h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto">Confira estilos e opções de páginas adaptadas para o seu negócio!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer" 
              onClick={() => setSelectedImage(item.imageUrl)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-[300px] object-cover object-top transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0">
          {selectedImage && <img src={selectedImage} alt="Visualização completa" className="w-full h-auto" />}
        </DialogContent>
      </Dialog>
    </section>;
};
