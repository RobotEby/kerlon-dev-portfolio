import { motion } from 'framer-motion';
import { Code, GraduationCap, FolderOpen, BugOff } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: Code,
      title: 'Linguagens',
      description: 'TypeScript, JavaScript, PHP, Python, HTML5, CSS3',
    },
    {
      icon: GraduationCap,
      title: 'Trybe',
      description: 'Trybe | Curso de Inteligência Artificial e Tecnologia ',
    },
    {
      icon: BugOff,
      title: 'B7Web',
      description: 'B7Web | Formação Completa em Programação Full Stack',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24"
      ref={ref}
    >
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Sobre mim</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Construindo a minha história</h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Experiências</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed font-body">
              Sou um programador full-stack experiente que cria aplicações web modernas utilizando
              tecnologias JavaScript, TypeScript, React, Vue.js e Node.js. Trabalho tanto no
              front-end como no back-end, com foco em soluções escaláveis, de alto desempenho e alta
              qualidade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-body">
              Tenho experiência no desenvolvimento de funcionalidades complexas, refatoração de
              código legado e implementação de melhorias estruturais, prestando muita atenção à
              organização, desempenho e facilidade de manutenção. Trabalho com bases de dados
              relacionais e não relacionais, como MySQL e MongoDB, e ferramentas de teste
              automatizadas, como Jest, Mocha e Chai. Utilizo Docker, Git e CI/CD para garantir
              ambientes consistentes e entrega contínua.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-body">
              Sigo as melhores práticas de desenvolvimento, como desenvolvimento orientado por
              testes, controlo de versão limpo e arquitetura de software robusta. Também estou
              familiarizado com metodologias ágeis, como Scrum e Kanban. Valorizo a colaboração, a
              comunicação e a eficiência no processo de desenvolvimento.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-body">
              {' '}
              Quando não estou programando, gosto de aprender novas tecnologias, melhorar os meus
              projetos e explorar maneiras melhores de tornar a web mais rápida e envolvente.
              Acredito na aprendizagem contínua, na atenção aos detalhes e no poder de um design
              limpo e significativo.
            </p>

            <h3 className="text-2xl font-bold pt-4">Tech Stack & Formação</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="p-6 rounded-xl border-2 border-border hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
                  >
                    <Icon className="w-8 h-8 mb-4 text-accent" />
                    <h4 className="font-bold mb-2">{stat.title}</h4>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border">
              <img
                src="src/assets/63c77583ea9a572d6a595706fe9178bb.jpg"
                alt="Pato programador"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
