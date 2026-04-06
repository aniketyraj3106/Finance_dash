## Copilot Instructions for Finance Dashboard Project

This project is a modern React-based Finance Dashboard with TypeScript, Tailwind CSS, Recharts for visualizations, and Zustand for state management.

### Tech Stack
- React 18.3 with TypeScript
- Vite 5.0 as build tool
- Tailwind CSS 3.3 for styling
- Zustand 4.4 for state management
- Recharts 2.10 for charts
- Lucide React 0.344 for icons

### Project Structure
- `/src/components/` - Reusable React components
- `/src/pages/` - Page-level components (Dashboard, Transactions)
- `/src/store/` - Zustand store and mock data
- `/src/utils/` - Utility functions
- `/src/types/` - TypeScript type definitions

### Key Features
1. Dashboard with financial overview and charts
2. Transaction management (CRUD) with role-based access
3. Search, filter, and sort transactions
4. Dark mode support
5. localStorage persistence
6. CSV export functionality
7. Financial insights and analytics

### Development Setup
```bash
npm install
npm run dev
```

### Common Tasks

**Add new transaction category:**
Edit categories array in `/src/components/AddTransactionModal.tsx`

**Modify color scheme:**
Update `/tailwind.config.js` or chart colors in `/src/store/mockData.ts`

**Add new insights:**
Create calculation functions in `/src/utils/calculations.ts`
Add visualization component if needed

**Change styling:**
Use Tailwind CSS classes or modify `tailwind.config.js`

### Important Notes
- All state is managed through Zustand store
- Data persists via localStorage middleware
- Charts use Recharts library
- No backend required - uses mock data
- Dark mode classes use 'dark:' prefix
- All routes are client-side navigation
