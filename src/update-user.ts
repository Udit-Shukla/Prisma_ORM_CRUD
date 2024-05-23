 import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info','query','error']});

async function main(){
    // updating user
    const updatedUser = await prisma.user.update({
        where:{
            id:1
        },
        data:{
            name:"Udit Shukla"
        }
    });
    console.log(updatedUser);
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