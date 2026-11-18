# @nwt/icons

Публичный пакет с 2 111 SVG в 22 категориях и 69 React-компонентами.

## Установка

Установите пакет напрямую из публичного репозитория. Для установки нужен Git.

```sh
npm install git+https://github.com/nickjavos/nwt-icons.git#v1.3.8
```

Для React-компонентов нужен React 18 или новее. SVG можно использовать без React.

## React

```jsx
import { CalendarIcon, SearchIcon } from '@nwt/icons/react';

<CalendarIcon variant="regular" size={20} color="currentColor" />
<SearchIcon variant="thin" size={20} title="Поиск" />
```

Доступные варианты — `thin`, `light`, `regular` и `filled`. По умолчанию используется `regular`. Иконки без `title`, `aria-label` или `aria-labelledby` скрыты от скринридера. Для некоторых контурных иконок вариант `filled` использует более плотную линию.

### Все React-компоненты

- `ArrowDownIcon`
- `ArrowLeftIcon`
- `ArrowRightIcon`
- `ArrowUpIcon`
- `AttachmentIcon`
- `BacklogIcon`
- `BellIcon`
- `BranchIcon`
- `CalendarAddIcon`
- `CalendarDoneIcon`
- `CalendarIcon`
- `CalendarOverdueIcon`
- `CanceledIcon`
- `CheckCircleIcon`
- `CheckIcon`
- `ChevronDownIcon`
- `ChevronLeftIcon`
- `ChevronRightIcon`
- `ChevronUpIcon`
- `ClockIcon`
- `CloseIcon`
- `CodeIcon`
- `CommitIcon`
- `CopyIcon`
- `DoneIcon`
- `DownloadIcon`
- `DuplicateIcon`
- `EditIcon`
- `ExternalLinkIcon`
- `EyeIcon`
- `FileIcon`
- `FileTextIcon`
- `FilterIcon`
- `FolderIcon`
- `ForkIcon`
- `GlobeIcon`
- `HeartIcon`
- `HomeIcon`
- `InProgressIcon`
- `InReviewIcon`
- `InfoIcon`
- `LabelIcon`
- `LinkIcon`
- `LockIcon`
- `MessageIcon`
- `MilestoneIcon`
- `MinusIcon`
- `MoreHorizontalIcon`
- `MoreVerticalIcon`
- `PlusIcon`
- `PriorityHighIcon`
- `PriorityLowIcon`
- `PriorityMediumIcon`
- `PriorityNoneIcon`
- `PriorityUrgentIcon`
- `PullRequestIcon`
- `PullRequestMergedIcon`
- `RefreshIcon`
- `RepositoryIcon`
- `SearchIcon`
- `SettingsIcon`
- `StarIcon`
- `TodoIcon`
- `TrashIcon`
- `UnlockIcon`
- `UploadIcon`
- `UserIcon`
- `UsersIcon`
- `WarningIcon`

## SVG

Файлы находятся в `icons/<категория>/<outline|filled>/<имя>.svg`. Пример импорта в Vite и других сборщиках с поддержкой SVG:

```jsx
import icon from '@nwt/icons/icons/git/outline/branch.svg';

export function Branch() {
  return <img src={icon} alt="Ветка" width={16} height={16} />;
}
```

Для инлайнового SVG с `currentColor` цвет задаётся через CSS. Имена SVG-файлов не означают, что для них есть React-компоненты. Метаданные и полные пути также доступны в [manifest.json](./manifest.json).

## Все SVG-иконки

Нажмите на категорию, чтобы открыть список путей. Добавьте `@nwt/icons/` перед путём для импорта из пакета.

<details>
<summary>Git и ревью (git) — 38</summary>

**outline**

- `icons/git/outline/approved.svg`
- `icons/git/outline/branch-git.svg`
- `icons/git/outline/branch.svg`
- `icons/git/outline/changes-requested.svg`
- `icons/git/outline/checks-failed.svg`
- `icons/git/outline/checks-passed.svg`
- `icons/git/outline/closed.svg`
- `icons/git/outline/compare-branches.svg`
- `icons/git/outline/copy-branch-name.svg`
- `icons/git/outline/diff-files-excluded.svg`
- `icons/git/outline/draft.svg`
- `icons/git/outline/git-branch-sync.svg`
- `icons/git/outline/git-fork-arrow.svg`
- `icons/git/outline/git-fork.svg`
- `icons/git/outline/git-routing.svg`
- `icons/git/outline/in-review.svg`
- `icons/git/outline/merge-conflict.svg`
- `icons/git/outline/merge-queue-git.svg`
- `icons/git/outline/merge-queue.svg`
- `icons/git/outline/merged.svg`
- `icons/git/outline/open.svg`
- `icons/git/outline/pull-request-approved.svg`
- `icons/git/outline/pull-request-checklist.svg`
- `icons/git/outline/pull-request-closed.svg`
- `icons/git/outline/pull-request-draft.svg`
- `icons/git/outline/pull-request-merged.svg`
- `icons/git/outline/pull-request-open.svg`
- `icons/git/outline/review-comment-approved.svg`
- `icons/git/outline/review-finding-excluded.svg`
- `icons/git/outline/split-branch.svg`
- `icons/git/outline/stacked-diff-conflict.svg`
- `icons/git/outline/stacked-diffs.svg`

**filled**

- `icons/git/filled/approved-badge.svg`
- `icons/git/filled/review-progress-complete.svg`
- `icons/git/filled/review-progress-half.svg`
- `icons/git/filled/review-progress-one-quarter.svg`
- `icons/git/filled/review-progress-three-quarters.svg`
- `icons/git/filled/unified-diff-asterisk.svg`

</details>

<details>
<summary>Задачи и статусы (tasks) — 84</summary>

**outline**

- `icons/tasks/outline/add-customer-request.svg`
- `icons/tasks/outline/add-sub-issue-alternate.svg`
- `icons/tasks/outline/backlog-ring-alternate.svg`
- `icons/tasks/outline/backlog-spinner.svg`
- `icons/tasks/outline/backlog.svg`
- `icons/tasks/outline/blocking-issue-interface.svg`
- `icons/tasks/outline/blocking-issue.svg`
- `icons/tasks/outline/cancel-mark.svg`
- `icons/tasks/outline/convert-issue.svg`
- `icons/tasks/outline/create-related-issue.svg`
- `icons/tasks/outline/create-sub-issue.svg`
- `icons/tasks/outline/customer-request.svg`
- `icons/tasks/outline/done-mark.svg`
- `icons/tasks/outline/duplicate-outline.svg`
- `icons/tasks/outline/duplicated-by.svg`
- `icons/tasks/outline/estimate-dashed-triangle.svg`
- `icons/tasks/outline/estimate-outline.svg`
- `icons/tasks/outline/estimate-triangle.svg`
- `icons/tasks/outline/estimate.svg`
- `icons/tasks/outline/flag-in-square.svg`
- `icons/tasks/outline/flag-stacked.svg`
- `icons/tasks/outline/hexagon-with-minus.svg`
- `icons/tasks/outline/in-progress-alternate.svg`
- `icons/tasks/outline/in-progress.svg`
- `icons/tasks/outline/in-review.svg`
- `icons/tasks/outline/inherited-relation.svg`
- `icons/tasks/outline/issue-properties.svg`
- `icons/tasks/outline/issue-status-backlog.svg`
- `icons/tasks/outline/issue-status-review.svg`
- `icons/tasks/outline/issue-status-started.svg`
- `icons/tasks/outline/issue-status-todo.svg`
- `icons/tasks/outline/label-interface.svg`
- `icons/tasks/outline/label.svg`
- `icons/tasks/outline/move-to-parent.svg`
- `icons/tasks/outline/my-issues-frame.svg`
- `icons/tasks/outline/my-issues.svg`
- `icons/tasks/outline/no-priority.svg`
- `icons/tasks/outline/parent-issue.svg`
- `icons/tasks/outline/priority0.svg`
- `icons/tasks/outline/progress-half-ring.svg`
- `icons/tasks/outline/pulse-backlog-ring.svg`
- `icons/tasks/outline/relationship-bridge.svg`
- `icons/tasks/outline/resolved.svg`
- `icons/tasks/outline/sub-issue-sharing.svg`
- `icons/tasks/outline/sub-issue.svg`
- `icons/tasks/outline/subissue.svg`
- `icons/tasks/outline/todo.svg`

**filled**

- `icons/tasks/filled/add-relation.svg`
- `icons/tasks/filled/alert.svg`
- `icons/tasks/filled/blocked-by-issue-interface.svg`
- `icons/tasks/filled/blocked-by-issue.svg`
- `icons/tasks/filled/canceled-filled.svg`
- `icons/tasks/filled/canceled.svg`
- `icons/tasks/filled/completed-filled.svg`
- `icons/tasks/filled/done.svg`
- `icons/tasks/filled/duplicate-mark.svg`
- `icons/tasks/filled/duplicate.svg`
- `icons/tasks/filled/estimate-complete.svg`
- `icons/tasks/filled/exclamation-mark.svg`
- `icons/tasks/filled/flag-interface.svg`
- `icons/tasks/filled/flag.svg`
- `icons/tasks/filled/high-priority.svg`
- `icons/tasks/filled/issue-status-done.svg`
- `icons/tasks/filled/issue-status-triage.svg`
- `icons/tasks/filled/low-priority.svg`
- `icons/tasks/filled/medium-priority.svg`
- `icons/tasks/filled/priority-dash.svg`
- `icons/tasks/filled/priority1.svg`
- `icons/tasks/filled/priority2.svg`
- `icons/tasks/filled/priority3.svg`
- `icons/tasks/filled/priority4.svg`
- `icons/tasks/filled/remove-flag.svg`
- `icons/tasks/filled/status-canceled-alternate.svg`
- `icons/tasks/filled/status-canceled.svg`
- `icons/tasks/filled/status-done-alternate.svg`
- `icons/tasks/filled/status-duplicate-alternate.svg`
- `icons/tasks/filled/status-duplicate.svg`
- `icons/tasks/filled/status-triage-alternate.svg`
- `icons/tasks/filled/ticket.svg`
- `icons/tasks/filled/triage-mark.svg`
- `icons/tasks/filled/triage-status.svg`
- `icons/tasks/filled/triage.svg`
- `icons/tasks/filled/urgent-priority.svg`
- `icons/tasks/filled/warning-triangle-filled.svg`

</details>

<details>
<summary>Проекты и milestones (projects) — 39</summary>

**outline**

- `icons/projects/outline/add-view.svg`
- `icons/projects/outline/custom-view.svg`
- `icons/projects/outline/cycle-interface.svg`
- `icons/projects/outline/cycle.svg`
- `icons/projects/outline/hexagon-backlog.svg`
- `icons/projects/outline/hexagon-canceled.svg`
- `icons/projects/outline/hexagon-completed.svg`
- `icons/projects/outline/hexagon-paused.svg`
- `icons/projects/outline/initiative-active.svg`
- `icons/projects/outline/initiative-backlog.svg`
- `icons/projects/outline/initiative-canceled.svg`
- `icons/projects/outline/initiative-complete.svg`
- `icons/projects/outline/initiative-expanded.svg`
- `icons/projects/outline/initiative-interface.svg`
- `icons/projects/outline/initiative-progress.svg`
- `icons/projects/outline/initiative.svg`
- `icons/projects/outline/layers.svg`
- `icons/projects/outline/milestone-none-alternate.svg`
- `icons/projects/outline/milestone-none.svg`
- `icons/projects/outline/milestone-planned-outline.svg`
- `icons/projects/outline/milestone-status-planned.svg`
- `icons/projects/outline/milestone-status-started.svg`
- `icons/projects/outline/none.svg`
- `icons/projects/outline/planned.svg`
- `icons/projects/outline/project-decorative.svg`
- `icons/projects/outline/project-rounded.svg`
- `icons/projects/outline/project.svg`
- `icons/projects/outline/release.svg`
- `icons/projects/outline/started.svg`
- `icons/projects/outline/target.svg`
- `icons/projects/outline/timeline-milestone.svg`

**filled**

- `icons/projects/filled/done.svg`
- `icons/projects/filled/hexagon-stopped.svg`
- `icons/projects/filled/layer-stack.svg`
- `icons/projects/filled/milestone-done-filled.svg`
- `icons/projects/filled/milestone-filled.svg`
- `icons/projects/filled/milestone-status-done.svg`
- `icons/projects/filled/stacked-milestones-filled.svg`
- `icons/projects/filled/stacked-milestones.svg`

</details>

<details>
<summary>Навигация и поиск (navigation) — 123</summary>

**outline**

