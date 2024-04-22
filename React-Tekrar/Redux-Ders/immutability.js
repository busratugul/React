//PRIMITIVE VERİ TİPLERİNDE BU YENIDEN ATAMA ÇALIŞIR
let name= "Busra"
let name2= name

name2 = "murat"

console.log(name);
console.log(name2);

/* node immutability.js */

//REFERANS TİPLER YENIDEN ATAMA FARKLI DAVRANIR.
const user = {
    name:"Busra",
    isActive: true
}

//OBJENIN CLONU ALINARAK YAPILABILIR
//yontem1: spread op burada çalışır aslında burada referans olan objenın bır kopyasını aldık.kopya yenı referans olusturdu ve bu sayede çalıştı
const user2 = {...user}
user2.name = "Murat"

//yontem2: 
const user3 = Object.assign({}, user)
user3.name = "Onur"

console.log(user);
console.log(user2);
console.log(user3);

const numbers = [1,2,3,45,6,7]
//const numbers2 = numbers orjinal arrayede 40 pushlandı:0

const numbers2 = [...numbers]
numbers2.push(40) 


console.log(numbers);
console.log(numbers2);

//immurjs, immutablejs bu tarz çalışma için kullnılabilecek kutuphanelerdir