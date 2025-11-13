import { motion, useInView } from 'framer-motion';
import { Globe, Smartphone, TrendingUp, Mail, Bug, ShieldAlert } from 'lucide-react';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description:
        'Criação de sites modernos, responsivos e com alto desempenho, utilizando as tecnologias mais recentes e as melhores práticas.',
    },
    {
      icon: Smartphone,
      title: 'Desenvolvimento de aplicações',
      description:
        'Criação de aplicações móveis intuitivas e envolventes com experiências de usuário agradável.',
    },
    {
      icon: Bug,
      title: 'Testes de Penetração',
      description:
        'Simulação de ataques reais para identificar brechas de segurança em sistemas, redes e aplicações, proporcionando relatórios detalhados com recomendações de correção prioritárias.',
    },
    {
      icon: ShieldAlert,
      title: 'DevSecOps',
      description:
        'Integração de práticas de segurança no pipeline de desenvolvimento, com scanning automatizado de código, containers e dependências desde as fases iniciais.',
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24"
      ref={ref}
    >
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">SERVIÇOS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meus recursos e serviços</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-6 inline-block">
                    <Icon className="w-16 h-16 text-accent group-hover:text-accent-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-accent-foreground transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-accent-foreground/90 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
