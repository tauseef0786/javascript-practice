const EventEmitter =require("events")
const myEmitter = new EventEmitter();


function firstListener(){
    console.log("Hello first Listner");
}

myEmitter.on("event", firstListener)

myEmitter.on("secondEvent" ,function secondListner(){
    console.log("Hello It is second event")
});

myEmitter.off("event", firstListener)
myEmitter.emit("event")
// firstListener()