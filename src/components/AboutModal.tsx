import React from 'react';
import { X, Github, Globe, Mail, Zap } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-slate-900 dark:to-slate-800 px-6 py-6 flex items-center justify-between border-b border-gray-200 dark:border-slate-700">
          <div>
            <h2 className="text-2xl font-bold text-white">About FinanceHub</h2>
            <p className="text-blue-100 text-sm mt-1">Smart Finance Management System</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Zap className="text-blue-600 dark:text-blue-400" size={20} />
              What is FinanceHub?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              FinanceHub is a modern, professional finance management dashboard designed to help you track your financial activities, manage transactions, and gain insights into your spending patterns. With an intuitive interface and powerful features, managing your finances has never been easier.
            </p>
          </section>

          {/* Features */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">✨ Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📊 Dashboard</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Comprehensive overview with charts, insights, and financial summaries at a glance.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💳 Transactions</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Add, edit, and manage all your transactions with advanced search and filtering.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">👤 Roles</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Role-based access control with Viewer and Admin roles for different permissions.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🌙 Dark Mode</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Beautiful dark theme option for comfortable viewing in any lighting condition.
                </p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🛠️ Technology Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'TypeScript', icon: '📘' },
                { name: 'Tailwind CSS', icon: '🎨' },
                { name: 'Vite', icon: '⚡' },
                { name: 'Zustand', icon: '🎯' },
                { name: 'Recharts', icon: '📊' },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="bg-gray-100 dark:bg-slate-700 px-3 py-2 rounded-lg flex items-center gap-2 text-sm"
                >
                  <span>{tech.icon}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Version & Info */}
          <section className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Version</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">1.0.0</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Status</p>
                <p className="text-lg font-bold text-green-600 dark:text-green-400">✓ Ready</p>
              </div>
            </div>
          </section>

          {/* Contact & Links */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">📞 Get in Touch</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-lg transition-colors text-sm font-medium text-gray-900 dark:text-white"
              >
                <Globe size={16} />
                Website
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-lg transition-colors text-sm font-medium text-gray-900 dark:text-white"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-lg transition-colors text-sm font-medium text-gray-900 dark:text-white"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </section>

          {/* Footer Note */}
          <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
              © 2024 FinanceHub. Built with ❤️ for better finance management.
            </p>
          </div>
        </div>

        {/* Close Button */}
        <div className="sticky bottom-0 bg-gray-50 dark:bg-slate-700/50 px-6 py-4 border-t border-gray-200 dark:border-slate-700">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