- `icons/navigation/outline/add-window.svg`
- `icons/navigation/outline/adjustments.svg`
- `icons/navigation/outline/arrow-circle-down-right.svg`
- `icons/navigation/outline/arrow-down-alternate.svg`
- `icons/navigation/outline/arrow-down.svg`
- `icons/navigation/outline/arrow-left.svg`
- `icons/navigation/outline/arrow-right-alternate.svg`
- `icons/navigation/outline/arrow-top-right-alternate.svg`
- `icons/navigation/outline/arrow-top-right.svg`
- `icons/navigation/outline/arrow-up-alternate.svg`
- `icons/navigation/outline/arrow-up-circle.svg`
- `icons/navigation/outline/arrow-up.svg`
- `icons/navigation/outline/chevron-down-bold.svg`
- `icons/navigation/outline/chevron-down-small.svg`
- `icons/navigation/outline/chevron-down.svg`
- `icons/navigation/outline/chevron-left-alternate.svg`
- `icons/navigation/outline/chevron-left.svg`
- `icons/navigation/outline/chevron-right.svg`
- `icons/navigation/outline/chevron-up.svg`
- `icons/navigation/outline/chevrons-vertical.svg`
- `icons/navigation/outline/click-button.svg`
- `icons/navigation/outline/close-all-tabs.svg`
- `icons/navigation/outline/close-tabs.svg`
- `icons/navigation/outline/close-window.svg`
- `icons/navigation/outline/collapse-chevron-large-source.svg`
- `icons/navigation/outline/collapse-chevron-large.svg`
- `icons/navigation/outline/collapse-chevron-small.svg`
- `icons/navigation/outline/collapse-section-left.svg`
- `icons/navigation/outline/collapse-view.svg`
- `icons/navigation/outline/cursor-with-line.svg`
- `icons/navigation/outline/dashed-selection.svg`
- `icons/navigation/outline/direction.svg`
- `icons/navigation/outline/duplicate-spinner.svg`
- `icons/navigation/outline/exit-window-left-alternate.svg`
- `icons/navigation/outline/exit-window-left.svg`
- `icons/navigation/outline/exit-window-right.svg`
- `icons/navigation/outline/expand-chevron-large-alternate.svg`
- `icons/navigation/outline/expand-chevron-large.svg`
- `icons/navigation/outline/expand-chevron-small.svg`
- `icons/navigation/outline/expand-section-right.svg`
- `icons/navigation/outline/expand-view.svg`
- `icons/navigation/outline/external-link-bold.svg`
- `icons/navigation/outline/eye-hidden-alternate.svg`
- `icons/navigation/outline/eye-hidden.svg`
- `icons/navigation/outline/eye.svg`
- `icons/navigation/outline/filter-lines.svg`
- `icons/navigation/outline/filter-parentheses.svg`
- `icons/navigation/outline/focus-center.svg`
- `icons/navigation/outline/focus-dot.svg`
- `icons/navigation/outline/grouped-menu.svg`
- `icons/navigation/outline/home-outline.svg`
- `icons/navigation/outline/information-circle-outline.svg`
- `icons/navigation/outline/loading-rays.svg`
- `icons/navigation/outline/loading-ring.svg`
- `icons/navigation/outline/loading-segmented.svg`
- `icons/navigation/outline/loading-spokes.svg`
- `icons/navigation/outline/move-all-directions.svg`
- `icons/navigation/outline/open-external-alternate.svg`
- `icons/navigation/outline/open-external-framed.svg`
- `icons/navigation/outline/open-external.svg`
- `icons/navigation/outline/open-link.svg`
- `icons/navigation/outline/ordering-arrows.svg`
- `icons/navigation/outline/pin-alternate.svg`
- `icons/navigation/outline/pin-window.svg`
- `icons/navigation/outline/pointer-narrow-outline.svg`
- `icons/navigation/outline/pointer-outline.svg`
- `icons/navigation/outline/repeat-arrows.svg`
- `icons/navigation/outline/route-search.svg`
- `icons/navigation/outline/scan-minus.svg`
- `icons/navigation/outline/search-decorative.svg`
- `icons/navigation/outline/search-in-selection.svg`
- `icons/navigation/outline/search-interface.svg`
- `icons/navigation/outline/search-window.svg`
- `icons/navigation/outline/search.svg`
- `icons/navigation/outline/selection-frame.svg`
- `icons/navigation/outline/settings-gear.svg`
- `icons/navigation/outline/sidebar-closed.svg`
- `icons/navigation/outline/sidebar-left-panel.svg`
- `icons/navigation/outline/sidebar-opened-with-chevron.svg`
- `icons/navigation/outline/sidebar-opened.svg`
- `icons/navigation/outline/sidebar-right.svg`
- `icons/navigation/outline/sidebar-with-chevron.svg`
- `icons/navigation/outline/single-select-cards.svg`
- `icons/navigation/outline/slider.svg`
- `icons/navigation/outline/smart-search.svg`
- `icons/navigation/outline/sort-ascending-ee2db90e.svg`
- `icons/navigation/outline/sort-ascending.svg`
- `icons/navigation/outline/sort-up-down.svg`
- `icons/navigation/outline/switch-arrows.svg`
- `icons/navigation/outline/toggle-off.svg`
- `icons/navigation/outline/toggle-on.svg`
- `icons/navigation/outline/tree-connector-angled.svg`
- `icons/navigation/outline/tree-connector-curved.svg`
- `icons/navigation/outline/tree-connector-end.svg`
- `icons/navigation/outline/tree-elbow.svg`
- `icons/navigation/outline/turn-left-arrow.svg`
- `icons/navigation/outline/turn-right-arrow-alternate.svg`
- `icons/navigation/outline/turn-right-arrow.svg`
- `icons/navigation/outline/window-dot.svg`
- `icons/navigation/outline/window-underline.svg`

**filled**

- `icons/navigation/filled/app-grid.svg`
- `icons/navigation/filled/arrow-right-filled.svg`
- `icons/navigation/filled/block-grid.svg`
- `icons/navigation/filled/board-view.svg`
- `icons/navigation/filled/column-view.svg`
- `icons/navigation/filled/drag-handle.svg`
- `icons/navigation/filled/grouped-list-view.svg`
- `icons/navigation/filled/grouping-dots.svg`
- `icons/navigation/filled/help.svg`
- `icons/navigation/filled/home-decorative.svg`
- `icons/navigation/filled/home.svg`
- `icons/navigation/filled/information-filled.svg`
- `icons/navigation/filled/list-view-rows.svg`
- `icons/navigation/filled/more-horizontal.svg`
- `icons/navigation/filled/more-vertical.svg`
- `icons/navigation/filled/pin.svg`
- `icons/navigation/filled/pointer-filled.svg`
- `icons/navigation/filled/pointer.svg`
- `icons/navigation/filled/question-mark.svg`
- `icons/navigation/filled/sign.svg`
- `icons/navigation/filled/stacked-arrows.svg`
- `icons/navigation/filled/stacked-menu-dots.svg`
- `icons/navigation/filled/swap-arrows-filled.svg`

</details>

<details>
<summary>Действия (actions) — 67</summary>

**outline**

- `icons/actions/outline/add-link.svg`
- `icons/actions/outline/archive.svg`
- `icons/actions/outline/check-circle-guide.svg`
- `icons/actions/outline/check-circle-outline-alternate.svg`
- `icons/actions/outline/checkmark-alternate.svg`
- `icons/actions/outline/checkmark-bold-alternate.svg`
- `icons/actions/outline/checkmark-bold.svg`
- `icons/actions/outline/checkmark.svg`
- `icons/actions/outline/clipboard.svg`
- `icons/actions/outline/close-mark-alternate.svg`
- `icons/actions/outline/close-square.svg`
- `icons/actions/outline/close.svg`
- `icons/actions/outline/copy-issue-id.svg`
- `icons/actions/outline/copy-issue-url.svg`
- `icons/actions/outline/copy-region.svg`
- `icons/actions/outline/copy-selection.svg`
- `icons/actions/outline/copy.svg`
- `icons/actions/outline/dash-line.svg`
- `icons/actions/outline/download-to-bottom.svg`
- `icons/actions/outline/download-tray.svg`
- `icons/actions/outline/duplicate-squares-outline.svg`
- `icons/actions/outline/duplicate-windows.svg`
- `icons/actions/outline/edit.svg`
- `icons/actions/outline/favorite-outline.svg`
- `icons/actions/outline/favorite.svg`
- `icons/actions/outline/jira-download.svg`
- `icons/actions/outline/link.svg`
- `icons/actions/outline/minus-circle.svg`
- `icons/actions/outline/minus-line.svg`
- `icons/actions/outline/minus-small.svg`
- `icons/actions/outline/minus-thick.svg`
- `icons/actions/outline/move-list.svg`
- `icons/actions/outline/move.svg`
- `icons/actions/outline/paste.svg`
- `icons/actions/outline/pause-circle.svg`
- `icons/actions/outline/plus-bold.svg`
- `icons/actions/outline/plus-small-b06349a0.svg`
- `icons/actions/outline/plus-small.svg`
- `icons/actions/outline/plus.svg`
- `icons/actions/outline/redo-outline.svg`
- `icons/actions/outline/refresh-interface.svg`
- `icons/actions/outline/refresh.svg`
- `icons/actions/outline/remove-link.svg`
- `icons/actions/outline/reset-progress.svg`
- `icons/actions/outline/share-selection.svg`
- `icons/actions/outline/trash-outline.svg`
- `icons/actions/outline/undo-outline.svg`
- `icons/actions/outline/upload-share.svg`
- `icons/actions/outline/upload-square.svg`
- `icons/actions/outline/upload-to-top.svg`
- `icons/actions/outline/upload.svg`

**filled**

- `icons/actions/filled/add-app-grid.svg`
- `icons/actions/filled/check-circle-filled.svg`
- `icons/actions/filled/close-circle-filled.svg`
- `icons/actions/filled/copy-all-filled.svg`
- `icons/actions/filled/copy-text-filled.svg`
- `icons/actions/filled/edit-square-filled.svg`
- `icons/actions/filled/favorite-selected.svg`
- `icons/actions/filled/pencil-small-filled.svg`
- `icons/actions/filled/pencil.svg`
- `icons/actions/filled/recycle.svg`
- `icons/actions/filled/redo-filled.svg`
- `icons/actions/filled/starred.svg`
- `icons/actions/filled/trash-filled.svg`
- `icons/actions/filled/trash.svg`
- `icons/actions/filled/undo-arrow-bold.svg`
- `icons/actions/filled/undo-filled.svg`

</details>

<details>
<summary>Файлы и редактор (files) — 90</summary>

**outline**

- `icons/files/outline/add-file.svg`
- `icons/files/outline/add-folder.svg`
- `icons/files/outline/add-template.svg`
- `icons/files/outline/attachment-large.svg`
- `icons/files/outline/attachment.svg`
- `icons/files/outline/book-open.svg`
- `icons/files/outline/bulleted-list-outline.svg`
- `icons/files/outline/bulleted-list.svg`
- `icons/files/outline/checklist-interface.svg`
- `icons/files/outline/checklist.svg`
- `icons/files/outline/code-block.svg`
- `icons/files/outline/code-document.svg`
- `icons/files/outline/collapse-section.svg`
- `icons/files/outline/copy-title-as-link.svg`
- `icons/files/outline/delete-column.svg`
- `icons/files/outline/delete-row.svg`
- `icons/files/outline/document-lines.svg`
- `icons/files/outline/document-outline.svg`
- `icons/files/outline/document-rounded-outline.svg`
- `icons/files/outline/download-file.svg`
- `icons/files/outline/edit-clipboard.svg`
- `icons/files/outline/edit-document.svg`
- `icons/files/outline/edit-file.svg`
- `icons/files/outline/file-tree.svg`
- `icons/files/outline/folder-open.svg`
- `icons/files/outline/folder-with-dot.svg`
- `icons/files/outline/folder.svg`
- `icons/files/outline/increase-text-indent.svg`
- `icons/files/outline/indent-left.svg`
- `icons/files/outline/indent-right.svg`
- `icons/files/outline/insert-column.svg`
- `icons/files/outline/insert-row.svg`
- `icons/files/outline/jira-code-brackets.svg`
- `icons/files/outline/link-in-window.svg`
- `icons/files/outline/note-pad.svg`
- `icons/files/outline/numbered-list.svg`
- `icons/files/outline/page.svg`
- `icons/files/outline/policy.svg`
- `icons/files/outline/preview-disabled.svg`
- `icons/files/outline/remove-document.svg`
- `icons/files/outline/remove-table.svg`
- `icons/files/outline/scissors.svg`
- `icons/files/outline/search-document.svg`
- `icons/files/outline/signature.svg`
- `icons/files/outline/table.svg`
- `icons/files/outline/template.svg`
- `icons/files/outline/text-align-left.svg`
- `icons/files/outline/text-arrow-right.svg`
- `icons/files/outline/text-block.svg`
- `icons/files/outline/text-paragraph.svg`
- `icons/files/outline/text-recognition.svg`
- `icons/files/outline/text-spacing.svg`

**filled**

- `icons/files/filled/blockquote-filled.svg`
- `icons/files/filled/blockquote.svg`
- `icons/files/filled/bold-text.svg`
- `icons/files/filled/book.svg`
- `icons/files/filled/bookmark.svg`
- `icons/files/filled/brush.svg`
- `icons/files/filled/design-tools.svg`
- `icons/files/filled/diagram-interface.svg`
- `icons/files/filled/diagram.svg`
- `icons/files/filled/document-stack-filled.svg`
- `icons/files/filled/education.svg`
- `icons/files/filled/eraser.svg`
- `icons/files/filled/file-filled.svg`
- `icons/files/filled/heading-1.svg`
- `icons/files/filled/heading-2.svg`
- `icons/files/filled/heading-3.svg`
- `icons/files/filled/heading-4.svg`
- `icons/files/filled/italic-slash.svg`
- `icons/files/filled/italic-text.svg`
- `icons/files/filled/magic-wand.svg`
- `icons/files/filled/note-filled.svg`
- `icons/files/filled/paint.svg`
- `icons/files/filled/paragraph-mark.svg`
- `icons/files/filled/pdf-file.svg`
- `icons/files/filled/quote-alternate.svg`
- `icons/files/filled/quote-small-filled.svg`
- `icons/files/filled/report.svg`
- `icons/files/filled/spreadsheet.svg`
- `icons/files/filled/strikethrough-text.svg`
- `icons/files/filled/text-caption.svg`
- `icons/files/filled/text-case.svg`
- `icons/files/filled/text-disabled.svg`
- `icons/files/filled/text-panel-filled.svg`
- `icons/files/filled/text-square-filled.svg`
- `icons/files/filled/text-stack-filled.svg`
- `icons/files/filled/text.svg`
- `icons/files/filled/underline-text.svg`
- `icons/files/filled/write.svg`

</details>

<details>
<summary>Люди и доступ (people) — 62</summary>

**outline**

- `icons/people/outline/app-user-interface.svg`
- `icons/people/outline/app-user.svg`
- `icons/people/outline/assign-person.svg`
- `icons/people/outline/assign-to-me-interface.svg`
- `icons/people/outline/assign-to-me.svg`
- `icons/people/outline/assign-to.svg`
- `icons/people/outline/creator.svg`
- `icons/people/outline/current-user-interface.svg`
- `icons/people/outline/current-user.svg`
- `icons/people/outline/deleted-user.svg`
- `icons/people/outline/edit-user.svg`
- `icons/people/outline/face-id.svg`
- `icons/people/outline/members-interface.svg`
- `icons/people/outline/members.svg`
- `icons/people/outline/project-lead-interface.svg`
- `icons/people/outline/project-lead.svg`
- `icons/people/outline/remove-person.svg`
- `icons/people/outline/select-user.svg`
- `icons/people/outline/sign-out.svg`
- `icons/people/outline/team-card.svg`
- `icons/people/outline/team.svg`
- `icons/people/outline/thumbs-down.svg`
- `icons/people/outline/thumbs-up.svg`
- `icons/people/outline/unassigned-circle-interface.svg`
- `icons/people/outline/unassigned-circle.svg`
- `icons/people/outline/unassigned-person.svg`
- `icons/people/outline/unassigned.svg`
- `icons/people/outline/user-outline.svg`

**filled**

