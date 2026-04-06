// Type definitions for the Finance Dashboard
export type TransactionType = 'income' | 'expense';
export type UserRole = 'viewer' | 'admin';

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: string;
  description: string;
  type: TransactionType;
}

export interface SummaryData {
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
}

export interface ChartDataPoint {
  date: string;
  balance?: number;
  income?: number;
  expense?: number;
}

export interface CategoryBreakdown {
  name: string;
  value: number;
  percentage: number;
}
