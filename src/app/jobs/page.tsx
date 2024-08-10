"use client"
import BringJobs from "@/api/route";
import { Input } from "@/components/ui/input"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import Search from "@/lib/search";
import { paginationProps, storyProps } from "@/lib/utils";
import { startOfYear } from "date-fns";
import { NextResponse } from "next/server";
import { Key, useEffect, useState } from "react";

export default function Jobs() {
    const [jobStories,setJobStories]=useState<storyProps[]>([]);
    const [loading,setLoading]=useState<boolean>(false);
    const [filteredStories,setFilteredStories]= useState<storyProps[]>([]);   
    const [search,setSearch]= useState(""); 
    useEffect(()=>{
        const jobs=async ()=>{ 
        const response = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json");
        const storyId:number[]=await response.json();
        const storyPromise= storyId.slice(0,50).map(async(id)=>{
            const storyRes=await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            return storyRes.json();
        });
        const jobStories:storyProps[]=await Promise.all(storyPromise);
        setJobStories(jobStories);
        setLoading(false);
        };
        jobs(); 
    },[]);

  useEffect(()=>{
    const result = jobStories.filter((story)=>{
      story.title.toLowerCase().includes(search.toLowerCase())
      setFilteredStories(result);
    })
  },[search]);
    

    if(loading){
        return(<div>Loading...</div>);
    }
   
    return(
        <div className=" container mx-auto min-w-8  p-4">
            <div className="py-3">
                <h1 className="text-3xl font-bold flex justify-center pb-4">Top <span className="text-[#423D8A]">Stories</span></h1>
            </div>
      <Search />
        <ul className="space-y-4 list-none">
            {jobStories.map((story)=>(  <li key={story.id}><a  href={story.url} className="bg-green-50 border-spacing-2 border-black border-rounded">{story.title}</a></li>))}
            </ul>

        </div>

    )

}
