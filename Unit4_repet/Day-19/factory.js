// function createStudent(firstname,lastname,birthyear){
//     return{
//         firstname:firstname,
//         lastname:lastname,
//         birthyear:birthyear,
//         calculateAge(){
//             let currentyear=new Date().getFullYear();
//             return currentyear-this.birthyear;
//         },
//     };
// }

// let s1 = createStudent ("Sourav", "Roy", 2004);
// let s2 = createStudent ("Jot", "Kaur",2002);
// console. log(s1.firstname,s1. calculateAge());
// console. log (s2.firstname,s2. calculateAge());

function createIphone(model,storage,color){
    return{
        model:model,
        storage:storage,
        color:color,
        getInfo(){
            return `${this.model} with ${this.storage} storage in ${this.color} color`
        }
    };
}

let p1 = createIphone("iPhone15", "8Gb,128Gb","Gold");
let p2 = createIphone ("iPhone16", "16Gb,256Gb","White");
console. log(p1.getInfo());
console. log (p2.getInfo());