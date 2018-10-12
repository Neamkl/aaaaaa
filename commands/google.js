const google = require('google');

exports.run = (client, message, args) => {
  google.resultsPerPage = 1;

  if (!args) {
    message.reply('Lutfen az kelime');
    return;
  }

  google(args.join(' '), function (err, res){
    if (err) console.error(err)
      var link = res.links[0];
      if (!link) {
        message.reply('Tekrar bir arama yap.');
        return;
      } else if (!link.href) {
        message.reply('Tekrar bir arama yap.');
        return;
      }
      message.channel.sendMessage(link.title + ' - ' + link.href);
  })
};


exports.help = {
  name: "google",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 0,
  aliases: ["google"]
}