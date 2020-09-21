const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {
       const text = args.slice().join(' ');
		if (!text) {
			return message.channel.send(
				'❎ Please provide valid text.',
			);
		}

		const url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send('❎ An error occured, please try again!');
		}
		message.channel
        .send({
          files: [
            {
              attachment: response.message,
              name: "meme.png"
            }
          ]
        })
        .then(() => message.channel.stopTyping());
	//	return message.channel.send(attachment);
  
  
};
module.exports.help = {
  name: "clyde",
  aliases: [""]
};
