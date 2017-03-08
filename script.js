TinyTurtle.apply(window, [undefined, 400, 400]);


function square(size){
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
}

function triangle(y){
right(45);
forward(y);
right(90);
forward(y);
right(135);
forward(100);
}

function hexagon(x){
forward(x);
right(60);
forward(x);
right(60);
forward(x);
right(60);
forward(x);
right(60);
forward(x);
right(60);
forward(x);
right(60);
}

function shape(type, size){
    if (type==='triangle'){
        triangle(size);
    }
    else if (type==='square'){
        square(size);
    }
    else if (type==='hexagon'){
        hexagon(size);
    }
}
// Type your function call below
square(100);
triangle(70);
hexagon(50);

shape('square',100);
shape('triangle',70);
shape('hexagon',50);

stamp();
