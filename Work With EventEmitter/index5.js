import { EventEmitter } from "node:events";
import { log } from "node:console";

class AUKEmitter extends EventEmitter {
    constructor(city, age){
        super();
        this.city = city;
        this.age = age;
    }

    runOnClick(){
       this.emit('onClick', 12, this.city); // Fixed: use this.emit, not this.emiterObj.emit
    }
}

const emiterObj = new AUKEmitter('Horana', 24);

emiterObj.on("onClick", (name, city) => {
  log("onClick event", `Your name is : ${name} ${city}`);
});

const myFunction = async (name) => {
  log("onClick event", name);
};

emiterObj.addListener("onClick2", myFunction);

emiterObj.emit("onClick2", 'Amila');
emiterObj.emit("onClick2", 'Upul');
emiterObj.removeListener("onClick2", myFunction);
emiterObj.emit("onClick2"); 

emiterObj.runOnClick();


