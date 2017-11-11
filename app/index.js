const asyncHooks = require('async_hooks');

const { print } = require('../lib/util')

function init(id, type, triggerAsyncId, resource) {
    print({ id, type, triggerAsyncId, resource })
}

const hook = asyncHooks.createHook({ init })
hook.enable()
setTimeout(() => { }, 10)
