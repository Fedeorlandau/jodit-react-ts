import * as React from 'react';
import JoditReact from '../src';
import { render, screen } from '@testing-library/react';

const JoditReactWrapper = () => {
  const [, setValue] = React.useState<string>();

  return <JoditReact onChange={(content) => setValue(content)} />;
};

describe('it', () => {
  it('renders the autocomplete input', () => {
    render(<JoditReactWrapper />);
    expect(screen.getByTestId('jodit-react')).toBeTruthy();
  });
});
