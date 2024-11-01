import prisma from "../../../../lib/prisma";


import {  NextRequest, NextResponse } from 'next/server';


export  async function  GET() {

    const products = await prisma.product.findMany();
    return new Response(JSON.stringify(products), { status: 200 });

}




export async function POST(req, res) {
    const {name, price,url,quantity,discription} = await req.json();
    const NewProduct = await prisma.product.create({
        data:{name, price,url, quantity,discription}
    })


    return new Response (JSON.stringify(NewProduct), {status:201});
}

export async function DELETE(req) {
    const { id } = await req.json();

    const product = await prisma.product.delete({
        where: {
            id: id
        }
    });

    return new Response(JSON.stringify(product), { status: 200 });
}
