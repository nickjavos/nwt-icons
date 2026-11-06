const { test } = require('node:test');
const assert = require('node:assert/strict');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const icons = require('../react');

test('each component renders all four variants with accessible labels and dimensions', () => {
  assert.equal(Object.keys(icons).length, 29);
  for (const [name, Icon] of Object.entries(icons)) {
    const rendered = ['thin', 'light', 'regular', 'filled'].map(variant =>
      renderToStaticMarkup(React.createElement(Icon, { variant, size: 16, title: name })));
    assert.equal(new Set(rendered).size, 4, name);
    for (const svg of rendered) {
      assert.match(svg, /width="16" height="16"/);
      assert.match(svg, /role="img"/);
      assert(svg.includes(`<title>${name}</title>`));
    }
    assert.match(renderToStaticMarkup(React.createElement(Icon)), /aria-hidden="true"/);
    assert.match(renderToStaticMarkup(React.createElement(Icon, { 'aria-label': 'Label' })), /aria-label="Label"/);
  }
});

test('filled icons use separate transparent cutouts when rendered more than once', () => {
  const svg = renderToStaticMarkup(React.createElement(React.Fragment, null,
    React.createElement(icons.CanceledIcon, { variant: 'filled' }),
    React.createElement(icons.CanceledIcon, { variant: 'filled' })));
  const masks = [...svg.matchAll(/<mask id="([^"]+)"/g)].map(match => match[1]);
  assert.equal(masks.length, 2);
  assert.notEqual(masks[0], masks[1]);
  for (const id of masks) assert(svg.includes(`mask="url(#${id})"`));
  assert(!svg.includes('--icon-cutout'));
});

test('priority rings use the same outer circle and one, two or three dots', () => {
  for (const [name, count] of [['PriorityLowIcon', 1], ['PriorityMediumIcon', 2], ['PriorityHighIcon', 3]]) {
    for (const variant of ['thin', 'light', 'regular', 'filled']) {
      const svg = renderToStaticMarkup(React.createElement(icons[name], { variant }));
      assert.match(svg, /<circle cx="12" cy="12" r="9"/);
      assert.equal((svg.match(/r="1\.15"/g) || []).length, count);
    }
  }
});

test('milestone outline variants stay hollow and the filled variant has three faces', () => {
  ['thin', 'light', 'regular', 'filled'].forEach(variant => {
    const count = variant === 'filled' ? 3 : 0;
    const svg = renderToStaticMarkup(React.createElement(icons.MilestoneIcon, { variant }));
    assert.equal((svg.match(/fill="currentColor" stroke="none"/g) || []).length, count);
    assert(svg.includes('viewBox="0 0 24 24"'));
  });
});
