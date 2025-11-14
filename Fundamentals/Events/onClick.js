let button = document.getElementsByClassName("btn-onclick")[0];
let colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lightgray", "lightcoral", "lightgoldenrodyellow", "lightcyan", "lightseagreen", "lightsalmon", "lightsteelblue"];
let index = 0;

button.onclick = function(){
    document.body.style.backgroundColor = colors[index];
    console.log("Background Color changed to: " + colors[index]);
    index = (index + 1) % colors.length;
}


// Alternative way using addEventListener
// button.addEventListener("click", function(){
//     document.body.style.backgroundColor = colors[index];
//     console.log("Background Color changed to: " + colors[index]);
//     index = (index + 1) % colors.length;
// });



let showButton = document.querySelector('.btn-box');
let boxContent = document.querySelector('.box-content');

showButton.style.marginTop = '20px';
boxContent.style.margin = '10px';

showButton.onclick = function() {
    if (boxContent.style.display === 'none' || boxContent.style.display === '') {
        boxContent.style.display = 'block';
        showButton.textContent = 'Hide';
    } else {
        boxContent.style.display = 'none';
        showButton.textContent = 'Show';
    }

    boxContent.style.border = '1px solid black';
    boxContent.style.padding = '10px';
    boxContent.style.width = '500px';
    boxContent.style.textAlign = 'center';
    boxContent.style.backgroundColor = 'lightgray';
};


const mode = document.querySelector('.mode');
mode.style.marginTop = '20px';
mode.style.padding = '10px 20px';
mode.style.fontSize = '16px';
mode.style.cursor = 'pointer';
mode.style.border = 'none';
mode.style.borderRadius = '5px';
mode.style.backgroundColor = 'lightblue';

mode.addEventListener('click', () => {
    if ( document.body.style.backgroundColor !== 'black') {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'white';
    }
    
});