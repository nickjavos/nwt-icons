'use strict';

const React = require('react');
const h = React.createElement;
const weights = { thin: 0.9, light: 1.2, regular: 1.6, filled: 1.6 };
const circle = (props = {}) => h('circle', { cx: 12, cy: 12, r: 8, ...props });
const line = (d, props = {}) => h('path', { d, ...props });

function priorityChevrons(count, filled) {
  const start = 12 - (count - 1) * 3;
  return Array.from({ length: count }, (_, index) =>
    line(`M6 ${start + index * 6 + 2.5} 12 ${start + index * 6 - 2.5} 18 ${start + index * 6 + 2.5}`,
      { key: index, strokeWidth: filled ? 3 : undefined }));
}

const shapes = {
  Calendar: filled => [
    h('rect', { x: 3.5, y: 5.5, width: 17, height: 15, rx: 3, fill: filled ? 'currentColor' : 'none' }),
    line('M7.5 3.5v4M16.5 3.5v4M3.5 10h17', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {}),
  ],
  Branch: filled => [
    h('circle', { cx: 6, cy: 5, r: 2.3, fill: filled ? 'currentColor' : 'none' }),
    h('circle', { cx: 18, cy: 19, r: 2.3, fill: filled ? 'currentColor' : 'none' }),
    line('M6 7.3v13M18 16.7v-3.2c0-2.5-1.5-4-4-4h-2'),
    line('m13.8 7.3-2.3 2.2 2.3 2.2'),
  ],
  Backlog: filled => Array.from({ length: 12 }, (_, index) => {
    const transform = `rotate(${index * 30} 12 12)`;
    return filled
      ? h('rect', { x: 10.95, y: 1.5, width: 2.1, height: 3, transform, fill: 'currentColor', stroke: 'none' })
      : line('M12 1.5v3', { transform, strokeLinecap: 'butt' });
  }),
  Todo: filled => [circle({ r: 9.375, strokeWidth: filled ? 2.5 : undefined })],
  InProgress: filled => [
    circle({ r: 9.375, strokeWidth: filled ? 2.5 : undefined }),
    line('M12 6a6 6 0 0 1 0 12Z', { fill: 'currentColor', stroke: 'none' }),
  ],
  InReview: filled => [
    circle({ r: 9.375, strokeWidth: filled ? 2.5 : undefined }),
    line('M12 6a6 6 0 1 1-6 6h6Z', { fill: 'currentColor', stroke: 'none' }),
  ],
  Done: filled => filled
    ? [line('M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m4.101 5.101a.85.85 0 1 0-1.202-1.202L6.5 9.298 5.101 7.899a.85.85 0 1 0-1.202 1.202l2 2a.85.85 0 0 0 1.202 0z', { transform: 'scale(1.5)', fill: 'currentColor', fillRule: 'evenodd', stroke: 'none' })]
    : [circle({ r: 9.375 }), line('m7.65 12.75 2.1 2.1L17.25 7.35')],
  Canceled: filled => [circle({ fill: filled ? 'currentColor' : 'none' }), line('m9 9 6 6m0-6-6 6', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {})],
  Duplicate: filled => [circle({ fill: filled ? 'currentColor' : 'none' }), line('m8.3 13.7 5.4-5.4m-2.5 7.4 4.5-4.5', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {})],

  PullRequest: filled => [
    h('circle', { cx: 6, cy: 5, r: 2.3, fill: filled ? 'currentColor' : 'none' }),
    h('circle', { cx: 6, cy: 19, r: 2.3, fill: filled ? 'currentColor' : 'none' }),
    h('circle', { cx: 18, cy: 19, r: 2.3, fill: filled ? 'currentColor' : 'none' }),
    line('M6 7.3v9.4M18 16.7V9c0-2-1-3-3-3h-3m2-2-2 2 2 2', { strokeWidth: filled ? 2.5 : undefined }),
  ],
  PullRequestMerged: filled => [
    h('circle', { cx: 5.25, cy: 5.25, r: 2.625, fill: 'currentColor', stroke: 'none' }),
    h('circle', { cx: 18.75, cy: 18.75, r: 2.625, fill: 'currentColor', stroke: 'none' }),
    line('M5.25 7.8v13.5M12 5.25h3a3.75 3.75 0 0 1 3.75 3.75v7.2', { strokeWidth: filled ? 2.8 : undefined }),
  ],
  Commit: filled => [
    h('circle', { cx: 12, cy: 12, r: 3, fill: filled ? 'currentColor' : 'none' }),
    line('M3 12h6m6 0h6', { strokeWidth: filled ? 2.5 : undefined }),
  ],
  Fork: filled => [
    ...[[5.25,5.25],[5.25,18.75],[18.75,18.75]].map(([cx,cy], index) =>
      h('circle', { key: index, cx, cy, r: 2.4, fill: filled ? 'currentColor' : 'none' })),
    line('M5.25 7.7v8.6M12 5.25h3a3.75 3.75 0 0 1 3.75 3.75v7.3', { strokeWidth: filled ? 2.5 : undefined }),
  ],
  Repository: filled => [
    line('M6 3.5h12a2 2 0 0 1 2 2v15H7a3 3 0 0 1-3-3v-11a3 3 0 0 1 2-3Z', { fill: filled ? 'currentColor' : 'none' }),
    line('M7 3.5v14h13M7 17.5a3 3 0 0 0-3 3', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {}),
  ],
  Code: filled => [line('m8 8-3.2 4L8 16m8-8 3.2 4-3.2 4M13.5 5l-3 14', { strokeWidth: filled ? 2.7 : undefined })],
  CheckCircle: filled => [
    circle({ r: 9, fill: filled ? 'currentColor' : 'none' }),
    line('m7.7 12 2.8 2.8 5.8-6', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {}),
  ],
  PriorityNone: filled => [
    line('M2.75 12h3.5m4 0h3.5m4 0h3.5', { strokeWidth: filled ? 2.8 : undefined }),
  ],
  PriorityLow: filled => priorityChevrons(1, filled),
  PriorityMedium: filled => priorityChevrons(2, filled),
  PriorityHigh: filled => priorityChevrons(3, filled),

  PriorityUrgent: filled => [
    h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 3.5, fill: filled ? 'currentColor' : 'none' }),
    line('M12 7v6m0 4h.01', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {}),
  ],
  CalendarAdd: filled => [
    h('rect', { x: 3, y: 5, width: 18, height: 16, rx: 3, fill: filled ? 'currentColor' : 'none' }),
    line('M7 3v4m10-4v4M3 9h18M12 12v6m-3-3h6', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {}),
  ],
  CalendarDone: filled => [
    h('rect', { x: 3, y: 5, width: 18, height: 16, rx: 3, fill: filled ? 'currentColor' : 'none' }),
    line('M7 3v4m10-4v4M3 9h18m-9 6 2 2 3.5-4', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {}),
  ],
  CalendarOverdue: filled => [
    h('rect', { x: 3, y: 5, width: 18, height: 16, rx: 3, fill: filled ? 'currentColor' : 'none' }),
    line('M7 3v4m10-4v4M3 9h18M9 12l5 5m0-5-5 5', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {}),
  ],
  Clock: filled => [
    circle({ r: 9, fill: filled ? 'currentColor' : 'none' }),
    line('M12 6.5v5.8l4 2.3', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {}),
  ],
  Link: filled => [line('M10.3 13.7l3.4-3.4M9.5 17l-1.8 1.8a3.8 3.8 0 0 1-5.4-5.4l3.3-3.3a3.8 3.8 0 0 1 5.3-.1M14.5 7l1.8-1.8a3.8 3.8 0 0 1 5.4 5.4l-3.3 3.3a3.8 3.8 0 0 1-5.3.1', { strokeWidth: filled ? 2.8 : undefined })],
  Attachment: filled => [line('m18.5 11-5.6 5.6c-2.2 2.2-5.4 2.4-7.1.7-1.8-1.8-1.5-5 .6-7.2l5.1-5.1c1.4-1.4 3.5-1.5 4.6-.4 1.1 1.1.9 3.1-.5 4.5l-5.1 5.1c-.6.6-1.5.7-2 .2-.4-.4-.3-1.3.3-1.9l4.6-4.6', { strokeWidth: filled ? 2.7 : undefined })],
  Label: filled => [
    line('M7.7 4.5H18a4.5 4.5 0 0 1 4.5 4.5v6a4.5 4.5 0 0 1-4.5 4.5H7.7a3 3 0 0 1-2.3-1.1L1.8 14a3 3 0 0 1 0-4l3.6-4.4a3 3 0 0 1 2.3-1.1Z', { fill: filled ? 'currentColor' : 'none' }),
    h('circle', { cx: 9.75, cy: 12, r: 1.5, fill: filled ? 'var(--icon-cutout, #fff)' : 'currentColor', stroke: 'none' }),
  ],
  Milestone: filled => [line('M10.1 2.5a2.5 2.5 0 0 1 3.8 0l7.2 8.6a1.4 1.4 0 0 1 0 1.8l-7.2 8.6a2.5 2.5 0 0 1-3.8 0l-7.2-8.6a1.4 1.4 0 0 1 0-1.8Z', { strokeWidth: filled ? 2.8 : undefined })],

};

