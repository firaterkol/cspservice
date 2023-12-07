export class Report {
    public id?: string;
    public domain?: string;
    public date?: Date;
    public csp?: any;

    constructor(id?:string, domain?:string, date?: Date, csp?: any){
        this.id = id;
        this.domain = domain;
        this.date = date;
        this.csp = csp;
    }
}