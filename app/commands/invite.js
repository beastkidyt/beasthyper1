const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js") 

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setThumbnail(bot.user.avatarURL)
    .setDescription(
      "**Beast Hyper Project** \n\n**👋 Hey!\n Do you want Invite me? [Click Here](https://discord.com/oauth2/authorize?client_id=756393213400711268&permissions=0&scope=bot) to Invite me!\nThanks for supporting me.** ❤️"
    )
    .addField(
      "Support Link: ",
      `**[Click Here!](https://discord.gg/tFAvCh7)**`,
      true
    )
    .addField(
      "Vote Link:",
      `**[Coming Soon!](   )**`,
      true
    )
    .setTimestamp()
    
    .setColor("0x2f3136");
  message.react("727551598640889896");
  message.channel.send(embed)
  
}

module.exports.help = {
  name:"invite",
  aliases: [""]
}