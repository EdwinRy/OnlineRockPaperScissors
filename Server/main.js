var server = require('./Server.js');
server.postHandle = handlePost;
server.startServer(8080);

function handlePost(response, data)
{
    console.log(data);
    server.sendFile("/main.html",response);
}