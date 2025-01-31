import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info','query','error']});

async function main(){
    // getting all users
    const users = await prisma.user.findMany({});
    console.log(users);
    
    // getting user by id
    const user = await prisma.user.findUnique({
        where:{
            id:1
        },
        include:{
            posts:true
        }
    });
    console.log(user);
}

main().then(async()=>{
    await prisma.$disconnect();
    console.log("Query executed successfully");
})
.catch(async(e)=>{
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})