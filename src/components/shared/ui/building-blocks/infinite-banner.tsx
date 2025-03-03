import * as React from 'react';
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useTransform
} from 'motion/react';

interface InfiniteBannerProps extends React.HTMLProps<HTMLDivElement> {
  clock: MotionValue<number>;
  loopDuration: number;
  children: React.ReactNode;
}

const InfiniteBanner = ({
  clock,
  loopDuration = 12000,
  children,
  ...otherProps
}: InfiniteBannerProps) => {
  const progress = useTransform(
    clock,
    (time) => (time % loopDuration) / loopDuration
  );
  const percentage = useTransform(progress, (t) => t * 100);
  const translateX = useMotionTemplate`-${percentage}%`;
  return (
    <div
      {...otherProps}
      style={{
        ...otherProps.style
      }}
    >
      <motion.div style={{ translateX }}>
        <div>{children}</div>
        <div
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: '100%',
            top: 0
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteBanner;
