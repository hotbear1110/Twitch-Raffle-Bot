# Twitch-Raffle-Bot
A Twitch chat bot, that can host a giveaway in chat.
The code is really scuffed, cause i suck at js, this is my first time programming in js.

First you will need to install Node.js from here: https://nodejs.org/en/

```sh
$ git clone https://github.com/KUNszg/Twitch-Raffle-Bot
$ cd ./Twitch-Raffle-Bot
$ npm init # just press enter through everything
$ npm i dank-twitch-irc
```

Now you will need to edit the script, so the bot can connect to the right channel and so on.

You will need to change:
1. The bot's Twitch username. (Here i am just using my own twitch account, to run the bot.) - line 4
2. The bots oauth token, you can get that from here: https://twitchapps.com/tmi/ - line 5
3. The Twitch channel, the bot will do the giveaway in. - line 20
4. The hostUid, simply your Twitch user ID. You can get it by using scriptorex -uid command. 

```javascript
let client = new ChatClient({
	username: "your-twitch-username", // justinfan12345 by default - For anonymous chat connection
	password: "oauth:xxx", // undefined by default (no password)
});

hostUid = "135186096"; // hotbear1110's uid, change it to your own

client.joinAll(["nymn"]); // channels to join
```

Now you should be able to run the bot.

To run the bot open cmd in the directory you have the Raffle_bot.js file in and type:

```sh
~/Twitch-Raffle-Bot>$ node Raffle_bot.js 
```

Now the bot should be runnning and you can go ahead and start the bot with these commands:

!startraffle to start the giveaway

!endraffle to end the raffle. (if you want to end the raffle before the 60 sec timer)

!join to join the giveaway

Note: you can't enter your own giveaway :)

If you wish to, you can edit the script to change the chat messages and timer etc. but i wont be making a tutorial on how to do so. (im too lazy...)
