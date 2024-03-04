// Invoke function --> calling a function 
// hoisting --> it is a process of moving fun declaration to the top of files , done automatically by js engine 


// function assignment 
// let stand = function run() {
//     console.log("Walking") ;
// }

// stand()  ; // it cant be called if we move this above the fun , coz it is not hoisting ,  

// ananymous function assignment -> name is not given 
// let a = fun() {} 


// let x = 1 ;
// x = 'a' 
// console.log(x) 


// function sum(a,b) {
//     console.log(arguments) ;
//     return a+b ;
// }

// console.log(sum(1,2))
// console.log(sum(1))  // 1 + undefined => NAN
// console.log(sum()) // // undefined + undefined => NAN
// console.log(sum(1,2,3,4,5)) // first two argument 

// function sum(a,b) {
//     let total = 0 ;
//     for(let val of arguments)
//     {
//         total = total + val ;
//     }
//     return total ;
// }
// console.log(sum(1,2,3,4,5)) // give sum of all the arguments after modifiying the fun

// -----------------------------------------------------------------------------------
// Rest Operator -->>       ...

// function sum(num, ...args) {
//     console.log(num + args) ;
// }

// sum(1,2,3,4,5,6) // print all the values in array     
// sum(1,2,3,4,5,6)    

//  Default Paramaters 

// function interest(p,r,y=4) {
//     return p*r*y/100 ;
// }

// console.log(interest(1000,10))

// -------------------------------------------------------------------------------

// GETTER AND SETTER 

//  getter -> access to properties 
//  setter -> change or mutate properties 


// let  person = {
//     fname : "Md" ,
//     lname : "Ehtasham" ,
//     get fullName() {
//         return `${person.fname} ${person.lname}` ;
//     },
//     set fullName(value) {
//         if(typeof value !== String) {
//             throw new Error("You have not sent a string") ;
//         }
//         let parts = value.split(' ') ;
//         this.fname = parts[0] ;
//         this.lname = parts[1] ;
//     }
// } ;
// // console.log(person) 
// // console.log(person.fullName)

// person.fullName = "Nazim Hussain"
// console.log(person.fullName)
// console.log(person) 


//  Try & Catch  // Error handling 

// try {
//     person.fullName = true ;
// }
// catch (e) {
//     alert(e) ;
// }

// console.log(person.fullName) 


// --------------------------------------------------------------------------------------------

// ------------------------>   Scope    <---------------------------------

// let is defined within a block of { }
// var is define everywhere within a function 
// Read these on internet 


// -------------------------------------------------------------------------------------------------------------------------

// ------------------------>   Reducing An Array     <-------------------------------------------------

// let arr = [1,2,3,4,5,6,7] ;

// sum of element of array can be printed using loop (for of , for each) ;

// can also be solved using REDUCED FUNCTION 

// let totalSum = arr.reduce((accumulator,currentValue) => 
//     accumulator + currentValue , 0 
//     ) ;

// console.log(totalSum) 