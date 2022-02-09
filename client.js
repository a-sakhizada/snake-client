const net = require("net");

//establishes a connection with the game server
const connect = function() {
	const conn = net.createConnection({
		host: "localhost", //ip address
		port: 50541 //port number
	})

	//interpret incoming data as text
	conn.setEncoding("utf8");

	//after connecting, send name as a reply to server
	conn.on("connect", () => {
		console.log("connected to the server");
		conn.write("Name: AS");
	})

	//if idling, return a msg from the server to the client
	conn.on('data', (data) => {
		console.log(data);
	})
}

module.exports = connect;
