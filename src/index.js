var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {

    if (req.url === '/welcome') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('Welcome to Dominos!')
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(
            {
                phone: '18602100000',
                email: 'guestcaredominos@jublfood.com'
            }
        ))
    } else {
        res.writeHead(404)
        res.end()
    }

}

httpServer.listen(8081)

module.exports = httpServer;

// https://docs.google.com/document/d/14sHpVNCGAJ6P6x-LIQPIvvas3Jl14oGhkmEL8tD1Rmw/edit