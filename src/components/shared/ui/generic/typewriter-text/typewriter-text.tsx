"use client"

// Component Imports
import { TypeAnimation } from 'react-type-animation';
import { TypewriterTextProps } from './models/typewriter-text.model';

// Component: TypewriterText
// Description: This component is a typewriter text animation.
export const TypewriterText = (props: TypewriterTextProps) => {
  const { sequence } = props;

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TypewriterText;