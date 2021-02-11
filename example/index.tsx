import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import JoditReact from '../src/';
import 'jodit/build/jodit.min.css';

const App = () => {
  const [value, setValue] = React.useState<string>();

  return (
    <>
      <JoditReact onChange={(content) => setValue(content)} defaultValue="Hi" />
      <div data-testid="value">{value}</div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
