import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST (req, res) {
    try {
        let reqBody = await req.json();
        let prisma = new PrismaClient();
        let count =await prisma.user.count({where: reqBody});
        if(count ===1 ) {

            return NextResponse.json({status: "success", data: "Valid OTP code"})
        } else {
            return NextResponse.json({status: "fail", data: "Invalid OTP code"})
        }
    } catch(e) {
        console.log(e)
        return NextResponse.json({status: "fail", data: e})
    }
}