
const h3=document.createElement('h3');
h3.appendChild(document.createTextNode('Most Popular Programming Language:'));


const ol=document.createElement('ol');

function addList(item){
const li=document.createElement('li');
const text=document.createTextNode(item);
li.appendChild(text);

ol.appendChild(li);
}
console.log(ol)
document.body.appendChild(h3);
document.body.appendChild(ol);


addList('Java');
addList('JavaScript');
addList('HTML');
addList('CSS');
addList('Python');


function replaceWithNew3(index,newValue){
  const list=document.querySelector('ol');
  const arr=list.children;
  arr[index].textContent=newValue;
  
} 

function replaceWithNew(oldValue,newValue){
  const arr=document.querySelector('ol').children;
  
  for(let index=0; index<arr.length; index++){
   if(oldValue===arr[index].textContent){
    arr[index].innerHTML=newValue;
   }
  }
} 

function replaceWithNew4(oldValue,newValue){
  const arr=document.querySelectorAll('li');
  
  arr.forEach((item,index)=>{ 
    if(oldValue===item.textContent){
      item.innerText=newValue;
    }
  });
} 

function replaceWithNew2(oldValue,newValue){
  const list=document.querySelector('ol');
  const arr=list.children;

  const newli=document.createElement('li');
  newValue=document.createTextNode(newValue)
  newli.appendChild(newValue);


  for(let index=0; index<arr.length; index++){
   if(oldValue===arr[index].innerHTML){
    list.replaceChild(newli,arr[index]);
   }
  }
  
} 

function replace5(index,newValue){
  const li=document.querySelectorAll('li');

  //new node:
 const newLi= document.createElement('li');
 newLi.appendChild(document.createTextNode(newValue));
 
 //replace old element with new one:
  li[index].replaceWith(newLi);

}

replace5(3,'C#');
