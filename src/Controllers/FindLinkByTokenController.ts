import { Request, Response,  } from "express";
import { makeFindLinkByToken } from "../Factory/FindLinkByTokenFactory";

export class FindLinkByTokenController{
    public async Handle(req: Request, res: Response){
        const { token } = req.params
        
        const link = await makeFindLinkByToken().Execute(token)
        if (link !== null){
            return res.status(301).redirect(link)
        }
    }
}