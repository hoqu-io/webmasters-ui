# HOQU Webmasters

## Стилистика кода
[Standard](https://standardjs.com/)

## Используемые библиотеки

- react + react-dom - в качестве основы приложения
- redux + saga - дата слой приложения
- i18next - локализации
- material-ui@next - ui

## Общее описание структуры проекта

- ./src/components - компоненты используемы в проекте
- ./src/data - дата слой приложения (radux + saga)
- ./src/layout - компоненты верстки
- ./src/resources - ресурсы (текст/изображения/etc)

## Договоренности

### Компоненты

- Stateless компонент это функция
- Если вы делаете не stateless компонент, то большая вероятность, что вы делаете что-то не то

### Data слой приложения
- actions: данные передаются в свойстве payload
- actions: type of saga effects start with *
- reducers: необходимо описание каждого reducer