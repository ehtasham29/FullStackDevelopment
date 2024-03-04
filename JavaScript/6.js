// -------------------------------------------------------->> BROWSER EVENTS <<-----------------------------------------------------------------
// const content = document.querySelector('#wrapper') ;

// content.addEventListener('click',function(event){
//     console.log(event) ;
// })


// ### the Default Action 

let myDiv = document.createElement('div') ;
for(let i = 1; i <= 100; i++) 
{
    let newElement = document.createElement('p') ;
    newElement.textContent = 'this is para ' + i ;

    newElement.addEventListener('click',function(event){
        console.log('I have clicked on para ') ;
    }) ;
    myDiv.appendChild(newElement) ;
}
document.body.appendChild(myDiv) ;