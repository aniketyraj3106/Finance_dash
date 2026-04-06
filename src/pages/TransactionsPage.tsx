import React from 'react';
import { Plus } from 'lucide-react';
import { useFinanceStore } from '../store/useFinanceStore';
import { TransactionsControls } from '../components/TransactionsControls';
import { TransactionsTable } from '../components/TransactionsTable';
import { StatsBar } from '../components/StatsBar';

interface TransactionsPageProps {
  onOpenAddTransaction: () => void;
}

export const TransactionsPage: React.FC<TransactionsPageProps> = ({
  onOpenAddTransaction,
}) => {
  const { transactions, userRole } = useFinanceStore();

  const handleExport = () => {
    const csv = [
      ['Date', 'Description', 'Category', 'Type', 'Amount'].join(','),
      ...transactions.map((t) =>
        [t.date, t.description, t.category, t.type, t.amount].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `transactions-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Quick Stats Bar */}
      <StatsBar totalTransactions={transactions.length} />
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Transactions
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            View and manage all your transactions in one place.
          </p>
        </div>
        {userRole === 'admin' && (
          <button
            onClick={onOpenAddTransaction}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Plus size={20} />
            Add Transaction
          </button>
        )}
      </div>

      {/* Controls */}
      <TransactionsControls onExport={handleExport} />

      {/* Table */}
      <div className="grid grid-cols-1">
        <TransactionsTable />
      </div>
    </div>
  );
};
