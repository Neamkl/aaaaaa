const warns = require("../data/warns.json");
const Discord = require("discord.js");
const fs = require("fs")
exports.run = function (bot, message, args) {
  let user = message.mentions.users.array()[0];
  if (!user) return message.channel.send("Birisini mentionla!");
  let list = Object.keys(warns);
  let found = '';
  let foundCounter = 0;
  let warnCase;
  //looking for the case id
  for (let i = 0; i < list.length; i++) {
      if (warns[list[i]].user.id == user.id) {
          foundCounter++;
          found += `Uyarı ID: ${(warns[list[i]].warning.caseid)}\nİsmi: ${warns[list[i]].user.name}#${warns[list[i]].user.discrim}\nYetkili: ${warns[list[i]].admin.name}#${warns[list[i]].admin.discrim}\nServer: ${warns[list[i]].server.name}\nSebep: ${warns[list[i]].reason}\n\n`;
      }
  }
  if (foundCounter == 0) return message.channel.send("Bu arkadaş hiç uyarılmamış.")
  message.channel.send("**Uyarı Sayısı:** " + foundCounter + " tane\n```" + found + "```");
}

exports.help = {
  name: "warnings",
  description: "Shows the warnings for the mentioned user.",
  usage: "warnings <user mention>"
}

exports.config = {
  enabled: true,
  guildOnly: true,
  permlevel: 0,
  aliases: ["uyarılistesi"]
}
