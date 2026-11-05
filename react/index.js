'use strict';

const React = require('react');
const h = React.createElement;
const weights = { thin: 0.9, light: 1.2, regular: 1.6, filled: 1.6 };
const circle = (props = {}) => h('circle', { cx: 12, cy: 12, r: 8, ...props });
const line = (d, props = {}) => h('path', { d, ...props });

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
  Todo: filled => [circle({ fill: filled ? 'currentColor' : 'none' })],
  InProgress: filled => [circle({ fill: filled ? 'currentColor' : 'none' }), line('M12 7v10a5 5 0 0 0 0-10Z', { fill: filled ? 'var(--icon-cutout, #fff)' : 'currentColor', stroke: 'none' })],
  InReview: filled => [circle({ fill: filled ? 'currentColor' : 'none' }), line('M12 7v5h4.5a4.5 4.5 0 0 1-9 0H12Z', { fill: filled ? 'var(--icon-cutout, #fff)' : 'currentColor', stroke: 'none' })],
  Done: filled => [circle({ fill: filled ? 'currentColor' : 'none' }), line('m8.3 12 2.5 2.5 4.9-5', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {})],
  Canceled: filled => [circle({ fill: filled ? 'currentColor' : 'none' }), line('m9 9 6 6m0-6-6 6', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {})],
  Duplicate: filled => [circle({ fill: filled ? 'currentColor' : 'none' }), line('m8.3 13.7 5.4-5.4m-2.5 7.4 4.5-4.5', filled ? { stroke: 'var(--icon-cutout, #fff)' } : {})],
};

function makeIcon(name) {
  const Component = React.forwardRef(function Icon({ size = 24, variant = 'regular', color = 'currentColor', title, ...props }, ref) {
    const maskId = `nwt-icon-${React.useId()}`;
    const filled = variant === 'filled';
    const accessible = Boolean(title || props['aria-label'] || props['aria-labelledby']);
    const parts = shapes[name](filled);
    const cutouts = parts.filter(part => part.props.fill === 'var(--icon-cutout, #fff)' || part.props.stroke === 'var(--icon-cutout, #fff)');
    const visible = parts.filter(part => !cutouts.includes(part));
    const mask = cutouts.length && h('mask', { id: maskId, maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: 24, height: 24 },
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
