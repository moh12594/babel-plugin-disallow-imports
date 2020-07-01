import path from 'path'
import pluginTester from 'babel-plugin-tester'
import plugin from '../src/index'

pluginTester({
  plugin,
  pluginName: 'Disallow imports',
  title: 'Testing the disallowedImporters property',
  pluginOptions: {
    properties: [
      {
        disallowedImport: 'awesome-module',
        disallowedImporters: ['bad'],
        message: 'Oups ! `awesome-module` should not be imported in bad.js'
      }
    ]
  },
  tests: [
    {
      title: 'Should throw an error',
      fixture: path.join(__dirname, '__fixtures__', 'disallowed-importers', 'bad.js'),
      error: /should not be imported in/
    },
    {
      title: 'Should not throw an error',
      fixture: path.join(__dirname, '__fixtures__', 'disallowed-importers', 'good.js')
    }
  ]
})
