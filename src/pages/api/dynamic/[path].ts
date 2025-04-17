import { NextApiRequest, NextApiResponse } from "next";
import { useParams } from "next/navigation";

type msg = {
    message:string
}

export default  function handler(req:NextApiRequest,res:NextApiResponse<msg>){
    const params = req.query
    console.log(params)
    res.json({message:"received params"})
}