const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const ms = require("parse-ms");
const request = require("request");

var prefix = ayarlar.prefix;

require("./util/eventLoader")(client);

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }});};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

//
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "Katıl") {
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.channel.send("Ses kanalına başarıyla katıldım");
})
.catch(console.log);
} else {
message.reply("Lütfen önce bir ses kanalına katıl");
}}});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + " Katıl") {
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.channel.send("Ses kanalına başarıyla katıldım");
})
.catch(console.log);
} else {
message.reply("Lütfen önce bir ses kanalına katıl");
}}});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "katıl") {
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.channel.send("Ses kanalına başarıyla katıldım");
})
.catch(console.log);
} else {
message.reply("Lütfen önce bir ses kanalına katıl");
}}});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + " katıl") {                  
if (message.member.voiceChannel) {                 
message.member.voiceChannel                     
.join()
.then(connection => {                     
message.channel.send("Ses kanalına başarıyla katıldım");                      
})                   
.catch(console.log);                     
} else {                
message.reply("Lütfen önce bir ses kanalına katıl");
}}});
///--Ayrıl--///
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "Ayrıl") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.leave();
      message.channel.send("Ses kanalından başarıyla ayrıldım");
    } else {
      message.channel.send("Lütfen önce bir ses kanalına katıl");
    }
  }
});
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + " Ayrıl") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.leave();
      message.channel.send("Ses kanalından başarıyla ayrıldım");
    } else {
      message.channel.send("Lütfen önce bir ses kanalına katıl");
    }
  }
});
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "ayrıl") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.leave();
      message.channel.send("Ses kanalından başarıyla ayrıldım");
    } else {
      message.channel.send("Lütfen önce bir ses kanalına katıl");
    }
  }
});
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + " ayrıl") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.leave();
      message.channel.send("Ses kanalından başarıyla ayrıldım");
    } else {
      message.channel.send("Lütfen önce bir ses kanalına katıl");
}
}
});
//Geçici-Kanal//
client.on("voiceStateUpdate", async (oldChannel, newChannel) => {
const categoryID = "711361539302752277";
if (!oldChannel.guild.channels.get(categoryID))
return console.log("kategori bulunamadı");
const channelID = "711361600908558446";
if (!oldChannel.guild.channels.get(channelID))
return console.log("kanal bulunamadı.");
if (oldChannel.user.bot) return;
if (newChannel.user.bot) return;
if (newChannel.voiceChannelID === channelID) {
newChannel.guild
.createChannel("Geçici-" + newChannel.user.username, "voice")
.then(newVoiceChannel => {
newVoiceChannel.overwritePermissions(newChannel.user, {
CONNECT: true,
SPEAK: true,
MOVE_MEMBERS: true,
VIEW_CHANNEL: true,
USE_VAD: true,
PRIORITY_SPEAKER: true
});
newVoiceChannel.setParent(newChannel.guild.channels.get(categoryID));
newChannel.setVoiceChannel(
newChannel.guild.channels.get(newVoiceChannel.id)
);});}
if (oldChannel.voiceChannelID) {
oldChannel.guild.channels.forEach(allChannels => {
if (allChannels.parentID === categoryID) {
if (allChannels.id === channelID) return;
if (oldChannel.voiceChannelID === allChannels.id) {
if (oldChannel.voiceChannel.members.size == 0) allChannels.delete();
}}});}});
//Gelen-Giden//
client.on('guildMemberAdd', member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'gelen-giden');
if (!channel) return;
channel.send(`Aramıza Hoşgeldin, ${member}` + member.displayAvatarURL());
});






























client.login(ayarlar.token);