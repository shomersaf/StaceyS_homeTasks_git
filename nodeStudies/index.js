const http = require('http');
const port = 8080;
const server = http.createServer((req, res)=>{
    res.end ('Hello, omg')
});
server.listen(port,()=>{
    console.log('server listening on: http://localhost:%s', port)
})