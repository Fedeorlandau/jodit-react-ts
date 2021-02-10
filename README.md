# React Jodit Wrapper

A React wrapper for Jodit that supports SSR and it's fully written in Typescript.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Downloads][downloads-image]][npm-url]

## Demo
[Typescript CodeSandbox]()

[Javascript CodeSandbox]()

## Install
```bash
npm install jodit-react-ts
```

## Usage
- Usage Example with TSX/Typescript

```tsx
import * as React from 'react';
import { JoditReact } from 'jodit-react-ts';

const App = () => {
  const [value, setValue] = React.useState<string>();

  return (
    <>
      <JoditReact onChange={(content) => setValue(content)} defaultValue="Hi" />
      {value}
    </>
  );
};
```

## Props


| Property               | Type     | Required | Description                                                                                                                                                     |
| ---------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onChange                  | (content: string) => void   | Yes      | Callback to update a value state to keep track of the editor's content.                                                                                                          |
| config                  | IJodit["options"]    | No      | [Jodit configuration object.                     ](https://xdsoft.net/jodit/doc/options/)                                                                                 |
| defaultValue            | string   |     no     | Default content to be rendered on the editor.                                                                                                              |



## :hammer_and_wrench: Support

Please [open an issue](https://github.com/leonard-henriquez/readme-boilerplate/issues/new) for support.

## :memo: Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/leonard-henriquez/readme-boilerplate/compare/).

## :scroll: License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[downloads-image]: https://img.shields.io/npm/dt/jodit-react-ts.svg

[npm-url]: https://www.npmjs.com/package/jodit-react-ts
[npm-image]: http://img.shields.io/npm/v/jodit-react-ts.svg

[travis-url]: https://travis-ci.org/Fedeorlandau/jodit-react-ts
[travis-image]: https://travis-ci.org/Fedeorlandau/jodit-react-ts.svg
