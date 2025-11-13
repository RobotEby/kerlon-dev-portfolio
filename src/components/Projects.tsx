import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Aplicativo de Receitas',
      description:
        'Um aplicativo moderno de receitas desenvolvido em React, que permite explorar, pesquisar, adicionar aos favoritos e acompanhar o progresso de receitas de pratos e bebidas.',
      image: 'src/assets/recipe-app.png',
      technologies: [
        'React 18',
        'TypeScript',
        'Vite',
        'Context API',
        'Tailwind CSS',
        'Vitest + React Testing Library',
      ],
      github: 'https://github.com/RobotEby/recipe-app',
      demo: 'https://recipe-app-gamma-swart.vercel.app/',
    },
    {
      title: 'Centro de comando da divisão blindada',
      description:
        'Official website of PanzerDiv (PzDiv), a clan specialized in armored vehicle operations in the military simulator SQUAD. The application presents a modern platform for recruiting and publicizing the clan activities.',
      image: 'src/assets/panzerdiv.png',
      technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/RobotEby/panzerdiv-squad-hub',
      demo: 'https://panzerdiv-squad-hub.vercel.app/',
    },
  ];

  return (
    <section
      id="projects"
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
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">PROJETOS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trabalho em destaque</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {' '}
            Uma vitrine dos meus projetos recentes, demonstrando experiência em desenvolvimento
            full-stack, frameworks modernos e resolução criativa de problemas.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <div className="group/image">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover/image:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-accent">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="flex-1 gap-2 w-full">
                        <Github className="w-4 h-4" />
                        GitHub
                      </Button>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" className="flex-1 gap-2 w-full">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
