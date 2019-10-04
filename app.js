document.addEventListener('DOMContentLoaded', function () {
    var myWorker;
    var myWorker2;
    var myWorker3;
    var myWorker4;

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
            if (myWorker != null) {
                myWorker.terminate();
                myWorker = null;
            }
        };

        document.getElementById("worker2-countup").onclick = () => {
            if (myWorker2 == null) {
                myWorker2 = new Worker('worker2.js');
                myWorker2.onmessage = (event) => {
                    console.log("myWorker2 Event", event);
                    document.getElementById("indigoTextArea").innerText = event.data.message;
                }
            }
            myWorker2.postMessage({
                type: 'countup'
            });
        };

        document.getElementById("worker2-countdown").onclick = () => {
            if (myWorker2 == null) {
                myWorker2 = new Worker('worker2.js');
                myWorker2.onmessage = (event) => {
                    console.log("myWorker2 Event", event);
                    document.getElementById("indigoTextArea").innerText = event.data.message;
                }
            }
            myWorker2.postMessage({
                type: 'countdown'
            });
        };

        // 呼び出したWebWorker側で例外が発生した場合のサンプル
        document.getElementById("worker3-start").onclick = () => {
            myWorker3 = new Worker('worker3.js');
            myWorker3.onerror = (event) => {
                console.error(event);
                document.getElementById("lightBlueTextArea").innerText = event.message;
                myWorker3 = null;
            }
            myWorker3.onmessage = (event) => {
                console.log("myWorker3 Event", event);
                document.getElementById("lightBlueTextArea").innerText = event.data.message;
            }
        };

        // WebWorker1と同じJSファイルを別WebWorkerとして起動するサンプル
        document.getElementById("worker4-start").onclick = () => {
            myWorker4 = new Worker('worker1.js');
            myWorker4.onmessage = (event) => {
                console.log("myWorker Event", event)
                document.getElementById("blueGreyTextArea").innerText = event.data.message;
            }
        };

        document.getElementById("worker4-stop").onclick = () => {
            if (myWorker4 != null) {
                myWorker4.terminate();
                myWorker4 = null;
            }
        };

    } else {
        console.error("Web Worker 非対応のブラウザ")
    }
});