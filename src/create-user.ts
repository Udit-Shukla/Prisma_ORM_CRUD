import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info','query','error']});

async function main(){
    // for writing prisma client queries
    await prisma.user.create({
        data:{
            email:"uditshukla731@gmail.com",
            name:"Udit Shukla"
        }
    }) 
}

// handling errors standard promise error handling
main ()
.then(async()=>{
    await prisma.$disconnect();
    console.log("Query executed successfully ");
})
.catch(async (e)=>{
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})