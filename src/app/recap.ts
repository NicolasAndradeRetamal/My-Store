const username:string | number = 1;
const sum = (a:number, b:number) =>{
    return a+b;
}
sum(1,3)

class Person{
    constructor(public age:number, public lastName:string){
    }
}

const nico = new Person(25, 'Andrade');
nico.age;