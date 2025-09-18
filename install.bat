@echo off
echo Installing Admin Panel Dependencies...
echo.

cd /d "%~dp0"

echo Checking if Node.js is installed...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed. Please install Node.js first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js found. Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies.
    pause
    exit /b 1
)

echo.
echo Installation completed successfully!
echo.
echo To start the admin panel, run:
echo   npm run dev
echo.
echo Then open your browser to: http://localhost:3000
echo.
pause
