import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Laptop, Github, Code, User } from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onLoadingComplete, 2000);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Laptop className="w-20 h-20 text-accent" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl font-bold text-white tracking-wider"
        >
          MEU PERFIL
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-8"
        >
          <Github className="w-8 h-8 text-accent" />
          <Code className="w-8 h-8 text-accent" />
          <User className="w-8 h-8 text-accent" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg text-white/80"
        >
          Desenvolvido por RobotEby
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
