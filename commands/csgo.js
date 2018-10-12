const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.reply(`haha :smile:`);
  message.react("🎮");

      var answers = [

        //STOLEN MEMES :>

      'http://i.imgur.com/tDVoAzA.gif',
      'https://media.giphy.com/media/IRdLHALm7PNi8/giphy.gif',
      'https://hugelolcdn.com/i/308129.gif',
      'http://stream1.gifsoup.com/view3/20150131/5168844/cs-go-silver-1-in-a-nutshell-o.gif',
      'https://media.tenor.com/images/7af8bd1cfa9d798b77c7ebf8ad492e91/tenor.gif'





      ];

      var answer = answers[Math.floor(Math.random() * answers.length)];

    message.channel.sendMessage(answer);
};

exports.help = {
  name: "csgo",
  description: "deneme.",
  usage: "duyuru <mesajın>"
}

exports.config = {
  enabled: true,
  guildOnly: true,
  permlevel: 0,
  aliases: ["csgo"]
}