var counter = 0;

setTimeout(function () {
    counter++;
    throw "例外発生！"
}, 10000);