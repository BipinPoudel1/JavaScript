///You have to create a variable which is a string containing the text which is a link you are interested in.
//In this program, I've extract all the links in console from 'xoriari.com' containing only the word 'shop'.
let variable = 'shop';
let links = document.links;
let href;
Array.from(links).forEach(function (x) {
    href = x.href;
    if (href.includes(variable)) {
        console.log(href);
    };
})
