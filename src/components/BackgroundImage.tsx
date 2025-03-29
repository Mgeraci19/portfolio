import { motion } from 'framer-motion';

export function BackgroundImage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: 'url("/portfolio/images/ocean-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text readability */}
    </motion.div>
  );
} 