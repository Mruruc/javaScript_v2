

let output;

const parent=document.querySelector('.parent');

output=parent.children;

output=parent.children[0];
output=parent.children[0].innerText;

//all method available for specific function or expression
//console.dir(output);


output=parent.firstElementChild.innerText;
output=parent.lastElementChild.innerText;


//Access the parent from a child:

const child=document.querySelector('.child3');
output=child.parentElement.innerText;
child.parentElement.style.border="solid 2px red";


//Siblings

const child3=document.querySelector(".child2");
output=child3.nextElementSibling.innerText;
output=child3.previousElementSibling.innerHTML;


console.log(output);