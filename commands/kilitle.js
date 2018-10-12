const ms = require('ms');

exports.run = (client, message, args) => {

  if (!client.lockit) client.lockit = [];

  const time = args.join(' ');

  const validUnlocks = ['release', 'unlock'];

  if (!time) return message.reply('bir süre yazmalısın örnek: 1 hours(saat),1 minutes(dakika) veya 1 seconds(saniye)');



  if (validUnlocks.includes(time)) {

    message.channel.overwritePermissions(message.guild.id, {

      SEND_MESSAGES: null

    }).then(() => {

      message.channel.send('Lockdown lifted.');

      clearTimeout(client.lockit[message.channel.id]);

      delete client.lockit[message.channel.id];

    }).catch(error => {

      console.log(error);

    });

  } else {

    message.channel.overwritePermissions(message.guild.id, {

      SEND_MESSAGES: false

    }).then(() => {

      message.reply(`**Kanal kilitlendi süre:** ${ms(ms(time), { long:true })}`).then(() => {



        client.lockit[message.channel.id] = setTimeout(() => {

          message.channel.overwritePermissions(message.guild.id, {

            SEND_MESSAGES: null

          }).then(message.reply('** | Kilit kaldırıldı. :tada: **')).catch(console.error);

          delete client.lockit[message.channel.id];

        }, ms(time));



      }).catch(error => {

        console.log(error);

      });

    });

  }

};

exports.help = {
  name: "kilitle",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 2,
  aliases: ["kilitle"]
}