/********************************************* PRIORITY QUEUE *********************************************************/
/**
 * DESCRIPTION:
 *
 * USAGE:
 var queue = new queue();
 var item = {
        key :"10",
        reload:false,
        uri : "http://localhost:63343/js/day5/output.json",
        callback : function print(response){console.log(response)}
    };
 queue.enqueue(item);
 */
/**********************************************************************************************************************/

(function ($) {
    function priorityQueue() {
        var queue = [];
        var interval = 1000;
        var status = {DONE: "DONE", ERROR: "ERROR", PENDING: "PENDING", IN_PROGRESS: "IN_PROGRESS"};

        this.enqueue = function (item) {
            var queueItem = find(item.key);
            if (item.reload) {
                //remove all cashed responses
                empty();
                push(item);
            } else if (queueItem) {
                if (queueItem.status == status.DONE) {
                    //re-use cashed response
                    queueItem.callback(queueItem.response);
                } else if (queueItem.status == status.ERROR) {
                    //retry...
                    queueItem.status = status.PENDING;
                } else {
                    //Duplicate request... ignore
                }
            } else {
                push(item);
            }
        };

        var peak = function () {
            for (var i in queue) {
                if (queue[i].status == status.PENDING) {
                    return queue[i];
                }
            }
        };

        var empty = function () {
            queue = [];
        };

        var find = function (key) {
            for (var i in queue) {
                if (queue[i].key == key) {
                    return queue[i];
                }
            }
        };

        var process = function () {
            var item = peak();
            if (item) {
                item.status = status.IN_PROGRESS;
                $.ajax({
                    url: item.uri,
                    success: function (response) {
                        item.response = response;
                        item.status = status.DONE;
                        item.callback(item.response);
                    },
                    error: function (error) {
                        item.response = error;
                        item.status = status.ERROR;
                        item.callback(item.response);
                    }
                });
            }
        };

        var push = function (item) {
            item.status = status.PENDING;
            queue.push(item);
        };

        this.stopPolling = function () {
            clearInterval(this.polling);
        };

        this.startPolling = function () {
            this.polling = setInterval(process, interval);
        };

        this.startPolling();
    }

    window.queue = priorityQueue;

})
(jQuery);
