// const fs = require("fs");
// const { JSDOM } = require("jsdom");

// // Read the HTML file as a string
// const html = fs.readFileSync("index.html", "utf-8");

// // Create a DOM from that HTML
// const dom = new JSDOM(html);

// // Access the document
// const document = dom.window.document;

// Select the element
const title = document.getElementById("main-heading");

// Log the original text
console.log("Before:", title.textContent);



title.style.color = 'SkyBlue';

title.textContent = 'Updated Heading';

title.style.fontSize = '48px';

title.style.textAlign = 'center';

title.style.marginTop = '20px';
title.style.fontFamily = 'Arial, sans-serif';

title.style.textDecoration = 'underline';
title.style.letterSpacing = '2px';

title.style.backgroundColor = 'LightGray';
title.style.padding = '10px';

// Log the updated text
console.log("After:", title.textContent);
// Modify the element

// title.style.color = 'SkyBlue';
// title.textContent = 'Updated Heading';

// title.style.fontSize = '48px';

