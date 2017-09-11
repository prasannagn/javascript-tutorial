var $http = require('http');

class Ajax {
    static get(url) {
        return new Promise(function (resolve, reject) {
            $http.get(url, (res)=> {
                let body = '';

                res.on('data', (data)=> {
                    body += data;
                });

                res.on('end', ()=> {
                    if (res.statusCode !== 200) {
                        reject(JSON.parse(body));
                    }
                    resolve(JSON.parse(body));
                });

            }).on('error', (e)=> {
                reject(e);
            });
        });
    }
}
module.exports = Ajax;