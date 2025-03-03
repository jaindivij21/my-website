import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DateFormatInterface } from './interfaces/common.interface';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate<T extends string>(
  date: T,
  options: DateFormatInterface
): string {
  return new Date(date).toLocaleDateString('en-US', options);
}
