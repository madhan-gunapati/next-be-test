import { NextApiRequest, NextApiResponse } from "next";

type Reply = {
    update:string
}

export default function handler(req:NextApiRequest , res:NextApiResponse<Reply>){
    if(req.method === 'POST'){
        res.json({update:"msg Received"})
    }
}