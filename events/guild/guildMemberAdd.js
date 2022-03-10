const fs = require('fs-extra');
const { joinMessages } = require('../../assets/greeting/greetings.json');

module.exports = async (client, member) => {
	const { generalChannelID } = client.config;

	const { welcome } = await fs.readJsonSync('./deployData/settings.json', 'utf-8');

	if (!member.roles.cache.has('940315281169997884')) await member.roles.add('832294367871107092');

	if (!welcome.state) return;
	const randomWelc = joinMessages[Math.floor(Math.random() * joinMessages.length)];
	const formatWelc = randomWelc.replace('{user}', `<@${member.id}>`);

	client.channels.cache.get(generalChannelID).send(formatWelc);
};