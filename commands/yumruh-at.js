const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let test2 = message.author.username
  const afk = new Discord.WebhookClient('360162854512361482', 'r0TAL5oW4tGNdpKT8lhVQAIwg6W-ACWaHo7b-plQTrs__EhK-Cpxpa9iY0pcAuoyXLMQ');
  afk.send('**Log |** ``?deneme`` Komutu istendi...');
   message.delete();

    message.reply("**yumruh attı!**", {

        embed: {

            color: 0x008AF3,

            image: {

                url: 'http://exorcist-soft.ucoz.ru/images/BAN.gif',

            },

            timestamp: new Date(),

            footer: {

                text: ' Wuhuuu! 15 kişiyi yere serdin adamım !',

                icon_url: client.user.avatarURL

            }

        }

    });

};



exports.help = {
  name: "yumruh-at",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 0,
  aliases: ["yumruh-at"]
}
