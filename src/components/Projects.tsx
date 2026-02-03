import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Movelaria On Demand',
      description:
        'Transforme seus ambientes com móveis sob medida, criados especialmente para você. Na Movelaria On Demand, cada peça é pensada para unir design moderno, funcionalidade e personalização.',
      image: '/movelaria-on-demand.png',
      technologies: [
        'Vite',
        'TypeScript',
        'React',
        'Shadcn-ui',
        'Tailwind CSS',
        'Docker',
        'Docker Compose',
        'Node.js',
        'PostgreSQL',
      ],
      demo: 'https://movelaria-on-demand.vercel.app/',
    },
    {
      title: 'CBAAP',
      description:
        'A CBAAP tem como foco transformar o marketing digital para pequenos negócios por meio de um modelo consultivo inovador. Através de reuniões estratégicas, a agência busca entender profundamente as necessidades e desejos de cada cliente. Ao combinar esse conhecimento com táticas avançadas de anúncios pagos, a CBAAP propõe soluções que não só atraem mais clientes, mas também potencializam o crescimento sustentável do negócio.',
      image: '/cbaap.png',
      technologies: ['Vite', 'TypeScript', 'React', 'Shadcn-ui', 'Tailwind CSS'],
      demo: 'https://cbaap.com.br',
    },
    {
      title: 'Docker Task List',
      description:
        'Este projeto é um aplicativo completo de lista de tarefas criado para demonstrar o poder da conteinerização e da orquestração de microsserviços. O aplicativo usa um front-end moderno em React, uma API robusta em Node.js, um banco de dados NoSQL e um pipeline CI/CD automatizado. ',
      image: '/docker-to-do-list.png',
      technologies: [
        'React',
        'Vite',
        'TailwindCSS',
        'Node.js',
        'Express',
        'Mongoose',
        'MongoDB',
        'Docker',
        'Docker Compose',
        'GitHub Actions (CI)',
      ],
      demo: 'https://docker-task-list.vercel.app/',
    },
    {
      title: 'Biblioteca Movie Magic',
      description:
        'Uma biblioteca de filmes (Movie Magic Library) que visa gerenciar e organizar uma coleção de filmes. ',
      image: '/movie-library.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
      demo: 'https://movie-magic-library.netlify.app/',
    },
    {
      title: 'Aplicativo de Receitas',
      description:
        'Um aplicativo moderno de receitas desenvolvido em React, que permite explorar, pesquisar, adicionar aos favoritos e acompanhar o progresso de receitas de pratos e bebidas.',
      image: '/recipe-app.png',
      technologies: [
        'React 18',
        'TypeScript',
        'Vite',
        'Context API',
        'Tailwind CSS',
        'Vitest + React Testing Library',
      ],
      demo: 'https://recipe-app-gamma-swart.vercel.app/',
    },
    {
      title: 'Vanilla Chess',
      description:
        'Um jogo de xadrez totalmente funcional implementado em JavaScript puro, HTML5 e CSS3. Este projeto demonstra a implementação de algoritmos avançados, manipulação DOM e estilos CSS modernos. ',
      image: '/vanilla-chess-js.png',
      technologies: ['JavaScript ES6+', 'JSDoc', 'CSS3', 'HTML5'],
      demo: 'https://vanilla-chess-js.netlify.app/',
    },
    {
      title: 'Centro de comando da divisão blindada',
      description:
        'Site oficial do PanzerDiv (PzDiv), um clã especializado em operações com veículos blindados no simulador militar SQUAD. A aplicação apresenta uma plataforma moderna para recrutamento e divulgação das atividades do clã.',
      image: '/panzerdiv.png',
      technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'],
      demo: 'https://panzerdiv-squad-hub.netlify.app/',
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
          <h2 className="text-4xl md:text-4xl font-medium mb-4">Trabalho em destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {' '}
            Uma vitrine dos meus projetos recentes, demonstrando experiência em desenvolvimento
            full-stack, frameworks modernos e resolução criativa de problemas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full max-w-sm flex flex-col h-full"
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

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-accent">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
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
    </section>
  );
};

export default Projects;
