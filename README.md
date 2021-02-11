# React Jodit Wrapper

A React wrapper for Jodit that works.

[![NPM version][npm-image]][npm-url] ![ci](https://github.com/fedeorlandau/jodit-react-ts/workflows/CI/badge.svg) 
 [![Downloads][downloads-image]][npm-url]

## Demo
[Typescript CodeSandbox](https://codesandbox.io/s/jodit-react-ts-9gt2c)

[Javascript CodeSandbox](https://codesandbox.io/s/jodit-react-ts-js-qyr5f)

## Install
```bash
npm install jodit-react-ts jodit
```

## Usage
- Usage Example with TSX/Typescript

```tsx
import * as React from 'react';
import JoditReact from "jodit-react-ts";
import 'jodit/build/jodit.min.css';

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

## SSR
- Example of SSR usage.

```tsx
import * as React from 'react';
import 'jodit/build/jodit.min.css';

const JoditReact = React.lazy(() => {
  return import('jodit-react-ts');
});

const MyEditorWrapper = () => {
  const isSSR = typeof window === 'undefined';
  const [value, setValue] = React.useState<string>();

  return (
     <div>
      {!isSSR && (
        <React.Suspense fallback={<div>Loading</div>}>
            <JoditReact onChange={(content) => setValue(content)} defaultValue="Hi" />
        </React.Suspense>
      )}
    </div>
  );
};
```

## Config
- Example of jodit config

```tsx
import * as React from 'react';
import JoditReact from "jodit-react-ts";
import 'jodit/build/jodit.min.css';

/** 
 * This needs to be defined outside the scope of our wrapper otherwise will cause multiple re-renders
 **/

const config = {
  preset: 'inline'
};

const App = () => {
  const [value, setValue] = React.useState<string>();

  return (
    <>
      <JoditReact onChange={(content) => setValue(content)} defaultValue="Hi" config={config} />
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