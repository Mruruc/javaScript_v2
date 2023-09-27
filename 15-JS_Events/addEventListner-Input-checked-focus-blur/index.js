//document.getElementById('check').addEventListener('change',isChecked);
document.getElementById('check').addEventListener('input', isChecked);

function isChecked(e) {
  const result = e.target.checked ? 'Yes Pleaseeeeeee' : 'No Thank You';
  console.log(result);
}

let test = document.getElementById('fname');
test.addEventListener('focus', handleFocus);


function handleFocus(e) {
  e.target.style.outlineStyle = 'solid';
  e.target.style.outlineWidth = '1px'; 
  e.target.style.outlineColor = 'red';
}

test.addEventListener('blur', handleOnblur);

function handleOnblur(e) {
  e.target.style.outlineStyle = 'solid';
  e.target.style.outlineWidth = '2px';
  e.target.style.outlineColor = 'blue';
}

test.addEventListener('input',saveInput);

function saveInput(e){
  console.log(e.target.value)
}