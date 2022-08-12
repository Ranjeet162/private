const name = "Ranjeet";
const greeting = 'Good Morning';
// console.log(greeting + ' '+ name);

//html

let html;
 html="<h1> this is a heading</h1>"+
"<p> this is paragraph page<p>";

html=   html.concat('this', 'str2');
/*console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[1]);
console.log(html.indexOf('this'));
console.log(html.lastIndexOf('<'));

console.log(html.charAt(7));
console.log(html.endsWith('str'));

console.log(html.includes(' '));
console.log(html.substring(1,6));
console.log(html.slice(0,4));
console.log(html.split(' '));
*/
// console.log(html.replace('this','it'));
    // <--Template Literals
let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
               <h1> This is heading </h1>
               <p> You like ${fruit1} and ${fruit2}
               </p>`;
               document.body.innerHTML = myHtml;