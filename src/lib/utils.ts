import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DateFormatOptions } from "./models/utils.model";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate<T extends string>(
  date: T,
  options: DateFormatOptions,
): string {
  return new Date(date).toLocaleDateString("en-US", options);
}
