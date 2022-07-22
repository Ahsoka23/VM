var input, heading;

function setup() {

  //create a machine that has 5 snacks 
  
  createCanvas(300, 200);
  background(178,255,102);
  
  input = createInput();
  input.position(5, 60);

  heading = createElement('h4', 'Enter any number:');
  heading.position(5, 20);
    
  textAlign(CENTER);
  textSize(50);
}

function draw() {

  var value = input.value();
  
}


