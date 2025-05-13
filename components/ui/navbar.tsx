'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Wrench, User } from 'lucide-react';

export const FloatingNav = () => {
  const navItems = [
    { name: "Home", link: "/", icon: <Home size={18} /> },
    { name: "Services", link: "/services", icon: <Wrench size={18} /> },
    { name: "About", link: "/about", icon: <User size={18} /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-x-0 top-4 mx-auto max-w-fit rounded-full border border-cyan-500/30 bg-dark/50 backdrop-blur-md p-2 z-50"
    >
      <div className="flex space-x-4 px-4">
        {navItems.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className="flex items-center gap-1 text-sm text-cyan-100 hover:text-cyan-400 transition-colors"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};