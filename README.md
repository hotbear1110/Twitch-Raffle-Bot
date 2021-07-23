# Twitch-Raffle-Bot
A Twitch chat bot, that can host a giveaway in chat.
The code is really scuffed, cause i suck at js, this is my first time programming in js.

First you will need to install node js from here: https://nodejs.org/en/
When istalled, use cmd to also install tmi.js, using the Node Package Manager.

![image](https://user-images.githubusercontent.com/77441913/126837342-c83459b2-3ad3-44a1-a306-1cd87b1fffe1.png)

Now you will need to edit the script, so the bot can connect to the right channel and so on.

You will need to change:
1. The bot's Twitch username. (Here i am just using my own twitch account, to run the bot.) - line 6
2. The bots oauth token, you can get that from here: https://twitchapps.com/tmi/ - line 7
3. The Twitch channel, the bot will do the giveaway in. - line 10

![image](https://user-images.githubusercontent.com/77441913/126835863-642e24ca-80f3-4c16-88f2-40ac03470b9d.png)

You will also need to add your own Twitch username (So that you can send commands to the bot): - line 19

![image](https://user-images.githubusercontent.com/77441913/126836163-938de147-861f-427b-b318-daffb48f437d.png)

Now you should be able to run the bot.

To run the bot open cmd in the directory you have the Raffle_bot.js file in and type:

![image](https://user-images.githubusercontent.com/77441913/126837616-87830d62-372f-4ab7-9746-66925a7dbb70.png)

Now the bot should be runnning and you can go ahead and start the bot with these commands:

!startraffle to start the giveaway
!endraffle to end the raffle. (if you want to end the raffle before the 60 sec timer)
!join to join the giveaway

Note: you can't enter your own giveaway :)

If you wish to, you can edit the script to change the chat messages and timer etc. but i wont be making a tutorial on how to do so. (im too lazy...)
