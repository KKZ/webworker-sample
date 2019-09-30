document.addEventListener('DOMContentLoaded', function () {
    var myWorker;
    var myWorker2;
    var myWorker3;

    if (window.Worker) {

        // WebWorkerとメッセージをやり取りするサンプル
        document.getElementById("worker1-start").onclick = () => {
            myWorker = new Worker('worker1.js');
            myWorker.onmessage = (event) => {
                console.log("myWorker Event", event)
                document.getElementById("blueTextArea").innerText = event.data.message;
            }
        };

        document.getElementById("worker1-stop").onclick = () => {
            if (myWorker != null){
                myWorker.terminate()
            }
        };

        document.getElementById("worker2-start").onclick = () => {
            myWorker2 = new Worker('worker2.js');
            myWorker2.onmessage = (event) => {
                console.log("myWorker2 Event", event);
                document.getElementById("indigoTextArea").innerText = event.data.message;
            }
        };

        document.getElementById("worker2-stop").onclick = () => {
            if (myWorker2 != null){
                myWorker2.terminate()
            }
        };

        // 呼び出したWebWorker側で例外が発生した場合のサンプル
        document.getElementById("worker3-start").onclick = () => {
            myWorker3 = new Worker('worker3.js');
            myWorker3.onerror = (event) => {
                console.error(event);
                document.getElementById("lightBlueTextArea").innerText = event.message;
            }
            myWorker3.onmessage = (event) => {
                console.log("myWorker3 Event", event);
                document.getElementById("lightBlueTextArea").innerText = event.data.message;
            }
        };

    }else{
        console.error("Web Worker 非対応のブラウザ")
    }
});


