import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { JSDOM } from 'jsdom';

let windowSpy: any;

beforeEach(() => {
  windowSpy = jest.spyOn(global as any, 'window', 'get');
});

afterEach(() => {
  windowSpy.mockRestore();
});

const JoditReact = React.lazy(() => {
  return import('../src');
});

const MyEditorWrapper = () => {
  const isSSR = typeof window === 'undefined';
  const [, setValue] = React.useState<string>();

  return (
    <div>
      {!isSSR && (
        <React.Suspense fallback={<div>Loading</div>}>
          <JoditReact
            onChange={(content) => setValue(content)}
            defaultValue="Hi"
          />
        </React.Suspense>
      )}
    </div>
  );
};

describe('it', () => {
  it('renders the autocomplete input', async () => {
    const { window } = new JSDOM();

    windowSpy.mockImplementation(() => window);

    render(<MyEditorWrapper />);
    await waitFor(() => expect(screen.getByText('Hi')).toBeTruthy());
  });
});
