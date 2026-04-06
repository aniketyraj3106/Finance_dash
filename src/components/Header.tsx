import { Moon, Sun, Settings, LogOut, HelpCircle } from 'lucide-react';
import { useFinanceStore } from '../store/useFinanceStore';
import { useState } from 'react';

export const Header: React.FC<{ onAboutClick?: () => void }> = ({ onAboutClick }) => {
  const { darkMode, toggleDarkMode, userRole, setUserRole } = useFinanceStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-slate-900 dark:to-slate-800 shadow-lg z-50 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand Section */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white dark:bg-blue-500 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
              <span className="text-xl font-bold text-blue-600 dark:text-white">💰</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">FinanceHub</h1>
              <p className="text-blue-100 text-xs">Smart Finance Management</p>
            </div>
          </div>

          {/* Center - About Button */}
          <button
            onClick={onAboutClick}
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-white hover:bg-blue-500 dark:hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium"
          >
            <HelpCircle size={18} />
            About
          </button>

          {/* Controls Section */}
          <div className="flex items-center gap-3">
            {/* Role Selector */}
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
              <span className="text-white text-sm font-medium hidden xs:inline">Role:</span>
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value as 'viewer' | 'admin')}
                className="px-2 py-1 bg-white/20 text-white rounded border border-white/30 text-sm font-medium cursor-pointer hover:bg-white/30 transition-colors placeholder-white/50"
              >
                <option value="viewer" className="dark:text-slate-900">👁️ Viewer</option>
                <option value="admin" className="dark:text-slate-900">🔧 Admin</option>
              </select>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Settings Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Settings"
              >
                <Settings size={20} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden">
                  <button className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 text-sm flex items-center gap-2">
                    <Settings size={16} />
                    Settings
                  </button>
                  <button className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 text-sm flex items-center gap-2 border-t border-gray-200 dark:border-slate-700">
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
