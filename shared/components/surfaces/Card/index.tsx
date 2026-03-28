import { ReactNode } from 'react';

interface CardProps {
  emoji: string;
  title: string;
  description: string;
  bgColor?: string;
  children?: ReactNode;
  className?: string;
}

export function Card({ emoji, title, description, bgColor = 'bg-primary/10', children, className }: CardProps) {
  return (
    <div className={`group relative rounded-2xl ${className} p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-xl hover:bg-white/20 dark:hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer`}>
      <div className={`${bgColor} rounded-xl p-8 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
        <div className="text-6xl">{emoji}</div>
      </div>
      <h3 className="mb-1 text-foreground dark:text-slate-100 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-muted-foreground dark:text-slate-400 group-hover:text-muted-foreground/80 dark:group-hover:text-slate-300 transition-colors">{description}</p>
      
      {children}
    </div>
  );
}