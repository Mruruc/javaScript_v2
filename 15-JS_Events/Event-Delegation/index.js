const list = ['Apple', 'Kiwi', 'Orange', 'Grapes', 'Something'];

const ul = document.createElement('ul');

function button(btnName) {
  const btn = document.createElement('button');
  btn.id = 'btn-id';
  btn.appendChild(document.createTextNode(btnName));
  return btn;
}

function addElement(element) {
  const div = document.createElement('div');

  const li = document.createElement('li');

  li.appendChild(document.createTextNode(element));

  const btn = button('delete');

  /*btn.addEventListener('click',() => {
    div.remove();
  });
  */

  div.appendChild(li);
  div.appendChild(btn);
  ul.appendChild(div);
}

list.map((item) => addElement(item));

document.body.appendChild(ul);


/**
 * 
 * Event delegation in JavaScript is a programming technique that involves attaching a single event listener to a parent element, instead of attaching individual event listeners to multiple child elements. This approach is used to efficiently handle events for multiple elements, especially when those elements share a common parent.
 */

const ulEventDelegation=document.querySelector('ul');
ulEventDelegation.addEventListener('click',(e)=>{
      if (e.target.tagName === 'BUTTON') {
        console.log(e.target.parentElement.remove())
      }
})




