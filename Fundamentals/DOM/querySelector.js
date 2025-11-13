let box = document.querySelector('.box-1');
console.log(box);

box.style.border = '2px solid Black';
box.style.padding = '15px';
box.style.width = '300px';
box.style.margin = '20px auto';
box.style.backgroundColor = 'LightYellow';
let ptag = box.querySelector('p');
ptag.style.fontSize = '20px';
ptag.innerText = 'This is box number 1. Which created by querySelector.';




