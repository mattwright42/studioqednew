import QEDIcon from '../img/QED_icon.png';

export const Footer = () => {
  const navLinks = [
    // { label: 'What We Do', href: '#what-we-do' },
    { label: 'Projects', href: '#projects' },
    // { label: 'Case Studies', href: '#case-studies' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <footer className="bg-[#CBDB2A] border-t border-[#5F5644]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <a href="#">
  <div className="text-center md:text-left">
    <img src={QEDIcon} alt="QED" className="h-12" />
  </div>
</a>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#5F5644] hover:text-white transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-[#5F5644] mt-8 pt-8 text-center">
          <p className="text-[#5F5644] text-sm">
            All work © {new Date().getFullYear()} Studio QED, Inc. All trademarks are the properies of their respective holders.
          </p>
        </div>
      </div>
    </footer>
  );
};