- `icons/people/filled/accessibility.svg`
- `icons/people/filled/anonymous.svg`
- `icons/people/filled/avatar-empty.svg`
- `icons/people/filled/company-building-alternate.svg`
- `icons/people/filled/face-flat-smile.svg`
- `icons/people/filled/face-heart-eyes.svg`
- `icons/people/filled/face-mask.svg`
- `icons/people/filled/face-monocle.svg`
- `icons/people/filled/face-star-eyes.svg`
- `icons/people/filled/face-sunglasses.svg`
- `icons/people/filled/face-surprise.svg`
- `icons/people/filled/face-tired.svg`
- `icons/people/filled/face-tongue.svg`
- `icons/people/filled/face.svg`
- `icons/people/filled/judge.svg`
- `icons/people/filled/key.svg`
- `icons/people/filled/lock-filled.svg`
- `icons/people/filled/lock.svg`
- `icons/people/filled/mask.svg`
- `icons/people/filled/move-to-team-interface.svg`
- `icons/people/filled/move-to-team.svg`
- `icons/people/filled/shield.svg`
- `icons/people/filled/shrug.svg`
- `icons/people/filled/small-lock.svg`
- `icons/people/filled/subgroup.svg`
- `icons/people/filled/thumb-down-filled.svg`
- `icons/people/filled/thumb-up-filled.svg`
- `icons/people/filled/unhappy-face.svg`
- `icons/people/filled/union.svg`
- `icons/people/filled/user-comment.svg`
- `icons/people/filled/user-filled.svg`
- `icons/people/filled/user-key.svg`
- `icons/people/filled/user-silhouette-filled.svg`
- `icons/people/filled/users.svg`

</details>

<details>
<summary>Даты и время (time) — 36</summary>

**outline**

- `icons/time/outline/activity-date.svg`
- `icons/time/outline/alarm-delete.svg`
- `icons/time/outline/alarm.svg`
- `icons/time/outline/calendar-add.svg`
- `icons/time/outline/calendar-completed-alternate.svg`
- `icons/time/outline/calendar-disabled.svg`
- `icons/time/outline/calendar-edit-alternate.svg`
- `icons/time/outline/calendar-forward.svg`
- `icons/time/outline/calendar-overdue-alternate.svg`
- `icons/time/outline/calendar.svg`
- `icons/time/outline/cancel-date.svg`
- `icons/time/outline/clock-alternate.svg`
- `icons/time/outline/clock-outline-decorative.svg`
- `icons/time/outline/clock-outline.svg`
- `icons/time/outline/completed-date-interface.svg`
- `icons/time/outline/completed-date.svg`
- `icons/time/outline/created-date.svg`
- `icons/time/outline/created.svg`
- `icons/time/outline/crossed-out-calendar.svg`
- `icons/time/outline/from-date.svg`
- `icons/time/outline/history.svg`
- `icons/time/outline/hourglass.svg`
- `icons/time/outline/recurring-date.svg`
- `icons/time/outline/recurring-issue-calendar.svg`
- `icons/time/outline/recurring-template-branch-short.svg`
- `icons/time/outline/recurring-template-branch.svg`
- `icons/time/outline/schedule-forward.svg`
- `icons/time/outline/stopwatch.svg`
- `icons/time/outline/timeline-connector-first-source.svg`
- `icons/time/outline/timeline-connector-last-source.svg`
- `icons/time/outline/timeline-connector-source.svg`
- `icons/time/outline/timeline-connector.svg`
- `icons/time/outline/updated.svg`
- `icons/time/outline/watch.svg`

**filled**

- `icons/time/filled/alarm-clock.svg`
- `icons/time/filled/clock.svg`

</details>

<details>
<summary>Графики и аналитика (analytics) — 13</summary>

**outline**

- `icons/analytics/outline/bar-graph.svg`
- `icons/analytics/outline/chart-square.svg`
- `icons/analytics/outline/dashboard.svg`
- `icons/analytics/outline/rollup-count.svg`
- `icons/analytics/outline/scatter-plot.svg`
- `icons/analytics/outline/speedometer.svg`

**filled**

- `icons/analytics/filled/bar-chart-interface.svg`
- `icons/analytics/filled/bar-chart.svg`
- `icons/analytics/filled/chart-bars-alternate.svg`
- `icons/analytics/filled/chart.svg`
- `icons/analytics/filled/grid-progress.svg`
- `icons/analytics/filled/pie-chart.svg`
- `icons/analytics/filled/rank.svg`

</details>

<details>
<summary>Сообщения и уведомления (communication) — 38</summary>

**outline**

- `icons/communication/outline/add-comment.svg`
- `icons/communication/outline/add-reaction-alternate.svg`
- `icons/communication/outline/bell-outline.svg`
- `icons/communication/outline/chat-bubble-outline.svg`
- `icons/communication/outline/chat-line.svg`
- `icons/communication/outline/chat.svg`
- `icons/communication/outline/comment-outline.svg`
- `icons/communication/outline/comment.svg`
- `icons/communication/outline/conversation.svg`
- `icons/communication/outline/email.svg`
- `icons/communication/outline/inbox-complete.svg`
- `icons/communication/outline/inbox-error-alternate.svg`
- `icons/communication/outline/inbox-failed.svg`
- `icons/communication/outline/inbox-notification.svg`
- `icons/communication/outline/inbox-tray.svg`
- `icons/communication/outline/inbox-unread.svg`
- `icons/communication/outline/inbox.svg`
- `icons/communication/outline/muted-notification-outline.svg`
- `icons/communication/outline/reply-comment.svg`
- `icons/communication/outline/resolved-chat.svg`
- `icons/communication/outline/subscribe.svg`
- `icons/communication/outline/subscribed-outline.svg`
- `icons/communication/outline/unsubscribe-outline.svg`
- `icons/communication/outline/user-feedback.svg`

**filled**

- `icons/communication/filled/at-sign.svg`
- `icons/communication/filled/bell-filled.svg`
- `icons/communication/filled/comment-filled.svg`
- `icons/communication/filled/megaphone.svg`
- `icons/communication/filled/mention.svg`
- `icons/communication/filled/mute-bell-filled.svg`
- `icons/communication/filled/notified.svg`
- `icons/communication/filled/phone.svg`
- `icons/communication/filled/reply-collapse.svg`
- `icons/communication/filled/rss-circle.svg`
- `icons/communication/filled/send-burst.svg`
- `icons/communication/filled/send-filled.svg`
- `icons/communication/filled/send.svg`
- `icons/communication/filled/subscribe.svg`

</details>

<details>
<summary>Бренды и сервисы (brands) — 118</summary>

**outline**

- `icons/brands/outline/arc-browser.svg`
- `icons/brands/outline/burst-mark.svg`
- `icons/brands/outline/figma-outline.svg`
- `icons/brands/outline/figma.svg`
- `icons/brands/outline/fingerprint-mark.svg`
- `icons/brands/outline/hexagon-frame-mark.svg`
- `icons/brands/outline/meta.svg`
- `icons/brands/outline/notion-cube-color.svg`
- `icons/brands/outline/notion-cube-monochrome.svg`
- `icons/brands/outline/notion.svg`
- `icons/brands/outline/open-ai.svg`
- `icons/brands/outline/openai-alternate.svg`
- `icons/brands/outline/petal-mark.svg`
- `icons/brands/outline/sentry-alternate.svg`
- `icons/brands/outline/sentry.svg`
- `icons/brands/outline/shortcut-outline.svg`
- `icons/brands/outline/zed.svg`

**filled**

- `icons/brands/filled/1password-circle.svg`
- `icons/brands/filled/a-service-mark.svg`
- `icons/brands/filled/android.svg`
- `icons/brands/filled/anthropic.svg`
- `icons/brands/filled/app-store.svg`
- `icons/brands/filled/apple.svg`
- `icons/brands/filled/asana-dots.svg`
- `icons/brands/filled/asana.svg`
- `icons/brands/filled/atlassian-e9c055d2.svg`
- `icons/brands/filled/atlassian.svg`
- `icons/brands/filled/auth0.svg`
- `icons/brands/filled/block-mark.svg`
- `icons/brands/filled/blue-orbit-mark.svg`
- `icons/brands/filled/brave-browser.svg`
- `icons/brands/filled/burst-circle-mark.svg`
- `icons/brands/filled/burst-mark.svg`
- `icons/brands/filled/c-service-mark.svg`
- `icons/brands/filled/chrome-browser-alternate.svg`
- `icons/brands/filled/chrome.svg`
- `icons/brands/filled/claude.svg`
- `icons/brands/filled/code-panels-mark.svg`
- `icons/brands/filled/cube-mark.svg`
- `icons/brands/filled/cursor.svg`
- `icons/brands/filled/datadog-color.svg`
- `icons/brands/filled/datadog-monochrome.svg`
- `icons/brands/filled/diagonal-bars-disabled.svg`
- `icons/brands/filled/diagonal-bars-mark.svg`
- `icons/brands/filled/diamond-mark.svg`
- `icons/brands/filled/discord-monochrome.svg`
- `icons/brands/filled/discord-square.svg`
- `icons/brands/filled/discord.svg`
- `icons/brands/filled/edge-browser-alternate.svg`
- `icons/brands/filled/edge.svg`
- `icons/brands/filled/factory-mark.svg`
- `icons/brands/filled/figma-color.svg`
- `icons/brands/filled/fire-service-mark.svg`
- `icons/brands/filled/firefox-browser-alternate.svg`
- `icons/brands/filled/firefox.svg`
- `icons/brands/filled/git-hub.svg`
- `icons/brands/filled/git-lab.svg`
- `icons/brands/filled/github-circle.svg`
- `icons/brands/filled/gitlab-color.svg`
- `icons/brands/filled/google-calendar.svg`
- `icons/brands/filled/google-docs-ea03379f.svg`
- `icons/brands/filled/google-docs.svg`
- `icons/brands/filled/google-drive.svg`
- `icons/brands/filled/google-play.svg`
- `icons/brands/filled/google-sheets-942d80da.svg`
- `icons/brands/filled/google-sheets.svg`
- `icons/brands/filled/google.svg`
- `icons/brands/filled/hexagon-cluster-mark.svg`
- `icons/brands/filled/hubspot.svg`
- `icons/brands/filled/intercom-small.svg`
- `icons/brands/filled/intercom-square.svg`
- `icons/brands/filled/intercom.svg`
- `icons/brands/filled/jira-color.svg`
- `icons/brands/filled/jira.svg`
- `icons/brands/filled/linkedin.svg`
- `icons/brands/filled/loom-mark.svg`
- `icons/brands/filled/lovable-mark.svg`
- `icons/brands/filled/mac-os.svg`
- `icons/brands/filled/messenger.svg`
- `icons/brands/filled/microsoft-teams-alternate.svg`
- `icons/brands/filled/microsoft-teams-interface.svg`
- `icons/brands/filled/microsoft-teams-square.svg`
- `icons/brands/filled/microsoft-teams.svg`
- `icons/brands/filled/netlify-mark.svg`
- `icons/brands/filled/one-password.svg`
- `icons/brands/filled/pagerduty.svg`
- `icons/brands/filled/purple-circle-mark.svg`
- `icons/brands/filled/ramp.svg`
- `icons/brands/filled/salesforce.svg`
- `icons/brands/filled/segmented-i-mark.svg`
- `icons/brands/filled/sentry-square.svg`
- `icons/brands/filled/shortcut-color.svg`
- `icons/brands/filled/slack-multicolor.svg`
- `icons/brands/filled/slack-square.svg`
- `icons/brands/filled/slack.svg`
- `icons/brands/filled/slanted-panel-mark-color.svg`
- `icons/brands/filled/slanted-panel-mark.svg`
- `icons/brands/filled/slashed-service-mark.svg`
- `icons/brands/filled/spiral-service-mark.svg`
- `icons/brands/filled/storybook.svg`
- `icons/brands/filled/strawberry-service-mark.svg`
- `icons/brands/filled/striped-service-mark.svg`
- `icons/brands/filled/sunrise-service-mark.svg`
- `icons/brands/filled/t3.svg`
- `icons/brands/filled/three-circles-mark.svg`
- `icons/brands/filled/twin-panel-mark.svg`
- `icons/brands/filled/v0.svg`
- `icons/brands/filled/vercel.svg`
- `icons/brands/filled/vertical-panel-mark-color.svg`
- `icons/brands/filled/vertical-panel-mark.svg`
- `icons/brands/filled/windows.svg`
- `icons/brands/filled/x-social.svg`
- `icons/brands/filled/youtube-color.svg`
- `icons/brands/filled/youtube-monochrome.svg`
- `icons/brands/filled/zapier.svg`
- `icons/brands/filled/zendesk-alternate.svg`
- `icons/brands/filled/zendesk-square.svg`
- `icons/brands/filled/zendesk.svg`

</details>

<details>
<summary>Разработка и устройства (technology) — 71</summary>

**outline**

- `icons/technology/outline/agent-diamond.svg`
- `icons/technology/outline/agent-interface.svg`
- `icons/technology/outline/agent.svg`
- `icons/technology/outline/ai-app.svg`
- `icons/technology/outline/ai-document.svg`
- `icons/technology/outline/air-tag.svg`
- `icons/technology/outline/app-placeholder-grid.svg`
- `icons/technology/outline/automation-interface.svg`
- `icons/technology/outline/automation.svg`
- `icons/technology/outline/autopilot-play.svg`
- `icons/technology/outline/autopilot-refresh.svg`
- `icons/technology/outline/battery-charge.svg`
- `icons/technology/outline/battery.svg`
- `icons/technology/outline/code-brackets.svg`
- `icons/technology/outline/code-chevrons.svg`
- `icons/technology/outline/code-variables.svg`
- `icons/technology/outline/coding-cloud.svg`
- `icons/technology/outline/coding-laptop.svg`
- `icons/technology/outline/command-key.svg`
- `icons/technology/outline/computer.svg`
- `icons/technology/outline/copy-as-prompt.svg`
- `icons/technology/outline/deployment-signal.svg`
- `icons/technology/outline/desktop-window.svg`
- `icons/technology/outline/diff-changes.svg`
- `icons/technology/outline/earbuds.svg`
- `icons/technology/outline/issue-build-play.svg`
- `icons/technology/outline/keyboard.svg`
- `icons/technology/outline/laptop-and-phone.svg`
- `icons/technology/outline/mobile-phone.svg`
- `icons/technology/outline/network.svg`
- `icons/technology/outline/no-agent-interface.svg`
- `icons/technology/outline/no-agent.svg`
- `icons/technology/outline/vision-pro.svg`
- `icons/technology/outline/workflow-routing.svg`

