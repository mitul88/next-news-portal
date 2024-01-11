import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const prisma = new PrismaClient();
        let {searchParams} = new URL(req.url);
        let type = searchParams.get('type');
        if(!type) {
            return NextResponse.json({status:"failed", data: "type parameter requered"})
        }
        const result = await prisma.policies.findMany({
            where:{type: type}
        })
        return NextResponse.json({status:"success", data: result})
    } catch(e) {
        console.log(e)
        return NextResponse.json({status:"failed", data: e})
    }
}