import { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const contactInfo = [
  {
    icon: <Mail size={24} />,
    // label: 'Email',
    value: 'info@studioqed.com',
  },
  {
    icon: <Phone size={24} />,
    // label: 'Phone',
    value: '650.804.6564',
  },
  
];
export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref, isVisible } = useIntersectionObserver();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-[#CBDB2A] text-[#5F5644] fade-slide-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-[#5F5644] text-lg">
            Contact us and let us know how we can help make your business more successful
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center justify-center gap-4 p-6 bg-warm-white/5 rounded-lg hover:bg-warm-white/10 transition-colors">
              <div className="text-accent-gold">{info.icon}</div>
              <div className="text-left">
                <div className="text-sm text-warm-white/70">{info.label}</div>
                <div className="text-lg font-medium">{info.value}</div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};
