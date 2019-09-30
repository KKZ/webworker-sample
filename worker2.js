var counter = 0;

setInterval(function(){
    counter++;
    postMessage({
        message: `Web Worker2 is alived. ${counter}\n`,
        type: 'myWorker2',
        counter: counter
    });
}, 5000);