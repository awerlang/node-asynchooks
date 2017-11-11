const asyncHooks = require('async_hooks')

const initState = new Map()
const prevState = new Map()

let currentRequest

function skip(type) {
    return (['TIMERWRAP'].indexOf(type) >= 0)
}

function init(id, type, triggerAsyncId, resource) {
    if (skip(type)) return
    initState.set(id, currentRequest)
}

function before(id) {
    prevState.set(id, currentRequest)
    currentRequest = initState.get(id)
}

function after(id) {
    currentRequest = prevState.get(id)
}

function destroy(id) {
    prevState.delete(id)
    initState.delete(id)
}

function track() {
    const hook = asyncHooks.createHook({ init, before, after, destroy })
    hook.enable()
}

function setRequest(req) {
    currentRequest = req
}

function current() {
    return currentRequest
}

module.exports = {
    track,
    setRequest,
    current,
}
