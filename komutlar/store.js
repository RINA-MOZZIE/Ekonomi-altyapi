const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");
exports.run = (client, message, args) => {
var altınım = db.get(`cüzdan_${message.guild.id}_${message.author.id}`)


const embed = new Discord.MessageEmbed()
.setTitle(`**MARKET**`)
.setAuthor(`Cüzdan: ${altınım} altın`)
.addField(`**1-Kılıç:**`,`400 altın`)
.addField(`**2-Harita:**`,`50 altın`)
.addField(`**3-Balta:**`,`600 altın`)
.addField(`**4-Silah:**`,`3000 altın`)
.addField(`**5-Ok ve yay:**`,`1500 altın`)
.setFooter(`Bir şeyler almak için ${ayarlar.prefix}satınal <isim>`)
message.channel.send(embed) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dükkan'],
  permLevel: 0
};

exports.help = {
  name: 'market',
  description: 'Markete atar',
  usage: 'market'
};