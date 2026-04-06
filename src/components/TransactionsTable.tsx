import React, { useMemo } from 'react';
import { Trash2, Edit2 } from 'lucide-react';
import { useFinanceStore } from '../store/useFinanceStore';
import { formatCurrency, formatDate } from '../utils/calculations';
import { Card } from './Card';

interface TransactionsTableProps {
  onEdit?: (id: string) => void;
}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({ onEdit }) => {
  const {
    transactions,
    searchQuery,
    filterType,
    sortBy,
    sortOrder,
    deleteTransaction,
    userRole,
  } = useFinanceStore();

  const filteredAndSorted = useMemo(() => {
    let filtered = transactions;

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered.filter((t) => t.type === filterType);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (t) =>
          t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'date') {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === 'amount') {
        comparison = a.amount - b.amount;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return sorted;
  }, [transactions, searchQuery, filterType, sortBy, sortOrder]);

  if (filteredAndSorted.length === 0) {
    return (
      <Card className="col-span-full text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">
          {searchQuery
            ? 'No transactions found matching your search.'
            : 'No transactions yet. Start by adding your first transaction!'}
        </p>
      </Card>
    );
  }

  return (
    <Card className="col-span-full overflow-x-auto">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Recent Transactions
      </h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 dark:border-slate-700">
            <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
              Date
            </th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
              Description
            </th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
              Category
            </th>
            <th className="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
              Amount
            </th>
            {userRole === 'admin' && (
              <th className="text-center py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {filteredAndSorted.map((transaction) => (
            <tr
              key={transaction.id}
              className="border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
            >
              <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                {formatDate(transaction.date)}
              </td>
              <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                {transaction.description}
              </td>
              <td className="py-3 px-4">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium">
                  {transaction.category}
                </span>
              </td>
              <td
                className={`py-3 px-4 text-right font-semibold ${
                  transaction.type === 'income'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {transaction.type === 'income' ? '+' : '-'}
                {formatCurrency(transaction.amount)}
              </td>
              {userRole === 'admin' && (
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => onEdit?.(transaction.id)}
                      className="p-1.5 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors"
                      title="Edit transaction"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this transaction?')) {
                          deleteTransaction(transaction.id);
                        }
                      }}
                      className="p-1.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                      title="Delete transaction"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
