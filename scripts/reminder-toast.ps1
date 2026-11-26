# Shows the "time for your lesson" Windows notification.
# Clicking the notification opens the course URL in the default browser.
param(
  [string]$Url = 'http://localhost:5173/'
)

[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Xml.Dom.XmlDocument, Windows.Data.Xml.Dom.XmlDocument, ContentType = WindowsRuntime] | Out-Null

$safeUrl = [System.Security.SecurityElement]::Escape($Url)
$xml = @"
<toast activationType="protocol" launch="$safeUrl" scenario="reminder">
  <visual>
    <binding template="ToastGeneric">
      <text>IT English: пора на урок 🚀</text>
      <text>Урок дня (~75 минут) и карточки повторения ждут. Не прерывай серию!</text>
    </binding>
  </visual>
  <actions>
    <action content="Открыть курс" activationType="protocol" arguments="$safeUrl" />
    <action content="Позже" activationType="system" arguments="dismiss" />
  </actions>
</toast>
"@

$doc = New-Object Windows.Data.Xml.Dom.XmlDocument
$doc.LoadXml($xml)
$toast = New-Object Windows.UI.Notifications.ToastNotification $doc
# PowerShell's own app id: always registered, so the toast is allowed to show.
$appId = '{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\WindowsPowerShell\v1.0\powershell.exe'
[Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier($appId).Show($toast)
