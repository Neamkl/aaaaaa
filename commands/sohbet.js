const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if ( message.react('💕')) {
      var answers = [

      'evet!', 'haha hayır lanet zenci :smile:', 'Aşık oldum gir koluma eve gidecuk!', 'Beni sevmiyor musun?',

      'yoo. :smile:', 'Sessiz olurmsn..', 'Yerun.', 'Gel tatile çıkalım bebeğim.',

      'Fenalıksın!', 'Senin sorunun ne şimdide banamı yavşıyorsun?', 'Seni seviyorum bebeğim.', 'Ahaha!', 'Pff, sıkıldım gidermisin.',

      'Sorry, bebeğim.', 'Haha. burayı terket!', 'Sana yumruk çakarım! :smile:', 'ehhhhhh işte.',

      'Tren çarpsun sana emi.', 'Ah kesinlikle evet!', 'Seni sevmiyorum konuşma benimle.',

      'İlginç bir şey söyledin ilgimi çektin cigerim.', 'hayır,hayır,kesinlikle hayır.', 'Seninki küçük galiba.', 'Evet!'];

      var answer = answers[Math.floor(Math.random() * answers.length)];

    } else {

      message.channel.sendMessage('sorun?')

    }

  message.channel.sendMessage(answer);

};

exports.help = {
  name: "konuş",
  description: "deneme.",
  usage: "duyuru <mesajın>"
}

exports.config = {
  enabled: true,
  guildOnly: true,
  permlevel: 0,
  aliases: ["konuş"]
}