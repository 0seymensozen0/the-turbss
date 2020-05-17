const Discord = require("discord.js");

exports.run = function(client, message) {
  message.channel.send("Bot yeniden başlatıldı").then(msg => {
    console.log("[BOT]Yeniden başlatıldı");
    process.exit(0);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["Reboot", "reboot"],
  permLevel: 4
};

exports.help = {
  name: "Reboot",
  description: "Botu yeniden başlatır(Sadece Yapımcı)",
  usage: "Reboot"
};
