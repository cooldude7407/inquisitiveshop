const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  // This command must be limited to mods and admins. In this example we just hardcode the role names.
  // Please read on Array.some() to understand this bit:
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
  // Limited to guild owner - adjust to your own preference!

  // Most of this command is identical to kick, except that here we'll only let admins do it.
  // In the real world mods could ban too, but this is just an example, right? ;)
  if (message.author.id != 688440007153025075)
    return message.reply("You can't use this command! It's Owner only!");
  const sayMessage = args.join(" ");
  message.delete().catch(O_o => {});

  let member = message.mentions.members.first();
  if (!member)
    return message.reply("Please mention a valid member of this server");
  if (!member.bannable)
    return message.reply(
      "I cannot ban this user! Do they have a higher role? Do I have ban permissions?"
    );
  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No reason provided";
  await member
    .ban(reason)
    .catch(error =>
      message.reply(
        `Sorry ${message.author} I couldn't ban because of : ${error}`
      )
    );
  message.reply(
    `${member.user.tag} has been bypass banned by ${message.author.tag} because: ${reason}`
  );
};
module.exports.help = {
  name: "bban"
};
