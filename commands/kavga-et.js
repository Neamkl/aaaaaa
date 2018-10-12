const fights = require('../data/fights.json');
const Discord = require('discord.js');

exports.run = (client, message) => {
  let user = message.mentions.users.first();

  if (message.mentions.users.first() < 1) return message.channel.send('Kavga edecegin kisiyi yaz!');

      message.channel.send(`** ${message.author.username} ile ${user.username} kavga ediyor** ${fights[Math.floor(Math.random() * fights.length)]}`);

  };



exports.help = {
  name: "kavga-et",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 0,
  aliases: ["kavga-et"]
}
