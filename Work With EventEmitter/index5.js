import { EventEmitter } from 'node:events';
import { log } from 'node:console';

class AUKEmitter extends EventEmitter {}

const emiterObj = new AUKEmitter();

emiterObj.on('onClick', (name,city) => {
    log('onClick event',`Your name is : ${name} ${city.name}`);
});

emiterObj.on('onClick', () => {
    log('onClick event');
});


emiterObj.emit('onClick',12,{name:"kamal"});