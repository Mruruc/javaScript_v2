

    //create container for list:
    const container=document.createElement('div');
    container.classList.add('container');

    //cerate unordered list element:
    const ul=document.createElement('ul');
    //append unordered list to div container;
    container.appendChild(ul);
    //append container to body:
    document.body.appendChild(container);

    function addList(item){
    //crate a li element
    const li=document.createElement('li');
    li.classList.add('li-element');
    //create a text node for input:
    const itemName=document.createTextNode(item);
    //append the input to li element:
    li.appendChild(itemName);
    //append the li element to ul :
    ul.appendChild(li);
    }



addList('Java');
addList('JavaScript');
addList('HTML');
addList('CSS');
addList('C++');

function removeElementBasedOnValue(value){

  const listOfli=document.querySelectorAll('li');

  listOfli.forEach((li)=>{
    if(value===li.textContent){
      li.remove();
    }
  });
}

function removeElementBasedOnIndex(index){
  const listOfLi=document.querySelectorAll('li');
  //check for index validation:
  if (index >= 0 && index < listOfLi.length) {
        listOfLi[index].remove();
        return;
    }

     alert(`Specified index: ${index} is NOT VALID!`);
    throw new Error(`Specified index: ${index} is NOT VALID!`);
}
//console.log(document.querySelectorAll('li')[0].textContent);

removeElementBasedOnValue('Java');
removeElementBasedOnIndex(4);