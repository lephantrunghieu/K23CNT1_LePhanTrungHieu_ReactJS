//array 
var arr = [10,20,25,15];
//destructuring
var [a,b]=arr; //=> a=10, b=20
console.log("a=",a);
console.log("b=",b);

[a,b,c] = arr;

console.log("a=",a);
console.log("b",b);
console.log("c=",c);

//object
const student = {
    name:"Lê Phan Trung Hiếu",
    age:22,
    phone:"0866569267",
    email:"lephantrunghieu555@gmail.com"
}
var {name,phone} = student;
//=> name:"Lê Phan Trung Hiếu"; phone: "0866569267"
console.log("name:",name);
console.log("phone:",phone);