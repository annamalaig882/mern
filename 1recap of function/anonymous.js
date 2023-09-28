
 

 //normal fuction
 function aa(a,b){
    var result=(a*b)
    return result

 }
 console.log(aa(20,40));



 // anonymous function

 var multiple=function(a,b){
    return(a*b)
 }
 
 console.log(multiple(20,40));

 //arrow function

 var anna =(a,b)=>a*b
 console.log(anna(2,3));


 var pasu=(a,b)=>{
    var result= (a*b)
    return (result)

 }
 console.log(pasu(2,2));


 //iife function

 (function (p,q){
    console.log(p*q);
    
    })(3,3);
    