**filled**

- `icons/technology/filled/ai-writing.svg`
- `icons/technology/filled/ai.svg`
- `icons/technology/filled/automation-complete.svg`
- `icons/technology/filled/automation-failed.svg`
- `icons/technology/filled/automation-flame.svg`
- `icons/technology/filled/automation-warning.svg`
- `icons/technology/filled/bluetooth.svg`
- `icons/technology/filled/bug.svg`
- `icons/technology/filled/chip.svg`
- `icons/technology/filled/code-intelligence-asterisk.svg`
- `icons/technology/filled/code-intelligence.svg`
- `icons/technology/filled/connected.svg`
- `icons/technology/filled/customer-api-source.svg`
- `icons/technology/filled/database.svg`
- `icons/technology/filled/developer-grid.svg`
- `icons/technology/filled/device-rectangle-filled.svg`
- `icons/technology/filled/electric-plug.svg`
- `icons/technology/filled/floppy-disk.svg`
- `icons/technology/filled/function.svg`
- `icons/technology/filled/gears.svg`
- `icons/technology/filled/hack.svg`
- `icons/technology/filled/mac.svg`
- `icons/technology/filled/math.svg`
- `icons/technology/filled/modem.svg`
- `icons/technology/filled/package-filled.svg`
- `icons/technology/filled/pixel-agent-avatar.svg`
- `icons/technology/filled/process.svg`
- `icons/technology/filled/pulse-spark.svg`
- `icons/technology/filled/radar.svg`
- `icons/technology/filled/robot.svg`
- `icons/technology/filled/routing.svg`
- `icons/technology/filled/server.svg`
- `icons/technology/filled/tablet.svg`
- `icons/technology/filled/terminal-cloud.svg`
- `icons/technology/filled/terminal.svg`
- `icons/technology/filled/workflow-blocks.svg`
- `icons/technology/filled/writing-ai.svg`

</details>

<details>
<summary>Медиа и звук (media) — 33</summary>

**outline**

- `icons/media/outline/camera-ai.svg`
- `icons/media/outline/crop.svg`
- `icons/media/outline/headphones.svg`
- `icons/media/outline/image-add.svg`
- `icons/media/outline/image-comparison-split.svg`
- `icons/media/outline/image-remove.svg`
- `icons/media/outline/mic.svg`
- `icons/media/outline/music-key.svg`
- `icons/media/outline/picture-in-picture.svg`
- `icons/media/outline/replay.svg`
- `icons/media/outline/stop-circle.svg`
- `icons/media/outline/view-finder.svg`

**filled**

- `icons/media/filled/boombox.svg`
- `icons/media/filled/camera.svg`
- `icons/media/filled/download-image.svg`
- `icons/media/filled/eyedropper.svg`
- `icons/media/filled/gif.svg`
- `icons/media/filled/image-comparison.svg`
- `icons/media/filled/image-file.svg`
- `icons/media/filled/image.svg`
- `icons/media/filled/music-tape.svg`
- `icons/media/filled/mute-filled.svg`
- `icons/media/filled/pause.svg`
- `icons/media/filled/play-filled.svg`
- `icons/media/filled/play-small.svg`
- `icons/media/filled/sound-high-filled.svg`
- `icons/media/filled/sound-low-filled.svg`
- `icons/media/filled/sound-muted.svg`
- `icons/media/filled/sound-off-filled.svg`
- `icons/media/filled/sound.svg`
- `icons/media/filled/spaces.svg`
- `icons/media/filled/speaker.svg`
- `icons/media/filled/video.svg`

</details>

<details>
<summary>Фигуры и символы (shapes) — 19</summary>

**outline**

- `icons/shapes/outline/bolt.svg`
- `icons/shapes/outline/cube.svg`
- `icons/shapes/outline/empty-circle-interface.svg`
- `icons/shapes/outline/empty-circle.svg`
- `icons/shapes/outline/hexagon-outline.svg`
- `icons/shapes/outline/intersect-squares.svg`
- `icons/shapes/outline/overlapping-circles.svg`
- `icons/shapes/outline/square-dashed.svg`

**filled**

- `icons/shapes/filled/asterisk.svg`
- `icons/shapes/filled/circle.svg`
- `icons/shapes/filled/cross.svg`
- `icons/shapes/filled/crown.svg`
- `icons/shapes/filled/dot-filled.svg`
- `icons/shapes/filled/lightning-filled.svg`
- `icons/shapes/filled/linked-circles.svg`
- `icons/shapes/filled/moon-cutout.svg`
- `icons/shapes/filled/sparkles-filled.svg`
- `icons/shapes/filled/square-filled.svg`
- `icons/shapes/filled/triangle-filled.svg`

</details>

<details>
<summary>Финансы и покупки (finance) — 13</summary>

**outline**

- `icons/finance/outline/calculator.svg`
- `icons/finance/outline/dollar-bill.svg`
- `icons/finance/outline/money-stack.svg`

**filled**

- `icons/finance/filled/bank.svg`
- `icons/finance/filled/bitcoin.svg`
- `icons/finance/filled/cart.svg`
- `icons/finance/filled/credit-card-interface.svg`
- `icons/finance/filled/credit-card.svg`
- `icons/finance/filled/dollar.svg`
- `icons/finance/filled/ethereum.svg`
- `icons/finance/filled/euro.svg`
- `icons/finance/filled/shop.svg`
- `icons/finance/filled/solana.svg`

</details>

<details>
<summary>Транспорт (transport) — 15</summary>

**outline**

- `icons/transport/outline/anchor.svg`
- `icons/transport/outline/bike.svg`

**filled**

- `icons/transport/filled/airplane.svg`
- `icons/transport/filled/astronaut.svg`
- `icons/transport/filled/bus.svg`
- `icons/transport/filled/car-pool.svg`
- `icons/transport/filled/car.svg`
- `icons/transport/filled/military-truck.svg`
- `icons/transport/filled/moving-staircase.svg`
- `icons/transport/filled/rocket.svg`
- `icons/transport/filled/ship.svg`
- `icons/transport/filled/taxi.svg`
- `icons/transport/filled/traffic-light.svg`
- `icons/transport/filled/train.svg`
- `icons/transport/filled/tram.svg`

</details>

<details>
<summary>Природа и география (nature) — 24</summary>

**outline**

- `icons/nature/outline/storm.svg`
- `icons/nature/outline/world.svg`

**filled**

- `icons/nature/filled/africa.svg`
- `icons/nature/filled/asia.svg`
- `icons/nature/filled/australia.svg`
- `icons/nature/filled/bones.svg`
- `icons/nature/filled/cloud.svg`
- `icons/nature/filled/compass.svg`
- `icons/nature/filled/dino.svg`
- `icons/nature/filled/europe.svg`
- `icons/nature/filled/feather.svg`
- `icons/nature/filled/fire.svg`
- `icons/nature/filled/flower.svg`
- `icons/nature/filled/foot-print.svg`
- `icons/nature/filled/leaf.svg`
- `icons/nature/filled/moon.svg`
- `icons/nature/filled/mountain.svg`
- `icons/nature/filled/north-america.svg`
- `icons/nature/filled/palm-tree.svg`
- `icons/nature/filled/skull.svg`
- `icons/nature/filled/south-america.svg`
- `icons/nature/filled/sun.svg`
- `icons/nature/filled/tree.svg`
- `icons/nature/filled/umbrella.svg`

</details>

<details>
<summary>Спорт и игры (sports) — 29</summary>

**outline**

- `icons/sports/outline/arcade-corner.svg`
- `icons/sports/outline/arcade-square-outline.svg`

**filled**

- `icons/sports/filled/american-foot-ball.svg`
- `icons/sports/filled/arcade-cards-text.svg`
- `icons/sports/filled/arcade-checkerboard.svg`
- `icons/sports/filled/arcade-circle.svg`
- `icons/sports/filled/arcade-corners.svg`
- `icons/sports/filled/arcade-grid.svg`
- `icons/sports/filled/arcade-level-counter.svg`
- `icons/sports/filled/arcade-score-counter.svg`
- `icons/sports/filled/arcade-score-text.svg`
- `icons/sports/filled/arcade-square-filled.svg`
- `icons/sports/filled/arcade-team-grid.svg`
- `icons/sports/filled/arcade-team-text.svg`
- `icons/sports/filled/basketball.svg`
- `icons/sports/filled/bowling-ball.svg`
- `icons/sports/filled/dice.svg`
- `icons/sports/filled/dumbbell.svg`
- `icons/sports/filled/golf.svg`
- `icons/sports/filled/jersey.svg`
- `icons/sports/filled/joystick.svg`
- `icons/sports/filled/locker-room.svg`
- `icons/sports/filled/ping-pong.svg`
- `icons/sports/filled/poker-card.svg`
- `icons/sports/filled/runner.svg`
- `icons/sports/filled/soccer-ball.svg`
- `icons/sports/filled/stadium.svg`
- `icons/sports/filled/surfer.svg`
- `icons/sports/filled/tennis-ball.svg`

</details>

<details>
<summary>Здоровье и безопасность (health) — 10</summary>

**outline**

- `icons/health/outline/brain.svg`
- `icons/health/outline/dna.svg`
- `icons/health/outline/pills.svg`

**filled**

- `icons/health/filled/bandage.svg`
- `icons/health/filled/chemist.svg`
- `icons/health/filled/extinguisher.svg`
- `icons/health/filled/health.svg`
- `icons/health/filled/hear.svg`
- `icons/health/filled/heart.svg`
- `icons/health/filled/safety-kit.svg`

</details>

<details>
<summary>Предметы и быт (objects) — 33</summary>

**outline**

- `icons/objects/outline/brick.svg`
- `icons/objects/outline/buildings.svg`
- `icons/objects/outline/cloth-hanger.svg`

**filled**

- `icons/objects/filled/basket.svg`
- `icons/objects/filled/bed.svg`
- `icons/objects/filled/binocular.svg`
- `icons/objects/filled/biscuit.svg`
- `icons/objects/filled/box-open.svg`
- `icons/objects/filled/box.svg`
- `icons/objects/filled/briefcase.svg`
- `icons/objects/filled/bucket.svg`
- `icons/objects/filled/burger.svg`
- `icons/objects/filled/coffee.svg`
- `icons/objects/filled/comodore.svg`
- `icons/objects/filled/cone.svg`
- `icons/objects/filled/construction-barrier.svg`
- `icons/objects/filled/crane.svg`
- `icons/objects/filled/crystal-ball.svg`
- `icons/objects/filled/factory.svg`
- `icons/objects/filled/flashlight.svg`
- `icons/objects/filled/garage.svg`
- `icons/objects/filled/ladder.svg`
- `icons/objects/filled/light-bulb.svg`
- `icons/objects/filled/magnet.svg`
- `icons/objects/filled/pizza.svg`
- `icons/objects/filled/present.svg`
- `icons/objects/filled/printer.svg`
- `icons/objects/filled/ramen.svg`
- `icons/objects/filled/tee-shirt.svg`
- `icons/objects/filled/tower.svg`
- `icons/objects/filled/wall.svg`
- `icons/objects/filled/wind-turbine.svg`
- `icons/objects/filled/wrench.svg`

</details>

<details>
<summary>Типы файлов и символы кода (file-types) — 636</summary>

**outline**

- `icons/file-types/outline/3d.svg`
- `icons/file-types/outline/actionscript.svg`
- `icons/file-types/outline/apollo.svg`
- `icons/file-types/outline/architecture.svg`
- `icons/file-types/outline/arduino.svg`
- `icons/file-types/outline/assembly.svg`
- `icons/file-types/outline/astyle.svg`
- `icons/file-types/outline/auto-light.svg`
- `icons/file-types/outline/auto.svg`
- `icons/file-types/outline/bench-js.svg`
- `icons/file-types/outline/bench-jsx.svg`
- `icons/file-types/outline/bench-ts.svg`
- `icons/file-types/outline/blink.svg`
- `icons/file-types/outline/buck.svg`
- `icons/file-types/outline/cds.svg`
- `icons/file-types/outline/changelog.svg`
- `icons/file-types/outline/chrome.svg`
- `icons/file-types/outline/coconut.svg`
- `icons/file-types/outline/codecov.svg`
- `icons/file-types/outline/container.svg`
- `icons/file-types/outline/dependencies-update.svg`
- `icons/file-types/outline/dhall.svg`
- `icons/file-types/outline/dll.svg`
- `icons/file-types/outline/doctex-installer.svg`
- `icons/file-types/outline/epub.svg`
- `icons/file-types/outline/exe.svg`
- `icons/file-types/outline/fastlane.svg`
- `icons/file-types/outline/file.svg`
- `icons/file-types/outline/firebase.svg`
- `icons/file-types/outline/freemarker.svg`
- `icons/file-types/outline/gemfile.svg`
- `icons/file-types/outline/gemini.svg`
- `icons/file-types/outline/github-actions-workflow.svg`
- `icons/file-types/outline/gnuplot.svg`
- `icons/file-types/outline/graphcool.svg`
- `icons/file-types/outline/helm.svg`
- `icons/file-types/outline/hjson.svg`
- `icons/file-types/outline/http.svg`
- `icons/file-types/outline/imba.svg`
- `icons/file-types/outline/ionic.svg`
- `icons/file-types/outline/json.svg`
- `icons/file-types/outline/kubernetes.svg`
- `icons/file-types/outline/laravel.svg`
- `icons/file-types/outline/less.svg`
- `icons/file-types/outline/mocha.svg`
- `icons/file-types/outline/moonscript.svg`
- `icons/file-types/outline/netlify-light.svg`
- `icons/file-types/outline/netlify.svg`
- `icons/file-types/outline/nodejs.svg`
- `icons/file-types/outline/odin.svg`
- `icons/file-types/outline/oxlint.svg`
- `icons/file-types/outline/packship.svg`
- `icons/file-types/outline/perl.svg`
- `icons/file-types/outline/pipeline.svg`
- `icons/file-types/outline/plastic.svg`
- `icons/file-types/outline/prompt.svg`
- `icons/file-types/outline/purescript.svg`
- `icons/file-types/outline/raml.svg`
- `icons/file-types/outline/react-ts.svg`
- `icons/file-types/outline/react.svg`
- `icons/file-types/outline/redux-action.svg`
- `icons/file-types/outline/redux-reducer.svg`
- `icons/file-types/outline/redux-selector.svg`
- `icons/file-types/outline/redux-store.svg`
- `icons/file-types/outline/rescript-interface.svg`
- `icons/file-types/outline/roadmap.svg`
- `icons/file-types/outline/robot.svg`
- `icons/file-types/outline/search.svg`
- `icons/file-types/outline/semantic-release-light.svg`
- `icons/file-types/outline/semantic-release.svg`
- `icons/file-types/outline/sentry.svg`
- `icons/file-types/outline/settings.svg`
- `icons/file-types/outline/sketch.svg`
- `icons/file-types/outline/smarty.svg`
- `icons/file-types/outline/sonarcloud.svg`
- `icons/file-types/outline/steadybit.svg`
- `icons/file-types/outline/stitches-light.svg`
- `icons/file-types/outline/stitches.svg`
- `icons/file-types/outline/stryker.svg`
- `icons/file-types/outline/svgo.svg`
- `icons/file-types/outline/svgr.svg`
- `icons/file-types/outline/systemd-light.svg`
- `icons/file-types/outline/systemd.svg`
- `icons/file-types/outline/templ.svg`
- `icons/file-types/outline/template.svg`
- `icons/file-types/outline/test-js.svg`
- `icons/file-types/outline/test-jsx.svg`
- `icons/file-types/outline/test-ts.svg`
- `icons/file-types/outline/toml-light.svg`
- `icons/file-types/outline/toml.svg`
- `icons/file-types/outline/tune.svg`
- `icons/file-types/outline/turborepo-light.svg`
- `icons/file-types/outline/turborepo.svg`
- `icons/file-types/outline/typescript-def.svg`
- `icons/file-types/outline/url.svg`
- `icons/file-types/outline/velocity.svg`
- `icons/file-types/outline/verilog.svg`
- `icons/file-types/outline/virtual.svg`
- `icons/file-types/outline/wakatime-light.svg`
- `icons/file-types/outline/wakatime.svg`
- `icons/file-types/outline/wepy.svg`
- `icons/file-types/outline/windicss.svg`
- `icons/file-types/outline/wxt.svg`

