


const div= document.createElement("div");
div.className="my-div";
div.id="my-id";
div.setAttribute('title','My title');

//div.innerText='something';

const text=document.createTextNode('Something');
div.appendChild(text);


//console.log(div);

//to show in browser:

document.body.appendChild(div);


// Styling:

div.style.backgroundColor='red';
div.style.height='40px';
div.style.width='90px';

//console.log(document)



/**
 * Creating the List with JavaScript:
 */

const ul=document.createElement('ul');

const listTitle=document.createTextNode("Programming Language:");
ul.appendChild(listTitle);

const element1=document.createElement('li');
element1.appendChild(document.createTextNode("JavaScript"));

const element2=document.createElement('li');
element2.appendChild(document.createTextNode("React"));

ul.appendChild(element2);
ul.appendChild(element1);


document.body.appendChild(ul);

// console.log(ul)
