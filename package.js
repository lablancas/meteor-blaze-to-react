Package.describe({
  name: 'lablancas:blaze-to-react',
  summary: 'Turn any Blaze template into a React component',
  git: 'https://github.com/lablancas/meteor-blaze-to-react.git',
  version: '1.1.0'
});

Npm.depends({
    'react-addons-transition-group': '15.5.2',
    'react-addons-css-transition-group': '15.5.2',
    'react-addons-linked-state-mixin': '15.5.2',
    'react-addons-create-fragment': '15.5.3',
    'react-addons-update': '15.5.2',
    'react-addons-pure-render-mixin': '15.5.2',
    'react-addons-test-utils': '15.5.1',
    'react-addons-perf': '15.4.2'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.4.4.1');
  api.use([ 'ecmascript', 'templating', 'underscore' ]);
  api.mainModule('lib.jsx', 'client');
  api.export('BlazeToReact');
});
