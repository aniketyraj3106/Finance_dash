import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Transaction, UserRole } from '../types';
import { mockTransactions } from './mockData';

interface FinanceStore {
  // Data
  transactions: Transaction[];
  userRole: UserRole;
  darkMode: boolean;

  // Filters
  searchQuery: string;
  filterType: 'all' | 'income' | 'expense';
  sortBy: 'date' | 'amount';
  sortOrder: 'asc' | 'desc';

  // Actions
  setTransactions: (transactions: Transaction[]) => void;
  addTransaction: (transaction: Transaction) => void;
  updateTransaction: (id: string, transaction: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;
  setUserRole: (role: UserRole) => void;
  toggleDarkMode: () => void;
  setSearchQuery: (query: string) => void;
  setFilterType: (type: 'all' | 'income' | 'expense') => void;
  setSortBy: (sort: 'date' | 'amount') => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
}

export const useFinanceStore = create<FinanceStore>()(
  persist(
    (set) => ({
      // Initial state
      transactions: mockTransactions,
      userRole: 'viewer',
      darkMode: false,
      searchQuery: '',
      filterType: 'all',
      sortBy: 'date',
      sortOrder: 'desc',

      // Actions
      setTransactions: (transactions) => set({ transactions }),
      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [transaction, ...state.transactions],
        })),
      updateTransaction: (id, updatedData) =>
        set((state) => ({
          transactions: state.transactions.map((t) =>
            t.id === id ? { ...t, ...updatedData } : t
          ),
        })),
      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),
      setUserRole: (role) => set({ userRole: role }),
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      setSearchQuery: (query) => set({ searchQuery: query }),
      setFilterType: (type) => set({ filterType: type }),
      setSortBy: (sort) => set({ sortBy: sort }),
      setSortOrder: (order) => set({ sortOrder: order }),
    }),
    {
      name: 'finance-store',
    }
  )
);
