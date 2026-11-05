# @nwt/icons

Приватный пакет с 2 111 SVG: 595 контурных и 1 516 залитых. Иконки лежат в `icons/<категория>/<outline|filled>/<имя>.svg`.

## Установка

```sh
npm install git+https://github.com/nickjavos/nwt-icons.git#v1.1.0
```

Для установки нужен Git с доступом к приватному репозиторию. После входа в GitHub CLI можно настроить Git командой `gh auth setup-git`. Отдельная публикация в npm не требуется.

## Использование

В Vite и других сборщиках с поддержкой импорта SVG:

```jsx
import icon from '@nwt/icons/icons/git/outline/branch.svg';

export function Branch() {
  return <img src={icon} alt="Ветка" width={16} height={16} />;
}
```

Найдите иконку в [каталоге](https://github.com/nickjavos/nwt-icons-catalog) и скопируйте готовую строку импорта из превью. Пути, названия и варианты также есть в `manifest.json`. Имя файла само по себе не является React-компонентом. `currentColor` наследует цвет при использовании SVG инлайном; возможности импорта зависят от сборщика проекта.

Права на сторонние значки этим пакетом не передаются; условия повторного использования не проверены.
