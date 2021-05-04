const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  
var altınım = await db.fetch(`cüzdan_${message.guild.id}_${user.id}`);
if(altınım === null) altınım = 0;

message.channel.send(`${user}'in ${altınım} kadar altını var!`)

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balance'],
  permLevel: 0
};

exports.help = {
  name: 'cüzdan',
  description: 'cüzdanı gösterir',
  usage: 'cüzdan'
};


