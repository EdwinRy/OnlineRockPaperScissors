function guess(choice)
{
    var computerChoice = Math.floor(Math.random()*3);

    switch(choice)
    {
        case 0:
            //Draw
            if(computerChoice == 0)
            {
                alert("Draw!");
            }
            //Lose
            else if(computerChoice == 1)
            {
                alert("You lose!");
            }
            //Win
            else
            {
                alert("You win!");
            }
        break;

        case 1:
            //Win
            if(computerChoice == 0)
            {
                alert("You win!");
            }
            //Draw
            else if(computerChoice == 1)
            {
                alert("Draw!");
            }
            //Lose
            else
            {
                alert("You lose!");
            }
        break;

        case 2:
            //Lose
            if(computerChoice == 0)
            {
                alert("You lose!");
            }
            //Win
            else if(computerChoice == 1)
            {
                alert("You win!");
            }
            //Draw
            else
            {
                alert("Draw!");
            }
        break;
    }
    window.location.href = "/";
}