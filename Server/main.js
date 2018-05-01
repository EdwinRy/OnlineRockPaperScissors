var server = require('./Server.js');
server.postHandle = handlePost;
server.startServer(8080);

function handlePost(response, data)
{
    console.log(data);
    //server.sendFile("/main.html",response);
    response.writeHead(200,
        {'Content-Type':'text/plain;charset=UTF-8',
        'Content-Length':data.length}
    );
    response.write("<xml><tr><th style='width:80%'>host</th><th>Join</th></tr><xml>");
    response.end();
}