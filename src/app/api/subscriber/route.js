import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        let reqBody = await req.json()
        const prisma = new PrismaClient();
        const result = await prisma.subscribe.create({
            data: reqBody
        })
        return NextResponse.json({status:"success", data: result})
    } catch(e) {
        return NextResponse.json({status:"failed", data: e})
    }
}