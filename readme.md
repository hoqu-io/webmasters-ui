# HOQU Webmasters

SPA приложение личный кабинет веб-мастера

Остальная документация в ./docs

# Разработка
- Перед началом разработки необходимо подтянуть зависимости (в проекте используется yarn)
```
yarn
```
- Запуск в режиме разработки
```
yarn dev
```

# Скрипты
- build - сборка проекта
```
yarn build
```
- dev - запуска в режиме разработчика
```
yarn dev
```
# Сборка

```bash
yarn build
```
После сборки в папке target находятся ассеты необходимые для работы приложения

# Hooks

- git pre-commit (standard)

Проверка стилистики кода (standard) повешена на pre-commit hook