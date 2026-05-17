@echo off
cd /d "%~dp0"
echo Starting English Check-in for LAN preview...
echo Keep this window open while using the phone QR code.
python -m http.server 8765 --bind 0.0.0.0
