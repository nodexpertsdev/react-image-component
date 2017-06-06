Package.describe({
  name: 'nodexpert:image-component',
  version: '0.0.1',
  summary: 'React Image Component',
  git: 'https://github.com/nodexpertsdev/react-image-component',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');
  api.use('ecmascript');
  // api.use('standard-minifier-css');
  api.mainModule('component.jsx');
  api.addFiles('style.css', 'client');
});
