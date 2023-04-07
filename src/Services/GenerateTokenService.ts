import { v4 as uuidv4 } from 'uuid';

export class GenerateTokenService{
    public Generate(): string{
        const token = uuidv4()

        return token.slice(0,8)
    }
}