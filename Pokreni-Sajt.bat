@echo off
title Pokretanje sajta - Betonski Radovi Bojnik
cd /d "%~dp0"
echo ====================================================
echo  Pokretanje sajta 'Betonski Radovi Bojnik'...
echo  Sajt ce se automatski otvoriti u vasem pretrazivacu.
echo  (Da zaustavite sajt, samo zatvorite ovaj prozor)
echo ====================================================
call npm.cmd run dev -- --open
pause
