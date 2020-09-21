const Discord = require("discord.js");
const db = require("quick.db");
const {MessageEmbed} = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('>'))return;  

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("0x2f3136")
    .setDescription(`:white_check_mark:  Removed ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)

};


module.exports.help = {
  name:"remove",
  aliases: ["removemoney"]
}
