const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const {MessageEmbed} = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('>'))return;  

  let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("0x2f3136")
  .setDescription(`:cross: Mention someone to pay`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("0x2f3136")
  .setDescription(`:cross: Specify an amount to pay`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("0x2f3136")
  .setDescription(`:cross: You can't pay someone negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("0x2f3136")
  .setDescription(`:cross: You don't have that much money`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("0x2f3136")
  .setDescription(`:white_check_mark:  You have payed ${user.user.username} ${args[1]} coins`);

  message.channel.send(embed5)
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])

}

module.exports.help = {
  name:"pay",
  aliases: [""]
}