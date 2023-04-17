let input, button, result, question, submit, answer;

let Answer1;

let colorInput = document.getElementById('color-input');

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    result = createElement('p', 'Are you human?');
    result.style('font-size', '30px');
    result.style('margin', '0px');
    result.style('text-align', 'center');
    result.id('answer');
    answer = document.getElementById('answer');
    colorInput.appendChild(answer);

    input = createInput('');
    input.id('question');

    question = document.getElementById('question');
    colorInput.appendChild(question);

  
    button = createButton('submit');
    button.id('submit');
    submit = document.getElementById('submit');
    colorInput.appendChild(submit);
    button.mousePressed(output);

  }
  
  function draw() {
    background(201, 180, 149);
  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function output() {
  const answers = input.value();
  input.value('');

  let answer1 = createP('');
  answer1.id('answer-1')
  answer1.style('font-size', '30px');
  answer1.style('margin', '0px');

  let Answer1 = document.getElementById('answer-1');
  colorInput.appendChild(Answer1);
  //Answer1.innerHTML = answers;

  if (answers == "i think so"){
    Answer1.innerHTML = "are you sure";
  } else if (answers == "i don't know"){
    Answer1.innerHTML = "do any of us?";
    let a = createA('index4.html', 'next');
    a.id('next');
    colorInput.appendChild(next);
  } else if (answers == "no"){
    Answer1.innerHTML = "I can't tell if you're lying";
  } else if (answers == "probably"){
    Answer1.innerHTML = "figured";
  }else {
    Answer1.innerHTML = "i don't know that answer";
  }
}
