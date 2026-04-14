import { Briefcase, FileText, Map, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Briefcase size={32} className="text-accent" />,
    title: 'Project Management & Delivery',
    description:
      'End-to-end project management for complex, multi-stakeholder engagements. We establish clear milestones, manage risk proactively, and keep projects moving when others stall.',
  },
  {
    icon: <FileText size={32} className="text-accent" />,
    title: 'Technical Advisory & Review',
    description:
      'Independent technical review and expert advisory services. We provide the second opinion that gives clients confidence before major decisions are made.',
  },
  {
    icon: <Map size={32} className="text-accent" />,
    title: 'Feasibility & Site Analysis',
    description:
      'Rigorous feasibility studies and site assessments that separate viable projects from costly mistakes. We evaluate technical, regulatory, and commercial dimensions simultaneously.',
  },
  {
    icon: <Users size={32} className="text-accent" />,
    title: 'Stakeholder & Regulatory Navigation',
    description:
      'Strategic guidance through complex approval processes, community engagement, and regulatory environments. We know how to build consensus and move projects forward.',
  },
];

export const Services = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id="what-we-do"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-background fade-slide-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            What We Do
          </h2>
          <p className="text-lg text-primary leading-relaxed">
            We bring deep technical expertise and strategic clarity to complex projects.
            From initial feasibility through final delivery, we work alongside our clients
            to solve problems that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-accent-light border-l-4 border-accent p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-sans text-xl font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-primary leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
