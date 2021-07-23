const tmi = require('tmi.js');


const opts = {
  identity: {
    username: "the bot's twitch username",
    password: "oauth token"
  },
  channels: [
    "channel the bot runs in"
  ]
};


const client = new tmi.client(opts);
let names = [];
let people = 0;
let rafflestart = 0;
hostname = "your twitch username";



client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);


client.connect();


function onMessageHandler (target, context, msg, self) {
  if (self) { return; } 

 
  const commandName = msg.trim();
  console.log(commandName);
  
	const sleep = (milliseconds) => {
	const start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
            break;
}
	}
        }
  
	if (rafflestart === 0 && context.username === hostname && commandName === "!startraffle") {
		
		function timer() {
  var minute = 5;
  var sec = 60;
  setInterval(function() {
	  console.log(sec);
	  if (sec === 40 || sec === 20) {
		client.say(target, `DinkDonk TYPE !join TO JOIN THE RAFFLE DinkDonk RAFFLE ENDS IN ` + sec + ` SECONDS!`)
	  }
	  if (sec >= 1 && sec <= 9) {
		  client.say(target, `DinkDonk ` + sec)
	  }
	  if (sec === 1) {
		let number = Math.floor(Math.random() * names.length);
		let winner = names[number];
		console.log(number, winner);
		sleep(2000);
		client.say(target, ` peepoPog --[[ DinkDonk ` + winner + ` DinkDonk ]]-- HAS WON THE RAFFLE! peepoPog`);
		rafflestart = 0;
		sec = 1000
		
	  }
    sec--;
    if (sec == 00) {
      minute --;
      sec = 60;
      if (minute == 0) {
        minute = 5;
      }
    }
  }, 1000);
}

x = timer();
		
		rafflestart = 1;
		client.say(target, `DinkDonk --[[ A NEW RAFFLE FOR A FREE STEAM GAME KEY HAS BEGUN ]]-- DinkDonk`);
		client.say(target, `DinkDonk TYPE !join TO JOIN THE RAFFLE DinkDonk`)
		
	}

  
  if (rafflestart === 1 && commandName.startsWith('!join') && context.username != hostname) {
	if (names.includes(context.username)) {
		console.log(context.username, `is already in the raffle`);
	}
   else if (rafflestart === 1 && names.includes(context.username) === false){
    client.say(target, context.username + ` has joined the raffle! peepoPog`);
    console.log(`* Executed ${commandName} command`, + people);
	names[people] = context.username;
	console.log(names)
	people = people + 1;
  }

}
	else if (rafflestart === 1 && context.username === hostname && commandName === '!endraffle') {
		let number = Math.floor(Math.random() * names.length);
		let winner = names[number];
		console.log(number, winner);
		client.say(target, ` peepoPog --[[ DinkDonk ` + winner + ` DinkDonk ]]-- HAS WON THE RAFFLE! peepoPog`);
		rafflestart = 0;
		
	}

}



function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}