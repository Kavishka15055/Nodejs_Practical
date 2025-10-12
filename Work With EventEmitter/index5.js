import { EventEmitter } from 'node:events';
import { log } from 'node:console';

class AUKEmitter extends EventEmitter {}

const emiterObj = new AUKEmitter();

emiterObj.on('amila', () => {
    log('amila event');
});

emiterObj.emit('amila');