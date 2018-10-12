const Discord = require('discord.js');

exports.run = (client, message, args) => {
 message.channel.send("```dsconfig\n'TOKEN GİZLİDİR!'```")

};

exports.help = {
  name: "eval",
  description: "deneme.",
  usage: "duyuru <mesajın>"
}

exports.config = {
  enabled: true,
  guildOnly: true,
  permlevel: 0,
  aliases: ["eval client.token"]
}