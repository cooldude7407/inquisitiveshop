 const Discord = require("discord.js");

 function clean(text) {
     if (typeof(text) === "string")
         return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
     else
         return text;
 };

 module.exports.run = async (bot, message, args) => {
     if (message.author.id != 688440007153025075) return message.reply("You can't use this command! It's Developer only!");
     try {
         const code = args.join(" ");
         let evaled = eval(code);

         if (typeof evaled !== "string")
             evaled = require("util").inspect(evaled);

         //      message.channel.send(clean(evaled), {code:"xl"});
     } catch (err) {
         message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
     }
 };
 module.exports.help = {
     name: "eval"
 }