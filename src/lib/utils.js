import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}




export const btnColors = {
  answered:"border-green-500 bg-green-500/10 hover:bg-green-500/20",
  visited:"border-yellow-500 bg-yellow-500/10 hover:bg-yellow-500/20",
  current:"border-white bg-white/10 hover:bg-white/20 ",
  unvisited:"border-neutral-800 bg-neutral-800/10 hover:bg-neutral-700/25 hover:border-neutral-700"
}
 
export const legendsData = [
  { 
    title: 'Answered', 
    border: "border-green-500", 
    bg: "bg-green-500/10", 
    text: "text-green-500" 
  },
  { 
    title: 'Visited', 
    border: "border-yellow-500", 
    bg: "bg-yellow-500/10", 
    text: "text-yellow-500" 
  },
  { 
    title: 'Current', 
    border: "border-white", 
    bg: "bg-white/10", 
    text: "text-white" 
  },
  { 
    title: 'Unvisited', 
    border: "border-neutral-700", 
    bg: "bg-neutral-700/10", 
    text: "text-neutral-500" 
  }
];