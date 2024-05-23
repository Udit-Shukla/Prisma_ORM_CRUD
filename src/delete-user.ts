import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info','query','error']});

async function main(){
    // deleting user
    const deletedUser = await prisma.user.delete({
        where:{
            id:1
        }
    });
    console.log(deletedUser);
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
