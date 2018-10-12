const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (!args[0]) return;

    if (args[0] === "bug") return message.reply("lutfen tavsiyeni yaz. Ornek:\n`Başvuru sistemi eklensin.`");

    args = args.join(" ");

    message.reply("Tavsiye gonderildi tesekkurler!");

    const content = `\n**${message.author.username}#${message.author.discriminator}** (${message.author.id}) Tavsiye etti!\n~~--------------------------------~~\n**Tavsiyesi:** ${args}\n~~--------------------------------~~\n**Mesajın gonderildigi server:** ${message.guild.name}\n**Server ID:** ${message.guild.id}`;

    client.channels.get('360815338579034132').send(`${content}`);

};



exports.help = {
  name: "tavsiye",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 0,
  aliases: ["tavsiye"]
}
