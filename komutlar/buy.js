const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
let alınacak = args.join(" ");
        if(!alınacak) return message.channel.send('Lütfen satın almak için bir ürün seçin!')
        let items = await db.fetch(`itemler_${message.author.id}`);
        let bakiye = await db.fetch(`cüzdan_${message.guild.id}_${message.author.id}`)
        
        
        if(alınacak === 'kılıç'){
            if(bakiye < 400) return message.channel.send('Bu ürünü alacak kadar paranız yok malesef, lütfen başka birürün seçin.');
            db.subtract(`cüzdan_${message.guild.id}_${message.author.id}`, 400);
            db.push(`itemler_${message.author.id}`, "Kılıç");
            message.channel.send('Başarıyla bir adet kılıç alındı.')
        }
  
          if(alınacak === 'harita'){
            if(bakiye < 50) return message.channel.send('Bu ürünü alacak kadar paranız yok malesef, lütfen başka birürün seçin.');
            db.subtract(`cüzdan_${message.guild.id}_${message.author.id}`, 50);
            db.push(`itemler_${message.author.id}`, "Harita");
            message.channel.send('Başarıyla bir adet harita alındı.')
        }
  
      if(alınacak === 'balta'){
            if(bakiye < 600) return message.channel.send('Bu ürünü alacak kadar paranız yok malesef, lütfen başka birürün seçin.');
            db.subtract(`cüzdan_${message.guild.id}_${message.author.id}`, 600);
            db.push(`itemler_${message.author.id}`, "Balta");
            message.channel.send('Başarıyla bir adet balta alındı.')
        }
  
      if(alınacak === 'silah'){
            if(bakiye < 3000) return message.channel.send('Bu ürünü alacak kadar paranız yok malesef, lütfen başka birürün seçin.');
            db.subtract(`cüzdan_${message.guild.id}_${message.author.id}`, 3000);
            db.push(`itemler_${message.author.id}`, "Silah");
            message.channel.send('Başarıyla bir adet silah alındı.')
        }
      if(alınacak === 'ok ve yay'){
            if(bakiye < 1500) return message.channel.send('Bu ürünü alacak kadar paranız yok malesef, lütfen başka birürün seçin.');
            db.subtract(`cüzdan_${message.guild.id}_${message.author.id}`, 1500);
            db.push(`itemler_${message.author.id}`, "Ok ve Yay");
            message.channel.send('Başarıyla bir adet ok ve yay alındı.')
        }



  
 

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['buy'],
  permLevel: 0
};

exports.help = {
  name: 'satınal',
  description: 'satın alma',
  usage: 'satınal'
};