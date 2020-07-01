# babel-plugin-disallow-imports

> Babel plugin for disallowing imports from a source

## Installation

```sh
npm install --save-dev babel-plugin-disallow-imports
```

## The problem solved

This is useful when you want to disallow some imports from specific files or allow them in only some files.

## Usage

#### Via `.babelrc` (Recommended)

**.babelrc**
```json
{
  "plugins": [
    [
      "babel-plugin-disallow-imports",
      {
        "properties": [
          {
            "disallowedImport": "module/to/import",
            "disallowedImporters": ["fileName"],
            "message": "Oups ! `module/imported` should not be imported in filename"
          }
        ]
      }
    ],
  ]
}
```

**fileName.js**
```js
import something from 'module/to/import'
```

**output**
```
  Error: /path/to/file/fileName.js: Oups ! `module/imported` should not be imported in filename
```

#### Options
The plugin supports a `properties` array with following options:

```js
  interface Property {
    // The error message that should be displayed
    message: string
    // The module that you want to disallow importing
    disallowedImport: string
    // Files that you want to disallow importing from
    disallowedImporters?: string[]
    // Files that you want to allow importing `disallowedImport` module from. Importing `disallowedImport` from other files will throw the error message
    allowedImporters?: string[]
  }
```

## License

MIT
