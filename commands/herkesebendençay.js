const Discord = require('discord.js');

exports.run = (client, message, args) => {
   message.delete();

    message.reply(`**Herkese benden çay!**`, {

        embed: {

            color: 0x008AF3,

            image: {

                url: 'http://i.hizliresim.com/PMQ7od.gif',

            },

            timestamp: new Date(),

            footer: {

                text: ' Kardeş hesap 5 lira!',

                icon_url: client.user.avatarURL

            }

        }

    });

};



exports.help = {
  name: "herkesebendençay",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 0,
  aliases: ["herkesebendençay"]
}
