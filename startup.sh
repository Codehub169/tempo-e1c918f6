#!/bin/sh
set -e

echo "Ensuring project dependencies are installed..."
# Install all dependencies, including devDependencies needed for build
npm install 

echo "Building the application for production..."
npm run build

echo "Starting Next.js application in production mode on port 9000..."
# Run the production start script defined in package.json
npm run start
