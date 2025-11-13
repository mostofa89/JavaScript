let boxes = document.querySelectorAll('.box');

for (let box of boxes) {
    box.style.border = '2px dashed DarkGray';
    box.style.padding = '10px';
    box.style.margin = '15px';
    box.style.backgroundColor = 'AliceBlue';
    box.style.textAlign = 'center';
    box.style.width = '500px';
    box.style.margin = '15px auto';
    ptag = box.querySelector('p');
    ptag.style.fontSize = '18px';
    ptag.innerText = 'This is box number ' + (Array.from(boxes).indexOf(box) + 1) + ". Which created by querySelectorAll.";
}


let sportItems = document.querySelectorAll('.sport-items');
let sportTitle = document.querySelector('.sport-title');
sportTitle.style.textAlign = 'center';
sportTitle.style.color = 'DarkBlue';
sportTitle.style.textDecoration = 'underline';

let sports = document.querySelector('.Sports');
sports.style.width = '500px';
sports.style.margin = '20px auto';
sports.style.padding = '10px';
sports.style.border = '2px solid DarkBlue';
sports.style.backgroundColor = 'Lightblue';
sports.style.borderRadius = '8px';
sports.style.boxShadow = '2px 2px 12px rgba(0, 0, 0, 0.1)';
sports.style.textAlign = 'center';

for (let item of sportItems) {
    item.style.fontSize = '20px';
    item.style.margin = '8px 0';
    item.style.color = 'DarkGreen';
    item.style.backgroundColor = 'LightGray';
    item.style.padding = '5px';
    item.style.listStyleType = 'none';
    item.style.width = '200px';
    item.style.margin = '8px auto';
    item.style.textAlign = 'center';
    item.style.cursor = 'pointer';
    item.style.transition = 'all 0.3s ease';
    item.backgroundColor = 'cyan';
    item.style.border = '1px solid Gray';
}