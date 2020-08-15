const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    if (message.author.id != 688440007153025075) return message.reply("You can't use this command! It's Developer only!");
    let mute = message.guild.member(message.mentions.users.first());
    if (!mute) return message.reply("Could not find user!");
    //  if(mute.hasPermission("MANAGE_MESSAGES")) return message.reply("Could not mute that user!");
    let muter = message.guild.roles.find(`name`, "Muted");
    if (!muter) {
        try {
            muter = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermission(muter, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack)
        };
    };
    let mutetime = args[1];
    if (!mutetime) return message.reply("Please specify a time!");
    await (mute.addRole(muter.id));
    message.reply(`Muted ${mute} succesfully!`)
    setTimeout(function() {
        mute.removeRole(muter.id);
        message.channel.send(`${mute} has been unmuted!`)

    }, ms(mutetime));
};
module.exports.help = {
    name: "btempmute"
}