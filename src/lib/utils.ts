import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export interface storyProps{
  id: string;
  title:string;
  type: string;
  text:string;
  url:string;
  time:number;
  score:number;
  descendants:number;


}
export interface paginationProps{
  totalStories:number;
  storiesPerPage:number;
  currentPage:number;
  onPageChange:any;
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

