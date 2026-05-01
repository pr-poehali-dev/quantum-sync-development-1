import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import HighLoadRacks from "@/components/HighLoadRacks";
import SavingsCalculator from "@/components/SavingsCalculator";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <HighLoadRacks />
      <SavingsCalculator />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;