import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind CSS classnames generator
 *
 * @param inputs - Classnames to be merged
 * @returns Tailwind CSS classnames
 *
 * @example
 * ```tsx
 * import { composeClassNames } from 'lib/utils';
 *
 * const className = composeClassNames('text-red-500', 'bg-blue-500');
 * ```
 */
export function composeClassNames(...inputs: any) {
  return twMerge(clsx(inputs));
}

export const isDesktopView = (width: number) => width >= 768;
