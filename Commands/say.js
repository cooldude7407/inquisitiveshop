const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    if (message.author.id != 688440007153025075) return message.reply("You can't use the command! It's Developer only!");
    let aaa = args.join(" ");
    message.channel.send(aaa);
    await message.delete();
};
module.exports.help = {
    name: "say"
}