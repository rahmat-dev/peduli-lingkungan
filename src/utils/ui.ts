import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateAvatarName = (name?: string | null): string => {
  if (!name) return "";

  return name
    .split(" ")
    .slice(0, 2)
    .map((item) => item[0])
    .join("");
};