**filled**

- `icons/file-types/filled/abap.svg`
- `icons/file-types/filled/abc.svg`
- `icons/file-types/filled/ada.svg`
- `icons/file-types/filled/adobe-illustrator-light.svg`
- `icons/file-types/filled/adobe-illustrator.svg`
- `icons/file-types/filled/adobe-photoshop-light.svg`
- `icons/file-types/filled/adobe-photoshop.svg`
- `icons/file-types/filled/adobe-swc.svg`
- `icons/file-types/filled/adonis.svg`
- `icons/file-types/filled/advpl-include.svg`
- `icons/file-types/filled/advpl-ptm.svg`
- `icons/file-types/filled/advpl-tlpp.svg`
- `icons/file-types/filled/advpl.svg`
- `icons/file-types/filled/ahk2.svg`
- `icons/file-types/filled/amplify.svg`
- `icons/file-types/filled/android.svg`
- `icons/file-types/filled/angular-component.svg`
- `icons/file-types/filled/angular-directive.svg`
- `icons/file-types/filled/angular-guard.svg`
- `icons/file-types/filled/angular-interceptor.svg`
- `icons/file-types/filled/angular-pipe.svg`
- `icons/file-types/filled/angular-service.svg`
- `icons/file-types/filled/angular.svg`
- `icons/file-types/filled/antlr.svg`
- `icons/file-types/filled/apiblueprint.svg`
- `icons/file-types/filled/applescript.svg`
- `icons/file-types/filled/apps-script.svg`
- `icons/file-types/filled/appveyor.svg`
- `icons/file-types/filled/asciidoc.svg`
- `icons/file-types/filled/astro-config.svg`
- `icons/file-types/filled/astro.svg`
- `icons/file-types/filled/audio.svg`
- `icons/file-types/filled/aurelia.svg`
- `icons/file-types/filled/authors.svg`
- `icons/file-types/filled/autohotkey.svg`
- `icons/file-types/filled/autoit.svg`
- `icons/file-types/filled/azure-pipelines.svg`
- `icons/file-types/filled/azure.svg`
- `icons/file-types/filled/babel.svg`
- `icons/file-types/filled/ballerina.svg`
- `icons/file-types/filled/bashly-hook.svg`
- `icons/file-types/filled/bashly-settings-light.svg`
- `icons/file-types/filled/bashly-settings.svg`
- `icons/file-types/filled/bashly.svg`
- `icons/file-types/filled/bazel.svg`
- `icons/file-types/filled/bbx.svg`
- `icons/file-types/filled/beancount.svg`
- `icons/file-types/filled/bibliography.svg`
- `icons/file-types/filled/bibtex-style.svg`
- `icons/file-types/filled/bicep.svg`
- `icons/file-types/filled/biome.svg`
- `icons/file-types/filled/bitbucket.svg`
- `icons/file-types/filled/bithound.svg`
- `icons/file-types/filled/blender.svg`
- `icons/file-types/filled/blink-light.svg`
- `icons/file-types/filled/blitz.svg`
- `icons/file-types/filled/bower.svg`
- `icons/file-types/filled/brainfuck.svg`
- `icons/file-types/filled/browserlist-light.svg`
- `icons/file-types/filled/browserlist.svg`
- `icons/file-types/filled/bruno.svg`
- `icons/file-types/filled/bucklescript.svg`
- `icons/file-types/filled/buildkite.svg`
- `icons/file-types/filled/bun-light.svg`
- `icons/file-types/filled/bun.svg`
- `icons/file-types/filled/c.svg`
- `icons/file-types/filled/c3.svg`
- `icons/file-types/filled/cabal.svg`
- `icons/file-types/filled/caddy.svg`
- `icons/file-types/filled/cadence.svg`
- `icons/file-types/filled/cairo.svg`
- `icons/file-types/filled/cake.svg`
- `icons/file-types/filled/capacitor.svg`
- `icons/file-types/filled/capnp.svg`
- `icons/file-types/filled/cbx.svg`
- `icons/file-types/filled/certificate.svg`
- `icons/file-types/filled/chess-light.svg`
- `icons/file-types/filled/chess.svg`
- `icons/file-types/filled/circleci-light.svg`
- `icons/file-types/filled/circleci.svg`
- `icons/file-types/filled/citation.svg`
- `icons/file-types/filled/clangd.svg`
- `icons/file-types/filled/claude.svg`
- `icons/file-types/filled/cline.svg`
- `icons/file-types/filled/clojure.svg`
- `icons/file-types/filled/cloudfoundry.svg`
- `icons/file-types/filled/cmake.svg`
- `icons/file-types/filled/coala.svg`
- `icons/file-types/filled/cobol.svg`
- `icons/file-types/filled/code-climate-light.svg`
- `icons/file-types/filled/code-climate.svg`
- `icons/file-types/filled/codeowners.svg`
- `icons/file-types/filled/coderabbit-ai.svg`
- `icons/file-types/filled/coffee.svg`
- `icons/file-types/filled/coldfusion.svg`
- `icons/file-types/filled/coloredpetrinets.svg`
- `icons/file-types/filled/command.svg`
- `icons/file-types/filled/commitizen.svg`
- `icons/file-types/filled/commitlint.svg`
- `icons/file-types/filled/concourse.svg`
- `icons/file-types/filled/conduct.svg`
- `icons/file-types/filled/console.svg`
- `icons/file-types/filled/contentlayer.svg`
- `icons/file-types/filled/context.svg`
- `icons/file-types/filled/contributing.svg`
- `icons/file-types/filled/controller.svg`
- `icons/file-types/filled/copilot-light.svg`
- `icons/file-types/filled/copilot.svg`
- `icons/file-types/filled/cpp.svg`
- `icons/file-types/filled/craco.svg`
- `icons/file-types/filled/credits.svg`
- `icons/file-types/filled/crystal-light.svg`
- `icons/file-types/filled/crystal.svg`
- `icons/file-types/filled/csharp.svg`
- `icons/file-types/filled/css-map.svg`
- `icons/file-types/filled/css.svg`
- `icons/file-types/filled/cucumber.svg`
- `icons/file-types/filled/cuda.svg`
- `icons/file-types/filled/cursor-light.svg`
- `icons/file-types/filled/cursor.svg`
- `icons/file-types/filled/cypress.svg`
- `icons/file-types/filled/d.svg`
- `icons/file-types/filled/dart-generated.svg`
- `icons/file-types/filled/dart.svg`
- `icons/file-types/filled/database.svg`
- `icons/file-types/filled/deepsource.svg`
- `icons/file-types/filled/denizenscript.svg`
- `icons/file-types/filled/deno-light.svg`
- `icons/file-types/filled/deno.svg`
- `icons/file-types/filled/dependabot.svg`
- `icons/file-types/filled/diff.svg`
- `icons/file-types/filled/dinophp.svg`
- `icons/file-types/filled/disc.svg`
- `icons/file-types/filled/django.svg`
- `icons/file-types/filled/docker.svg`
- `icons/file-types/filled/doctex.svg`
- `icons/file-types/filled/document.svg`
- `icons/file-types/filled/dotjs.svg`
- `icons/file-types/filled/drawio.svg`
- `icons/file-types/filled/drizzle.svg`
- `icons/file-types/filled/drone-light.svg`
- `icons/file-types/filled/drone.svg`
- `icons/file-types/filled/duc.svg`
- `icons/file-types/filled/dune.svg`
- `icons/file-types/filled/edge.svg`
- `icons/file-types/filled/editorconfig.svg`
- `icons/file-types/filled/ejs.svg`
- `icons/file-types/filled/elixir.svg`
- `icons/file-types/filled/elm.svg`
- `icons/file-types/filled/email.svg`
- `icons/file-types/filled/ember.svg`
- `icons/file-types/filled/erlang.svg`
- `icons/file-types/filled/esbuild.svg`
- `icons/file-types/filled/eslint.svg`
- `icons/file-types/filled/excalidraw.svg`
- `icons/file-types/filled/favicon.svg`
- `icons/file-types/filled/figma.svg`
- `icons/file-types/filled/flash.svg`
- `icons/file-types/filled/flow.svg`
- `icons/file-types/filled/font.svg`
- `icons/file-types/filled/forth.svg`
- `icons/file-types/filled/fortran.svg`
- `icons/file-types/filled/foxpro.svg`
- `icons/file-types/filled/fsharp.svg`
- `icons/file-types/filled/fusebox.svg`
- `icons/file-types/filled/gamemaker.svg`
- `icons/file-types/filled/garden.svg`
- `icons/file-types/filled/gatsby.svg`
- `icons/file-types/filled/gcp.svg`
- `icons/file-types/filled/gemini-ai.svg`
- `icons/file-types/filled/git.svg`
- `icons/file-types/filled/github-sponsors.svg`
- `icons/file-types/filled/gitlab.svg`
- `icons/file-types/filled/gitpod.svg`
- `icons/file-types/filled/gleam.svg`
- `icons/file-types/filled/go-gopher.svg`
- `icons/file-types/filled/go-mod.svg`
- `icons/file-types/filled/go.svg`
- `icons/file-types/filled/godot-assets.svg`
- `icons/file-types/filled/godot.svg`
- `icons/file-types/filled/gradle.svg`
- `icons/file-types/filled/grafana-alloy.svg`
- `icons/file-types/filled/grain.svg`
- `icons/file-types/filled/graphql.svg`
- `icons/file-types/filled/gridsome.svg`
- `icons/file-types/filled/groovy.svg`
- `icons/file-types/filled/grunt.svg`
- `icons/file-types/filled/gulp.svg`
- `icons/file-types/filled/h.svg`
- `icons/file-types/filled/hack.svg`
- `icons/file-types/filled/hadolint.svg`
- `icons/file-types/filled/haml.svg`
- `icons/file-types/filled/handlebars.svg`
- `icons/file-types/filled/hardhat.svg`
- `icons/file-types/filled/harmonix.svg`
- `icons/file-types/filled/haskell.svg`
- `icons/file-types/filled/haxe.svg`
- `icons/file-types/filled/hcl-light.svg`
- `icons/file-types/filled/hcl.svg`
- `icons/file-types/filled/heroku.svg`
- `icons/file-types/filled/hex.svg`
- `icons/file-types/filled/histoire.svg`
- `icons/file-types/filled/horusec.svg`
- `icons/file-types/filled/hosts-light.svg`
- `icons/file-types/filled/hosts.svg`
- `icons/file-types/filled/hpp.svg`
- `icons/file-types/filled/html.svg`
- `icons/file-types/filled/huff-light.svg`
- `icons/file-types/filled/huff.svg`
- `icons/file-types/filled/hurl.svg`
- `icons/file-types/filled/husky.svg`
- `icons/file-types/filled/i18n.svg`
- `icons/file-types/filled/idris.svg`
- `icons/file-types/filled/ifanr-cloud.svg`
- `icons/file-types/filled/image.svg`
- `icons/file-types/filled/installation.svg`
- `icons/file-types/filled/istanbul.svg`
- `icons/file-types/filled/jar.svg`
- `icons/file-types/filled/java.svg`
- `icons/file-types/filled/javaclass.svg`
- `icons/file-types/filled/javascript-map.svg`
- `icons/file-types/filled/javascript.svg`
- `icons/file-types/filled/jenkins.svg`
- `icons/file-types/filled/jest.svg`
- `icons/file-types/filled/jinja-light.svg`
- `icons/file-types/filled/jinja.svg`
- `icons/file-types/filled/jsconfig.svg`
- `icons/file-types/filled/jsr-light.svg`
- `icons/file-types/filled/jsr.svg`
- `icons/file-types/filled/julia.svg`
- `icons/file-types/filled/jupyter.svg`
- `icons/file-types/filled/just.svg`
- `icons/file-types/filled/karma.svg`
- `icons/file-types/filled/kcl.svg`
- `icons/file-types/filled/key.svg`
- `icons/file-types/filled/keystatic.svg`
- `icons/file-types/filled/kivy.svg`
- `icons/file-types/filled/kl.svg`
- `icons/file-types/filled/knip.svg`
- `icons/file-types/filled/kotlin.svg`
- `icons/file-types/filled/kusto.svg`
- `icons/file-types/filled/label.svg`
- `icons/file-types/filled/latex-class.svg`
- `icons/file-types/filled/latex-package.svg`
- `icons/file-types/filled/latex.svg`
- `icons/file-types/filled/latexmk.svg`
- `icons/file-types/filled/lbx.svg`
- `icons/file-types/filled/lefthook.svg`
- `icons/file-types/filled/lerna.svg`
- `icons/file-types/filled/liara.svg`
- `icons/file-types/filled/lib.svg`
- `icons/file-types/filled/lighthouse.svg`
- `icons/file-types/filled/lilypond.svg`
- `icons/file-types/filled/lintstaged.svg`
- `icons/file-types/filled/liquid.svg`
- `icons/file-types/filled/lisp.svg`
- `icons/file-types/filled/livescript.svg`
- `icons/file-types/filled/lock.svg`
- `icons/file-types/filled/log.svg`
- `icons/file-types/filled/lolcode.svg`
- `icons/file-types/filled/lottie.svg`
- `icons/file-types/filled/lua.svg`
- `icons/file-types/filled/luau.svg`
- `icons/file-types/filled/lyric.svg`
- `icons/file-types/filled/makefile.svg`
- `icons/file-types/filled/markdoc-config.svg`
- `icons/file-types/filled/markdoc.svg`
- `icons/file-types/filled/markdown.svg`
- `icons/file-types/filled/markdownlint.svg`
- `icons/file-types/filled/markojs.svg`
- `icons/file-types/filled/mathematica.svg`
- `icons/file-types/filled/matlab.svg`
- `icons/file-types/filled/maven.svg`
- `icons/file-types/filled/mdsvex.svg`
- `icons/file-types/filled/mdx.svg`
- `icons/file-types/filled/mercurial.svg`
- `icons/file-types/filled/merlin.svg`
- `icons/file-types/filled/mermaid.svg`
- `icons/file-types/filled/meson.svg`
- `icons/file-types/filled/metro.svg`
- `icons/file-types/filled/minecraft-fabric.svg`
- `icons/file-types/filled/minecraft.svg`
- `icons/file-types/filled/mint.svg`
- `icons/file-types/filled/mist.svg`
- `icons/file-types/filled/mjml.svg`
- `icons/file-types/filled/modernizr.svg`
- `icons/file-types/filled/mojo.svg`
- `icons/file-types/filled/moon.svg`
- `icons/file-types/filled/mxml.svg`
- `icons/file-types/filled/nano-staged-light.svg`
- `icons/file-types/filled/nano-staged.svg`
- `icons/file-types/filled/ndst.svg`
- `icons/file-types/filled/nest-controller.svg`
- `icons/file-types/filled/nest-decorator.svg`
- `icons/file-types/filled/nest-filter.svg`
- `icons/file-types/filled/nest-gateway.svg`
- `icons/file-types/filled/nest-guard.svg`
- `icons/file-types/filled/nest-interceptor.svg`
- `icons/file-types/filled/nest-middleware.svg`
- `icons/file-types/filled/nest-module.svg`
- `icons/file-types/filled/nest-pipe.svg`
- `icons/file-types/filled/nest-resolver.svg`
- `icons/file-types/filled/nest-service.svg`
- `icons/file-types/filled/nest.svg`
- `icons/file-types/filled/next-light.svg`
- `icons/file-types/filled/next.svg`
- `icons/file-types/filled/nginx.svg`
- `icons/file-types/filled/ngrx-actions.svg`
- `icons/file-types/filled/ngrx-effects.svg`
- `icons/file-types/filled/ngrx-entity.svg`
- `icons/file-types/filled/ngrx-reducer.svg`
- `icons/file-types/filled/ngrx-selectors.svg`
- `icons/file-types/filled/ngrx-state.svg`
- `icons/file-types/filled/nim.svg`
- `icons/file-types/filled/nix.svg`
- `icons/file-types/filled/nodejs-alt.svg`
- `icons/file-types/filled/nodemon.svg`
- `icons/file-types/filled/npm.svg`
- `icons/file-types/filled/nuget.svg`
- `icons/file-types/filled/nunjucks.svg`
- `icons/file-types/filled/nuxt.svg`
- `icons/file-types/filled/nx.svg`
- `icons/file-types/filled/objective-c.svg`
- `icons/file-types/filled/objective-cpp.svg`
- `icons/file-types/filled/ocaml.svg`
- `icons/file-types/filled/onnx.svg`
- `icons/file-types/filled/opa.svg`
- `icons/file-types/filled/opam.svg`
- `icons/file-types/filled/openapi-light.svg`
- `icons/file-types/filled/openapi.svg`
- `icons/file-types/filled/opentofu-light.svg`
- `icons/file-types/filled/opentofu.svg`
- `icons/file-types/filled/otne.svg`
- `icons/file-types/filled/palette.svg`
- `icons/file-types/filled/panda.svg`
- `icons/file-types/filled/parcel.svg`
- `icons/file-types/filled/pascal.svg`
- `icons/file-types/filled/pawn.svg`
- `icons/file-types/filled/payload-light.svg`
- `icons/file-types/filled/payload.svg`
- `icons/file-types/filled/pdf.svg`
- `icons/file-types/filled/pdm.svg`
- `icons/file-types/filled/percy.svg`
- `icons/file-types/filled/php-cs-fixer.svg`
- `icons/file-types/filled/php-elephant-pink.svg`
- `icons/file-types/filled/php-elephant.svg`
- `icons/file-types/filled/php.svg`
- `icons/file-types/filled/phpstan.svg`
- `icons/file-types/filled/phpunit.svg`
- `icons/file-types/filled/pinejs.svg`
- `icons/file-types/filled/pkl.svg`
- `icons/file-types/filled/playwright.svg`
- `icons/file-types/filled/plop.svg`
- `icons/file-types/filled/pm2-ecosystem.svg`
- `icons/file-types/filled/pnpm-light.svg`
- `icons/file-types/filled/pnpm.svg`
- `icons/file-types/filled/poetry.svg`
- `icons/file-types/filled/postcss.svg`
- `icons/file-types/filled/posthtml.svg`
- `icons/file-types/filled/powerpoint.svg`
- `icons/file-types/filled/powershell.svg`
- `icons/file-types/filled/pre-commit.svg`
- `icons/file-types/filled/prettier.svg`
- `icons/file-types/filled/prisma.svg`
- `icons/file-types/filled/processing.svg`
- `icons/file-types/filled/prolog.svg`
- `icons/file-types/filled/proto.svg`
- `icons/file-types/filled/protractor.svg`
- `icons/file-types/filled/pug.svg`
- `icons/file-types/filled/puppet.svg`
- `icons/file-types/filled/puppeteer.svg`
- `icons/file-types/filled/python-misc.svg`
- `icons/file-types/filled/python.svg`
- `icons/file-types/filled/pytorch.svg`
- `icons/file-types/filled/qsharp.svg`
- `icons/file-types/filled/quarto.svg`
- `icons/file-types/filled/quasar.svg`
- `icons/file-types/filled/quokka.svg`
- `icons/file-types/filled/qwik.svg`
- `icons/file-types/filled/r.svg`
- `icons/file-types/filled/racket.svg`
- `icons/file-types/filled/razor.svg`
- `icons/file-types/filled/rbxmk.svg`
- `icons/file-types/filled/rc.svg`
- `icons/file-types/filled/readme.svg`
- `icons/file-types/filled/reason.svg`
- `icons/file-types/filled/red.svg`
- `icons/file-types/filled/regedit.svg`
- `icons/file-types/filled/remark.svg`
- `icons/file-types/filled/remix-light.svg`
- `icons/file-types/filled/remix.svg`
- `icons/file-types/filled/renovate.svg`
- `icons/file-types/filled/replit.svg`
- `icons/file-types/filled/rescript.svg`
- `icons/file-types/filled/restql.svg`
- `icons/file-types/filled/riot.svg`
- `icons/file-types/filled/roblox.svg`
- `icons/file-types/filled/robots.svg`
- `icons/file-types/filled/rocket.svg`
- `icons/file-types/filled/rojo.svg`
- `icons/file-types/filled/rollup.svg`
- `icons/file-types/filled/rome.svg`
- `icons/file-types/filled/routing.svg`
- `icons/file-types/filled/rspec.svg`
- `icons/file-types/filled/rubocop-light.svg`
- `icons/file-types/filled/rubocop.svg`
- `icons/file-types/filled/ruby.svg`
- `icons/file-types/filled/ruff.svg`
- `icons/file-types/filled/rust.svg`
- `icons/file-types/filled/salesforce.svg`
- `icons/file-types/filled/san.svg`
- `icons/file-types/filled/sas.svg`
- `icons/file-types/filled/sass.svg`
- `icons/file-types/filled/sbt.svg`
- `icons/file-types/filled/scala.svg`
- `icons/file-types/filled/scheme.svg`
- `icons/file-types/filled/scons-light.svg`
- `icons/file-types/filled/scons.svg`
- `icons/file-types/filled/screwdriver.svg`
- `icons/file-types/filled/semgrep.svg`
- `icons/file-types/filled/sequelize.svg`
- `icons/file-types/filled/serverless.svg`
- `icons/file-types/filled/shader.svg`
- `icons/file-types/filled/silverstripe.svg`
- `icons/file-types/filled/simulink.svg`
- `icons/file-types/filled/siyuan.svg`
- `icons/file-types/filled/slim.svg`
- `icons/file-types/filled/slint.svg`
- `icons/file-types/filled/slug.svg`
- `icons/file-types/filled/sml.svg`
- `icons/file-types/filled/snakemake.svg`
- `icons/file-types/filled/snapcraft.svg`
- `icons/file-types/filled/snowpack-light.svg`
- `icons/file-types/filled/snowpack.svg`
- `icons/file-types/filled/snyk.svg`
- `icons/file-types/filled/solidity.svg`
- `icons/file-types/filled/spwn.svg`
- `icons/file-types/filled/stackblitz.svg`
- `icons/file-types/filled/stan.svg`
- `icons/file-types/filled/stencil.svg`
- `icons/file-types/filled/storybook.svg`
- `icons/file-types/filled/stylable.svg`
- `icons/file-types/filled/stylelint-light.svg`
- `icons/file-types/filled/stylelint.svg`
- `icons/file-types/filled/stylus.svg`
- `icons/file-types/filled/sublime.svg`
- `icons/file-types/filled/subtitles.svg`
- `icons/file-types/filled/supabase.svg`
- `icons/file-types/filled/svelte-js.svg`
- `icons/file-types/filled/svelte-ts.svg`
- `icons/file-types/filled/svelte.svg`
- `icons/file-types/filled/svg.svg`
- `icons/file-types/filled/swagger.svg`
- `icons/file-types/filled/sway.svg`
- `icons/file-types/filled/swc.svg`
- `icons/file-types/filled/swift.svg`
- `icons/file-types/filled/syncpack.svg`
- `icons/file-types/filled/table.svg`
- `icons/file-types/filled/tailwindcss.svg`
- `icons/file-types/filled/tape.svg`
- `icons/file-types/filled/taskfile.svg`
- `icons/file-types/filled/tauri.svg`
- `icons/file-types/filled/taze.svg`
- `icons/file-types/filled/tcl.svg`
- `icons/file-types/filled/teal.svg`
- `icons/file-types/filled/terraform.svg`
- `icons/file-types/filled/tex.svg`
- `icons/file-types/filled/textlint.svg`
- `icons/file-types/filled/tilt.svg`
- `icons/file-types/filled/tldraw-light.svg`
- `icons/file-types/filled/tldraw.svg`
- `icons/file-types/filled/tobi.svg`
- `icons/file-types/filled/tobimake.svg`
- `icons/file-types/filled/todo.svg`
- `icons/file-types/filled/travis.svg`
- `icons/file-types/filled/tree.svg`
- `icons/file-types/filled/trigger.svg`
- `icons/file-types/filled/tsconfig.svg`
- `icons/file-types/filled/tsdoc.svg`
- `icons/file-types/filled/tsil.svg`
- `icons/file-types/filled/twig.svg`
- `icons/file-types/filled/twine.svg`
- `icons/file-types/filled/typescript.svg`
- `icons/file-types/filled/typst.svg`
- `icons/file-types/filled/umi.svg`
- `icons/file-types/filled/uml-light.svg`
- `icons/file-types/filled/uml.svg`
- `icons/file-types/filled/unity.svg`
- `icons/file-types/filled/unocss.svg`
- `icons/file-types/filled/uv.svg`
- `icons/file-types/filled/vagrant.svg`
- `icons/file-types/filled/vala.svg`
- `icons/file-types/filled/vanilla-extract.svg`
- `icons/file-types/filled/varnish.svg`
- `icons/file-types/filled/vedic.svg`
- `icons/file-types/filled/velite.svg`
- `icons/file-types/filled/vercel-light.svg`
- `icons/file-types/filled/vercel.svg`
- `icons/file-types/filled/verdaccio.svg`
- `icons/file-types/filled/verified.svg`
- `icons/file-types/filled/verse-light.svg`
- `icons/file-types/filled/verse.svg`
- `icons/file-types/filled/vfl.svg`
- `icons/file-types/filled/video.svg`
- `icons/file-types/filled/vim.svg`
- `icons/file-types/filled/visualstudio.svg`
- `icons/file-types/filled/vite.svg`
- `icons/file-types/filled/vitest.svg`
- `icons/file-types/filled/vlang.svg`
- `icons/file-types/filled/vscode.svg`
- `icons/file-types/filled/vue-config.svg`
- `icons/file-types/filled/vue.svg`
- `icons/file-types/filled/vuex-store.svg`
- `icons/file-types/filled/wallaby.svg`
- `icons/file-types/filled/wally.svg`
- `icons/file-types/filled/watchman.svg`
- `icons/file-types/filled/webassembly.svg`
- `icons/file-types/filled/webhint.svg`
- `icons/file-types/filled/webpack.svg`
- `icons/file-types/filled/werf.svg`
- `icons/file-types/filled/wolframlanguage.svg`
- `icons/file-types/filled/word.svg`
- `icons/file-types/filled/wrangler.svg`
- `icons/file-types/filled/xaml.svg`
- `icons/file-types/filled/xmake.svg`
- `icons/file-types/filled/xml.svg`
- `icons/file-types/filled/yaml.svg`
- `icons/file-types/filled/yang.svg`
- `icons/file-types/filled/yarn.svg`
- `icons/file-types/filled/zeabur-light.svg`
- `icons/file-types/filled/zeabur.svg`
- `icons/file-types/filled/zig.svg`
- `icons/file-types/filled/zip.svg`

