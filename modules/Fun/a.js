const { alphID, maxID } = require('../../assets/global/memberIDs.json');

module.exports = {
	name: 'lm',
	helpTitle: 'lm',
	category: 'Fun',
	usage: 'lm',
	description: 'Max',
	isHidden: true,
	// aliases: [],
	cooldown: 1,
	execute: async function (client, message, args) {
		if (![maxID, alphID].includes(message.author.id)) return message.channel.send('MAX BONK');

		if (message.deletable) message.delete();
		message.channel.send('_ _');
	},
};
