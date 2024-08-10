//const response =await axios.get(").then((response)=>{

export async function GET(){
  const res  = await fetch('https://hacker-news.firebaseio.com/v0/users.json');

  const data = await res.json();
  return Response.json({data});

}
