import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kerlon.amaral1@gmail.com',
      href: 'mailto:kerlon.amaral1@gmail.com',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (31) 98204-4380',
      href: 'tel:+5531982044380',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Belo Horizonte, MG',
    },
  ];

  const generateStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      delay: Math.random() * 5,
    }));
  };

  const stars = generateStars(150);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950"
      ref={ref}
    >
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/10 to-purple-900/10" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-blue-300 mb-4 uppercase tracking-wider">CONTATO</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Entre em Contato</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6" />
          <p className="text-lg text-blue-100 max-w-xl mx-auto">
            Disponível para novos projetos e oportunidades profissionais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center space-y-4 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 min-h-[180px] flex flex-col justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto border border-blue-500/20 mb-2">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-semibold text-white mb-2 text-sm">{info.label}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-blue-200 hover:text-white transition-colors duration-300 text-xs md:text-sm break-all px-2"
                      style={{ wordBreak: 'break-word' }}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-blue-200 text-xs md:text-sm">{info.value}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 space-y-6"
        >
          <a href="mailto:kerlon.amaral1@gmail.com">
            <Button
              size="lg"
              className="gap-3 px-8 bg-blue-600 hover:bg-blue-500 text-white border-blue-400/20 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Iniciar Conversa
            </Button>
          </a>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://github.com/RobotEby"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-slate-900 border border-white/20 hover:border-white backdrop-blur-sm"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
