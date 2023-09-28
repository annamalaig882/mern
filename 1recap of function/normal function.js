//function intro
function display(){
    console.log("hi how are you?")

}display()



function pasu(){
    return("hi paupathi dass")

}console.log(pasu());



function add (){
    return(3+2)

}console.log(add());



//fuction with parameters

function addTwoNum(a,b){
    console.log(a+b);
}
addTwoNum(5,5)


function mulNum(a,b,c){
    return(a*b*c)

}console.log(mulNum(2,2,2))


function random(a,b){
    var result=a+b;
    return(0)

}console.log(random(6,6));



function random1(a,b){
    var result=a+b;
    return(result)

}console.log(random1(6,6));



function unique(x,y){
    var result=x*y;

}console.log(unique(2,2))


function sum(a,b,c,d){
    var marks=a+b+c+d;
    var perc=marks/400*100;
    return(perc)
}
console.log(sum(100,100,100,100));

// write a function to get the first element array
// passing a parameter n will return the first element

//input[7,9,0,-2]
//o/p=>7

//i/p [0,6,4,5]
//o/p=>0

//i/p ([1,2,3,4],-3)
//o/p=>[] 

//input ([1,2,3,4],3)
//o/p [1,2,3]

function com(arr,n){
    if(n==null){
        return arr[0]
    }
    else if (n<0){
    return [];
    }
    else {
        //array slice
        return arr.slice(0,n)
    }
    

}
console.log(com([7,9,0,-2]));
console.log(com([0,6,4,5]));
console.log(com([1,2,3,4],-3));
console.log(com([1,2,3,4],3));