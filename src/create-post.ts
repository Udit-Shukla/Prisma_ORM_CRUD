import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info','query','error']});

async function main(){
    await prisma.post.create({
        data:{
            title:"My first post",
            content:"Hello World",
            author:{
                connect:{
                    id:1
            }
        }
    }
    })
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
