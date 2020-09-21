const Discord = require('discord.js')
const db = require('quick.db')
const {MessageEmbed} = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('>'))return;  


    let embed = new Discord.MessageEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [>buy bronze]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [>buy nikes]\nCar: 800 [>buy car]\nMansion: 1200 [>buy mansion]")
    .setColor("0x2f3136")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["st"]
}