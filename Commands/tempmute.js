const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let mute = message.guild.member(message.mentions.users.first());
    if (!mute) return message.reply("Could not find user!");
    if (mute.hasPermission("ADMINISTRATOR")) return message.reply("Could not mute that user!");
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
    name: "tempmute"
}