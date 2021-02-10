import { IJodit } from 'jodit';
import React from 'react';

const Editor = React.lazy(() => {
  return import('./Editor');
});

export interface JoditReactProps {
  /** Config option from Jodit */
  config?: Partial<IJodit['options']>;
  /** Jodit default value */
  defaultValue?: string;
  /** Callback to update the state */
  onChange: (content: string) => void;
}

const JoditReact = (props: JoditReactProps) => {
  const isSSR = typeof window === 'undefined';

  return (
    <div data-testid="jodit-react">
      {!isSSR && (
        <React.Suspense fallback={<div>Loading</div>}>
          <Editor {...props} />
        </React.Suspense>
      )}
    </div>
  );
};

export default JoditReact;
