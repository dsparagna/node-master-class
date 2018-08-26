

app.nodeInfiniteLoop = function(){
    setInterval(() => { console.log(config.message) }, config.interval);
};


// Invoke the loop
app.nodeInfiniteLoop();
