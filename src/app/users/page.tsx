//https://hacker-news.firebaseio.com/v0/user/jl.json?print=pretty
"use client"

import { useState } from "react";

interface impProps{
by:string
id:number
score:number
text:string
};
interface userProps{
id :string
about:string
created:number
karma:number
submitted:Array<number>
}
export default function users(){
  const [users,setUsers]= useState<string>("");
  const makeApiCall= async ()=>{
    const res:Response=await fetch("../api/hello",{
      method:'GET',
    });

    const response = await res.json();
    console.log(response);
    
  }
  makeApiCall();
  return (<div>
    {users}
  </div>)
}
