const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   let array = ["552814506070507531"]
  
  if(!array.includes(message.author.id.toString())) {
    return
  }
  
        const content = message.content.split(" ").slice(1).join(" ");
        const result = new Promise((resolve, reject) => resolve(eval(content)));
        
        return result.then((output) => {
            if(typeof output !== "string"){
                output = require("util").inspect(output, { depth: 0 });
            }
            if(output.includes(bot.token)){
                output = output.replace(message.bot.token, "T0K3N");
            }
            message.channel.send(output, {
                code: "js"
            });  
        }).catch((err) => {
            console.log(err)
            message.channel.send(err, {
                code: "js"
            });
        });
};

module.exports.help = {
  name : "eval",
  aliases : [""]
}