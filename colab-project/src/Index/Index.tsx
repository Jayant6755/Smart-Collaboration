import Navbar from "@/Landing/Navbar";
import Hero from "@/Landing/Hero";
import Features from "@/Landing/Features";
import HowItWorks from "@/Landing/Work";
import CTA from "@/Landing/CTA";
import Footer from "@/Landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
