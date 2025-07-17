@echo off
cd /d %~dp0
start http://localhost:3000
powershell -WindowStyle Hidden -Command "Start-Process 'npm' -ArgumentList 'start' -WindowStyle Hidden"
