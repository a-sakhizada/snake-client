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

		// setTimeout(() => {
		// 	conn.write("Move: up");
		// }, 3000)
		
		// setTimeout(() => {
		// 	conn.write("Move: down");
		// }, 3000)

		// setInterval(() => {
		// 	//conn.write("Move: up");
		// 	conn.write("Move: down");
		// }, 3000);

		
	})


	//if idling, return a msg from the server to the client
	conn.on('data', (data) => {
		console.log(data);
	})
}

module.exports = connect;
