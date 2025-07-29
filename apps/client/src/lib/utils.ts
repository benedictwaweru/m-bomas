import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(value: number, unit: Intl.RelativeTimeFormatUnit) {
  return new Intl.RelativeTimeFormat('en', { style: 'short' }).format(
    value,
    unit,
  );
}

export function formatCurrency(
  locales: Intl.LocalesArgument,
  currency: string,
  value: number,
) {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency,
  }).format(value);
}
