import { Note } from "./note";

export class User {
    id:number= 1;
    birthDate:Date|undefined;
    name:string="";
    avatar:string='';
    bio:string='';

    notes:Note[]=[];
}
 