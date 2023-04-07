import { LinkRepository } from "../Repositories/LinkRepository";
import { GenerateLinkService } from "../Services/GenerateLinkService";
import { GenerateTokenService } from "../Services/GenerateTokenService";

export const makeGenerateLink = (): GenerateLinkService => {
    const linkRepository = new LinkRepository()
    const generateTokenService = new GenerateTokenService()

    return new GenerateLinkService(generateTokenService, linkRepository)
}