# ChatMoney Frontend (Next.js)

Minimal Next.js app that provides a simple chat UI to send messages to the backend scaffold at `http://localhost:3001/chat`.

Quick start
1. From the repo root, switch to the scaffold branch and install deps:
   - git checkout structure/mvp-scaffold
   - cd frontend/web
   - npm install
2. Start the backend (see backend/README.md):
   - cd backend
   - npm install
   - npm start
3. Start the frontend:
   - cd frontend/web
   - npm run dev
4. Open http://localhost:3000 in your browser.

Environment
- The frontend will call the backend URL defined in `NEXT_PUBLIC_BACKEND_URL` if provided, otherwise it uses `http://localhost:3001`.

Notes
- This is a minimal prototype UI for demonstrating the chat flow and integrating with the backend prototype. Improve accessibility and styling before user tests.
