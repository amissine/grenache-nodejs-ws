'use strict'

const Base = require('grenache-nodejs-base')
const Peer = require('./../lib/PeerRPC')

const link = new Base.Link({
  grape: 'ws://127.0.0.1:30001'
})
link.start()

const peer = new Peer(link, {})
peer.init()

const service = peer.transport('server')
service.listen(50001)

setInterval(function() {
  link.announce('test', service.port, {})
}, 1000)

service.on('request', (rid, key, payload, handler) => {
  //console.log('peer', rid, key, payload)
  handler.reply('world')
})
