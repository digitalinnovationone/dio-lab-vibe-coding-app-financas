# Backend

This minimal backend implements a tiny proof-of-concept API for the ChatMoney MVP.

Included:
- POST /chat  — accepts { text } and attempts to parse an amount and category, then inserts a transaction in SQLite.
- GET /transactions — list recent transactions.

Run locally (quick):
1. cd backend
2. npm install
3. npm run start

Or initialize DB first (optional):
- bash ../scripts/init_db.sh

Environment variables (optional):
- PORT (default: 3001)
- DB_PATH (default: data/chatmoney.db)
