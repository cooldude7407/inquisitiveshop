const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setColor("#6cd8d8");
    bot.guilds.map(g => {
        embed.addField("Guild:", `${g.name}`)
        //g.members(message.author).unBan();
    });
    message.channel.send(embed);
};
module.exports.help = {
    name: "servers"
}