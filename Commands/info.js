const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setDescription("Bot info")
        .setColor("#6cd8d8")
        .setThumbnail(bicon)
        .addField("My invite is https://discordapp.com/oauth2/authorize?client_id=696369185772797962&scope=bot&permissions=8")
        .addField("Creator(s):", "Perry#2840")
        .addField("Bot name", bot.user.username);

    message.channel.send(botembed);
};
module.exports.help = {
    name: "info"
}