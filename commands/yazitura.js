exports.run = (client, message, args) => {
    x = (Math.floor(Math.random() * 2) === 0);
    if(x){
        message.channel.sendMessage(' :moneybag: | Yazi-tura Sonucu:**YAZI!**');
    }else{
        message.channel.sendMessage(' :moneybag: | Yazi-tura Sonucu:**TURA!**');
    }
};


exports.help = {
  name: "yazitura",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 0,
  aliases: ["yazitura"]
}