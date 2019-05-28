const req = require.context('.', false, /^((?!index).)*\.js$/);

req.keys().forEach((key) => {
    const componentName = key.replace(/^\.\/([^.]+)\.js$/, '$1')
    module.exports[componentName] = req(key).default
})