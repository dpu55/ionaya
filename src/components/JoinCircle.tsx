import React from 'react';
import { motion } from 'framer-motion';

const JoinUsButton: React.FC = () => {
  return (
    <motion.a
      href="https://member.calerie-health.com.my/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-40 h-40 rounded-full bg-white text-turquoise font-semibold text-center flex items-center justify-center shadow-xl border-2 border-turquoise transition"
      whileHover={{
        scale: 1.1,
        rotate: 360,
        transition: { duration: 0.6 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="block w-24 text-sm leading-tight text-center">
        Bergabunglah dengan kami
      </span>
    </motion.a>
  );
};

export default JoinUsButton;
