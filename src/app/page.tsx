"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendUsers } from "@/db";
import { useState } from "react";

export default function Home() {
  const [name,setName]=useState("gay");

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <Button onClick={()=>{
      }} className="p-4">v</Button>
      <Input onChange={(Event)=>{setName(Event.target.value);
      } }placeholder={"Enter your name"} ></Input>
 <div>
  </div> 
    </main>

  )
}
