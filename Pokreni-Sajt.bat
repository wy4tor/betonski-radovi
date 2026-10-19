@echo off
title Pokretanje sajta - Betonski radovi
cd /d "%~dp0"
echo ====================================================
echo  Pokretanje sajta 'Betonski radovi'...
echo  Sajt ce se automatski otvoriti u vasem pretrazivacu.
echo  (Da zaustavite sajt, samo zatvorite ovaj prozor)
echo ====================================================
call npm.cmd run dev -- --open
pause
