 //traditional way

 let bike ={
    name:"honda",
    make:2003,
    price:80000,
    getbikedetails:function(){
        return(`the name of the bike ${bike.name} with price Rs.${bike.price}`)
    }

 }
 console.log(bike.getbikedetails());

//  var i="hello \n world";
//  console.log(i);


//  let number=[20,3,45,67,89,99];
//  let sorted=number.sort((a,b)=>a-b);
//  console.log(sorted);



class person{
    constructor(name,place,job){
        this.name=name;
        this.place=place;
        this.job=job;
    }
    getdetails(){
        return(`the name of the peron is ${this.name} with  place ${this.place}`)
    }

}

let person1=new person("jeba","thabaram","it")
let person2=new person("janush","madavaramu","it")

console.log(person1);
console.log(person2.getdetails())
