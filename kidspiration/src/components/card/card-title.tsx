import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children?: React.ReactNode;
  className?: any;
  id?: any;
  title: string;
  description?: string;
}

export function CardTitle({
  children = null,
  className,
  title,
  id,
  description,
}: CardProps) {
  return (
    <div className="flex justify-between items-center border-b px-6 py-4">
      <div className={''}>
        <h2
          className={twMerge(
            'font-bold text-xl text-gray-900',
            className
          )}
          id={id}
        >
          {title}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {description}
        </p>
      </div>
      <div className={'pr-6'}>{children}</div>
    </div>
  );
}
