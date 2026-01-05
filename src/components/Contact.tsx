import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kerlon.amaral1@gmail.com',
      href: 'mailto:kerlon.amaral1@gmail.com',
      gradient: 'from-blue-900/40 to-purple-900/30',
      glow: 'hover:shadow-blue-500/20',
      color: 'text-blue-400',
      borderColor: 'border-blue-800/30',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@RobotEby',
      href: 'https://github.com/RobotEby',
      gradient: 'from-slate-900/40 to-gray-900/30',
      glow: 'hover:shadow-gray-500/20',
      color: 'text-gray-300',
      borderColor: 'border-gray-700/30',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Kerlon Amaral | Desenvolvedor Full Stack',
      href: 'https://www.linkedin.com/in/kerlon-amaral-297461312/',
      gradient: 'from-purple-900/40 to-purple-900/30',
      glow: 'hover:shadow-purple-500/20',
      color: 'text-purple-400',
      borderColor: 'border-purple-800/30',
    },
  ];

  return (
    <section
      id="Contato"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900"
      ref={ref}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-900/5 rounded-full blur-3xl animate-pulse-delayed" />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-sm text-gray-400 mb-4 md:text-2xl uppercase tracking-[0.3em] font-medium">
            Vamos nos conectar
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Sinta-se à vontade para entrar em contato. Estou sempre aberto a discutir novos projetos
            e oportunidades.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {contactMethods.map((contact, index) => {
            const Icon = contact.icon;
            const isClickable = contact.href !== null;
            const Component = isClickable ? 'a' : 'div';

            return (
              <Component
                key={contact.label}
                href={contact.href || undefined}
                target={contact.href?.startsWith('http') ? '_blank' : undefined}
                rel={contact.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`
                  group relative p-6 rounded-2xl bg-gradient-to-br ${contact.gradient}
                  border ${contact.borderColor} backdrop-blur-xl
                  transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${
                    isClickable
                      ? `hover:scale-105 hover:shadow-2xl ${contact.glow} hover:border-opacity-60 cursor-pointer transform-gpu`
                      : ''
                  }
                  flex-1 min-w-[280px] max-w-[320px] h-48
                  flex flex-col justify-between
                  overflow-hidden
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-1000
                  hover:before:translate-x-[100%]
                `}
                style={{
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 rounded-2xl" />

                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div
                    className={`
                    w-12 h-12 rounded-xl bg-black/40 backdrop-blur-md
                    flex items-center justify-center
                    transition-all duration-500 ease-out
                    border ${contact.borderColor}
                    ${
                      isClickable
                        ? 'group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg'
                        : ''
                    }
                    relative overflow-hidden
                    before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300
                    group-hover:before:opacity-100
                  `}
                  >
                    <Icon
                      className={`w-6 h-6 ${contact.color} transition-all duration-300 group-hover:scale-110`}
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-wider transition-colors duration-300 group-hover:text-gray-300">
                    {contact.label}
                  </p>
                </div>

                <div className="flex-1 flex items-center relative z-10">
                  <p
                    className={`
                    text-lg font-semibold text-gray-200
                    transition-all duration-500
                    ${isClickable ? 'group-hover:text-white group-hover:translate-x-1' : ''}
                    break-all
                    relative
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-current after:to-transparent after:transition-all after:duration-500
                    group-hover:after:w-full
                  `}
                  >
                    {contact.value}
                  </p>
                </div>

                {isClickable && (
                  <div className="flex justify-between items-center mt-4 relative z-10">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 group-hover:animate-ping" />
                      <div className="w-1 h-1 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 group-hover:animate-ping" />
                      <div className="w-1 h-1 rounded-full bg-current opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300 group-hover:animate-ping" />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                      <svg
                        className="w-5 h-5 text-current animate-bounce-horizontal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </Component>
            );
          })}
        </div>

        <div
          className={`
            mt-16 text-center transition-all duration-1000 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        ></div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(50px) translateX(50px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        @keyframes bounce-horizontal {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s infinite;
        }

        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-pulse-slower {
          animation: pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-pulse-delayed {
          animation: pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Contact;
