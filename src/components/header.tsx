import { Button } from "./ui/button";
export  function TopBar(){

    return(
        <div  content="width=device-width,initial-scale=1.0" className="flex  flex-auto p-4" >
<div className=" flex flex-1  h-10 flex-row bg-orange-500">
  <div className=" pt-4 pl-4  "> 
    <img src="./yc.png" className=" h-5 w-8"></img>  
</div>
  <div    className=" pl-3 pt-4 font-bold">Hacker News</div>
  <button className="pl-4 pt-4 pb-20">new|</button>
  <button className="pl-4 pt-4 pb-30">threads|</button>
  <button className="pl-4 pt-4">past|</button>
  <button className="pl-4 pt-4">comments|</button>
  <button className="pl-4 pt-4">ask|</button>
  <button className="pl-4 pt-4">show|</button>
  <button className="pl-4 pt-4">jobs|</button>
  <button className="pl-4 pt-4">submit</button>
  <button className="flex justify-end pl-40 pt-4">login</button>
</div>
</div>
    )
}