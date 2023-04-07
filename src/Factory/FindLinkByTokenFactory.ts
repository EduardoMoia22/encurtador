import { LinkRepository } from "../Repositories/LinkRepository";
import { FindLinkByToken } from "../Services/FindLinkByTokenService";

export const makeFindLinkByToken = (): FindLinkByToken => {
    const linkRepository = new LinkRepository()

    return new FindLinkByToken(linkRepository)
}