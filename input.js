
const handleUserInput = function() {
    process.stdin.on('data', (key) => {
        console.log(key);
        if(key === "c")
        {
            process.stdout.write("terminating game");
            process.kill(process.pid, "SIGINT");
        }

    })
}

//setup interface to handle user input from stdin
const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();

    stdin.on("data", handleUserInput);

    return stdin;
}

module.exports = setupInput;