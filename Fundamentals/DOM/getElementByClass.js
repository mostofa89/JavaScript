const divcontainer = document.getElementsByClassName('container');

console.log(divcontainer[0]);
console.log(divcontainer[0].childNodes[3]);

let ul = divcontainer[0].childNodes[3];

let listtitle = ul.childNodes[1];
listtitle.style.color = 'OrangeRed';
listtitle.style.textAlign = 'center';
listtitle.style.fontFamily = 'Georgia, serif';
ul.style.listStyleType = 'none';

