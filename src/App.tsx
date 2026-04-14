import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Slider } from './components/Slider';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Slider />
      {/* <Services /> */}
      <CaseStudies />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
