export function truncateString(str: string | null, maxLength: number): string {
  if (str === null) {
    return "";
  }

  if (str.length <= maxLength) {
    return str;
  }

  const hiddenChars = Math.max(0, maxLength - 3);
  const visibleChars = maxLength - hiddenChars;
  const truncatedStr = str.slice(0, visibleChars) + "...";

  return truncatedStr;
}
