# IT English: от повторения до повышения (A2 → B2+)

Ежедневный интерактивный курс английского для IT. Сквозной сюжет: ты junior-разработчик в вымышленной компании Brightloop, а в финале проходишь собеседование на повышение.

## Запуск

```powershell
npm install
npm run dev        # http://localhost:5173
npm test           # тесты движка и контента
npm run build      # сборка в dist/ (PWA)
```

## Урок (~75 минут)
Разминка с карточками (FSRS) → эпизод сюжета → грамматика → лексика → диктант → говорение (shadowing и распознавание речи) → письмо.
Новый урок открывается раз в день. Каждые 7 уроков идёт чекпоинт: слабые темы автоматически возвращаются в повторение.

## Телефон: GitHub Pages
1. Создай пустой репозиторий на GitHub, например `it-english`.
2. В папке `course`:
   ```powershell
   git init; git add .; git commit -m "IT English course"
   git branch -M main
   git remote add origin https://github.com/<you>/it-english.git
   git push -u origin main
   ```
3. В репозитории: Settings → Pages → Source: **GitHub Actions**. Workflow `.github/workflows/deploy.yml` сам соберёт и опубликует курс.
4. Открой `https://<you>.github.io/it-english/` на телефоне → «Добавить на главный экран».
5. Впиши этот адрес в Настройки → «Адрес курса». От него зависят QR-код, `.ics` и команда для Windows.

## Напоминания
- **Календарь (телефон и ПК):** Настройки → «Скачать .ics». Это ежедневное событие с уведомлением.
- **Windows:** `powershell -ExecutionPolicy Bypass -File scripts\reminder-install.ps1 -Time 19:00 -Url "<адрес курса>"`. Удаление: `scripts\reminder-uninstall.ps1`.
- **В браузере:** пока курс открыт, он напомнит уведомлением, если урок ещё не пройден.

## Как добавлять уроки
Один урок — один файл `src/content/levels/<N-level>/<NN-slug>.ts` (папки `1-a2`, `2-b1`, `3-b1plus`, `4-b2`, `5-b2plus`). Порядок курса задаётся сортировкой путей. Образец: `1-a2/01-welcome.ts`.
Правила (их проверяет `tests/content.test.ts`):
- в тексте только `**bold**` и `*italic*`;
- gap-ответ не может быть пустым, поэтому «без артикля» делай через choice;
- `chunk` в лексике должен буквально встречаться в `example`;
- образец в speak содержит все `keywords`, и keywords не начинаются с голого сокращения (`'d better` → `you'd better`);
- fix-предложение не должно приниматься как верный ответ;
- в уроке не меньше 40 заданий с оценкой, длительность 55–90 минут.
