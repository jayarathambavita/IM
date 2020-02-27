export interface Iuser{
    id?: string
   firstName?: string
lastName?: string
 COMName?: string
email?: string
 password?:string

}

export class User implements Iuser{
    constructor(
         public id?: string,
       public  firstName?: string,
       public     lastName?: string,
       public  COMName?: string,
        public email?: string,
        public password?:string
    ){

    }
}