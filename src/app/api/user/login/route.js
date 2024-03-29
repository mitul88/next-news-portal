import { CreateToken } from "@/utility/JWTTokenHelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        let reqBody = await req.json()
        const prisma = new PrismaClient();
        const result = await prisma.user.findUnique({
            where: reqBody
        })
        if(!result) {
            return NextResponse.json({status: 'fail', data: result})
        } else {
            let token=await CreateToken(result['email'], result['id'])
            let expireDuration=new Date(Date.now()+24*60*60*1000)
            const cookieString = `token=${token};expires=${expireDuration.toUTCString()};path=/`
            return NextResponse.json({status:"success", data: token}, {status:200, headers: {'set-cookie': cookieString}})  
        }
    } catch(e) {
        return NextResponse.json({status:"fail", data: e})
    }
}