import {Address,Client} from './model.js';

const clients=[];

const address1=new Address(1,'Poland','Warsaw');
const client1=new Client(1,'John','Doe',new Date(),'john@gmail.com',address1);
clients.push(client1);

const address2=new Address(2,'England','London');
const client2=new Client(2,'Jane','Doe',new Date(),'jane@gmail.com',address2);
clients.push(client2);

const address3=new Address(3,'Finland','Helsinki');
const client3=new Client(3,'Bob','Marly',new Date('2005-5-25'),'bobe@gmail.com',address3);
clients.push(client3);

const address4=new Address(4,'Germany','Berlin');
const client4=new Client(4,'Alice','Siphon',new Date(),'alice@gmail.com',address4);
clients.push(client4);

export default clients;