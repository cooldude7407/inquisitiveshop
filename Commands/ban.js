const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  // Let's first check if we have a member and if we can ban them!
  // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
  // We can also support getting the member by ID, which would be args[0]
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply(
      "Sorry, but you dont have the permissions to use this"
    );
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
    `${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`
  );
};
module.exports.help = {
  name: "ban"
};
