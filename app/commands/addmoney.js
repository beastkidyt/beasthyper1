const Discord = require("discord.js");
const {MessageEmbed} = require("discord.js")
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('>'))return;  
  let ownerID = '737862770275647508'
  
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("0x2f3136")
    .setDescription(`:white_check_mark: Added ${args[1]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)

};

module.exports.help = {
  name:"add",
  aliases: ["addmoney"]
}
