const warns = require("../data/warns.json");
const Discord = require("discord.js");
const fs = require("fs")
exports.run = function (bot, message, args) {
  let c = message.content
  let usr = message.mentions.users.array()[0]
  if (!usr) return message.channel.send("Birisini mentionla!");
  let rsn = c.split(" ").splice(1).join(" ").replace(usr, "").replace("<@!" + usr.id + ">", "")
  if(rsn.length < 1) return message.reply("Sebep yazmalısın.")
  if(!message.guild.member(usr).kick) return message.channel.send("``Bunu kullanmak için yetkin yok.```")
  let caseid = genToken(20)


  function genToken(length) {
      let key = ""
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

      for (let i = 0; i < length; i++) {
          key += possible.charAt(Math.floor(Math.random() * possible.length))
      }

      return key
  }


  warns[caseid] = {
    "warning" : {
      "caseid" : caseid
    },
      "admin": {
          "name": message.author.username,
          "discrim": message.author.discriminator,
          "id": message.author.id
      },
      "user": {
          "name": usr.username,
          "discrim": usr.discriminator,
          "id": usr.id
      },
      "server": {
          "name": message.guild.name,
          "id": message.guild.id,
          "channel": message.channel.name,
          "channel_id": message.channel.id
      },
      "reason": rsn
  }
  const embed = new Discord.RichEmbed()
  .setTitle("Uyarı")
  .setColor("#ffff00")
  .setDescription(`**${message.guild.name}** sunucusu tarafından uyarıldın!`)
  .addField("Yetkili:", message.author.tag)
  .addField("Uyarı sebebi:", rsn)
  message.guild.member(usr).send({embed: embed})
  message.channel.send(usr + "`" + rsn + "`sebebiyle uyarıldın!")
  fs.writeFile("./data/warns.json", JSON.stringify(warns))
}

exports.help = {
  name: "uyar",
  description: "Warns the mentioned user.",
  usage: "warn <user mention> <reason>"
}

exports.config = {
  enabled: true,
  guildOnly: true,
  permlevel: 1,
  aliases: []
}
