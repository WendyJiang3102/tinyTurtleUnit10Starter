TinyTurtle.apply(window, [undefined, 400, 400]);

function house(size){
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(45);
forward(70);
right(90);
forward(70);
right(135);
forward(size);

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

// Type your function call below
house(100);
hexagon(50);

stamp();
