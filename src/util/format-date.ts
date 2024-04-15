export function formatDate(date: Date | number): string {
  const convertedDate = date instanceof Date ? date : new Date(date);

  return convertedDate.toLocaleDateString(navigator.language, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
}
