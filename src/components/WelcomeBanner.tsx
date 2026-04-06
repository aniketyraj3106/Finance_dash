import React from 'react';
import { TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { useFinanceStore } from '../store/useFinanceStore';

export const WelcomeBanner: React.FC = () => {
  const { userRole, transactions } = useFinanceStore();
  const currentHour = new Date().getHours();
  
  let greeting = 'Good Morning';
  if (currentHour >= 12 && currentHour < 18) greeting = 'Good Afternoon';
  if (currentHour >= 18) greeting = 'Good Evening';

  const incomeCount = transactions.filter((t) => t.type === 'income').length;
  const expenseCount = transactions.filter((t) => t.type === 'expense').length;

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 dark:from-slate-800 dark:via-slate-800 dark:to-slate-700 rounded-xl overflow-hidden shadow-lg mb-8">
      <div className="px-6 md:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <p className="text-blue-100 dark:text-blue-200 text-sm font-semibold uppercase tracking-wide mb-2">
              Welcome Back!
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {greeting}, {userRole === 'admin' ? 'Administrator' : 'User'}
            </h2>
            <p className="text-blue-50 dark:text-blue-100 text-sm md:text-base leading-relaxed">
              You have a complete overview of your finances. Track, manage, and analyze your transactions
              with powerful insights and analytics.
            </p>
          </div>

          {/* Right Section - Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 dark:text-blue-300 text-xs font-semibold uppercase mb-1">
                    Income
                  </p>
                  <p className="text-2xl font-bold text-white">{incomeCount}</p>
                </div>
                <TrendingUp size={32} className="text-green-300 opacity-75" />
              </div>
            </div>

            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 dark:text-blue-300 text-xs font-semibold uppercase mb-1">
                    Expenses
                  </p>
                  <p className="text-2xl font-bold text-white">{expenseCount}</p>
                </div>
                <AlertCircle size={32} className="text-orange-300 opacity-75" />
              </div>
            </div>

            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 dark:text-blue-300 text-xs font-semibold uppercase mb-1">
                    Role
                  </p>
                  <p className="text-2xl font-bold text-white capitalize">{userRole}</p>
                </div>
                <CheckCircle size={32} className="text-blue-300 opacity-75" />
              </div>
            </div>

            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 dark:text-blue-300 text-xs font-semibold uppercase mb-1">
                    Total
                  </p>
                  <p className="text-2xl font-bold text-white">{transactions.length}</p>
                </div>
                <span className="text-3xl">📊</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Info */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-blue-50 dark:text-blue-100 text-xs sm:text-sm">
            ✨ Last updated: {new Date().toLocaleString()}
          </div>
          {userRole === 'admin' && (
            <div className="px-3 py-1 bg-green-400/20 border border-green-400/50 rounded-full text-xs font-semibold text-green-100">
              🔧 Admin Mode Active
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
