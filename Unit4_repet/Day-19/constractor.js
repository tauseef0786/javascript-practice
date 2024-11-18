function createStudent(firstname,lastname,birthyear){
    this.firstname=firstname;
    this.lastname=lastname;
    this.birthyear=birthyear;
    this.calculateAge= function(){
        let currentyear=new Date().getFullYear();
        return currentyear-this.birthyear;
    }
}

let s1 =new createStudent("Sourav", "Roy", 2004);
let s2 = new createStudent("Jot", "Kaur",2002);
console. log(s1.firstname,s1.calculateAge());
console. log (s2.firstname,s2.calculateAge());



function createIphone(model,storage,color){
        this.model=model;
        this.storage=storage;
        this.color=color;
        this.getInfo=function(){
            return `${this.model} with ${this.storage} storage in ${this.color} color`
        }
    
}

let p1 =new  createIphone("iPhone15", "8Gb,128Gb","Gold");
let p2 = new createIphone ("iPhone16", "16Gb,256Gb","White");
console. log(p1.getInfo());
console. log (p2.getInfo());