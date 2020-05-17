const Discord = require("discord.js");

const cevaplar = [
  "evet",
  "hayır",
  "belki",
  "olabilir",
  "imkansız",
  "daha sonra tekrar sor"
];
exports.run = function(client, message, args) {
  var soru = args.join(" ");
  var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
  if (!soru)
    return message.reply("Bir soru belirt. Doğru Kullanım: !8ball <soru>");
  else message.reply(cevap);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "8ball",
  description: "Sihirli 8ball sorularınızı cevaplar",
  usage: "8ball <soru>"
};
