
const updateUser=(userId, updatedData)=>{
  // Get the row corresponding to the user.
  const userRow = document.getElementById(userId);

  // Ensure that the row exists.
  if (userRow ===null) {
   throw new Error("Specified Index Does NOT EXIST!");
  }

  // Get all the cells of the row.
  const cells = userRow.querySelectorAll('td');

  // Assume that the order of updatedData matches the order of the cells.
  let index = 0;
  for (const key in updatedData) {
    if (updatedData.hasOwnProperty(key) && cells[index]) {
      cells[index].textContent = updatedData[key];
      index++;
    }
  }
}

export default updateUser

