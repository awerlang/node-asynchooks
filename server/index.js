const http = require('http')

const requests = require('./hooks')
const { timeout } = require('../lib/util')

requests.track()

new http.Server(async (req, res) => {
    requests.setRequest(req);
    const delay = +req.url.substr(1)
    await timeout(delay)
    respond(res)
}).listen(8080)

function respond(res) {
    const req = requests.current()
    res.write('Response for ' + req.url)
    res.end()
}
