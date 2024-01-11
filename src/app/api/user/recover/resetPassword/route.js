import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST (req, res) {
    try {
        let reqBody = await req.json();
        let prisma = new PrismaClient();
        let count =await prisma.user.count(
            {where: {
                email: reqBody['email'],
                otp: reqBody['otp'],
            }}
        );
        if(count ===1 ) {

            await prisma.user.update({
                where: {email: reqBody['email']},
                data: {otp: "0", password: reqBody['password']}
            })
            return NextResponse.json({status: "success", data: "Password changed"})
        } else {
            return NextResponse.json({status: "fail", data: "Password change failed"})
        }
    } catch(e) {
        console.log(e)
        return NextResponse.json({status: "fail", data: e})
    }
}