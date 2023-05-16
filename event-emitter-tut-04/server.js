const logEvents = require('./logEvents');


const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}


//initialize event object
const myEmitter = new MyEmitter();


//add event listener    
myEmitter.on('log', (msg) => logEvents(msg));
myEmitter.emit('log', 'event emmited')
setTimeout(() => {

}, 2000);
