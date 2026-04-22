import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const About = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-[#CBDB2A] fade-slide-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-square bg-[#CBDB2A] relative flex items-center justify-center">
            <img
              src="/src/img/ABOUT_awards.png"
              alt="Awards and Recognition"
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#5F5644] mb-8">
              About
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-[#5F5644] leading-relaxed">
                Studio QED, inc. is an award-winning creative and marketing agency. Our job is to provide any service to make your job easier:
              </p>
              <ul className="text-lg text-[#5F5644] leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Branding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Presentations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Translation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Printing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Fulfillment</span>
                </li>
              </ul>
            </div>
            {/* <div className="grid grid-cols-3 gap-8 mb-10 pb-10 border-b border-divider">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-serif text-4xl lg:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary font-medium">{stat.label}</div>
                </div>
              ))}
            </div> */}
            {/* <div>
              <h3 className="font-sans text-lg font-bold text-primary mb-4">
                Credentials & Affiliations
              </h3>
              <ul className="space-y-2">
                {credentials.map((credential, index) => (
                  <li key={index} className="text-primary flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
