 const Discord = require("discord.js");


 module.exports.run = async (bot, message, args) => {
     let replies = ["Heads", "Tails"]
     let result = Math.floor((Math.random() * replies.length));

     let question = args.slice().join(" ");

     let embedz = new Discord.RichEmbed()
         .setAuthor("A coin has been flipped!")
         .setColor("#D3D3D3")
         .addField("flip a coin", "Flipped by: " + message.author.tag + "\nAnswer: " + replies[result] + "")

     message.channel.send(embedz)
 };
 module.exports.help = {
     name: "flip"
 }