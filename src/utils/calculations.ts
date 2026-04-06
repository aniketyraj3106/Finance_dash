import { Transaction, SummaryData, ChartDataPoint, CategoryBreakdown } from '../types';

export const calculateSummary = (transactions: Transaction[]): SummaryData => {
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  return {
    totalIncome: income,
    totalExpenses: expenses,
    totalBalance: income - expenses,
  };
};

export const generateChartData = (transactions: Transaction[]): ChartDataPoint[] => {
  const grouped: Record<string, { income: number; expense: number }> = {};

  transactions.forEach((t) => {
    if (!grouped[t.date]) {
      grouped[t.date] = { income: 0, expense: 0 };
    }
    if (t.type === 'income') {
      grouped[t.date].income += t.amount;
    } else {
      grouped[t.date].expense += t.amount;
    }
  });

  return Object.entries(grouped)
    .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
    .map(([date, data]) => ({
      date,
      income: data.income,
      expense: data.expense,
      balance: data.income - data.expense,
    }));
};

export const getCategoryBreakdown = (transactions: Transaction[]): CategoryBreakdown[] => {
  const expenses = transactions.filter((t) => t.type === 'expense');
  const grouped: Record<string, number> = {};

  expenses.forEach((t) => {
    grouped[t.category] = (grouped[t.category] || 0) + t.amount;
  });

  const total = Object.values(grouped).reduce((sum, val) => sum + val, 0);

  return Object.entries(grouped)
    .map(([name, value]) => ({
      name,
      value,
      percentage: total > 0 ? (value / total) * 100 : 0,
    }))
    .sort((a, b) => b.value - a.value);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const getHighestSpendingCategory = (transactions: Transaction[]): string => {
  const breakdown = getCategoryBreakdown(transactions);
  return breakdown.length > 0 ? breakdown[0].name : 'N/A';
};

export const getMonthlyComparison = (
  transactions: Transaction[]
): { currentMonth: number; lastMonth: number } => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const currentMonthExpenses = transactions
    .filter((t) => {
      const date = new Date(t.date);
      return (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear &&
        t.type === 'expense'
      );
    })
    .reduce((sum, t) => sum + t.amount, 0);

  const lastMonthDate = new Date(currentYear, currentMonth - 1);
  const lastMonthExpenses = transactions
    .filter((t) => {
      const date = new Date(t.date);
      return (
        date.getMonth() === lastMonthDate.getMonth() &&
        date.getFullYear() === lastMonthDate.getFullYear() &&
        t.type === 'expense'
      );
    })
    .reduce((sum, t) => sum + t.amount, 0);

  return {
    currentMonth: currentMonthExpenses,
    lastMonth: lastMonthExpenses,
  };
};

export const getTotalSavings = (transactions: Transaction[]): number => {
  const summary = calculateSummary(transactions);
  return summary.totalIncome - summary.totalExpenses;
};

export const generateUniqueId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
