"use server"
import AlreadyExists from "@/app/errors/page";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();
export async function sendUsers(email:string,password:string){

    const user = await prisma.user.findFirst({
        where:{
            email:email
        }
    })
    if(user){
        redirect('/errors');
    }
    else{
  await prisma.user.create({
    data:{
      email: email,
      password:password
    }
  })
   }
}
