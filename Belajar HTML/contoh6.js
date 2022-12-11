var firstname = "harry";
console.log(firstname);

firstname = "Ron"
console.log(firstname);

// x=100;
// var x;
// console.log(x);

// var x;
// x=100;
// console.log(x);

// let k = 10;
// console.log(typeof(k))

// let y = 15.25 ;
// console.log(typeof(y))

// let a = 20;
// let b = 4;

// console.log(a+b)
// console.log(a-b)
// console.log(a/b)
// console.log(a*b)
// console.log(a%b)

// let postfix = 5;
// console.log(postfix ++);

// let prefix = 6;
// console.log(++ prefix);

let greet ="hello"
console.log(typeof(greet))

let great ="hello"
let moregreet=great + great;
console.log(moregreet)

let c = true;
let z = false;
console.log(typeof(c))
console.log(typeof(z))

// let isgreater = a > b ;
// let isless = a < b ;
// console.log(isgreater);
// console.log(isless);

// let myarray = ["cokelat",42.5 ,22 ,true , "progamming"];
// console.log(myarray[0]);
// console.log(myarray[1]);
// console.log(myarray[2]);
// console.log(myarray[3]);
// console.log(myarray[4]);
// console.log(myarray[5]);
// console.log("Panjang nilay myarray adalah " + myarray.length + ".");

let user = {
    firstname : "Yeremia Ega",
    lastname  : "Septia Nugraha",
    age : 24,
    ismuggle : false,
    stuff : ["magic wind","flying car","owl"]
};
console.log("Halo Nama saya " + user.firstname + " " + user.lastname);
console.log("Umur saya adalah "+ user.age + " Tahun" );

let x = 10;
let y = 5;

x *= y;
console.log(x);

// let e = 10;
// let d = 20;
// console.log(e > d);
// console.log(e < d);

// const astring= "10";
// const anumber= 10;
// console.log(astring == anumber); // true, karena nilainya sama-sama 10
// console.log(astring === anumber); // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

let e = 10;
let d = 20;
console.log(e < 15 && d > 10); // (true && true) -> true
console.log(e > 15 && d < 10); // (false && true) -> false
console.log(e < 15 || d > 10); // (true || true) -> true
console.log(e > 15 || d < 10); // (false || true) -> true

let a = 50;

if(a > 70 ){
    console.log(a);
} 
else{
    console.log("Nilai Kurang dari 70")
}

// let language = "French";
// let greeting = "Selamat Pagi"

// if(language === "English") {
//     greeting = "Good Morning!"
// } else if ( language === "French") {
//     greeting = "Bonjour!"
// } else if ( language === "japan") {
//     greeting( language = "Ohayogozaimasu!")
// }
// console.log(greeting);

// for(let i =0; i <5; i++){
//     console.log(i);
// }

const myarray = ["Harry", "Ron", "Hermione", "Tom"];

// for(let i = 0;i <myarray.length; i++){
//     console.log(myarray[i]);
// }
for(const arrayitem of myarray){
    console.log(arrayitem)
}

function greeting(name, language){
    if(language === "English"){
        console.log("Good morning " + name + "!");
    } else if(language === "French"){
        console.log("Bonjour " + name  + "!");
    } else{
        console.log("Selamat pagi "+ name + "!");
    }
}
greeting("Harry", "English");


// function multiply(a, b) {
//     return a * b;
// }
// let result = multiply(10,5)
// console.log(result)

function multiply(num){
    total = num * num;
    return total;
}
let total = 9;
let number = multiply(20);
console.log(total)

const firstname = prompt("Siapa Nama Depanmu?");
const lastname = prompt("Siapa Nama Belakangmu?");
const language = prompt("Bisa Berbahasa apa?");

const user={
    name: {
        first:firstname,
        last:lastname,
    },
    language:language
};

if(user.language === "English"){
    alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French"){
    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese"){
    alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else{
    alert("Senang bertemu dengan Anda " + user.name.first + " " +user.name.last + "!");
}