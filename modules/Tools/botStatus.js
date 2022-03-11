const { setSts } = require('../../utils/statusFunction.js');
const { checkStaff } = require('../../utils/staffChecks.js');

module.exports = {
	name: 'status',
	helpTitle: 'Status',
	category: 'Tools',
	usage: 'status [{online, stream}]',
	description: 'Set the client\'s status',
	isHidden: false,
	aliases: ['sts', 'stat'],
	cooldown: 1,
	execute: async function (client, message, args) {
		if (!checkStaff(client, message, true)) return;

		switch (args[0]) {
			case 'online':
			case 'idle':
			case 'dnd':
			case 'stream':
				if (!setSts(client, args[0])) return message.channel.send('Wait the AK is stuck.');
				await message.react('✅');
				break;
			default:
				return message.channel.send('I don\'t think that\'s an option.');
		}
	},
};