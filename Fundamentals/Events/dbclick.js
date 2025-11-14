let btnDbclick = document.querySelector('.btn-dbclick');
let dbclick = document.querySelector('.dbclick');
dbclick.style.marginTop = '20px';
let dbclickText = document.querySelector('.dbclick-text');

btnDbclick.ondblclick = function(e) {
    dbclickText.style.display = 'block';
    dbclickText.style.color = 'blue';
    dbclickText.style.fontWeight = 'bold';
    console.log("Button was double-clicked!");
    console.log(e.type);

}