function makeIcon(name) {
  const Component = React.forwardRef(function Icon({ size = 24, variant = 'regular', color = 'currentColor', title, ...props }, ref) {
    const maskId = `nwt-icon-${React.useId()}`;
    const filled = variant === 'filled';
    const accessible = Boolean(title || props['aria-label'] || props['aria-labelledby']);
    const parts = shapes[name](filled);
    const cutouts = parts.filter(part => part.props.fill === 'var(--icon-cutout, #fff)' || part.props.stroke === 'var(--icon-cutout, #fff)');
    const visible = parts.filter(part => !cutouts.includes(part));
    const mask = cutouts.length > 0 && h('mask', { id: maskId, maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: 24, height: 24 },
      h('rect', { width: 24, height: 24, fill: '#fff', stroke: 'none' }),
      ...cutouts.map((part, i) => React.cloneElement(part, {
        key: i,
        ...(part.props.fill === 'var(--icon-cutout, #fff)' ? { fill: '#000' } : {}),
        ...(part.props.stroke === 'var(--icon-cutout, #fff)' ? { stroke: '#000' } : {}),
      })));
    return h('svg', {
      xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: size, height: size,
      fill: 'none', stroke: color, color, strokeWidth: weights[variant] || weights.regular,
      strokeLinecap: 'round', strokeLinejoin: 'round',
      ...(accessible ? { role: 'img' } : { 'aria-hidden': true }), ...props, ref,
    }, title && h('title', null, title), mask && h('defs', null, mask),
    h('g', cutouts.length ? { mask: `url(#${maskId})` } : null, ...visible.map((child, i) => React.cloneElement(child, { key: i }))));
  });
  Component.displayName = `${name}Icon`;
  return Component;
}

