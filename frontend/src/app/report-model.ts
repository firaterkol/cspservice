export class Report {
    public id?: string;
    public message?: string;
    public url?: string;
    public csp?: any;

    constructor(id?:string, message?:string, url?: string, csp?: any){
        this.id = id;
        this.message = message;
        this.url = url;
        this.csp = csp;
    }
}