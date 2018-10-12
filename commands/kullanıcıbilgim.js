const Discord = require('discord.js');
const ayarlar = require('../config.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(Durm)
      .setTimestamp()
      .addField('Ad:', message.author.username + '#' + message.author.discriminator)
      .addField('ID:', message.author.id, true)
      .addField('Kayıt tarihi:', message.author.createdAt, true)
      .addField('Durum:', durm)
      .addField('Şu an oynadığı oyun:', message.author.presence.game ? message.author.presence.game.name : 'Şu an oyun oynamıyor')
      .addField('BOT mu?', message.author.bot ? '\n Evet' : 'Hayır')
      console.log("!kullanıcıbilgim komutu " + message.author.username + " tarafından kullanıldı.")
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};


exports.help = {
  name: "profil",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 0,
  aliases: ["profil"]
}