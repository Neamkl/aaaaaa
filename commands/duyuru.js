const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice().join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir yazı yazmalısın.');
    const embed = new Discord.RichEmbed() 
    .setColor(00777213)
    .setDescription(`${mesaj}`)
    return message.channel.sendEmbed(embed);
};

exports.help = {
  name: "duyuru",
  description: "deneme.",
  usage: "duyuru <mesajın>"
}

exports.config = {
  enabled: true,
  guildOnly: true,
  permlevel: 0,
  aliases: ["duyuru"]
}