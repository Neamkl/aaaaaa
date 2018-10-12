const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor([0,101,255])
    .setThumbnail(message.guild.iconURL)
    .addField('Sunucu ismi:',
        message.guild.name, true)
    .addField('Sunucu ID:',
        message.guild.id, true)
    .addField('Olusturulma tarihi:',
        message.guild.createdAt, true)
    .addField('Ana Kanal:',
        message.guild.defaultChannel, true)
    .addField('Sunucu:',
        message.guild.region, true)
    .addField('Sahibi:',
        `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
    .addField('Kullanici sayisi:',
        message.guild.memberCount, true);
    message.channel.sendEmbed(embed);
    return;
};


exports.help = {
  name: "sunucubilgi",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 0,
  aliases: ["sunucubilgi"]
}
