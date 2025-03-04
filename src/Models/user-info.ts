

export class UserInfoDTO{
    constructor(
    public id:number,
    public repository:string,
    public lastSearchMin:number,
    public lastSearchMax:number,
    public lastSearchResult:number
    ){}
}
