# MVP scaffold for ChatMoney (branch: structure/mvp-scaffold)

This branch contains a minimal scaffold to start implementing the ChatMoney MVP described in the PRD.

Structure (short):
- frontend/  — place for web or mobile client
- backend/   — API, NLP parser and DB access
- infra/     — docker-compose examples
- data/      — schema and sample seeds
- docs/      — PRD and design artifacts
- scripts/   — helper scripts (db init, seed)

What I added in this commit:
- Minimal backend that accepts POST /chat and stores extracted transactions in SQLite.
- DB schema and an init script.
- READMEs for frontend/backend and a SCAFFOLD.md that explains running the prototype.

Notes:
- This is intentionally lightweight: the NLP is a simple regex-based parser to bootstrap the flow.
- If you prefer a different stack (Flutter, Postgres, local NLP), tell me and I will adapt the scaffold.
