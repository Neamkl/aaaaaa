const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.channel.send('Sigara iciyorum!').then( msg => {
    
            setTimeout(() => {
    
                msg.edit(':smoking:');
    
            }, 500);
    
            setTimeout(() => {
    
                msg.edit(':smoking: :cloud: ');
    
            }, 1000);
    
            setTimeout(() => {
    
                msg.edit(':smoking: :cloud::cloud: ');
    
            }, 1500);
    
            setTimeout(() => {
    
                msg.edit(':smoking: :cloud::cloud::cloud: ');
    
            }, 2000);
    
            setTimeout(() => {
    
                msg.edit(':smoking: :cloud::cloud:');
    
            }, 2500);
    
            setTimeout(() => {
    
                msg.edit(':smoking: :cloud:');
    
            }, 3000);
    
            setTimeout(() => {
    
                msg.edit(':smoking: ');
    
            }, 3500);
    
            setTimeout(() => {
    
                msg.edit(':smoking: :cloud: ');
    
            }, 3500);
    
            setTimeout(() => {
    
                msg.edit('sigara icmeyi bitirdim.');
    
            }, 4000);
    
        });
    
    };


exports.help = {
  name: "sigara",
  description: "Shows all the servers the bot is in.",
  usage: "sigara"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  permlevel: 0,
  aliases: ["sigara"]
}
