var counter = 0;

setInterval(function(){
    counter++;
    postMessage({
        message: `Web Worker is alived. ${counter}\n`,
        type: 'myWorker1',
        counter: counter
    });
}, 1000);