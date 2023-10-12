

//console.log(window.location);

const url=new URL(window.location.href);

console.log(url.search); //?type=html
console.log(url.searchParams.get('type')) //html

console.log(url.searchParams.set('filterBy','Apt.'))
console.log(url.search);

const params=new URLSearchParams(url.search);
console.log(params);

params.forEach(v=>console.log(v));
console.log(params);

// we can set an new search parameter
params.set('filterBy','House');
params.set('filter', 'Rent');


//we can get specific of one by Key:

console.log(params.get('type'));

/// we can loop over them:


for (let [key, value] of params) {
  console.log(`${key} => ${value}`);
}
