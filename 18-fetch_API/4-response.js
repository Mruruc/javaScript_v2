// HTTP Request -HEAD, BODY
// HTTP Response -HEAD, BODY

let content = {
  id: crypto.randomUUID(),
  firstName: 'John',
  lastName: 'Doe',
  address: {
    city: 'Warsaw',
    district: 'center',
    zipCode: '05-666',
  },
};
console.log('Content: ');
for (const key in content) {
  console.table(key, content[key]);
}

console.log('=======================================');
console.log('File Type:');

const JSON_content = JSON.stringify(content);
const file = new File([JSON_content], 'customData', {
  type: 'application/json',
});

for (const key in file) {
  console.table(key, file[key]);
}

console.log('=======================================');
console.log('Custom Response:');
const customResponse = new Response(file, {
  status: 200,
  statusText: 'Custom Response',
  headers: {
    'content-type': 'application/json',
    'content-length': file.size,
  },
});


for (const key in customResponse) {
  console.table(key, customResponse[key]);
}
//console.log(customResponse.headers.get('content-type'));

