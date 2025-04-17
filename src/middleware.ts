import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default function (req:NextApiRequest, res:NextApiResponse){
        const url = req.url
        console.log('Came to The middleWare !!!!!!!!!!!!!!!!' , url)
        console.log(req.headers)

        return NextResponse.next()
}
