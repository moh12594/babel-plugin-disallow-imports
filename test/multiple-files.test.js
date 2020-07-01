import path from 'path'
import pluginTester from 'babel-plugin-tester'
import plugin from '../src/index'

pluginTester({
  plugin,
  pluginName: 'Disallow imports',
  title: 'Testing the allowedImporters property for multiple filess',
  pluginOptions: {
    properties: [
      {
        disallowedImport: 'awesome-module',
        allowedImporters: ['good', 'good-1'],
        message: 'Oups ! `awesome-module` should not be imported outside of good.js or good-1.js'
      }
    ]
  },
  tests: [
    {
      title: 'Should throw an error',
      fixture: path.join(__dirname, '__fixtures__', 'multiple-files', 'bad.js'),
      error: /should not be imported outside/
    },
    {
      title: 'Should not throw an error',
      fixture: path.join(__dirname, '__fixtures__', 'multiple-files', 'good.js')
    },
    {
      title: 'Should not throw an error',
      fixture: path.join(__dirname, '__fixtures__', 'multiple-files', 'good-1.js')
    }
  ]
})