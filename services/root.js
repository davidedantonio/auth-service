'use strict'

module.exports = (fastify, opts, next) => {
  fastify.get('/', function (request, reply) {
    reply.send({ root: true })
  })

  next()
}