const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    if (message.author.id != 688440007153025075) return message.reply("You can't use this command! It's Owner only!");
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o => {});
    //sees if owner if is deleted message and does command
    let member = message.mentions.members.first();
    if (!member)
        return message.reply("Please tag a valid member");
    member.send(sayMessage);
};
module.exports.help = {
    name: "bmsg"
}