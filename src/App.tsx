import { useState } from 'react';
import { Header } from './components/Header';
import { AddTransactionModal } from './components/AddTransactionModal';
import { AboutModal } from './components/AboutModal';
import { Footer } from './components/Footer';
import { DashboardPage } from './pages/DashboardPage';
import { TransactionsPage } from './pages/TransactionsPage';
import { useFinanceStore } from './store/useFinanceStore';

type Page = 'dashboard' | 'transactions';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const { darkMode } = useFinanceStore();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-200 flex flex-col">
        <Header onAboutClick={() => setIsAboutModalOpen(true)} />

        {/* Main Content */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="flex gap-4 mb-8 border-b border-gray-200 dark:border-slate-700">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`px-4 py-3 font-medium transition-colors relative ${
                currentPage === 'dashboard'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
              }`}
            >
              Dashboard
              {currentPage === 'dashboard' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-400"></div>
              )}
            </button>
            <button
              onClick={() => setCurrentPage('transactions')}
              className={`px-4 py-3 font-medium transition-colors relative ${
                currentPage === 'transactions'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
              }`}
            >
              Transactions
              {currentPage === 'transactions' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-400"></div>
              )}
            </button>
          </div>

          {/* Page Content */}
          {currentPage === 'dashboard' && (
            <DashboardPage onOpenAddTransaction={() => setIsAddModalOpen(true)} />
          )}
          {currentPage === 'transactions' && (
            <TransactionsPage onOpenAddTransaction={() => setIsAddModalOpen(true)} />
          )}
        </main>

        {/* Add Transaction Modal */}
        <AddTransactionModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />

        {/* About Modal */}
        <AboutModal
          isOpen={isAboutModalOpen}
          onClose={() => setIsAboutModalOpen(false)}
        />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
