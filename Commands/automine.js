const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id != 688440007153025075)
    return message.reply("You can't use this command! It's Owner only!");
  message.channel.send("!work");
  var interval = setInterval(function() {
    message.channel.send("!work");
  }, 61 * 1000); //put 61
};
module.exports.help = {
  name: "automine"
};
