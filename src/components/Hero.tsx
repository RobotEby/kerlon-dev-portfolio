import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, MapPin, Briefcase, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    'Desenvolvedor Fullstack',
    'Desenvolvedor UI/UX',
    'Entusiasta da Web',
    'Desenvolvedor React',
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setDisplayedText(
          isDeleting
            ? currentWord.substring(0, displayedText.length - 1)
            : currentWord.substring(0, displayedText.length + 1),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RobotEby', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/kerlonsl._', label: 'Instagram' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-24"
    >
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
          <span className="text-sm font-medium">Disponível para trabalhos freelance</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Oi, eu sou o <span className="text-gradient">Kerlon</span>
            </h1>

            <h3 className="text-3xl md:text-4xl font-display text-muted-foreground min-h-[3rem]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed font-body">
              Crio experiências visuais bonitas, funcionais e focadas no usuário. Com mais de 4 anos
              de experiência em desenvolvimento web, dou vida a ideias através de código limpo e
              design cuidadoso.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Belo Horizonte</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="gap-2 py-3 px-4">
                <ArrowRight className="w-4 h-4" />
                Contatar
              </Button>
            </div>

            <div className="pt-6">
              <div className="w-full h-px bg-border mb-6" />
              <div className="flex items-center gap-6">
                <span className="text-sm font-medium">Siga-me:</span>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center justify-center"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="src/assets/profile.png"
                alt="RobotEby Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
