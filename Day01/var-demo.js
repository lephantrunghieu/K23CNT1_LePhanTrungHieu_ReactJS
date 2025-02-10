var x=100; // global
function varDemo(){
    console.log("Gia tri x ben trong ham:",x)
}

//
console.log("X ben ngoai ham:",x);

//thuc thi ham
varDemo();


//local 
function fn_demo(){
    var y=200; //local
    console.log("y ben trong ham:",y);
}

//thuc thi ham
fn_demo();
//y ben ngoai ham
console.log("y ben ngoai ham",y); // y=error

// vi du voi chat lgbt

//Khai báo và gán giá trị cho biến
var hoTen = "Le Hieu";
console.log(hoTen); // Output: Le Hieu

//Khai báo biến mà không gán giá trị ban đầu (có giá trị mặc định là undefined)
var tuoi;
console.log(tuoi); // Output: undefined
tuoi = 25;
console.log(tuoi); // Output: 25

//Khai báo lại biến với var không gây lỗi (có thể bị ghi đè)
var x = 10;
var x = 20; // Không báo lỗi
console.log(x); // Output: 20

//Phạm vi của var là function-scoped (toàn cục nếu khai báo bên ngoài hàm)

function testVar() {
    if (true) {
        var y = 30; // Biến `y` có phạm vi trong toàn bộ function
    }
    console.log(y); // Output: 30 (Vẫn truy cập được vì `var` không có block scope)
}
testVar();

//var có thể bị hoisting (đưa lên đầu phạm vi)

console.log(a); // Output: undefined (biến `a` được hoisting lên đầu nhưng chưa gán giá trị)
var a = 50;
console.log(a); // Output: 50



