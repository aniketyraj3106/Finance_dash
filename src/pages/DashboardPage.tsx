import React, { useMemo } from 'react';
import { Plus } from 'lucide-react';
import { useFinanceStore } from '../store/useFinanceStore';
import {
  calculateSummary,
  formatCurrency,
  generateChartData,
  getCategoryBreakdown,
  getHighestSpendingCategory,
  getMonthlyComparison,
  getTotalSavings,
} from '../utils/calculations';
import { SummaryCard } from '../components/Card';
import {
  IncomeExpenseChart,
  CategoryBreakdownChart,
  BalanceChartOverTime,
} from '../components/Charts';
import { InsightsSection } from '../components/InsightsSection';
import { StatsBar } from '../components/StatsBar';
import { WelcomeBanner } from '../components/WelcomeBanner';

interface DashboardPageProps {
  onOpenAddTransaction: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  onOpenAddTransaction,
}) => {
  const { transactions, userRole } = useFinanceStore();

  const summary = useMemo(() => calculateSummary(transactions), [transactions]);
  const chartData = useMemo(() => generateChartData(transactions), [transactions]);
  const categoryBreakdown = useMemo(
    () => getCategoryBreakdown(transactions),
    [transactions]
  );
  const highestCategory = useMemo(
    () => getHighestSpendingCategory(transactions),
    [transactions]
  );
  const monthlyComparison = useMemo(
    () => getMonthlyComparison(transactions),
    [transactions]
  );
  const savings = useMemo(() => getTotalSavings(transactions), [transactions]);

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <WelcomeBanner />

      {/* Quick Stats Bar */}
      <StatsBar totalTransactions={transactions.length} />

      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back! Here's your financial overview.
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="Total Balance"
          value={formatCurrency(summary.totalBalance)}
          icon={<span className="text-2xl">💰</span>}
          color="blue"
        />
        <SummaryCard
          title="Total Income"
          value={formatCurrency(summary.totalIncome)}
          icon={<span className="text-2xl">📈</span>}
          color="green"
        />
        <SummaryCard
          title="Total Expenses"
          value={formatCurrency(summary.totalExpenses)}
          icon={<span className="text-2xl">📉</span>}
          color="red"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <IncomeExpenseChart data={chartData} />
        <CategoryBreakdownChart data={categoryBreakdown} />
      </div>

      {/* Balance Chart */}
      <BalanceChartOverTime data={chartData} />

      {/* Insights */}
      <InsightsSection
        highestCategory={highestCategory}
        monthlyComparison={monthlyComparison}
        savings={savings}
      />
    </div>
  );
};
