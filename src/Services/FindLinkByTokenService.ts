import { ILinkRepository } from "../Repositories/LinkRepository";

export class FindLinkByToken{
    private readonly _linkRepository: ILinkRepository

    constructor(linkRepository: ILinkRepository){
        this._linkRepository = linkRepository
    }

    public async Execute(token: string): Promise<string | null>{
        const link = await this._linkRepository.FindByToken(token)
        return link
    }
}