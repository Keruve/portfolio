'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, href, onClick, variant = 'primary', size = 'md', className = '', type = 'button' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 uppercase tracking-wider text-sm';
  
  const variants = {
    primary: 'bg-zen-900 dark:bg-zen-50 text-zen-50 dark:text-zen-900 hover:bg-accent-600 hover:text-white dark:hover:bg-accent-500 shadow-zen hover:shadow-zen-lg',
    secondary: 'bg-accent-600 hover:bg-accent-700 text-white shadow-zen hover:shadow-zen-lg',
    outline: 'border-2 border-zen-900 dark:border-zen-50 text-zen-900 dark:text-zen-50 hover:bg-zen-900 hover:text-zen-50 dark:hover:bg-zen-50 dark:hover:text-zen-900',
  };

  const sizes = {
    sm: 'px-6 py-2.5',
    md: 'px-8 py-3.5',
    lg: 'px-10 py-4',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionButton = motion.button;
  const MotionLink = motion.create(Link);

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      onClick={onClick}
      type={type}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </MotionButton>
  );
}
