# Registers a daily Windows notification that reminds you to do the lesson.
# Usage: powershell -ExecutionPolicy Bypass -File scripts\reminder-install.ps1 -Time 19:00 -Url "https://<you>.github.io/it-english/"
param(
  [string]$Time = '19:00',
  [string]$Url = 'http://localhost:5173/'
)

$ErrorActionPreference = 'Stop'
$taskName = 'IT English daily lesson'

if ($Time -notmatch '^\d{1,2}:\d{2}$') { throw "Время в формате ЧЧ:ММ, например 19:00. Получено: $Time" }

# Keep a copy outside the project so the reminder keeps working if the folder moves.
$dir = Join-Path $env:LOCALAPPDATA 'ITEnglish'
New-Item -ItemType Directory -Force $dir | Out-Null
$toastScript = Join-Path $dir 'reminder-toast.ps1'
Copy-Item (Join-Path $PSScriptRoot 'reminder-toast.ps1') $toastScript -Force

$taskArgs = "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$toastScript`" -Url `"$Url`""
$action = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument $taskArgs
$trigger = New-ScheduledTaskTrigger -Daily -At ([datetime]::ParseExact($Time.PadLeft(5, '0'), 'HH:mm', $null))
# StartWhenAvailable: if the PC was off at that time, show it after you log in.
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -ExecutionTimeLimit (New-TimeSpan -Minutes 5)

Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings `
  -Description 'Напоминание пройти урок IT English' -Force | Out-Null

Write-Host "Готово: напоминание '$taskName' каждый день в $Time."
Write-Host "Проверить сейчас: Start-ScheduledTask -TaskName '$taskName'"
Write-Host 'Удалить: powershell -ExecutionPolicy Bypass -File scripts\reminder-uninstall.ps1'