exports.CalendarIcon = makeIcon('Calendar');
exports.BranchIcon = makeIcon('Branch');
exports.BacklogIcon = makeIcon('Backlog');
exports.TodoIcon = makeIcon('Todo');
exports.InProgressIcon = makeIcon('InProgress');
exports.InReviewIcon = makeIcon('InReview');
exports.DoneIcon = makeIcon('Done');
exports.CanceledIcon = makeIcon('Canceled');
exports.DuplicateIcon = makeIcon('Duplicate');

exports.PullRequestIcon = makeIcon('PullRequest');
exports.PullRequestMergedIcon = makeIcon('PullRequestMerged');
exports.CommitIcon = makeIcon('Commit');
exports.ForkIcon = makeIcon('Fork');
exports.RepositoryIcon = makeIcon('Repository');
exports.CodeIcon = makeIcon('Code');
exports.CheckCircleIcon = makeIcon('CheckCircle');
exports.PriorityNoneIcon = makeIcon('PriorityNone');
exports.PriorityLowIcon = makeIcon('PriorityLow');
exports.PriorityMediumIcon = makeIcon('PriorityMedium');
exports.PriorityHighIcon = makeIcon('PriorityHigh');
exports.PriorityUrgentIcon = makeIcon('PriorityUrgent');
exports.CalendarAddIcon = makeIcon('CalendarAdd');
exports.CalendarDoneIcon = makeIcon('CalendarDone');
exports.CalendarOverdueIcon = makeIcon('CalendarOverdue');
exports.ClockIcon = makeIcon('Clock');
exports.LinkIcon = makeIcon('Link');
exports.AttachmentIcon = makeIcon('Attachment');
exports.LabelIcon = makeIcon('Label');
exports.MilestoneIcon = makeIcon('Milestone');
