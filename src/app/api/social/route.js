import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.socials.findMany()
        return NextResponse.json({status:"success", data: result})
    } catch(e) {
        console.log(e)
        return NextResponse.json({status:"failed", data: e})
    }
}