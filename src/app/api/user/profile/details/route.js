import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { headers } from 'next/headers';

export async function GET (req, res) {
    try {
        let headerList = headers();
        let id = parseInt(headerList.get('id'));
       
        let prisma = new PrismaClient();
        
        let result =  await prisma.user.findUnique({where: {id: id}});
        return NextResponse.json({status: "success", data: result})

    } catch(e) {
        return NextResponse.json({status: "fail", data: e})
    }
}