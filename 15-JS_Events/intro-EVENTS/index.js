

function displayDate(){
    document.getElementById("date").innerHTML=new Date();
}

 const arr=[
    {id:1,name:"John"},
    {id:2,name:"Jane"},
    {id:3,name:"Bob"}
];

function displayTable(){

let tableContent = `
<table>
    <thead>
        <tr>
            <td>id</td>
            <td>name</td>
        </tr>
    </thead>
    <tbody>
    `;

    // Append rows for each element in the array
    for(let key of arr){
        tableContent =tableContent +  `
        <tr>
            <td>${key.id}</td>
            <td>${key.name}</td>
        </tr>
        `;
    }

    // Close table tag
    tableContent += `</tbody></table>`;

    // Set the table content
    document.querySelector('.table').innerHTML = tableContent;

}  

document.addEventListener("DOMContentLoaded", function() {
    displayTable();
});
