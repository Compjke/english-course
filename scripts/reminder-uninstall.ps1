# Removes the daily IT English reminder.
$taskName = 'IT English daily lesson'
try {
  Unregister-ScheduledTask -TaskName $taskName -Confirm:$false -ErrorAction Stop
  Write-Host "Напоминание '$taskName' удалено."
} catch {
  Write-Host "Задачи '$taskName' нет, удалять нечего."
}
$dir = Join-Path $env:LOCALAPPDATA 'ITEnglish'
if (Test-Path $dir) { Remove-Item -Recurse -Force $dir }
