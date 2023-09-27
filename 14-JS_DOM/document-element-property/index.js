/**
 * The document object represents our web page.
 * If we want to access any element in an HTML page,we must start with accessing the  
 * document object.
 */

let output;


output=document.all;
output=document.documentElement;

output=document.head;
output=document.body;

output=document.body.children;

output=document.doctype;
output=document.domain;
output=document.URL;
output=document.contentType;

output=document.forms;
output=document.forms.length;

output=document.images;
output=document.images[0];



//document.getElementById(id); ----> Find element by element id.

output=document.getElementById('id1')
output=document.getElementById('id1').innerText;
output=document.getElementById('id1').innerHTML;
output=document.getElementById('id1').title='this is something!';


const element=document.getElementById('id1');
//console.log(element.textContent);
element.textContent=" <strong> Somehting v3 </strong> ";
element.innerHTML=" <strong> Something v3 </strong> ";
//console.log(element.innerHTML)

element.style.color='red';
element.style.padding='20px';
element.style.border='solid 3px';
element.style.backgroundColor='black';


// document.getElementsByTagName(tagName); -----> find element by tag name:
const h1=document.getElementsByTagName('h1');
console.log(h1);

// document.getElementByClassName(className)---->finds elements by class name.
const class1=document.getElementsByClassName('class1');
console.log(class1)



/**
 * element.attribute = new value; ---->Change the attribute value of an HTML element;
 * 
 */
class1.id='id1';
class1.title='this is a hint ;)';


/**
 * element.setAttribute(attribute, value) --->	Change the attribute value of an HTML  element
 */

//class1.setAttribute('class','newClass');

//document.querySelector();

let query=document.querySelector('h1');

query=query.innerHTML;
query=query.innerText;

//console.log(query);

console.log(document.querySelectorAll('#id1'));



