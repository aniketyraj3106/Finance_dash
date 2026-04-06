import React from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { Card } from './Card';
import { formatCurrency } from '../utils/calculations';

interface InsightsCardProps {
  highestCategory: string;
  monthlyComparison: { currentMonth: number; lastMonth: number };
  savings: number;
}

export const InsightsSection: React.FC<InsightsCardProps> = ({
  highestCategory,
  monthlyComparison,
  savings,
}) => {
  const monthlyChange =
    monthlyComparison.lastMonth > 0
      ? ((monthlyComparison.currentMonth - monthlyComparison.lastMonth) /
          monthlyComparison.lastMonth) *
        100
      : 0;

  const isPositive = savings > 0;
  const isDecreased = monthlyChange < 0;

  return (
    <Card className="col-span-full">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        📊 Financial Insights
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Highest Spending Category */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Highest Spending Category
          </p>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {highestCategory}
          </p>
        </div>

        {/* Monthly Comparison */}
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Monthly Spending Change
          </p>
          <div className="flex items-center gap-2">
            {isDecreased ? (
              <TrendingDown size={24} className="text-green-600 dark:text-green-400" />
            ) : (
              <TrendingUp size={24} className="text-red-600 dark:text-red-400" />
            )}
            <span
              className={`text-2xl font-bold ${
                isDecreased
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {isDecreased ? '-' : '+'}
              {Math.abs(monthlyChange).toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Total Savings */}
        <div
          className={`p-4 rounded-lg border ${
            isPositive
              ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
          }`}
        >
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Total Savings
          </p>
          <div className="flex items-center gap-2">
            <DollarSign
              size={24}
              className={
                isPositive
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }
            />
            <span
              className={`text-2xl font-bold ${
                isPositive
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {formatCurrency(savings)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
