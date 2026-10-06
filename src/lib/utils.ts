import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTanggalIndonesia(tanggalStr: string): string {
  try {
    const date = new Date(tanggalStr);
    if (isNaN(date.getTime())) return tanggalStr;
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  } catch {
    return tanggalStr;
  }
}
