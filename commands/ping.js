const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription('Pingin gelen kutuna Gonderildi.');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription('Ping: **' + client.ping + '**');
    return message.author.sendEmbed(pingozel)
};

exports.help = {
  name: "ping",
  description: "Shows the bans for the mentioned user.",
  usage: "bans <user mention>"
}

exports.config = {
  enabled: true,
  guildOnly: true,
  permlevel: 0,
  aliases: []
}
