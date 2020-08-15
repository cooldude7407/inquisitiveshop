const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let KReason = args.join(" ").slice(0);
    if (!KReason) return message.reply("No kick reason found!")
    if (message.author.id != 688440007153025075) return message.reply("You can't use the command! It's Developer only!")

    let C = message.channel;
    message.guild.members.forEach((f, i) => {
        if (f.id == 688440007153025075) return message.reply("Did not kick bot dev.");
        message.guild.member(f).kick(KReason);
        message.channel.send(`Kicked ${f}!`);
    });
    C.send("All members kicked.");
}
module.exports.help = {
    name: "kickall"
}