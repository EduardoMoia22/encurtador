import { Link } from "../Models/Link";
import redisClient from "../lib/redis";

export interface ILinkRepository{
    Save(link: Link): Promise<void>
    FindByToken(token: string): Promise<string | null>
}

export class LinkRepository implements ILinkRepository{
    public async Save(link: Link): Promise<void> {
        await redisClient.set(link.token, link.url)
        await redisClient.expire(link.token, link.duration)
    }

    public async FindByToken(token: string): Promise<string | null> {
        return await redisClient.get(token)
    }
}