const c = require('../config.json')
const Discord = require('discord.js')

exports.run = (client, message, args) => {
message.delete();
const embed = new Discord.RichEmbed();
var result = args.join(' ');
if (client.user.presence.game === undefined) {
client.user.presence.game = 'Bir status gosterilmiyor!';
}
embed.setAuthor('Status onaylandi!', 'https://images-ext-1.discordapp.net/external/G8xAvybO-2B80GxsmWm-LqeaRYp8SZU2ubfkW6Xfohc/https/images-ext-1.discordapp.net/external/kM10hRmnturbyk0Ud6zH6jhaAbUqooXR4RQipiZe5uw/https/images-ext-2.discordapp.net/external/87rdv6EfrkeXrS8LRQ5BD91sL2226HzG5VWdncuVsw0/https/i.imgur.com/RHagTDg.png')
embed.setDescription(`**Status degistirildi! __${result}__** :video_game:`)
embed.setColor('RANDOM')
message.channel.send({embed})
client.user.setGame(result)
};

exports.help = {
  name: "statusdegis",
  description: "Warns the mentioned user.",
  usage: "warn <user mention> <reason>"
}

exports.config = {
  enabled: true,
  guildOnly: true,
  permlevel: 999999999999999,
  aliases: ["statusdegis"]
}
