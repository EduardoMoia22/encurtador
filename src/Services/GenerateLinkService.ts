import { Link } from "../Models/Link";
import { ILinkRepository } from "../Repositories/LinkRepository";
import { GenerateTokenService } from "./GenerateTokenService";
import { HoursToUnixTimestampService } from "./HoursToUnixTimestampService";

type GenerateLinkProps = {
    url: string
    durationInMinutes?: number
}

export class GenerateLinkService{
    private readonly _generateToken: GenerateTokenService
    private readonly _linkRepository: ILinkRepository

    constructor(
        generateToken: GenerateTokenService,
        linkRepository: ILinkRepository
    ){
        this._generateToken = generateToken
        this._linkRepository = linkRepository
    }

    public async GenerateLink({ url, durationInMinutes }: GenerateLinkProps): Promise<string>{
        const token = this._generateToken.Generate()

        let duration = 86400
    
        if (durationInMinutes){
            duration = await HoursToUnixTimestampService.Convert(durationInMinutes) 
        }

        const link = new Link({ url, token, duration})

        this._linkRepository.Save(link)
        let teste = process.env.DOMAIN
        console.log(teste)
        const shortLink = `http://localhost:3333/${link.token}`

        return shortLink
    }
}