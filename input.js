
//stores the active TCP connection object
let connection;

const handleUserInput = function() {
    process.stdin.on('data', (key) => {
        console.log(key);

        switch(key){
            case "c":
                process.stdout.write("terminating game");
                process.kill(process.pid, "SIGINT");
            break;

            case "w":
                console.log("moving up....");
                connection.write("Move: up");
            break;

            case "a":
                console.log("moving left....");
                connection.write("Move: left");
            break;

            case "s":
                console.log("moving down....");
                connection.write("Move: down");
            break;

            case "d":
                console.log("moving right....");
                connection.write("Move: right");
            break;

            //send fun messages !
            case "r":
                connection.write("Say: YO!");
            break;

            case "t":
                connection.write("Say: wow");
            break;

            default: 
                console.log("not one of the W-A-S-D keys. Try again!");
            break;
        }       
    })
}

//setup interface to handle user input from stdin
const setupInput = function(conn) {
    connection = conn;
    //console.log(connection);
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();

    stdin.on("data", handleUserInput);

    return stdin;
}

module.exports = {setupInput};