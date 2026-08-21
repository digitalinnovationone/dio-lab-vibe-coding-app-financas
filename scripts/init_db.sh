#!/usr/bin/env bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/.."
SCHEMA_FILE="$DIR/backend/db/schema.sql"
DB_DIR="$DIR/data"
DB_PATH="$DB_DIR/chatmoney.db"

mkdir -p "$DB_DIR"

if command -v sqlite3 >/dev/null 2>&1; then
  sqlite3 "$DB_PATH" < "$SCHEMA_FILE"
  echo "Initialized DB at $DB_PATH"
else
  echo "sqlite3 not found — creating DB file and writing schema to $DB_PATH (sqlite3 recommended)"
  cp /dev/null "$DB_PATH" || true
  echo "-- schema available in $SCHEMA_FILE" > "$DB_PATH"
fi
