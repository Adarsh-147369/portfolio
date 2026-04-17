#!/usr/bin/env bash
# exit on error
set -o errexit

# Install backend dependencies
cd backend
pip install -r requirements.txt

# Install frontend dependencies and build
cd ../frontend
npm install
npm run build

# Move build to backend folder
cd ..
