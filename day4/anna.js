//normal function

function foo(){
    return ("hell man")
}
    console.log(foo());
    //foo();  //calling the function


    //normal function with parameters
function add(a,b){
    return a+b;
}

console.log(add(30,40));

//anonymous function:

var sum = function(x,y){
    return x-y;
}

console.log(sum(50,20));


//iife function

 
(function () {

    console.log('hellow world');
})();

(function (p,q){
console.log(p*q);

})(3,2);

//arrow function
//single line
var compute =(u,v)=>u+v
console.log(compute(3,2))

//multi line


var res =(i,j)=>{
    var result=20
    var total =result+i+j
    return total
}
console.log(res(50,60)); 

