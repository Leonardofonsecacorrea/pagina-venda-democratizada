
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

export const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(true);
  
  const portfolioItems = [
    {
      id: 1,
      imageUrl: "/lovable-uploads/35bef10c-17d8-4aa0-9810-676050262fe5.png",
      title: "Landing Page Profissional"
    },
    {
      id: 2,
      imageUrl: "/lovable-uploads/e2ff214c-3c4f-43e4-bb77-e830e570d06b.png",
      title: "Site para Barbearia"
    },
    {
      id: 3,
      imageUrl: "/lovable-uploads/6a6e14bb-a783-4056-a182-a506d9805d7b.png",
      title: "Site para Fotógrafa"
    }
  ];
  
  const handleImageLoad = () => {
    setImageLoading(false);
  };
  
  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setImageLoading(true);
  };
  
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
              onClick={() => openImageModal(item.imageUrl)}
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
        <DialogContent className="max-w-5xl w-[95vw] p-2 overflow-hidden max-h-[95vh]">
          {selectedImage && (
            <div className="relative">
              {imageLoading && (
                <Skeleton className="w-full h-[80vh]" />
              )}
              <img 
                src={selectedImage} 
                alt="Visualização completa" 
                className="w-full h-auto max-h-[85vh] object-contain mx-auto"
                onLoad={handleImageLoad}
                style={{ display: imageLoading ? 'none' : 'block' }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>;
};
