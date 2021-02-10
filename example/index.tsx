import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { JoditReact } from '../src/index';

const App = () => {
  const [value, setValue] = React.useState<string>();

  return (
    <>
      <JoditReact onChange={(content) => setValue(content)} defaultValue="Hi" />
      {value}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
