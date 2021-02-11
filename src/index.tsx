import React, { useRef, useState, useEffect } from 'react';
import { IJodit, Jodit } from 'jodit';

export interface JoditReactProps {
  /** Config option from Jodit */
  config?: Partial<IJodit['options']>;
  /** Jodit default value */
  defaultValue?: string;
  /** Callback to update the state */
  onChange: (content: string) => void;
}

const JoditReact = ({ config, defaultValue, onChange }: JoditReactProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [jodit, setJodit] = useState<IJodit>();

  useEffect(() => {
    if (textAreaRef && textAreaRef.current) {
      const jodit = Jodit.make(textAreaRef.current, config);
      jodit.events.on('change', (value) => onChange && onChange(value));
      setJodit(jodit);
    }
  }, [config]);

  useEffect(() => {
    if (jodit && defaultValue) {
      jodit.value = defaultValue;
    }
  }, [jodit, defaultValue]);

  return <textarea ref={textAreaRef} />;
};

export default JoditReact;
