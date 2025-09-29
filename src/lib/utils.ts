import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
    }).format(date)
}

export function getYearsOfExperience(): number {
    const startDate = new Date("2019-06-01")
    const now = new Date()
    return Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365))
}
