import { useState, useEffect } from 'react';
import { Home, User, FolderOpen, Code, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'Sobre', icon: User },
    { id: 'projects', label: 'Projetos', icon: FolderOpen },
    { id: 'services', label: 'Serviços', icon: Code },
    { id: 'contact', label: 'Contato', icon: Mail },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 px-4"
    >
      <nav className="bg-card rounded-full px-6 py-3 shadow-lg border border-border">
        <ul className="flex gap-8 items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navigation;
