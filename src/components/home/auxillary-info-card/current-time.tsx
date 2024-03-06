"use client"

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const CurrentTime = (
  { initialTime, className }: { initialTime: number, className?: string }
) => {
  const [currentTime, setCurrentTime] = useState(new Date(initialTime))

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    const timer = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <time
      className={cn("tabular-nums", className)}
    >
      {currentTime.toLocaleTimeString("en-US")}
    </time>
  );
};

export default CurrentTime;
