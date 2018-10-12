const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`uyar` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  message.reply("Admine bildirildi tesekkurler!");
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'moderator-log');

  console.log("!adminebildir komutu " + message.author.username + " tarafÄ±ndan kullanÄ±ldÄ±.")

  if (!modlog) return message.reply('`moderator-log` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Kisi ve sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi bildiricegini yazmalısın.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(00777213)
  .setThumbnail(message.author.avatarURL)
  .addField('Sunucu ismi:',
      message.guild.name, true)
  .setTimestamp()
  .setAuthor(message.author.username,
      message.author.avatarURL)
  .addField('**Eylem:**',
      '\`\`\`Olay/kisi bildirme\`\`\`')
         .addField('**Bildirilen:**', 
         `\`\`\`${user.username}#${user.discriminator}\`\`\``, true)
              .addField('**Bildiren:**', `\`\`\`${message.author.username}#${message.author.discriminator}\`\`\``, true)
                    .addField('**Sebep:**', 
                                  reason, true);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.help = {
  name: "adminebildir",
  description: "deneme.",
  usage: "adminebildir <kisi> <acıklama>"
}

exports.config = {
  enabled: true,
  guildOnly: true,
  permlevel: 0,
  aliases: ["adminebildir"]
}

