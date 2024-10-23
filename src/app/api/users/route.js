import prisma from "../../../../lib/prisma";

// Handle GET request
export async function GET(req, res) {
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify(users), { status: 200 });
}

// Handle POST request

export async function POST(req, res){
   
  const { name, age, email } = await req.json();
  const existingUser = await prisma.user.findUnique({
    where:{email}
  })
  if(existingUser){
    return new Response(JSON.stringify({message:"User already exists"}), {status:400})
  }
  const newUser = await prisma.user.create({
    data:{email,name,age}
  })
  return new Response(JSON.stringify(newUser), { status: 201});
}
