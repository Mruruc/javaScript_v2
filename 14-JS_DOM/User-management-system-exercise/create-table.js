
/**
 * Creating a table:
 */

let table=null;

export function createTable(...th){
  //create table:
   table=document.createElement('table');

  //create <thead>:
  const thead=document.createElement('thead');
  //create table row <tr>:
  const tr=document.createElement('tr');

  //depend on user input create <th> table header.
  th.forEach((user)=>{
    const th=document.createElement('th');
    th.appendChild(document.createTextNode(user));
    tr.appendChild(th);
  });

  //append <tr> to <thead>:
  thead.appendChild(tr);
   // append <thead> to table:
   table.appendChild(thead);
  //append table to body:
  document.body.appendChild(table);
  console.log(table);
}



 export function addUser(...users){
// <tbody>
  const tbody=document.createElement('tbody'); 
  for(const user of users){
    const tr=document.createElement('tr');
    tr.id=user.id;

    for(const property in user){

      const td=document.createElement('td');
      td.appendChild(document.createTextNode(user[property]));

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
}

