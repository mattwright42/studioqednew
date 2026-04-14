import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import work1 from '../img/WORK_standout1.png'
import bigimpression from '../img/WORK_bigimpression.png'
import trysomething from '../img/WORK_trysomething2.png'
import delicious1 from '../img/WORK_delicious1.png'
import bookcovers from '../img/Book_Covers.png'
import stayongo from '../img/WORK_stayongo1.png'
import worksmarter from '../img/WORK_worksmarter1.png'

interface Project {
  category: string;
  title: string;
  description: string;
  gradient: string;
  images: string[];
}

const projects: Project[] = [
  {
    category: 'PACKAGING',
    title: 'Stand Out on any Shelf',
    description:
      'You want consumers to see your product, pick it up, and take it home. We create specilaty boxes and custom constructions to clear shelves.',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2C5F8A 100%)',
    images: [work1],
  },
  {
    category: 'ADVERTISING/ONLINE',
    title: 'Make a Big Impression',
    description:
      "Our award-winning campaigns reach your markets in print and online. Everywhere they look, you'll look amazing.",
    gradient: 'linear-gradient(135deg, #1a3a2a 0%, #2d5a3f 100%)',
    images: [bigimpression],
  },
  {
    category: 'PROMO',
    title: 'Try Something Different',
    description:
      'Make your mark with custom merchandise. Catalogs, shirts, promotions, and products of every shape and size.',
    gradient: 'linear-gradient(135deg, #3d4451 0%, #5a6270 100%)',
    images: [trysomething],
  },
  {
    category: 'FOOD/RETAIL',
    title: 'Look Delicious',
    description:
      'We create complete retail environments - everything you need to start or expand your business. Displays, photos, menus, and all the extras.',
    gradient: 'linear-gradient(135deg, #8b5a3c 0%, #c17a54 100%)',
    images: [delicious1],
  },
  {
    category: 'BOOKS',
    title: 'Tell Your Story',
    description:
      'Look great in print with our book cover and interior layout spcialists. From editing to production. Everything you need from cover to cover.',
    gradient: 'linear-gradient(135deg, #2a2a2a 0%, #4a4a4a 100%)',
    images: [bookcovers],
  },
  {
    category: 'MOBILE',
    title: 'Stay on the Go',
    description:
      'We make sure your mobile apps, games, and presentations look their best with the latest interface and animation design. Keep up with your consumers everywhere they are.',
    gradient: 'linear-gradient(135deg, #2a2a2a 0%, #4a4a4a 100%)',
    images: [stayongo],
  },
  {
    category: '',
    title: 'Work Smarter',
    description:
      "Working with us means you have just one source for packaging design, translation, production, and distribution. So you save time and money. That's smart.",
    gradient: 'linear-gradient(135deg, #2a2a2a 0%, #4a4a4a 100%)',
    images: [worksmarter],
  },
];

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-[#CBDB2A] fade-slide-up ${isVisible ? 'visible' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
          <div className="w-full lg:w-3/5 h-96 lg:h-[600px] relative bg-[#CBDB2A] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center gap-4 p-8">
              {projects[currentSlide].images.map((image, index) => (
                <div
                  key={index}
                  className="flex-1 h-full transition-all duration-700"
                  style={{
                    maxWidth: projects[currentSlide].images.length === 1
                      ? '100%'
                      : `${100 / projects[currentSlide].images.length}%`
                  }}
                >
                  <img
                    src={image}
                    alt={`${projects[currentSlide].title} - Image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/5 bg-[#CBDB2A] p-10 lg:p-16 flex flex-col justify-center">
            <div className="transition-opacity duration-500">
              <p className="text-[#5F5644] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                {projects[currentSlide].category}
              </p>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-[#5F5644] mb-6 leading-tight">
                {projects[currentSlide].title}
              </h3>
              <p className="text-[#5F5644] text-lg leading-relaxed mb-8">
                {projects[currentSlide].description}
              </p>
              {/* <a
                href="#case-studies"
                className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors duration-200"
              >
                View Case Study →
              </a> */}
            </div>
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="text-primary" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="text-primary" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-[#5F5644] w-8' : 'bg-[#5F5644]/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
