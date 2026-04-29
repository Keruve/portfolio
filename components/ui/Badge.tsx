interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'purple' | 'yellow' | 'gray' | 'gradient';
  className?: string;
}

export default function Badge({ children, variant = 'blue', className = '' }: BadgeProps) {
  const variants = {
    blue: 'bg-zen-100 dark:bg-zen-800 text-zen-700 dark:text-zen-200 border border-zen-300 dark:border-zen-700',
    green: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-200 border border-accent-300 dark:border-accent-700',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200 border border-purple-300 dark:border-purple-700',
    yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-700',
    gray: 'bg-zen-100 dark:bg-zen-800 text-zen-600 dark:text-zen-300 border border-zen-200 dark:border-zen-700',
    gradient: 'bg-gradient-to-r from-zen-900 to-accent-600 text-white border-0',
  };

  return (
    <span className={`text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
