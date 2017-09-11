var $ajax = require('./lib/Ajax');
var Random = require('./lib/Random');

new Promise((resolve, reject) => {
    const random = new Random(20,200);
    const i = random.getRandomArbitrary();
    if (i % 2 == 0) {
        resolve(i);
    } else {
        reject(i)
    }

}).then((j)=> {
    console.log("Got even number", j);
}).catch((k)=> {
    console.log("Error, its an odd number", k);
});


//Ajax example
const dealerUri = 'http://nitra-services.dit-ord.cobaltgroup.com/dealerService/v2/dealers/gmcl-demo-2';
$ajax.get(dealerUri).then((res)=> {
    console.log(res);
}).catch((err)=> {
    console.log('Error:..', err);
});

