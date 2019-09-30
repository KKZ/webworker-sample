var counter = 0;

self.addEventListener('message', (event) => {
    let data = event.data;
    switch (data.type) {
        case 'countup':
            counter++;
            postMessage({
                message: `Web Worker2 is alived. ${counter}\n`,
                type: 'myWorker2',
                counter: counter
            });
            break;
        case 'countdown':
            counter--;
            postMessage({
                message: `Web Worker2 is alived. ${counter}\n`,
                type: 'myWorker2',
                counter: counter
            });
            break;
        default:
            console.error('unknown event type');
    }
}, false)