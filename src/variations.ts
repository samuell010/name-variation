export function getNumberOfChars(name: string): number {
  
  return name.length;
}

export function getFirstChar(name: string): string {

  return name.charAt(0);
}

export function getLastChar(name: string): string {
  
  return name.charAt(name.length - 1);
}

export function getLower(name: string): string {

  return name.toLowerCase();
}

export function getUpper(name: string): string {

  return name.toUpperCase();
}
