// class CreateStudent{
//     constructor(firstname,lastname,birthyear){
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.birthyear=birthyear;
//         this.calculateAge= function(){
//             let currentyear=new Date().getFullYear();
//             return currentyear-this.birthyear;
//         }
//     }
// }
// let s1 = new CreateStudent ("Sourav", "Roy", 2004) ;
//     console.log(s1.calculateAge());

class Createbook{
    constructor(tittle,auther,yearPublished){
        this.tittle=tittle;
        this.auther=auther;
        this.yearPublished=yearPublished;
        this.isOld= function(){
            let currentyear=new Date().getFullYear();
            return `Published Years ${currentyear-this.yearPublished} back`;
        }
    
}
}
    

let p1 =new  Createbook("abcd", "john",2015);
let p2 = new Createbook ("xyz", "jack",2000);
console.log(p1.isOld());
console.log (p2.isOld());