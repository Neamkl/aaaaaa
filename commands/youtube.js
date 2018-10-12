const YouTube = require('youtube-node');
const yt = new YouTube();
const settings = require('../config.json');

exports.run = (client, message, args) => {
  yt.setKey(settings.youtubeapikey);
  let searchterms = args.join(' ');
  if(searchterms) {
    yt.search(searchterms,1,(e,result) => {
      if (e) {
        console.log(e);
      } else {
        let a = false;
        let b = false;

        if (result.items[0].id.kind === "youtube#video") {
          a = "https://www.youtube.com/watch?v="
          b = result.items[0].id.videoId
        }
        if (result.items[0].id.kind === "youtube#playlist") {
          a = "https://www.youtube.com/playlist?list="
          b = result.items[0].id.playlistId
        }
        if (result.items[0].id.kind === "youtube#channel") {
          a = "https://www.youtube.com/channel/"
          b = result.items[0].id.channelId
        }
        message.channel.sendMessage(a + b);
      }
    });
  } else {
    message.channel.sendMessage('Please specifiy some search terms!');
  };
};
exports.help = {
  name: "youtube",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 0,
  aliases: ["yt", "youtube"]
}

