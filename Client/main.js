function playComputer()
{
    window.location.href = "playComputer.html";
}

function refresh()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status==200)
        {
            console.log(this.response);
        }
    }
    xhttp.open("POST","/",true);
    xhttp.setRequestHeader("Content-Type","text/plain");
    xhttp.send("request=refresh");
}