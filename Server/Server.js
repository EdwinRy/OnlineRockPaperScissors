module.exports = {
    startServer : start,
    postHandle: function(response, data){response.end("request not handled")},
    sendFile: sendFile
}

var http = require('http');
var fs = require('fs');

function start(port)
{
    console.log("The server has started");
    http.createServer(connectClient).listen(port);
}

function connectClient(request, response)
{
    request.on('error', (err) => console.error(err.stack));
    //console.log(request.method);
    if(request.method === 'POST')
    {
        var body = "";
        request.on('data', (chunk) => {
            body += chunk;
            if(body.length > 1e7)
            {
                response.writeHead(413,"Entity too large", 
                    {'Content-Type': 'text/html'}
                );
                response.end("413");
            };
        });
        request.on('end', 
            () => {
                module.exports.postHandle(response, body);
            }
        )
    }

    else
    {
        //console.log(request.url);
        if(request.url === '/')
        {
            sendFile('/main.html', response);
        }
        else
        {
            sendFile(request.url, response);
        }
    }
}

function sendFile(url, response)
{
    fs.readFile('Client'+url, 
        function(error, data)
        {
            if(error)
            {
                response.writeHead(404,
                    {'Content-Type':'text/html','Content-Length':3}
                );
                response.write("404");
            }
            else
            {
                if(url.endsWith('.css'))
                {
                    response.writeHead(200,
                        {'Content-Type':'text/css;charset=UTF-8',
                        'Content-Length':data.length}
                    );
                }
                else if(url.endsWith('.html'))
                {
                    response.writeHead(200,
                        {'Content-Type':'text/html;charset=UTF-8',
                        'Content-Length':data.length}
                    );
                }
                else
                {
                    response.writeHead(200,
                        {'Content-Type':'text/plain;charset=UTF-8',
                        'Content-Length':data.length}
                    );
                }
                
                response.write(data);
            }
            response.end();
        }
    );
}
