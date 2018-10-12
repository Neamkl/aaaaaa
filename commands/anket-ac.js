const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.react("✅");
  message.react("❎");
   
 };


exports.help = {
  name: "anket-aç",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 2,
  aliases: ["anket-aç"]
}
