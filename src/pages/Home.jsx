import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-center text-white p-4">
      {/* Container for the animated elements */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Initial state (invisible, slightly above)
        animate={{ opacity: 1, y: 0 }}   // Animate to this state (visible, original position)
        transition={{ duration: 1, ease: "easeOut" }} // Transition properties
        className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-lg shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-70 border border-gray-700"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative mb-4"
        >
          <motion.div
            className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1], // Pulsing animation
              rotate: [0, 360],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-4xl">🚦</span>
          </motion.div>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Zebra Crossing Monitoring
        </motion.h1>

        <motion.p 
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Welcome to the Zebra Crossing Monitoring System.
          Please login or create an account to continue.
        </motion.p>
      </motion.div>
      
      {/* Animated background stripes */}
      <motion.div 
        className="absolute inset-0 z-[-1] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-0 left-0 w-full h-full transform -rotate-12 translate-x-1/2 bg-white opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full transform rotate-12 -translate-x-1/2 bg-white opacity-5"></div>
      </motion.div>

    </div>
  );
}

export default Home;