import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-lg p-6 transition-all duration-200 border border-gray-100 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
};

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  color: 'blue' | 'green' | 'red' | 'purple';
  subtitle?: string;
}

const bgColors = {
  blue: 'bg-blue-50 dark:bg-blue-900/20',
  green: 'bg-green-50 dark:bg-green-900/20',
  red: 'bg-red-50 dark:bg-red-900/20',
  purple: 'bg-purple-50 dark:bg-purple-900/20',
};

const textColors = {
  blue: 'text-blue-600 dark:text-blue-400',
  green: 'text-green-600 dark:text-green-400',
  red: 'text-red-600 dark:text-red-400',
  purple: 'text-purple-600 dark:text-purple-400',
};

const borderColors = {
  blue: 'border-blue-200 dark:border-blue-700',
  green: 'border-green-200 dark:border-green-700',
  red: 'border-red-200 dark:border-red-700',
  purple: 'border-purple-200 dark:border-purple-700',
};

export const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  icon,
  color,
  subtitle,
}) => {
  return (
    <Card className={`hover:shadow-lg dark:hover:shadow-xl transition-shadow border ${borderColors[color]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {subtitle}
            </p>
          )}
        </div>
        <div className={`${bgColors[color]} ${textColors[color]} p-4 rounded-xl`}>
          {icon}
        </div>
      </div>
    </Card>
  );
};