</details>

<details>
<summary>Папки (folders) — 520</summary>

**outline**

- `icons/folders/outline/folder-root-open.svg`

**filled**

- `icons/folders/filled/folder-admin-open.svg`
- `icons/folders/filled/folder-admin.svg`
- `icons/folders/filled/folder-android-open.svg`
- `icons/folders/filled/folder-android.svg`
- `icons/folders/filled/folder-angular-open.svg`
- `icons/folders/filled/folder-angular.svg`
- `icons/folders/filled/folder-animation-open.svg`
- `icons/folders/filled/folder-animation.svg`
- `icons/folders/filled/folder-ansible-open.svg`
- `icons/folders/filled/folder-ansible.svg`
- `icons/folders/filled/folder-api-open.svg`
- `icons/folders/filled/folder-api.svg`
- `icons/folders/filled/folder-apollo-open.svg`
- `icons/folders/filled/folder-apollo.svg`
- `icons/folders/filled/folder-app-open.svg`
- `icons/folders/filled/folder-app.svg`
- `icons/folders/filled/folder-archive-open.svg`
- `icons/folders/filled/folder-archive.svg`
- `icons/folders/filled/folder-astro-open.svg`
- `icons/folders/filled/folder-astro.svg`
- `icons/folders/filled/folder-atom-open.svg`
- `icons/folders/filled/folder-atom.svg`
- `icons/folders/filled/folder-attachment-open.svg`
- `icons/folders/filled/folder-attachment.svg`
- `icons/folders/filled/folder-audio-open.svg`
- `icons/folders/filled/folder-audio.svg`
- `icons/folders/filled/folder-aurelia-open.svg`
- `icons/folders/filled/folder-aurelia.svg`
- `icons/folders/filled/folder-aws-open.svg`
- `icons/folders/filled/folder-aws.svg`
- `icons/folders/filled/folder-azure-pipelines-open.svg`
- `icons/folders/filled/folder-azure-pipelines.svg`
- `icons/folders/filled/folder-backup-open.svg`
- `icons/folders/filled/folder-backup.svg`
- `icons/folders/filled/folder-base-open.svg`
- `icons/folders/filled/folder-base.svg`
- `icons/folders/filled/folder-batch-open.svg`
- `icons/folders/filled/folder-batch.svg`
- `icons/folders/filled/folder-benchmark-open.svg`
- `icons/folders/filled/folder-benchmark.svg`
- `icons/folders/filled/folder-bibliography-open.svg`
- `icons/folders/filled/folder-bibliography.svg`
- `icons/folders/filled/folder-bicep-open.svg`
- `icons/folders/filled/folder-bicep.svg`
- `icons/folders/filled/folder-blender-open.svg`
- `icons/folders/filled/folder-blender.svg`
- `icons/folders/filled/folder-bloc-open.svg`
- `icons/folders/filled/folder-bloc.svg`
- `icons/folders/filled/folder-bower-open.svg`
- `icons/folders/filled/folder-bower.svg`
- `icons/folders/filled/folder-buildkite-open.svg`
- `icons/folders/filled/folder-buildkite.svg`
- `icons/folders/filled/folder-cart-open.svg`
- `icons/folders/filled/folder-cart.svg`
- `icons/folders/filled/folder-changesets-open.svg`
- `icons/folders/filled/folder-changesets.svg`
- `icons/folders/filled/folder-ci-open.svg`
- `icons/folders/filled/folder-ci.svg`
- `icons/folders/filled/folder-circleci-open.svg`
- `icons/folders/filled/folder-circleci.svg`
- `icons/folders/filled/folder-class-open.svg`
- `icons/folders/filled/folder-class.svg`
- `icons/folders/filled/folder-claude-open.svg`
- `icons/folders/filled/folder-claude.svg`
- `icons/folders/filled/folder-client-open.svg`
- `icons/folders/filled/folder-client.svg`
- `icons/folders/filled/folder-cline-open.svg`
- `icons/folders/filled/folder-cline.svg`
- `icons/folders/filled/folder-cloud-functions-open.svg`
- `icons/folders/filled/folder-cloud-functions.svg`
- `icons/folders/filled/folder-cloudflare-open.svg`
- `icons/folders/filled/folder-cloudflare.svg`
- `icons/folders/filled/folder-cluster-open.svg`
- `icons/folders/filled/folder-cluster.svg`
- `icons/folders/filled/folder-cobol-open.svg`
- `icons/folders/filled/folder-cobol.svg`
- `icons/folders/filled/folder-command-open.svg`
- `icons/folders/filled/folder-command.svg`
- `icons/folders/filled/folder-components-open.svg`
- `icons/folders/filled/folder-components.svg`
- `icons/folders/filled/folder-config-open.svg`
- `icons/folders/filled/folder-config.svg`
- `icons/folders/filled/folder-connection-open.svg`
- `icons/folders/filled/folder-connection.svg`
- `icons/folders/filled/folder-console-open.svg`
- `icons/folders/filled/folder-console.svg`
- `icons/folders/filled/folder-constant-open.svg`
- `icons/folders/filled/folder-constant.svg`
- `icons/folders/filled/folder-container-open.svg`
- `icons/folders/filled/folder-container.svg`
- `icons/folders/filled/folder-content-open.svg`
- `icons/folders/filled/folder-content.svg`
- `icons/folders/filled/folder-context-open.svg`
- `icons/folders/filled/folder-context.svg`
- `icons/folders/filled/folder-contract-open.svg`
- `icons/folders/filled/folder-contract.svg`
- `icons/folders/filled/folder-controller-open.svg`
- `icons/folders/filled/folder-controller.svg`
- `icons/folders/filled/folder-core-open.svg`
- `icons/folders/filled/folder-core.svg`
- `icons/folders/filled/folder-coverage-open.svg`
- `icons/folders/filled/folder-coverage.svg`
- `icons/folders/filled/folder-css-open.svg`
- `icons/folders/filled/folder-css.svg`
- `icons/folders/filled/folder-cursor-light.svg`
- `icons/folders/filled/folder-cursor-open-light.svg`
- `icons/folders/filled/folder-cursor-open.svg`
- `icons/folders/filled/folder-cursor.svg`
- `icons/folders/filled/folder-custom-open.svg`
- `icons/folders/filled/folder-custom.svg`
- `icons/folders/filled/folder-cypress-open.svg`
- `icons/folders/filled/folder-cypress.svg`
- `icons/folders/filled/folder-dart-open.svg`
- `icons/folders/filled/folder-dart.svg`
- `icons/folders/filled/folder-database-open.svg`
- `icons/folders/filled/folder-database.svg`
- `icons/folders/filled/folder-debug-open.svg`
- `icons/folders/filled/folder-debug.svg`
- `icons/folders/filled/folder-decorators-open.svg`
- `icons/folders/filled/folder-decorators.svg`
- `icons/folders/filled/folder-delta-open.svg`
- `icons/folders/filled/folder-delta.svg`
- `icons/folders/filled/folder-desktop-open.svg`
- `icons/folders/filled/folder-desktop.svg`
- `icons/folders/filled/folder-development-open.svg`
- `icons/folders/filled/folder-development.svg`
- `icons/folders/filled/folder-directive-open.svg`
- `icons/folders/filled/folder-directive.svg`
- `icons/folders/filled/folder-dist-open.svg`
- `icons/folders/filled/folder-dist.svg`
- `icons/folders/filled/folder-docker-open.svg`
- `icons/folders/filled/folder-docker.svg`
- `icons/folders/filled/folder-docs-open.svg`
- `icons/folders/filled/folder-docs.svg`
- `icons/folders/filled/folder-download-open.svg`
- `icons/folders/filled/folder-download.svg`
- `icons/folders/filled/folder-drizzle-open.svg`
- `icons/folders/filled/folder-drizzle.svg`
- `icons/folders/filled/folder-dump-open.svg`
- `icons/folders/filled/folder-dump.svg`
- `icons/folders/filled/folder-element-open.svg`
- `icons/folders/filled/folder-element.svg`
- `icons/folders/filled/folder-enum-open.svg`
- `icons/folders/filled/folder-enum.svg`
- `icons/folders/filled/folder-environment-open.svg`
- `icons/folders/filled/folder-environment.svg`
- `icons/folders/filled/folder-error-open.svg`
- `icons/folders/filled/folder-error.svg`
- `icons/folders/filled/folder-event-open.svg`
- `icons/folders/filled/folder-event.svg`
- `icons/folders/filled/folder-examples-open.svg`
- `icons/folders/filled/folder-examples.svg`
- `icons/folders/filled/folder-expo-open.svg`
- `icons/folders/filled/folder-expo.svg`
- `icons/folders/filled/folder-export-open.svg`
- `icons/folders/filled/folder-export.svg`
- `icons/folders/filled/folder-fastlane-open.svg`
- `icons/folders/filled/folder-fastlane.svg`
- `icons/folders/filled/folder-favicon-open.svg`
- `icons/folders/filled/folder-favicon.svg`
- `icons/folders/filled/folder-filter-open.svg`
- `icons/folders/filled/folder-filter.svg`
- `icons/folders/filled/folder-firebase-open.svg`
- `icons/folders/filled/folder-firebase.svg`
- `icons/folders/filled/folder-firestore-open.svg`
- `icons/folders/filled/folder-firestore.svg`
- `icons/folders/filled/folder-flow-open.svg`
- `icons/folders/filled/folder-flow.svg`
- `icons/folders/filled/folder-flutter-open.svg`
- `icons/folders/filled/folder-flutter.svg`
- `icons/folders/filled/folder-font-open.svg`
- `icons/folders/filled/folder-font.svg`
- `icons/folders/filled/folder-forgejo-open.svg`
- `icons/folders/filled/folder-forgejo.svg`
- `icons/folders/filled/folder-functions-open.svg`
- `icons/folders/filled/folder-functions.svg`
- `icons/folders/filled/folder-gamemaker-open.svg`
- `icons/folders/filled/folder-gamemaker.svg`
- `icons/folders/filled/folder-generator-open.svg`
- `icons/folders/filled/folder-generator.svg`
- `icons/folders/filled/folder-gh-workflows-open.svg`
- `icons/folders/filled/folder-gh-workflows.svg`
- `icons/folders/filled/folder-git-open.svg`
- `icons/folders/filled/folder-git.svg`
- `icons/folders/filled/folder-gitea-open.svg`
- `icons/folders/filled/folder-gitea.svg`
- `icons/folders/filled/folder-github-open.svg`
- `icons/folders/filled/folder-github.svg`
- `icons/folders/filled/folder-gitlab-open.svg`
- `icons/folders/filled/folder-gitlab.svg`
- `icons/folders/filled/folder-global-open.svg`
- `icons/folders/filled/folder-global.svg`
- `icons/folders/filled/folder-godot-open.svg`
- `icons/folders/filled/folder-godot.svg`
- `icons/folders/filled/folder-gradle-open.svg`
- `icons/folders/filled/folder-gradle.svg`
- `icons/folders/filled/folder-graphql-open.svg`
- `icons/folders/filled/folder-graphql.svg`
- `icons/folders/filled/folder-guard-open.svg`
- `icons/folders/filled/folder-guard.svg`
- `icons/folders/filled/folder-gulp-open.svg`
- `icons/folders/filled/folder-gulp.svg`
- `icons/folders/filled/folder-helm-open.svg`
- `icons/folders/filled/folder-helm.svg`
- `icons/folders/filled/folder-helper-open.svg`
- `icons/folders/filled/folder-helper.svg`
- `icons/folders/filled/folder-home-open.svg`
- `icons/folders/filled/folder-home.svg`
- `icons/folders/filled/folder-hook-open.svg`
- `icons/folders/filled/folder-hook.svg`
- `icons/folders/filled/folder-husky-open.svg`
- `icons/folders/filled/folder-husky.svg`
- `icons/folders/filled/folder-i18n-open.svg`
- `icons/folders/filled/folder-i18n.svg`
- `icons/folders/filled/folder-images-open.svg`
- `icons/folders/filled/folder-images.svg`
- `icons/folders/filled/folder-import-open.svg`
- `icons/folders/filled/folder-import.svg`
- `icons/folders/filled/folder-include-open.svg`
- `icons/folders/filled/folder-include.svg`
- `icons/folders/filled/folder-intellij-light.svg`
- `icons/folders/filled/folder-intellij-open-light.svg`
- `icons/folders/filled/folder-intellij-open.svg`
- `icons/folders/filled/folder-intellij.svg`
- `icons/folders/filled/folder-interceptor-open.svg`
- `icons/folders/filled/folder-interceptor.svg`
- `icons/folders/filled/folder-interface-open.svg`
- `icons/folders/filled/folder-interface.svg`
- `icons/folders/filled/folder-ios-open.svg`
- `icons/folders/filled/folder-ios.svg`
- `icons/folders/filled/folder-java-open.svg`
- `icons/folders/filled/folder-java.svg`
- `icons/folders/filled/folder-javascript-open.svg`
- `icons/folders/filled/folder-javascript.svg`
- `icons/folders/filled/folder-jinja-light.svg`
- `icons/folders/filled/folder-jinja-open-light.svg`
- `icons/folders/filled/folder-jinja-open.svg`
- `icons/folders/filled/folder-jinja.svg`
- `icons/folders/filled/folder-job-open.svg`
- `icons/folders/filled/folder-job.svg`
- `icons/folders/filled/folder-json-open.svg`
- `icons/folders/filled/folder-json.svg`
- `icons/folders/filled/folder-jupyter-open.svg`
- `icons/folders/filled/folder-jupyter.svg`
- `icons/folders/filled/folder-keys-open.svg`
- `icons/folders/filled/folder-keys.svg`
- `icons/folders/filled/folder-kubernetes-open.svg`
- `icons/folders/filled/folder-kubernetes.svg`
- `icons/folders/filled/folder-kusto-open.svg`
- `icons/folders/filled/folder-kusto.svg`
- `icons/folders/filled/folder-layout-open.svg`
- `icons/folders/filled/folder-layout.svg`
- `icons/folders/filled/folder-lefthook-open.svg`
- `icons/folders/filled/folder-lefthook.svg`
- `icons/folders/filled/folder-less-open.svg`
- `icons/folders/filled/folder-less.svg`
- `icons/folders/filled/folder-lib-open.svg`
- `icons/folders/filled/folder-lib.svg`
- `icons/folders/filled/folder-link-open.svg`
- `icons/folders/filled/folder-link.svg`
- `icons/folders/filled/folder-linux-open.svg`
- `icons/folders/filled/folder-linux.svg`
- `icons/folders/filled/folder-liquibase-open.svg`
- `icons/folders/filled/folder-liquibase.svg`
- `icons/folders/filled/folder-log-open.svg`
- `icons/folders/filled/folder-log.svg`
- `icons/folders/filled/folder-lottie-open.svg`
- `icons/folders/filled/folder-lottie.svg`
- `icons/folders/filled/folder-lua-open.svg`
- `icons/folders/filled/folder-lua.svg`
- `icons/folders/filled/folder-luau-open.svg`
- `icons/folders/filled/folder-luau.svg`
- `icons/folders/filled/folder-macos-open.svg`
- `icons/folders/filled/folder-macos.svg`
- `icons/folders/filled/folder-mail-open.svg`
- `icons/folders/filled/folder-mail.svg`
- `icons/folders/filled/folder-mappings-open.svg`
- `icons/folders/filled/folder-mappings.svg`
- `icons/folders/filled/folder-markdown-open.svg`
- `icons/folders/filled/folder-markdown.svg`
- `icons/folders/filled/folder-mercurial-open.svg`
- `icons/folders/filled/folder-mercurial.svg`
- `icons/folders/filled/folder-messages-open.svg`
- `icons/folders/filled/folder-messages.svg`
- `icons/folders/filled/folder-meta-open.svg`
- `icons/folders/filled/folder-meta.svg`
- `icons/folders/filled/folder-metro-open.svg`
- `icons/folders/filled/folder-metro.svg`
- `icons/folders/filled/folder-middleware-open.svg`
- `icons/folders/filled/folder-middleware.svg`
- `icons/folders/filled/folder-mjml-open.svg`
- `icons/folders/filled/folder-mjml.svg`
- `icons/folders/filled/folder-mobile-open.svg`
- `icons/folders/filled/folder-mobile.svg`
- `icons/folders/filled/folder-mock-open.svg`
- `icons/folders/filled/folder-mock.svg`
- `icons/folders/filled/folder-mojo-open.svg`
- `icons/folders/filled/folder-mojo.svg`
- `icons/folders/filled/folder-molecule-open.svg`
- `icons/folders/filled/folder-molecule.svg`
- `icons/folders/filled/folder-moon-open.svg`
- `icons/folders/filled/folder-moon.svg`
- `icons/folders/filled/folder-netlify-open.svg`
- `icons/folders/filled/folder-netlify.svg`
- `icons/folders/filled/folder-next-open.svg`
- `icons/folders/filled/folder-next.svg`
- `icons/folders/filled/folder-ngrx-actions-open.svg`
- `icons/folders/filled/folder-ngrx-actions.svg`
- `icons/folders/filled/folder-ngrx-effects-open.svg`
- `icons/folders/filled/folder-ngrx-effects.svg`
- `icons/folders/filled/folder-ngrx-entities-open.svg`
- `icons/folders/filled/folder-ngrx-entities.svg`
- `icons/folders/filled/folder-ngrx-reducer-open.svg`
- `icons/folders/filled/folder-ngrx-reducer.svg`
- `icons/folders/filled/folder-ngrx-selectors-open.svg`
- `icons/folders/filled/folder-ngrx-selectors.svg`
- `icons/folders/filled/folder-ngrx-state-open.svg`
- `icons/folders/filled/folder-ngrx-state.svg`
- `icons/folders/filled/folder-ngrx-store-open.svg`
- `icons/folders/filled/folder-ngrx-store.svg`
- `icons/folders/filled/folder-node-open.svg`
- `icons/folders/filled/folder-node.svg`
- `icons/folders/filled/folder-nuxt-open.svg`
- `icons/folders/filled/folder-nuxt.svg`
- `icons/folders/filled/folder-obsidian-open.svg`
- `icons/folders/filled/folder-obsidian.svg`
- `icons/folders/filled/folder-open.svg`
- `icons/folders/filled/folder-organism-open.svg`
- `icons/folders/filled/folder-organism.svg`
- `icons/folders/filled/folder-other-open.svg`
- `icons/folders/filled/folder-other.svg`
- `icons/folders/filled/folder-packages-open.svg`
- `icons/folders/filled/folder-packages.svg`
- `icons/folders/filled/folder-pdf-open.svg`
- `icons/folders/filled/folder-pdf.svg`
- `icons/folders/filled/folder-pdm-open.svg`
- `icons/folders/filled/folder-pdm.svg`
- `icons/folders/filled/folder-php-open.svg`
- `icons/folders/filled/folder-php.svg`
- `icons/folders/filled/folder-phpmailer-open.svg`
- `icons/folders/filled/folder-phpmailer.svg`
- `icons/folders/filled/folder-pipe-open.svg`
- `icons/folders/filled/folder-pipe.svg`
- `icons/folders/filled/folder-plastic-open.svg`
- `icons/folders/filled/folder-plastic.svg`
- `icons/folders/filled/folder-plugin-open.svg`
- `icons/folders/filled/folder-plugin.svg`
- `icons/folders/filled/folder-policy-open.svg`
- `icons/folders/filled/folder-policy.svg`
- `icons/folders/filled/folder-powershell-open.svg`
- `icons/folders/filled/folder-powershell.svg`
- `icons/folders/filled/folder-prisma-open.svg`
- `icons/folders/filled/folder-prisma.svg`
- `icons/folders/filled/folder-private-open.svg`
- `icons/folders/filled/folder-private.svg`
- `icons/folders/filled/folder-project-open.svg`
- `icons/folders/filled/folder-project.svg`
- `icons/folders/filled/folder-prompts-open.svg`
- `icons/folders/filled/folder-prompts.svg`
- `icons/folders/filled/folder-proto-open.svg`
- `icons/folders/filled/folder-proto.svg`
- `icons/folders/filled/folder-public-open.svg`
- `icons/folders/filled/folder-public.svg`
- `icons/folders/filled/folder-python-open.svg`
- `icons/folders/filled/folder-python.svg`
- `icons/folders/filled/folder-pytorch-open.svg`
- `icons/folders/filled/folder-pytorch.svg`
- `icons/folders/filled/folder-quasar-open.svg`
- `icons/folders/filled/folder-quasar.svg`
- `icons/folders/filled/folder-queue-open.svg`
- `icons/folders/filled/folder-queue.svg`
- `icons/folders/filled/folder-react-components-open.svg`
- `icons/folders/filled/folder-react-components.svg`
- `icons/folders/filled/folder-redux-actions-open.svg`
- `icons/folders/filled/folder-redux-actions.svg`
- `icons/folders/filled/folder-redux-reducer-open.svg`
- `icons/folders/filled/folder-redux-reducer.svg`
- `icons/folders/filled/folder-redux-selector-open.svg`
- `icons/folders/filled/folder-redux-selector.svg`
- `icons/folders/filled/folder-redux-store-open.svg`
- `icons/folders/filled/folder-redux-store.svg`
- `icons/folders/filled/folder-repository-open.svg`
- `icons/folders/filled/folder-repository.svg`
- `icons/folders/filled/folder-resolver-open.svg`
- `icons/folders/filled/folder-resolver.svg`
- `icons/folders/filled/folder-resource-open.svg`
- `icons/folders/filled/folder-resource.svg`
- `icons/folders/filled/folder-review-open.svg`
- `icons/folders/filled/folder-review.svg`
- `icons/folders/filled/folder-robot-open.svg`
- `icons/folders/filled/folder-robot.svg`
- `icons/folders/filled/folder-root.svg`
- `icons/folders/filled/folder-routes-open.svg`
- `icons/folders/filled/folder-routes.svg`
- `icons/folders/filled/folder-rules-open.svg`
- `icons/folders/filled/folder-rules.svg`
- `icons/folders/filled/folder-rust-open.svg`
- `icons/folders/filled/folder-rust.svg`
- `icons/folders/filled/folder-sandbox-open.svg`
- `icons/folders/filled/folder-sandbox.svg`
- `icons/folders/filled/folder-sass-open.svg`
- `icons/folders/filled/folder-sass.svg`
- `icons/folders/filled/folder-scala-open.svg`
- `icons/folders/filled/folder-scala.svg`
- `icons/folders/filled/folder-scons-open.svg`
- `icons/folders/filled/folder-scons.svg`
- `icons/folders/filled/folder-scripts-open.svg`
- `icons/folders/filled/folder-scripts.svg`
- `icons/folders/filled/folder-secure-open.svg`
- `icons/folders/filled/folder-secure.svg`
- `icons/folders/filled/folder-seeders-open.svg`
- `icons/folders/filled/folder-seeders.svg`
- `icons/folders/filled/folder-server-open.svg`
- `icons/folders/filled/folder-server.svg`
- `icons/folders/filled/folder-serverless-open.svg`
- `icons/folders/filled/folder-serverless.svg`
- `icons/folders/filled/folder-shader-open.svg`
- `icons/folders/filled/folder-shader.svg`
- `icons/folders/filled/folder-shared-open.svg`
- `icons/folders/filled/folder-shared.svg`
- `icons/folders/filled/folder-snapcraft-open.svg`
- `icons/folders/filled/folder-snapcraft.svg`
- `icons/folders/filled/folder-snippet-open.svg`
- `icons/folders/filled/folder-snippet.svg`
- `icons/folders/filled/folder-src-open.svg`
- `icons/folders/filled/folder-src-tauri-open.svg`
- `icons/folders/filled/folder-src-tauri.svg`
- `icons/folders/filled/folder-src.svg`
- `icons/folders/filled/folder-stack-open.svg`
- `icons/folders/filled/folder-stack.svg`
- `icons/folders/filled/folder-stencil-open.svg`
- `icons/folders/filled/folder-stencil.svg`
- `icons/folders/filled/folder-store-open.svg`
- `icons/folders/filled/folder-store.svg`
- `icons/folders/filled/folder-storybook-open.svg`
- `icons/folders/filled/folder-storybook.svg`
- `icons/folders/filled/folder-stylus-open.svg`
- `icons/folders/filled/folder-stylus.svg`
- `icons/folders/filled/folder-sublime-open.svg`
- `icons/folders/filled/folder-sublime.svg`
- `icons/folders/filled/folder-supabase-open.svg`
- `icons/folders/filled/folder-supabase.svg`
- `icons/folders/filled/folder-svelte-open.svg`
- `icons/folders/filled/folder-svelte.svg`
- `icons/folders/filled/folder-svg-open.svg`
- `icons/folders/filled/folder-svg.svg`
- `icons/folders/filled/folder-syntax-open.svg`
- `icons/folders/filled/folder-syntax.svg`
- `icons/folders/filled/folder-target-open.svg`
- `icons/folders/filled/folder-target.svg`
- `icons/folders/filled/folder-taskfile-open.svg`
- `icons/folders/filled/folder-taskfile.svg`
- `icons/folders/filled/folder-tasks-open.svg`
- `icons/folders/filled/folder-tasks.svg`
- `icons/folders/filled/folder-television-open.svg`
- `icons/folders/filled/folder-television.svg`
- `icons/folders/filled/folder-temp-open.svg`
- `icons/folders/filled/folder-temp.svg`
- `icons/folders/filled/folder-template-open.svg`
- `icons/folders/filled/folder-template.svg`
- `icons/folders/filled/folder-terraform-open.svg`
- `icons/folders/filled/folder-terraform.svg`
- `icons/folders/filled/folder-test-open.svg`
- `icons/folders/filled/folder-test.svg`
- `icons/folders/filled/folder-theme-open.svg`
- `icons/folders/filled/folder-theme.svg`
- `icons/folders/filled/folder-tools-open.svg`
- `icons/folders/filled/folder-tools.svg`
- `icons/folders/filled/folder-trash-open.svg`
- `icons/folders/filled/folder-trash.svg`
- `icons/folders/filled/folder-trigger-open.svg`
- `icons/folders/filled/folder-trigger.svg`
- `icons/folders/filled/folder-turborepo-open.svg`
- `icons/folders/filled/folder-turborepo.svg`
- `icons/folders/filled/folder-typescript-open.svg`
- `icons/folders/filled/folder-typescript.svg`
- `icons/folders/filled/folder-ui-open.svg`
- `icons/folders/filled/folder-ui.svg`
- `icons/folders/filled/folder-unity-open.svg`
- `icons/folders/filled/folder-unity.svg`
- `icons/folders/filled/folder-update-open.svg`
- `icons/folders/filled/folder-update.svg`
- `icons/folders/filled/folder-upload-open.svg`
- `icons/folders/filled/folder-upload.svg`
- `icons/folders/filled/folder-utils-open.svg`
- `icons/folders/filled/folder-utils.svg`
- `icons/folders/filled/folder-vercel-open.svg`
- `icons/folders/filled/folder-vercel.svg`
- `icons/folders/filled/folder-verdaccio-open.svg`
- `icons/folders/filled/folder-verdaccio.svg`
- `icons/folders/filled/folder-video-open.svg`
- `icons/folders/filled/folder-video.svg`
- `icons/folders/filled/folder-views-open.svg`
- `icons/folders/filled/folder-views.svg`
- `icons/folders/filled/folder-vm-open.svg`
- `icons/folders/filled/folder-vm.svg`
- `icons/folders/filled/folder-vscode-open.svg`
- `icons/folders/filled/folder-vscode.svg`
- `icons/folders/filled/folder-vue-directives-open.svg`
- `icons/folders/filled/folder-vue-directives.svg`
- `icons/folders/filled/folder-vue-open.svg`
- `icons/folders/filled/folder-vue.svg`
- `icons/folders/filled/folder-vuepress-open.svg`
- `icons/folders/filled/folder-vuepress.svg`
- `icons/folders/filled/folder-vuex-store-open.svg`
- `icons/folders/filled/folder-vuex-store.svg`
- `icons/folders/filled/folder-wakatime-open.svg`
- `icons/folders/filled/folder-wakatime.svg`
- `icons/folders/filled/folder-webpack-open.svg`
- `icons/folders/filled/folder-webpack.svg`
- `icons/folders/filled/folder-windows-open.svg`
- `icons/folders/filled/folder-windows.svg`
- `icons/folders/filled/folder-wordpress-open.svg`
- `icons/folders/filled/folder-wordpress.svg`
- `icons/folders/filled/folder-yarn-open.svg`
- `icons/folders/filled/folder-yarn.svg`
- `icons/folders/filled/folder-zeabur-open.svg`
- `icons/folders/filled/folder-zeabur.svg`
- `icons/folders/filled/folder.svg`

</details>

Права на сторонние значки этим пакетом не передаются; условия повторного использования не проверены.
