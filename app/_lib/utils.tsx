import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateToConvert = null, hourMunite = true) => {
  const date = dateToConvert;
  const localDate = new Date(date || new Date());
  const year = localDate.getFullYear();
  const month = String(localDate.getMonth() + 1).padStart(2, "0");
  const day = String(localDate.getDate()).padStart(2, "0");
  const hour = String(localDate.getHours()).padStart(2, "0");
  const minute = String(localDate.getMinutes()).padStart(2, "0");

  if (hourMunite) return `${year}-${month}-${day}T${hour}:${minute}`;
  return `${year}-${month}-${day}`;
};

export const formatDateForShow = (
  input: string | number,
  hourMunite = false
) => {
  return new Date(input).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: hourMunite ? "numeric" : undefined,
    minute: hourMunite ? "numeric" : undefined,
    // timeZone: 'UTC',
  });
};

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
