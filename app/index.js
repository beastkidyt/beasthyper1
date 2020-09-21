const botconfig = require("./botconfig.json");
const { prefix } = require("./botconfig.json")
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const db = require("quick.db");
const RichEmbed = require("discord.js")

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})


bot.on('guildDelete', guild => {
const rrrsembed = new Discord.MessageEmbed()
.setColor("0x2f3136")
.setThumbnail(guild.iconURL|| guild.defaultİconURL)
.setTitle(`${bot.user.username} Removed Server ❎`)
.addField("\`Removed Server:\`",guild.name)
.addField("\`Server Owner:\`", guild.owner)
.addField("\`Server ID:\`", guild.id)
.addField("\`Location of the Server:\`", guild.region)
.addField("\`Number of people of the Server:\`", guild.memberCount)
.setTimestamp()

   bot.channels.cache.get('757194730869096478').send(rrrsembed);
});


bot.on('guildCreate', guild => {

const rrrsembed = new Discord.MessageEmbed()
.setColor("0x2f3136")
.setThumbnail(guild.iconURL || guild.defaultİconURL)
.setTitle(`${bot.user.username} Added Server ✅`)
.addField("\`Added Server:\`",guild.name)
.addField("\`Server Owner:\`", guild.owner)
.addField("\`Server ID:\`", guild.id)
.addField("\`Location of the Server:\`", guild.region)
.addField("\`Number of people of the Server:\`", guild.memberCount)
.setTimestamp()

   bot.channels.cache.get('757194730869096478').send(rrrsembed);
    
});
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);
  bot.user.setActivity(`Prefix: > | In ${bot.guilds.cache.size}`);
  bot.user.setStatus('online');

  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = botconfig.prefix
    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    commandfile = bot.commands.get(bot.aliases.get(cmd));
  }
  
      if (!message.content.startsWith(prefix)) return;

          
  try {
    commandfile.run(bot, message, args);
  
  } catch (e) {
  }}
  )})


bot.login("NzU3NDc2NTE5MTgxNDE4NDk3.X2g8-w.Ky-t1px9YOGohJamQ7AXG3l45jk");
