const http = require('http')


const { timeout } = require('../lib/util')

let currentRequest;

new http.Server(async (req, res) => {
    currentRequest = req;
    const delay = +req.url.substr(1)
    await timeout(delay)
    respond(res)
}).listen(8080)

function respond(res) {
    const req = currentRequest
    res.write('Response for ' + req.url)
    res.end()
}
