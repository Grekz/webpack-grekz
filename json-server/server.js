// server.js
const jsonServer = require('json-server')
const opn = require('opn')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'mockedDB.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(9000, () => {
  // eslint-disable-next-line no-console
  console.info('\x1b[32m', 'JSON Server is running in http://localhost:9000/')
  opn('http://localhost:9000/')
})
