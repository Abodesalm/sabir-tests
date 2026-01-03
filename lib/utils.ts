import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function format(...ch) {
  if (ch[-1] === null) {
    ch.pop();
  }
  return ch.join('/');
}

export const coloring = (num) => {
  if (num === 100) return 'green';
  else if (num < 100 && num >= 85) return 'green';
  else if (num < 85 && num >= 70) return 'yellow';
  else if (num < 70 && num >= 60) return 'yellow';
  else if (num < 60) return 'red';
};

export function shuffleArray(array) {
  // Create a copy to avoid mutating the original array (optional, but good practice for pure functions)
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled; // Return the new, shuffled array
}
