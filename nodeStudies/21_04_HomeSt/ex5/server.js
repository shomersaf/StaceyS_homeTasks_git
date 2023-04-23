const http = require ('http')
let server = http.createServer ((req,res) => {
// res.writeHead(200, {'Content-type':"text-plain, charset=utf-8"})
// res.end("Hello my friens!")
res.writeHead(200, {'Content-type':"text/html, charset=utf-8"})
res.end("Hello <b>my friens!</b>")
})
const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
    console.log(`Server works on: http://${HOST}:${PORT}`)
})