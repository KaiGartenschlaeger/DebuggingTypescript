import http from "http";

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`
    <html>
        <body>
            <h1>Hello World!</h1>
            You asket for: ${request.url}
        </body>
    </html>`);
}).listen(3000);
