const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, react) => {
  if (message.channel.type !== 'group') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setAuthor(client.user.username,
                  client.user.avatarURL)
    .setTimestamp()
    .setColor(00777213)
    .setTitle('**:: Kullanıcı komutları ::**')
    .setDescription('[+avatarbul](https://discord.gg/dxrAJWW) istediğin kişinin avatarını bulur.\n[+botcagir](https://discord.gg/dxrAJWW) botu sunucuna ekleme linkini verir.\n[+google](https://discord.gg/dxrAJWW) googlede arama yapar.\n[+hesapla](https://discord.gg/dxrAJWW) matematik sorusu hesaplar.\n[+profil](https://discord.gg/dxrAJWW) kullanıcı bilgilerini verir.\n[+sunucubilgi](https://discord.gg/dxrAJWW) sunucu bilgilerini verir.\n[+ping](https://discord.gg/dxrAJWW) pingini gösterir.\n[+adminebildir <kişi> <sebep>](https://discord.gg/dxrAJWW) Bir kişiyi/olayı sunucu adminine bildirmenizi sağlar.\n[+yaz <mesaj>](https://discord.gg/dxrAJWW) bota istediğinizi yazdırır.\n[+youtube <şarkı adı>](https://discord.gg/dxrAJWW) şarkıyı bulur.')
    .addField('**:: Admin ve moderator komutları ::**',
                 '[+duyuru <yazi>](https://discord.gg/dxrAJWW) Daha iyi bir duyuru tasarımı sağlar.\n[+anket-aç](https://discord.gg/dxrAJWW) anket için tepki ekler.\n[+kilitle <sayı> <min(dakika) veya hours(saat)>](https://discord.gg/dxrAJWW) Kanalı süreli kilitler.\n[+uyar <kişi> <sebep>](https://discord.gg/dxrAJWW) Kişiyi moderatorlerin uyarmasını sağlar. (Uyarı atıcak kişilere sadece `mesajları yönet` izni vermeniz yeterlidir.)\n[+uyarılistesi <kisi>](https://discord.gg/dxrAJWW) kişinin uyarılarını gösterir.\n[+uyarıkaldır <uyarıID>](https://discord.gg/dxrAJWW) kişinin uyarısını kaldırır.\n[+ban <kişi> <sebep>](https://discord.gg/dxrAJWW) Güvenlik amacıyla kapatılmıştır.(kapalı-PekYakında+)\n[+banlist <@mention>](https://discord.gg/dxrAJWW) kişinin banlarını gösterir.\n[+sustur <kişi> <sebep>](https://discord.gg/dxrAJWW) Tasarım Yapım aşamasında (kapalı-Pekyakında+)')
    .addField('**:: Eğlence komutları ::**',
                 '[+konuş <bota mesajın>](https://discord.gg/dxrAJWW) botla sohbet edebilirsin.\n[+yazıyor](https://discord.gg/dxrAJWW)/[+yazıyordurdur](https://discord.gg/dxrAJWW) botu yazıyor olarak gösterir/durdurur.\n[+boksmakinesi](https://discord.gg/dxrAJWW) veya [+vur](https://discord.gg/dxrAJWW) boks makinesine vur.\n[+csgo](https://discord.gg/dxrAJWW) komik CS:GO gif/resim atar.\n[+herkesebendençay](https://discord.gg/dxrAJWW) Herkese çay dağıtır.\n[+win10](https://discord.gg/dxrAJWW) bilgisayarı açar.\n[+kavga-et <@mention>](https://discord.gg/dxrAJWW) Kavga etme komutu.\n[+yumruh-at](https://discord.gg/dxrAJWW) Yumruk atarsın.\n[+sigara](https://discord.gg/dxrAJWW) Sigara içmeni sağlar.\n[+kisias <isim>](https://discord.gg/dxrAJWW) Bir kişiyi asarsın.\n[+yazitura](https://discord.gg/dxrAJWW) Yazı tura atar.')
    .addField('**:: Premium Özellikleri (Sürekli yeni özelliklerle güncellenicektir!) ::**',
                 '[Sunuculara özel role giriş sistemi](https://discord.gg/dxrAJWW) Renk,klan vb. için rol alma sistemidir.\n[Sunuculara özel Yetkili başvuru sistemi](https://discord.gg/dxrAJWW) üyelerin ekibe alımını kolaylaştırır.\n[Sunuculara özel giriş-çıkış sistemi](https://discord.gg/dxrAJWW) dilediğiniz gibi yapılabilir.\n[Sunuculara özel Otomatik rol sistemi](https://discord.gg/dxrAJWW) Sunucuya girdiğinde otomatik rol verir.')
    .addField('**:: Standart otomatik özellikler ::**',
                 '[Anti-Küfür sistemi](https://discord.gg/dxrAJWW) sunucuda küfür edilmesini engeller.\n[Anti-Reklam sistemi](https://discord.gg/dxrAJWW) sunucuda reklam yapılmasını engeller.')
    .addField('**:: Alımlar ve tavsiye komutu ::**',
                     '[+tavsiye <mesajın>](https://discord.gg/dxrAJWW) bot sahibine tavsiyeni bildirir.:heavy_check_mark:\n[>>Onewox destek ekibine katılmak için tıkla!<<](https://discord.gg/dxrAJWW)')
    .setFooter(client.user.username,
                client.user.avatarURL)
    
    message.react("🖤");
    message.react("💙");
    message.channel.sendEmbed(ozelmesajkontrol) }
	const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username,
                  client.user.avatarURL)
    .setTimestamp()
    .setColor(0x00AE86)
    .setTitle('Kullandığınız için teşekkür ederiz.')
    .setDescription('Botumuz ile ilgili bir sıkıntı olduğunda [Bildirmek için tıkla!](https://discord.gg/dxrAJWW)')
    .addField('Yapımcı-Coder',
                 '<@285364390868287488> özel mesaj gönder!')
    .setFooter("Komutlar Cortexe Tarafından yapılmıstır.")
    return message.author.sendEmbed(embed)
};

exports.help = {
  name: "yardım",
  description: "Warns the mentioned user.",
  usage: "warn <user mention> <reason>"
}

exports.config = {
  enabled: true,
  guildOnly: true,
  permlevel: 0,
  aliases: ["yardım"]
}
