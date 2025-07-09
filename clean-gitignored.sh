#!/bin/bash

# Script to remove all gitignored files and folders from the project
# This script removes files and folders that match patterns in .gitignore files

echo "🧹 Cleaning gitignored files and folders..."

# Remove macOS system files
echo "Removing .DS_Store files..."
find . -name ".DS_Store" -type f -delete

# Remove Node.js related files and folders
echo "Removing node_modules directories..."
find . -name "node_modules" -type d -exec rm -rf {} + 2>/dev/null || true

# Remove Nuxt.js build cache
echo "Removing .nuxt directories..."
find . -name ".nuxt" -type d -exec rm -rf {} + 2>/dev/null || true

# Remove VS Code workspace settings
echo "Removing .vscode directories..."
find . -name ".vscode" -type d -exec rm -rf {} + 2>/dev/null || true

# Remove Rust build artifacts
echo "Removing Rust target directories..."
find . -name "target" -type d -exec rm -rf {} + 2>/dev/null || true

# Remove Tauri generated schemas
echo "Removing Tauri schema directories..."
find . -name "schemas" -type d -exec rm -rf {} + 2>/dev/null || true

# Remove build output directories
echo "Removing dist and dist-ssr directories..."
find . -name "dist" -type d -exec rm -rf {} + 2>/dev/null || true
find . -name "dist-ssr" -type d -exec rm -rf {} + 2>/dev/null || true

# Remove .output directories
echo "Removing .output directories..."
find . -name ".output" -type d -exec rm -rf {} + 2>/dev/null || true

# Remove log files
echo "Removing log files..."
find . -name "*.log" -type f -delete
find . -name "npm-debug.log*" -type f -delete
find . -name "yarn-debug.log*" -type f -delete
find . -name "yarn-error.log*" -type f -delete
find . -name "pnpm-debug.log*" -type f -delete
find . -name "lerna-debug.log*" -type f -delete

# Remove local files
echo "Removing *.local files..."
find . -name "*.local" -type f -delete

# Remove IDE files
echo "Removing IDE files..."
find . -name ".idea" -type d -exec rm -rf {} + 2>/dev/null || true
find . -name "*.suo" -type f -delete
find . -name "*.ntvs*" -type f -delete
find . -name "*.njsproj" -type f -delete
find . -name "*.sln" -type f -delete
find . -name "*.sw?" -type f -delete

# Remove specific Tauri files
# echo "Removing Tauri specific files..."
# find . -name "keystore.properties" -type f -delete

# Remove logs directories (except .git/logs)
echo "Removing logs directories..."
find . -name "logs" -type d -not -path "./.git/*" -exec rm -rf {} + 2>/dev/null || true

echo "✅ Cleanup completed!"
echo ""
echo "Note: If you need to restore the development environment:"
echo "  - Run 'cd tauri-app && npm install' to reinstall dependencies"
echo "  - Build artifacts will be regenerated when you build the project" 
