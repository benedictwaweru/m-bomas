import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(value: number, unit: Intl.RelativeTimeFormatUnit) {
  return new Intl.RelativeTimeFormat('en', { style: 'short' }).format(value, unit);
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

export function formatCount(count: number) {
  const suffixes = [
    { threshold: 1e15, suffix: "Q+" },
    { threshold: 1e12, suffix: "T+" },
    { threshold: 1e9, suffix: "B+" },
    { threshold: 1e6, suffix: "M+" },
    { threshold: 1e3, suffix: "K+" },
  ];

  for (const { threshold, suffix } of suffixes) {
    if (count >= threshold) {
      const formatted = (count / threshold).toFixed(1);
      return formatted.replace(/\.0$/, "") + suffix;
    }
  }

  return count.toString();
}

