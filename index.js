let path = require("path");
let config = require("./modules/config");

app = {};

app.nodeInfiniteLoop = function(){
    setInterval(() => { console.log(config.message) }, config.interval);
};

console.log("Process" , process.env);

// Invoke the loop
//app.nodeInfiniteLoop();
