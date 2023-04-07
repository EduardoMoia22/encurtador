type LinkProps = {
    url: string
    token: string
    duration: number
}

export class Link{
    public url: string
    public token: string
    public duration: number

    constructor({url, token, duration}: LinkProps){
        this.url = url
        this.token = token
        this.duration = duration
    }
}