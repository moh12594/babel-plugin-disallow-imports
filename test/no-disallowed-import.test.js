import path from 'path'
import pluginTester from 'babel-plugin-tester'
import plugin from '../src/index'

pluginTester({
  plugin,
  pluginName: 'Disallow imports',
  title: 'Testing without disallowedImport',
  pluginOptions: {
    properties: [
      {
        allowedImporters: ['good'],
        message: 'Oups ! `awesome-module` should not be imported outside of good.js'
      }
    ]
  },
  tests: [
    {
      title: 'Should throw an error',
      fixture: path.join(__dirname, '__fixtures__', 'allowed-importers', 'bad.js'),
      error: /No disallowedImport has been provided to/
    }
  ]
})
