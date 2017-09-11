const req = require('request');
const buf = new Buffer();

const dealerUri = 'http://nitra-services.dit-ord.cobaltgroup.com/dealerService/v2/dealers/gmcl-demo-2';


const dealer = req(dealerUri);

dealer.pipe(buf);

console.log(buf.toString());