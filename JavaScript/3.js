// In-Built Objects and Array etc...

// -----------------------------------------------------------------------------

// ################   In-Built Objects ###############
// ################   refer to MDN resources ###############

// ---------------->  1. Math Object  <------------------
// to use Mathematical function , Math Object is used ;

// let a = Math.random()  // it will generate a random number
// let a = Math.round(3.456) // will round off to nearest int 
// let a = Math.abs(-232) 
// let a = Math.max(1,2,3,55,67,6)
// let a = Math.min(1,2,3,55,67,6)
// console.log(a)

// ---------------->  2. String  <------------------

// let lastName = new String("Ehtasham") // Object type
// console.log(typeof(lastName))

// let firstName = "Mohammad" // primitive type 
//  after applying . after string name JS treat it as a  object but not primitve 

// console.log(firstName.length) 
// console.log(firstName[0]) 
// console.log(firstName.includes("amma")) 
// console.log(firstName.startsWith("Moh")) 
// console.log(firstName.endsWith("mad"))
// console.log(firstName.indexOf("d"))
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())
// console.log(firstName.trim())
// console.log(firstName.replace(""))

// let message = 'This is my first git hub commit!!' // split the strings
// let words = message.split(' ') ;         // into object of diff words 
// console.log(words) ;


// ---------------->  3. Template Literal  <------------------

// let message = 'This is \n my first\n git hub commit!!'  // dificult 
// let message = 'This is my first git hub commit!!' 
// console.log(message)

// ' '," " , /  etc or any special char can't be used- in the strings  directly 

// let message = `This is 
// my first               
// git hub commit!!`   // print same as looking // using backtick
// console.log(message) 

// ---------------->  4. Date & Time  <------------------

// let date = new Date() ;
// let date = new Date('16 August 2003 07:24') ;
// let date = new Date(2003,0,29,14) ; 
// let date = new Date(2003,0,29,14) ; 
// using setter to set any value of method 
// date.setFullYear(2005)
// date.setMonth(5)
// date.setDate(20)
// date.setMinutes(30)
// console.log(date) 
// using getter to get any value 

//-----------------------------------------------------------------------------
// ################   Arrays  (Refrence type in JS)  ###############
//  Collection of different type of data 
//  What can we do with arrays ? 

// 1. Adding new Elements
// 2. Finding Elements
// 3. Removing Elements
// 4. Splitting Elements
// 5. Combining Elements

// let numbers = [10,20,30,40,50,60,70] 
// console.log(numbers) //all elements 
// console.log(numbers.length) // length of array 
// console.log(numbers[4])  // access each element 

// for (let ele in numbers) {
//     console.log(ele,numbers[ele]) ; // index and values at index
// }

//  Insertion in the array 
// 1. End  => numbers.push(ele) , 
// numbers.push(80) ; 

// 2. Begin => numbers.unshift(ele)  ,
// numbers.unshift(-10)

// 3. Middle => using splice 
// numbers.splice(2,0,'a','b','c' )
// console.log(numbers) 

// Searching in array 
// console.log(numbers.indexOf(40)); // 3
// console.log(numbers.indexOf(110));  // index = -1 if not present 

// check if present or not 
// if(numbers.indexOf(44) != -1) 
//     console.log("Present")
// else 
// console.log("Not Present")

// better way 
// console.log(numbers.includes(33)) ;
// console.log(numbers.indexOf(3,10)) ;

// doing same operations on refrences 
// let courses = [
//     {no:1, naam:"Ehtasham"} ,
//     {no:2, naam:"Nazim"} ,
//     {no:3, naam:"Sameer"} ,
//     {no:4, naam:"Sarfaraz"} ,
// ]
// console.log(courses) ;

// console.log(courses.indexOf({no:1, naam:"Ehtasham"})) ; // O/P => -1 , coz these values of console is diff object and have not the same refrence value as the main 

// IN PRIMITIVE WE WERE COMPARING THE VALUES ONLY 
// IN OBJECTS WE COMPARED THE REFRENCES  , that's why 

//  here we use CALLBACK FUNCTION 

// console.log(courses) ;

// let course = courses.find(function(course) {
//     return course.naam = 'Sameer' ;
// })
// using arrow function 

// let course = courses.find(course => {
//     return course.naam = 'Sameer' ;
// })
// console.log(course) ;


// Removing Element 1. from end , 2. from begining , 3. from in between 

// let numbers = [1,2,3,4,5,6,7] 
// numbers.pop() ;
// numbers.shift() ;
// numbers.splice(3,1) ;
// console.log(numbers) ;

// Emptying an array :

// numbers = [] ;
// let numbers2 = numbers ;
// numbers = [] ;
// numbers.length = 0 ;
// numbers.splice(0,numbers.length) ;
// console.log(numbers) ;
// console.log(numbers2) ;

//  Combining & slicing of array 

// let first = [1,2,3,4] 
// let second = [5,6,7,8] 
// let combine = first.concat(second) ;
// console.log(combine)
// let sliced = combine.slice(2,4)
// console.log(sliced)

// let combine = [...first,...second] 
// let combine = [...first,'a','b',...second] 
// console.log(combine)

//  Iterating an Array  

// let arr = [10,20,30,40,50,60] 

//  using for-of
// for (let value of arr) {
//     console.log(value) 
// }

// using for each 
// arr.forEach(number => {
//     console.log(number)
// })

// ------------------------------------------------
// Joining and splitting  array 

// let arr = [10,20,30,40,50,60] 
// const joined = arr.join(',') ;
// console.log(joined) ;

// let msg = 'this is my first text message' ;
// let parts = msg.split(' ') ;

// console.log(parts) ;

// ----------------------------------------------------------------

//  Sorting array 

// let numbers = [32,12,3,56,22] 
// numbers.sort() // sort the string after converting array in string 
// console.log(numbers) 

// Filtering an array 

// let numbers = [12,3,4,5,-6,-4,8,-78] 

// let filtered = numbers.filter(value => {
//     return value >= 0
// })

// console.log(filtered) ; 


//  ----------------------------------------
// MAPPING ARRAYS 

// let numbers = [7,8,9,10,11] ;

// let items = numbers.map(value => {
//     return 'student_no ' + value ;
// })

// console.log(items) 

// let filtered = numbers.filter(value => value >= 0) ;

// let items = filtered.map(num => {
//     return {value : num } 
// })

// console.log(items)
