import React from 'react';
import { BarChart3, TrendingUp, Users, Zap } from 'lucide-react';

export const StatsBar: React.FC<{ totalTransactions: number }> = ({ totalTransactions }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Transactions</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{totalTransactions}</p>
          </div>
          <div className="p-3 bg-blue-600 rounded-lg">
            <BarChart3 size={24} className="text-white" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Status</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">Active</p>
          </div>
          <div className="p-3 bg-green-600 rounded-lg">
            <Zap size={24} className="text-white" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Insights</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">Advanced</p>
          </div>
          <div className="p-3 bg-purple-600 rounded-lg">
            <TrendingUp size={24} className="text-white" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Users</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">You</p>
          </div>
          <div className="p-3 bg-orange-600 rounded-lg">
            <Users size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
