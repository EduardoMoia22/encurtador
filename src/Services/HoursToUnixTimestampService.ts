export class HoursToUnixTimestampService{
    public static async Convert(durationInMinutes: number): Promise<number>{
        return durationInMinutes * 60
    }
}