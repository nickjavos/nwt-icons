# @nwt/linear-icons

Приватный пакет с 2 111 SVG из [каталога иконок](https://github.com/nickjavos/linear-icons): 595 контурных и 1 516 залитых. Иконки лежат в `icons/<категория>/<outline|filled>/<имя>.svg`.

## Установка

```sh
npm install git+https://github.com/nickjavos/linear-icons-package.git#v1.0.0
```

Для установки нужен Git с доступом к приватному репозиторию. Например, после входа в GitHub CLI можно настроить Git командой `gh auth setup-git`. Пакет устанавливается непосредственно из GitHub; отдельная публикация в npm не требуется.

## Использование

Путь к SVG зависит от категории и вида. В Vite и других сборщиках с поддержкой импорта SVG:

```jsx
import branchIcon from '@nwt/linear-icons/icons/git/outline/branch.svg';

export function Branch() {
  return <img src={branchIcon} alt="Ветка" width={16} height={16} />;
}
```

В CSS-сборщике с поддержкой ресурсов пакетов:

```css
.branch { background-image: url('@nwt/linear-icons/icons/git/outline/branch.svg'); }
```

Пути, названия, варианты и ключевые слова есть в `manifest.json`, категории — в `categories.json`, палитра статусов — в `palette.json`. Просматривать и искать иконки удобно в [каталоге](https://github.com/nickjavos/linear-icons).

`currentColor` наследует цвет при использовании SVG инлайном; в отдельном `<img>` применяется цвет самого SVG. Возможности импорта SVG и настройки внешнего вида зависят от сборщика проекта.

## Происхождение

SVG извлечены из публичных сборок Linear; сведения об источниках и ограничениях находятся в `variant-audit.json` и [описании каталога](https://github.com/nickjavos/linear-icons). Логотипы Linear и Linear AI исключены. Права на исходные значки этим пакетом не передаются; условия повторного использования не проверены.
