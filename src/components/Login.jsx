import React from 'react';
import { motion } from 'framer-motion';

// Parent container for the form card
const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren", // Animate the container before its children
      staggerChildren: 0.2 // Stagger the children's animations by 0.2 seconds
    }
  }
};

// Variants for each child element (h2, inputs, button)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white p-4">
      {/* Animated background circles for visual interest */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob-1 top-4 left-4"></div>
        <div className="absolute w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob-2 bottom-4 right-4"></div>
      </div>

      <motion.div
        className="relative z-10 w-full max-w-sm bg-gray-800 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-70 border border-gray-700"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl font-extrabold mb-6 text-center tracking-wide"
          variants={itemVariants}
        >
          Login
        </motion.h2>

        <form className="space-y-6">
          <motion.input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            variants={itemVariants}
          />
          <motion.input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            variants={itemVariants}
          />
          <motion.button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)" }} // Scale up and add shadow on hover
            whileTap={{ scale: 0.95 }} // Scale down on click
            variants={itemVariants}
          >
            Login
          </motion.button>
        </form>

        <motion.p
          className="text-sm text-center mt-6 text-gray-400"
          variants={itemVariants}
        >
          Don’t have an account? 
          <a href="/signup" className="text-blue-500 hover:underline ml-1">
            Sign Up
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Login;

