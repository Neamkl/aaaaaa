exports.run = (client, message, args) => {
  var person = args.join(' ');
  if (!person) {
    message.reply('Lutfen oldurmek icin mentionla');
    return;
  }
  var kys = [""
      ,"   ________"
      ,"   |/      |"
      ,`   |      (_)   <--- ${person}`
      ,"   |      \\|/"
      ,"   |      / \\"
      ,"   |"
      ,"  _|___"
  ].join("\n");
  message.channel.sendCode('ascii', kys);
  message.react("💙");
  message.reply('`Kisi olduruldu!`');
};

exports.help = {
  name: "kisias",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 0,
  aliases: ["kisias"]
}
