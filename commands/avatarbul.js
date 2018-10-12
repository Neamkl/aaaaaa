const Discord = require('discord.js');

exports.run = (client, message, args) => {
let mention = message.mentions.users.first();
let sender = "";

if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}

if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.RichEmbed()
  .setAuthor(mention.username, mention.avatarURL)
  .setColor([0,101,255])
  .setImage(mention.avatarURL)
  .addField('Onewox | Avatarbul Sistemi', `[Avatarin buyuk halini goster!](${mention.avatarURL})`, false);
  message.react("💙");
  message.channel.sendEmbed(avatarEmbedOther);
  return;
} else {
  const avatarEmbedYou = new Discord.RichEmbed()
  .setAuthor(sender, message.author.avatarURL)
  .setColor([0,101,255])
  .setImage(message.author.avatarURL)
  .addField('Onewox | Avatarbul Sistemi', `[Avatarin buyuk halini goster!](${message.author.avatarURL})`, false);
  message.channel.sendEmbed(avatarEmbedYou);
  return;
}
message.channel.sendMessage("An error occured!");
};


exports.help = {
  name: "avatarbul",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 0,
  aliases: ["avatarbul"]
}
