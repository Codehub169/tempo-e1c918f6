#!/bin/sh
set -e

# This script starts the Next.js application in production mode on port 9000.
# It relies on the "start" script defined in package.json.

echo "Starting Next.js application in production mode on port 9000..."

# Run the production start script defined in package.json
npm run start
