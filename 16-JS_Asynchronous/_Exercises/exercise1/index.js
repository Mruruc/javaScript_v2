const list = ['Apple', 'Kiwi', 'Orange', 'Grapes', 'Something'];


function getItem(){
  setTimeout(()=>{
    let output='';
    list.forEach((item)=> {
      output += `<li>${item}</li>`;
    });
    document.querySelector('section').innerHTML=output;
  },1000);
}


//one Solution is that time to adding item keeping less than item rendering

/*function addItem(item){
  setTimeout(()=>{
    list.push(item);
  },1000
  );
}*/

function addItem(item,_callBack) {
  setTimeout(() => {
    list.push(item);
    _callBack();
  }, 2000);
}
addItem('Banana',getItem);


