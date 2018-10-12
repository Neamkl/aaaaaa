const Discord = require("discord.js");
const sql = require("sqlite");
const bot = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");

const http = require('http');
const express = require('express');
const app = express();
const ms = require('ms');

app.get("/", (request, response) => {
  console.log(Date.now() + " Uyandirildi.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(http://${process.env.PROJECT_DOMAIN}.glitch.me/);
}, 280000);

var no_perms = "```Üzgünüm, Bu komutu kullanmak için iznin yok!```"

bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()


  

bot.elevation = message => {
  var permlevel = 0;
  if(!message.guild) return;
  if(message.member.hasPermission("MANAGE_MESSAGES")) permlevel = 1;
  if(message.member.roles.has(config.modrole.id)) permlevel = 2;
  if(message.member.roles.has(config.adminrole.id)) permlevel = 4;
  if(message.member.hasPermission("ADMINISTRATOR")) permlevel = 6;
  if(message.author.id === message.guild.owner.id) permlevel = 8;
  if(message.author.id === "285364390868287488") permlevel = 999999999999999999
  return permlevel;
};


bot.on("ready", () => {
  fs.readdir("./commands", (err, files) => {
    if(err) console.error(err);
    console.log(`Loading a total of ${files.length} commands!`);
    files.forEach(filename => {
      let props = require(`./commands/${filename}`);
      bot.commands.set(props.help.name, props);
      props.config.aliases.forEach(alias => {
        bot.aliases.set(alias, props.help.name);
      });
    });
  });
  bot.channels.get('366011310057717760').send(`**Onewox Bütün Sunucularda aktif edildi!**`)
  console.log("Online and ready!")
  console.log(`Serving a total of ${bot.guilds.size} servers and ${bot.users.size} users.`)
})


bot.on("message", message => {
  if(message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.toLowerCase().split(' ')[0].slice(config.prefix.length);
  let perms = bot.elevation(message);
  let args = message.content.split(' ').slice(1);
  let cmd;

  if (bot.commands.has(command)) {
  cmd = bot.commands.get(command);
  } else if (bot.aliases.has(command)) {
  cmd = bot.commands.get(bot.aliases.get(command));
  }
  if(!cmd) return;
    if (cmd) {
      if (perms < cmd.config.permlevel) {
        message.author.send(no_perms)
      } else {
        if(cmd.config.guildOnly == true && message.channel.type == "dm") {
          message.channel.send("```Bu komutu buradan kullanamazsın.```")
        } else {
        cmd.run(bot, message, args, perms);
      }
      }
    }
})

bot.on ("guildMemberAdd", member => {
    member.sendMessage('Hoşgeldin! Bu sunucuda **Onewox** sistemi kullanılmaktadır! Iyi eglenceler.');
    member.guild.channels.find("name", "giris_koridoru").sendMessage(member.toString() + " Sunucuya Giris yaptı! :tada:");
})

bot.on('guildCreate', guild => {
	console.log("bir sunucuya katıldım!");
        bot.channels.get('500329967461335050').send(`**Onewox Bir sunucuya daha katıldı!**`);
})

bot.on("message", message => {
if (message.content.toLowerCase().match(/(www.youtube.com|youtu.be|client.token|.gg|discordapp|.com|oç|amk|yavşak|fuck|oro|lol|sik|yarak|Daşak|Taşak|Daşş|Taşş|Porn|Anan|Bo|Po|Vel|Koya|Sok)/g) && !message.author.bot && message.channel.type === "text" && message.channel.permissionsFor(message.guild.member(bot.user)).has("MANAGE_MESSAGES")) {
    message.delete(30).then(message.reply("`Mesaj Anti-Reklam/Küfür tarafından silindi!`"));
    message.react("🎉");

}
})

bot.login(process.env.token)
