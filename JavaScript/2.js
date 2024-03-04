//  console.log("chaliye shuru krte hai")

//   object creation  
// let rectangle = {
//     length: 1 ,
//     breadth: 2,
//     draw: function() {
//         console.log("draw is being called !!")
//     }
// } ;
// -----------------------------------------------------------------------------
// objection creation can be in two ways using 1. Factory Function , 2. Constructor function 

// 1. Factory Function -------->>>>>

// function createRectangle(len,bre) {
//     let rectangle = {
//         length: len ,
//         breadth: bre ,
//         draw: function() {
//             console.log("drawing Rectangle !!")  
//         }
//     } ;
//     return rectangle ;
// }

// let rectangleObj1 = createRectangle(2,4) ;
// let rectangleObj2 = createRectangle(3,9) ;
// let rectangleObj3 = createRectangle(4,6) ;
// console.log(rectangleObj1.draw) ;
// console.log(rectangleObj2) ;
// console.log(rectangleObj3) ;

// -----------------------------------------------------------------------------

//  Camelcase -> numberOfStudents 
//  constructor function -> Pascal Notation -> first letter of every word is capital -> numberOfStudents 

// function Rectangle(len,bre) {
//     this.length = len ;
//     this.breadth = bre ;
//     this.draw = function() {
//         console.log("drawing") ;
//     }
// }

// object creation using constructor 

// let rectangleObject = new Rectangle(4,6) ;
// console.log(rectangleObject)

// Dynamic Nature of Object 
// Can add more element or delete any element 

// rectangleObject.color = "Yellow" ;
// console.log(rectangleObject)

// delete rectangleObject.color ;
// console.log(rectangleObject)

// Constructor 
// console.log(Rectangle.constructor)

// ## functions are objects 

// -----------------------------------------------------------------------------

// ######### For-In Loop 
// let rectangle = {
//     length: 2,
//     breadth: 4 
// }

// for (let key in rectangle)
// {
//     console.log(rectangle[key])  // values 
//     console.log(key)  // keys
// }

// ######### For-Of Loop // used for iterable Objects -> arrays , maps etc ...

// for(let key of rectangle)  // will give error 
// {
//     console.log(key) 
// }

//  to check any properties is present or not 
// if('color' in rectangle)
// {
//     console.log("present")
// }
// else {
//     console.log("Absent")
// }

// -----------------------------------------------------------------------------

// ############ OBJECT CLONING :\
//              ways of cloning  
//             1. iteration 
//             2. Assign
//             3. Spread 
//  ---------
//             1. iteration
// let src = {
//     a : 10,
//     b : 15,
//     c : 20
// }

// let dest = {}
// for(let key in src) {
//     dest[key] = src[key] ;
// }

// console.log(src) ;
// console.log(dest) ;

// src.a++ ;

// console.log(src) ;
// console.log(dest) ;

//  ---------
//            2. Assign

// let src = {
//     a : 10,
//     b : 15,
//     c : 20
// } ;

// let src2 = {value : 30}

// let dest = Object.assign({},src,src2) ;


// console.log(src) ;
// console.log(dest) ;

// src.a++ ;

// console.log(src) ;
// console.log(dest) ;


//  ---------------------------
//             3. Spread 

// let src = {
//     a : 10,
//     b : 20,
//     c : 30
// } ;

// let dest = {...src} ;
// console.log(dest) ;
// src.a++ ;
// console.log(src) ;
// console.log(dest) ;
