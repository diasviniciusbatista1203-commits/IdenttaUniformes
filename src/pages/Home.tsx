import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import Problem from '../sections/Problem';
import Services from '../sections/Services';
import Differentials from '../sections/Differentials';
import Portfolio from '../sections/Portfolio';
import Process from '../sections/Process';
import Testimonials from '../sections/Testimonials';
import CTAFinal from '../sections/CTAFinal';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Differentials />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTAFinal />
      <Footer />
    </div>
  );
}
