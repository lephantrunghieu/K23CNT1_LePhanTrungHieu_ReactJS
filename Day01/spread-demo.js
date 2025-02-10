// Tạo mảng mới và sử dụng các phần tử của mảng cũ 
var oldArray = [2,5,3];
var newArray = [oldArray,4,5];

console.log("oldArray:",oldArray);
console.log("newArray:",oldArray);

//spread
var oldArray = [2,5,3];
var newArray = [...oldArray,4,5];

console.log("oldArray:",oldArray);
console.log("newArray:",oldArray);