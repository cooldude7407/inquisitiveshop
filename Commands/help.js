const Discord = require("discord.js");


 module.exports.run = async (bot, message, args) => {
     let embed = new Discord.RichEmbed()
         .setDescription(`Virtual Bot Commands`)
         .setColor(0x00AE86)
         .setFooter('Virtual Bot')
         .setAuthor('Website for Virtual Bot')
         .addField(`Heres the website for commands: https://matternps.wixsite.com/mysite/commands`)
     message.author.send({
         embed
     });



     message.channel.send(`The website is on it's way! Check your dm's 📫.`);
 };
 module.exports.help = {
     name: "help"
 }