const util = require('util');

async function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function print(obj) {
    process._rawDebug(util.inspect(obj, true, 3, true))
}

module.exports = {
    timeout,
    print,
}
