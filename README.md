# Data Catalogue React App

A React.js application that displays a hierarchical data catalogue with pagination and dataset switching.

## Features
- Login screen (mock authentication)
- Category tree rendered recursively
- Paginated list view (10 items per page)
- Dataset switch (RBI / IMF)
- Optimized rendering for large datasets

## Tech Stack
- React.js
- React Router
- JavaScript (ES6)

## Performance Handling
- Pagination limits DOM rendering
- Memoization (`useMemo`) prevents unnecessary recalculations
- Component separation reduces re-renders

## Run Locally
```bash
npm install
npm start
