
export function capText(text: string, maxLength: number = 300) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + '...';
  }
}