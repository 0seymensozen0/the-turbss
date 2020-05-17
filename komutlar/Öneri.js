const Discord = require('discord.js');


exports.run = function(client, message, args) {


var öneri = args.slice(0).join(' ');
var guildID = "651861910542614578";
var channelID = "663070776412471335";

if (!öneri) {
return message.reply("Bir mesaj belirtin **Doğru kullanım** !Öneri <Öneri>");
}else {
var embed = new Discord.RichEmbed()
    .setTimestamp()
    .addField("Eylem:", "Öneri,")
    .addField("Kullanıcı:",message.author.tag)
    .addField("ID", message.author.id)
    .addField("Öneri", öneri)
    .setColor(0x00ffec)
    client.guilds.get(guildID).channels.get(channelID).send(embed);
message.channel.send("Öneriniz Alınmıştır! Teşekkür Ederiz!");
};
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['Öner', ' Öner', 'Öneri', ' Öneri',"öner","Öneri"," öneri","öneri"], 
  permLevel: 0 
};

exports.help = {
  name: 'Öneri', 
  description: 'Botun sahibine önerilerinizi atar', 
  usage: 'Öneri <Öneri>' 
};

