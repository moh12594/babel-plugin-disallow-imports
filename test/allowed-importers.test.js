import path from 'path'
import pluginTester from 'babel-plugin-tester'
import plugin from '../src/index'

pluginTester({
  plugin,
  pluginName: 'Disallow imports',
  title: 'Testing the allowedImporters property',
  pluginOptions: {
    properties: [
      {
        disallowedImport: 'awesome-module',
        allowedImporters: ['good'],
        message: 'Oups ! `awesome-module` should not be imported outside of good.js'
      }
    ]
  },
  tests: [
    {
      title: 'Should throw an error',
      fixture: path.join(__dirname, '__fixtures__', 'allowed-importers', 'bad.js'),
      error: /should not be imported outside/
    },
    {
      title: 'Should not throw an error',
      fixture: path.join(__dirname, '__fixtures__', 'allowed-importers', 'good.js')
    }
  ]
})
