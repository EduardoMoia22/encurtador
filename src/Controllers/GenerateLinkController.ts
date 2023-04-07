import { Request, Response } from "express";
import { makeGenerateLink } from "../Factory/GenerateLinkFactory";

type GenerateLinkRequest = {
    url: string
    durationInMinutes?: number
}

export class GenerateLinkController{
    public async Handle(req: Request, res: Response){
        const { url, durationInMinutes }: GenerateLinkRequest = await req.body

        const result = {
            "shortURL": await makeGenerateLink().GenerateLink({url, durationInMinutes})
        }
        
        return res.json(result)
    }
}