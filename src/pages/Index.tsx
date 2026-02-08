
import Hero from '../components/Hero';
import Featuring from '../components/Featuring';
import GameShowcase from '../components/GameShowcase';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Featuring />
      <GameShowcase />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
