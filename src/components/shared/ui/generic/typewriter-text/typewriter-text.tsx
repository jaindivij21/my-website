'use client';

// Component Imports
import { TypeAnimation } from 'react-type-animation';

// Utils Imports
import { TypewriterTextInterface } from './interfaces/typewriter-text.interface';

// Component: TypewriterText
// Description: This component is a typewriter text animation.
export const TypewriterText = (props: TypewriterTextInterface) => {
  const { sequence } = props;

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper='span'
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TypewriterText;
