const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    // Limited to guild owner - adjust to your own preference!

    if (message.author.id != 688440007153025075) return message.reply("You can't use this command! It's Owner only!");


    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    await member.kick(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been bypass kicked by ${message.author.tag} because: ${reason}`);
}
module.exports.help = {
    name: "bkick"
}