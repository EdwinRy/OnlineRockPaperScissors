module.exports = {
    addGame: addGame,
    joinGame: joinGame,
    endGame : endGame,
    optimize : optimize, 
}

games = [];
gamesData = "";

function joinGame(gamer, index)
{
    games[index].status = "busy";
    games[index].rival = gamer;
}

function addGame(hostName)
{
    for(var i; i < games.length; i++)
    {
        if(games[i].status == "free")
        {
            games[i] = game(hostName, "awaiting", i);
            return i;
        }
    }
    return games.length;
    games.push(game(hostName, "awaiting", games.length));
}

function game(hostName, status, index)
{
    this.host = hostName;
    this.rival = "";
    this.status = status;
    this.index = index;
    this.hostChoice = 3;
    this.rivalChoice = 3;
}