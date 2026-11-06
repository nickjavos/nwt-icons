'use strict';

const React = require('react');
const h = React.createElement;
const weights = { thin: 0.9, light: 1.2, regular: 1.6, filled: 1.6 };
const circle = (props = {}) => h('circle', { cx: 12, cy: 12, r: 8, ...props });
const line = (d, props = {}) => h('path', { d, ...props });

function priorityRing(count, filled) {
  const points = Array.from({ length: count }, (_, index) =>
    h('circle', { key: index, cx: 12 + (index - (count - 1) / 2) * 4.2, cy: 12, r: 1.15, fill: 'currentColor', stroke: 'none' }));
  return [circle({ r: 9, strokeWidth: filled ? 2.8 : undefined }), ...points];
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
  PriorityLow: filled => priorityRing(1, filled),
  PriorityMedium: filled => priorityRing(2, filled),
  PriorityHigh: filled => priorityRing(3, filled),

  PriorityUrgent: filled => [
    h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 3.5, fill: filled ? 'currentColor' : 'none' }),
    line('M12 7v6m0 4h.01', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {}),
  ],
  CalendarAdd: filled => filled
    ? [line('M15 5C15 2.79086 13.2091 1 11 1H5C2.79086 1 1 2.79086 1 5V11C1 13.2091 2.79086 15 5 15H6.25C6.66421 15 7 14.6642 7 14.25C7 13.8358 6.66421 13.5 6.25 13.5H5C3.61929 13.5 2.5 12.3807 2.5 11V6H13.5V6.25C13.5 6.66421 13.8358 7 14.25 7C14.6642 7 15 6.66421 15 6.25V5ZM11.5001 8C11.9143 8 12.2501 8.33579 12.2501 8.75V10.75L14.2501 10.75C14.6643 10.75 15.0001 11.0858 15.0001 11.5C15.0001 11.9142 14.6643 12.25 14.2501 12.25L12.2501 12.25V14.25C12.2501 14.6642 11.9143 15 11.5001 15C11.0859 15 10.7501 14.6642 10.7501 14.25V12.25H8.75C8.33579 12.25 8 11.9142 8 11.5C8 11.0858 8.33579 10.75 8.75 10.75L10.7501 10.75V8.75C10.7501 8.33579 11.0859 8 11.5001 8Z', { transform: 'scale(1.5)', fill: 'currentColor', stroke: 'none' })]
    : [
      line('M21.4 9.4V7.5a4.9 4.9 0 0 0-4.9-4.9h-9a4.9 4.9 0 0 0-4.9 4.9v9a4.9 4.9 0 0 0 4.9 4.9h1.9M2.6 7.8h18.8'),
      line('M17.25 13v8.5m-4.25-4.25h8.5'),
    ],
  CalendarDone: filled => filled
    ? [line('M15 5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h.25a.75.75 0 0 0 0-1.5H5A2.5 2.5 0 0 1 2.5 11V6h11v1A.75.75 0 0 0 15 7z', { transform: 'scale(1.5)', fill: 'currentColor', stroke: 'none' }), line('M14.795 10.265a.75.75 0 0 0-1.09-1.03l-3.688 3.905-1.456-1.638a.75.75 0 0 0-1.122.996l2 2.25a.75.75 0 0 0 1.106.017z', { transform: 'scale(1.5)', fill: 'currentColor', stroke: 'none' })]
    : [
      line('M21.4 9.4V7.5a4.9 4.9 0 0 0-4.9-4.9h-9a4.9 4.9 0 0 0-4.9 4.9v9a4.9 4.9 0 0 0 4.9 4.9h1.9M2.6 7.8h18.8'),
      line('m12.2 18 2.8 2.8 6.1-6.5'),
    ],
  CalendarOverdue: filled => filled
    ? [line('M15 5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h1.25a.75.75 0 0 0 0-1.5H5A2.5 2.5 0 0 1 2.5 11V6h11v.25a.75.75 0 0 0 1.5 0zm-1.016 4.034a.75.75 0 0 1-.004 1.06l-1.42 1.41 1.41 1.42a.75.75 0 0 1-1.065 1.056l-1.409-1.42-1.42 1.41a.75.75 0 0 1-1.056-1.065l1.42-1.409-1.41-1.42a.75.75 0 1 1 1.065-1.056l1.409 1.42 1.42-1.41a.75.75 0 0 1 1.06.004', { transform: 'scale(1.5)', fill: 'currentColor', fillRule: 'evenodd', stroke: 'none' })]
    : [
      line('M21.4 9.4V7.5a4.9 4.9 0 0 0-4.9-4.9h-9a4.9 4.9 0 0 0-4.9 4.9v9a4.9 4.9 0 0 0 4.9 4.9h1.9M2.6 7.8h18.8'),
      line('m14.5 14.5 6.1 6.1m0-6.1-6.1 6.1'),
    ],
  Clock: filled => [
    circle({ r: 9, fill: filled ? 'currentColor' : 'none' }),
    line('M12 6.75V12h4.5', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {}),
  ],
  Link: filled => filled ? [line('M9.306 10.206a.745.745 0 0 1 .066.977l-.066.076-2.458 2.458a3.228 3.228 0 0 1-4.691-4.431l.126-.133L4.74 6.694a.745.745 0 0 1 1.12.978l-.067.076-2.458 2.458a1.738 1.738 0 0 0 2.353 2.555l.105-.097 2.458-2.458a.745.745 0 0 1 1.054 0M9.83 6.17c.29.291.29.763 0 1.054l-2.48 2.48a.745.745 0 1 1-1.054-1.053l2.48-2.48a.745.745 0 0 1 1.054 0m3.887-3.887a3.23 3.23 0 0 1 .126 4.431l-.126.133-2.458 2.459a.745.745 0 0 1-1.12-.978l.067-.076 2.458-2.458a1.738 1.738 0 0 0-2.353-2.555l-.105.097-2.458 2.458a.745.745 0 0 1-1.12-.977l.066-.076 2.459-2.458a3.23 3.23 0 0 1 4.564 0', { transform: 'scale(1.5)', fill: 'currentColor', stroke: 'none' })] : [line('M10 13.5 14 9.5M8 16.5l-1 1a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0M16 7.5l1-1a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5 0', { transform: 'translate(1.2 1.2) scale(.9)' })],
  Attachment: filled => filled ? [line('m12.643 7.69-3.714 3.714c-1.447 1.448-3.586 1.606-4.762.43-1.18-1.18-1.023-3.312.425-4.76l3.41-3.41c.934-.933 2.296-1.033 3.031-.297.735.734.633 2.1-.297 3.03L7.324 9.81c-.422.421-1.002.464-1.3.166-.297-.297-.255-.879.175-1.308L9.29 5.576a.707.707 0 0 0-1-1L5.2 7.668c-.952.951-1.06 2.423-.175 3.308.886.886 2.356.777 3.3-.166l3.412-3.413c1.452-1.451 1.62-3.707.297-5.03s-3.575-1.158-5.03.298l-3.41 3.41c-1.97 1.97-2.193 4.991-.426 6.758 1.764 1.765 4.793 1.54 6.762-.429l3.714-3.714a.707.707 0 0 0-1-1', { transform: 'scale(1.5)', fill: 'currentColor', stroke: 'none' })] : [line('m18.5 11-5.6 5.6c-2.2 2.2-5.4 2.4-7.1.7-1.8-1.8-1.5-5 .6-7.2l5.1-5.1c1.4-1.4 3.5-1.5 4.6-.4 1.1 1.1.9 3.1-.5 4.5l-5.1 5.1c-.6.6-1.5.7-2 .2-.4-.4-.3-1.3.3-1.9l4.6-4.6', { transform: 'translate(2.4 2.4) scale(.8)' })],
  Label: filled => [
    line(filled ? 'M7.7 4.5H19l3.5 3.5v8L19 19.5H7.7a3 3 0 0 1-2.3-1.1L1.8 14a3 3 0 0 1 0-4l3.6-4.4a3 3 0 0 1 2.3-1.1Z' : 'M7.7 4.5H18a4.5 4.5 0 0 1 4.5 4.5v6a4.5 4.5 0 0 1-4.5 4.5H7.7a3 3 0 0 1-2.3-1.1L1.8 14a3 3 0 0 1 0-4l3.6-4.4a3 3 0 0 1 2.3-1.1Z', { fill: filled ? 'currentColor' : 'none' }),
    h('circle', { cx: 9.75, cy: 12, r: 1.5, fill: filled ? 'var(--icon-cutout, #fff)' : 'currentColor', stroke: 'none' }),
  ],
  Milestone: (filled, variant) => {
    const count = variant === 'filled' ? 3 : 0;
    const faces = ['M12 12 12 4 18 12Z', 'M12 12 18 12 12 20Z', 'M12 12 12 20 6 12Z'];
    return [
      line('M10.1 2.5a2.5 2.5 0 0 1 3.8 0l7.2 8.6a1.4 1.4 0 0 1 0 1.8l-7.2 8.6a2.5 2.5 0 0 1-3.8 0l-7.2-8.6a1.4 1.4 0 0 1 0-1.8Z', { strokeWidth: filled ? 1.6 : undefined }),
      ...faces.slice(0, count).map(d => line(d, { fill: 'currentColor', stroke: 'none' })),
    ];
  },

};

function makeIcon(name) {
  const Component = React.forwardRef(function Icon({ size = 24, variant = 'regular', color = 'currentColor', title, ...props }, ref) {
    const maskId = `nwt-icon-${React.useId()}`;
    const filled = variant === 'filled';
    const accessible = Boolean(title || props['aria-label'] || props['aria-labelledby']);
    const parts = shapes[name](filled, variant);
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
