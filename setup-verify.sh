#!/bin/bash
# Project Setup Verification Script

echo "🔍 Verifying Portfolio Setup..."
echo ""

# Check Node.js
if command -v node &> /dev/null; then
    echo "✅ Node.js: $(node -v)"
else
    echo "❌ Node.js not found. Install from https://nodejs.org/"
    exit 1
fi

# Check npm
if command -v npm &> /dev/null; then
    echo "✅ npm: $(npm -v)"
else
    echo "❌ npm not found"
    exit 1
fi

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed"
else
    echo "⚠️  Dependencies not found. Running 'npm install'..."
    npm install
fi

# Check key files
echo ""
echo "📁 Checking project structure..."

files=(
    "index.html"
    "package.json"
    "vite.config.ts"
    "tsconfig.json"
    "src/main.tsx"
    "src/App.tsx"
    "src/components/Header.tsx"
    "src/components/Home.tsx"
    "src/components/About.tsx"
    "src/components/Projects.tsx"
    "src/components/Contact.tsx"
    "src/components/Footer.tsx"
    "src/styles/global.css"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (missing)"
    fi
done

echo ""
echo "🚀 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Run: npm run dev"
echo "2. Open: http://localhost:5173"
echo "3. Edit: Search for '(eg)' to customize"
echo ""
