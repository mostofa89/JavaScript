let box1 = document.querySelector('.box-1');
console.log(box1);

box1.style.border = '2px solid Black';
box1.style.padding = '15px';
box1.style.width = '300px';
box1.style.margin = '20px auto';
box1.style.backgroundColor = 'LightYellow';
let ptag = box1.querySelector('p');
ptag.style.fontSize = '20px';
ptag.innerText = 'This is box1 number 1. Which created by querySelector.';


box1.setAttribute('id', 'first-box');

let newDiv = document.createElement('div');
let newHeading = document.createElement('h2');
newHeading.className = 'new-heading';
newHeading.innerText = 'This is a new heading inside the new div.';

let newParagraph = document.createElement('p');
newParagraph.innerText = 'This is a new div created using createElement and styled using querySelector.';

newDiv.append(newHeading, newParagraph);
document.body.after(newDiv);
// document.body.prepend(newDiv);
newDiv.style.textAlign = 'center';

newDiv.style.padding = '10px';
newDiv.style.margin = '20px auto';
newDiv.style.width = '400px';
newDiv.style.backgroundColor = 'LightGreen';
newDiv.style.border = '2px solid Green';

newDiv.setAttribute('id', 'new-div');
let getNewDiv = document.querySelector('#new-div');
console.log(getNewDiv);

