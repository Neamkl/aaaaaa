const math = require('mathjs');

exports.run = (client, message, args) => {
  let repo;
  let input = args.join(' ');
  try {
    repo = math.eval(input);
  } catch (err) {
    repo = err
  }
  message.channel.sendMessage("```js\n" + repo + "```")
};


exports.help = {
  name: "hesapla",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 0,
  aliases: ["hesapla"]
}