# Практичне заняття 5 — GitHub Actions

Автор: Даніїл Лисичкін.

Node.js-проєкт: `node index.js` виводить Hello world!, а `npm run build`
створює `dist/index.html`. Збірка може запускатися повторно.

## Локальний запуск

```bash
npm install
node index.js
npm run build
```

## CI

Файл `.github/workflows/ci.yml` запускається при push у `main`.
Послідовність: checkout → Node.js 24 → npm install → npm run build →
перевірка непорожнього dist/index.html → збереження артефакту
`lysychkin-node-build`. Додано ручний запуск workflow_dispatch.

## Посилання для перевірки

- Репозиторій: https://github.com/lisdanilka-creator/Lysychkin-node-ci
- Запуски CI: https://github.com/lisdanilka-creator/Lysychkin-node-ci/actions

У вкладці Actions відкрийте останній запуск Node.js CI, перевірте його статус
і завантажте артефакт lysychkin-node-build із розділу Artifacts.
