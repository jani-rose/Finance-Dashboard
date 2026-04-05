# Finance Dashboard UI

A clean and interactive Finance Dashboard UI built using HTML, CSS, and JavaScript.  
This project simulates a simple financial tracking dashboard that allows users to view summaries, explore transactions, and understand spending patterns.

---

# Project Overview

This dashboard demonstrates how financial data can be visualized and managed on the frontend using mock data.

The interface allows users to:

- View financial summaries
- Explore transaction history
- Filter and search transactions
- Add new transactions (Admin role)
- View spending insights
- Toggle dark mode
- Persist data using local storage

The project focuses on UI structure, data handling, and user interaction rather than backend integration.

---

# Features

## Dashboard Overview

- Total Balance summary card
- Total Income summary card
- Total Expenses summary card
- Line chart showing balance trend (time-based visualization)
- Pie chart showing spending distribution (categorical visualization)

---

## Transactions Section

Displays transaction list including:

- Date  
- Amount  
- Category  
- Type (Income / Expense)

Supports:

- Search by category
- Filter by transaction type
- Sort transactions by amount
- Add new transactions (Admin only)

---

## Role-Based UI

Role switching is simulated using a dropdown.

### Viewer Role

- Can view dashboard data
- Cannot add transactions

### Admin Role

- Can add new transactions
- Dashboard updates dynamically

---

## Insights Section

Automatically generates useful observations:

- Highest spending category
- Monthly expense comparison
- Spending pattern insights

---

## UI and UX Features

- Clean card-based layout
- Responsive design for smaller screens
- Dark mode toggle
- Clear visual hierarchy
- Organized layout spacing

---

## Data Persistence

Transactions are saved using:

```javascript
localStorage
