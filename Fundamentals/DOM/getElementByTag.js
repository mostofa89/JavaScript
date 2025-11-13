const listItems = document.getElementsByTagName('li');
console.log(listItems);


listItems[0].style.color = 'Green';
listItems[0].style.fontWeight = 'bold';
listItems[1].style.color = 'Purple';
listItems[1].style.fontStyle = 'italic';
listItems[2].style.color = 'Teal';
listItems[2].style.textDecoration = 'line-through';
listItems[2].textContent = 'Harry Potter';
listItems[0].style.fontSize = '20px';
listItems[1].style.fontSize = '20px';
listItems[2].style.fontSize = '20px';
listItems[0].style.marginBottom = '10px';
listItems[1].style.marginBottom = '10px';
listItems[2].style.marginBottom = '10px';

listItems[0].style.fontFamily = 'Verdana, sans-serif';
listItems[1].style.fontFamily = 'Verdana, sans-serif';
listItems[2].style.fontFamily = 'Verdana, sans-serif';

listItems[0].style.textAlign = 'center';
listItems[1].style.textAlign = 'center';
listItems[2].style.textAlign = 'center';
listItems[3].style.textAlign = 'center';
listItems[4].style.textAlign = 'center';

listItems[4].innerText = 'Mission Impossible';