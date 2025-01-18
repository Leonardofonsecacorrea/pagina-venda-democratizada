import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Portfolio } from "@/components/Portfolio";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Portfolio />
      <CTA />
    </main>
  );
};

export default Index;