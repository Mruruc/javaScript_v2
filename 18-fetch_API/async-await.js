const url = 'https://api.github.com/users/Mruruc';
/*
fetch(url) //=>> return Response object wrapped  Promise Object:
  .then((response) => {
    //console.log(response)

    if (!response.ok) throw new Error('Received response is Not Valid!');
    return response.json(); // return the json data Wrapped with Promise Object.
  })
  .then((data) => {
    //do something with data:
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
  */

async function fetchData() {
  try {
    const resp = await fetch(url);

    if (!resp.ok) throw new Error('Fetch Api received Invalid Data!');

    const data = await resp.json();
    console.log(data);
    
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
