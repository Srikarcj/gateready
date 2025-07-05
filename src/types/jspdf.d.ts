declare module 'jspdf' {
  export class jsPDF {
    constructor(orientation?: string, unit?: string, format?: string);
    setFontSize(size: number): void;
    text(text: string, x: number, y: number): void;
    splitTextToSize(text: string, maxWidth: number): string[];
    save(filename: string): void;
  }
} 