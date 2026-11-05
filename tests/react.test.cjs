const { test } = require('node:test');
const assert = require('node:assert/strict');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const icons = require('../react');

test('each component renders all four variants with accessible labels and dimensions', () => {
  assert.equal(Object.keys(icons).length, 9);
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
