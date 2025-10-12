import { EventEmitter } from "node:events";
import { log } from "node:console";

class AUKEmitter extends EventEmitter {}

const emiterObj = new AUKEmitter();

emiterObj.on("onClick", (name, city) => {
  log("onClick event", `Your name is : ${name} ${city.name}`);
});


const myFunction = async (name) => {
  log("onClick event",name);
}

emiterObj.addListener("onClick2", myFunction);

emiterObj.emit("onClick2",'Amila');
emiterObj.emit("onClick2",'Upul');
emiterObj.removeListener("onClick2",myFunction);
emiterObj.emit("onClick2");
emiterObj.emit("onClick2");
emiterObj.emit("onClick2");

emiterObj.emit('onClick',12,{name:"kamal"});
