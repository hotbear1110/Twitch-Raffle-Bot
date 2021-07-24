const { ChatClient } = require("dank-twitch-irc");

let client = new ChatClient({
	username: "your-twitch-username", // justinfan12345 by default - For anonymous chat connection
	password: "oauth:xxx", // undefined by default (no password)
});

// twitch user id of the person starting the raffle,
//you can get it by for example using scriptorex command in chat: -uid <username>
hostUid = "135186096"; // hotbear's uid

client.on("ready", () => console.log("Successfully connected to chat"));
client.on("close", (error) => {
  if (error != null) {
    console.error("Client closed due to error", error);
  }
});

client.connect();
client.joinAll(["nymn"]); // channels to join

let names = new Set();
let rafflestart = false;

client.on("PRIVMSG", (msg) => {
	onMessageHandler(`#${msg.channelName}`, msg, msg.messageText);
})

function onMessageHandler (channel, user, message) {
 	const commandName = message.split(" ")[0];

  const timestamp = new Date().toISOString().split("T")[1].replace("Z", "");
  console.log(`#${timestamp}# ${user.senderUsername}: ${message}`);

	const sleep = (milliseconds) => {
		const start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds) {
        break;
		}			}

  }

	if (!rafflestart && user.senderUserID === hostUid && commandName === "!startraffle") {
		function timer() {
			rafflestart = true;
		  let sec = 60;

		  setInterval(function() {
			  console.log(sec);
			  if (sec === 40 || sec === 20) {
					client.say(channel, `DinkDonk TYPE !join TO JOIN THE RAFFLE DinkDonk RAFFLE ENDS IN ${sec} SECONDS!`);
			  }
			  if (sec >= 1 && sec <= 9) {
				  client.say(channel, `DinkDonk ${sec}`);
			  }
			  if (sec === 1) {
					const number = Math.floor(Math.random() * (names.size - 1));

					const winner = [...names.values()][number];

					console.log(number, winner);
					
					sleep(2000);

					client.say(channel, ` peepoPog --[[ DinkDonk ${winner} DinkDonk ]]-- HAS WON THE RAFFLE! peepoPog`);
					
					rafflestart = false;
					sec = 1000	
			  }
		    sec--;
		  }, 1000);
		}
		timer();	

		client.say(channel, "DinkDonk --[[ A NEW RAFFLE FOR A FREE STEAM GAME KEY HAS BEGUN ]]-- DinkDonk");
		client.say(channel, "DinkDonk TYPE !join TO JOIN THE RAFFLE DinkDonk")		
	}

  if (rafflestart && commandName === '!join' && user.senderUserID != hostUid) {
		if (names.has(user.senderUsername)) {
			console.log(user.senderUsername, `is already in the raffle`);
		}
	  else if (rafflestart) {
	    client.say(channel, `${user.senderUsername} has joined the raffle! peepoPog`);
			console.log(names.add(user.senderUsername))
  	}
	}
	else if (rafflestart && user.senderUserID === hostUid && commandName === '!endraffle') {
		const number = Math.floor(Math.random() * (names.size - 1));

		const winner = [...names.values()][number];

		console.log(number, winner);

		client.say(channel, ` peepoPog --[[ DinkDonk ${winner} DinkDonk ]]-- HAS WON THE RAFFLE! peepoPog`);
		rafflestart = false;
	}
}