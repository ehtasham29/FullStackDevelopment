// this file is for testing any short program  here only

function createRectangle() {
    let rectangle = {
        length: 1,
        breadth: 2,
        draw: function() {
            console.log("drawing Rectangle !!");
        }
    };
    return rectangle;
}

let rectangleObj1 = createRectangle();

// Accessing and printing each property individually
console.log("Length:", rectangleObj1.length);
console.log("Breadth:", rectangleObj1.breadth);
console.log("Draw:");
rectangleObj1.draw();
