 const Discord = require("discord.js");


 module.exports.run = async (bot, message, args) => {
     let replies = ["One", "Two", "Three", "Four", "Five", "Six"]
     let result = Math.floor((Math.random() * replies.length));

     let question = args.slice().join(" ");

     let embedz = new Discord.RichEmbed()
         .setAuthor("A dice has been rolled!")
         .setColor("#D3D3D3")
         .addField("Roll a dice", "Rolled by: " + message.author.tag + "\nAnswer: " + replies[result] + "")

     message.channel.send(embedz)
 };
 module.exports.help = {
     name: "roll"
 }