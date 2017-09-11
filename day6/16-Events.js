const EventEmitter = require('events').EventEmitter;
const util = require('util');


//First

const resource = (count)=> {
    const eventEmitter = new EventEmitter();

    process.nextTick(()=> {
        let i = 0;
        eventEmitter.emit('start');

        let t = setInterval(()=> {
            eventEmitter.emit('data', i);
            if (i++ == count) {
                eventEmitter.emit('end');
                clearInterval(t);
            }
        }, 10);

    });

    return eventEmitter;
};

const data = resource(10);

data.on('start', ()=> {
    console.log('Started');
});

data.on('data', (d)=> {
    console.log('Data arrived', d);
});

data.on('end', ()=> {
    console.log('Ended');
});


//Second
class Resource {

    constructor(i) {
        this.count = i;
    }

    fetch() {
        let self = this;

        process.nextTick(()=> {
            let i = 0;
            self.emit('start');

            let t = setInterval(()=> {
                self.emit('data', i);
                if (i++ == this.count) {
                    self.emit('end');
                    clearInterval(t);
                }
            }, 10);

        });
    }
}

util.inherits(Resource, EventEmitter);


let res = new Resource(5);

res.on('start', ()=> {
    console.log('Second approach Started');
});

res.on('data', (d)=> {
    console.log('Second approach Data arrived', d);
});

res.on('end', ()=> {
    console.log('Second approachEnded');
});

res.fetch();