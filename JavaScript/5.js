// ----------------------------------------->         DOM          <-------------------------------------------------------
// DOM (Document Object Model) --> ALL THE HTML CODE CONVERTED IN OBJECT OF JS IS CALLED AS DOM 
// BOM --> IT ALLOWS TO COMMUNICATE WITH THE BROWSER OTHER THAN CONTENT OF WEBPAGE 

//  DOM -> tree like structure 
/* <html>
    <head>
        <body>
            
        </body>
    </head>
</html> */

// character --> tags --> token --> nodes --> DOM  


// ----------------------------------------->         Elements          <-------------------------------------------------------
// 1. Get Elements by id  ==> it returns a single object , it is called on document object ;
// 2. Get Elements by class name ==> it returns array like object (HTML Collection)  ;
// 3. Get elements by tag name ==> returns all objects with given tag name ;

// ### Things to keep in MIND 
// 1. above method use document object 
// 2. return multiple items
// 3. returned list is not array 

//  $0 ==> used to equate selected element 

// Query Selector 

// let a = querySelector('#idname')  
// let b = querySelector('.classname')
// let c = querySelector('name')
// let d = document.querySelectorAll('class-selector') ;

// .innerHTML  => get an element / all of its desecendent 
// .outerHTML  => 
// .textContent => 
// .innerText => not shown if text is hidden 

// most operations and examples is shown on inspecting a website 

// ----------------------------------------->   Adding Elements Using JS   <-------------------------------------------------------

// use => .createElement 
// document.createElement 
// let content = document.appendChild()

// creating Text-node 