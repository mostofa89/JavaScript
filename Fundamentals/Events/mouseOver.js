let mouseoverText = document.querySelector('.mousehover-text');
let hoverBox = document.querySelector('.hover-box');
mouseoverText.innerText = "Mouse is over the box!";



const handler3 = () =>{
    mouseoverText.style.display = 'block';
    mouseoverText.style.color = 'green';
    mouseoverText.style.fontWeight = 'bold';
    mouseoverText.innerText = "You Have Hovered Over the Box!";
    console.log("Mouse is hovering over the box!");
}


hoverBox.addEventListener ('mouseover', () => {
    console.log("Mouse is over the box - inline arrow function");
    mouseoverText.style.color = 'Blue';
    mouseoverText.style.fontWeight = 'bold';
})




hoverBox.addEventListener('mouseover', handler3);


// To remove the event listener, uncomment the line below
hoverBox.removeEventListener('mouseover', handler3);