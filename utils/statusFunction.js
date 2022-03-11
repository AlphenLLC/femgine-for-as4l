const fs = require('fs-extra');
Array.prototype.randomElement = function () { return this[Math.floor(Math.random() * this.length)] }; // when the status message is sus!

const setSts = (client, selectedStatus) => {
	switch (selectedStatus) {
		case 'online':
			return setRPC(client, 'online', 'homies get ready for the next drive-by', 'WATCHING');
		case 'idle':
			return setRPC(client, 'idle', 'Ice Cube', 'LISTENING');
		case 'dnd':
			return setRPC(client, 'dnd', 'with an AK-47', 'PLAYING');
		case 'stream':
			client.user.setPresence({
				status: 'online',
				activities: [{
					name: 'Speedrunning Grand Theft Auto IV!',
					type: 'STREAMING',
					url: 'https://www.youtube.com/watch?v=-9OuCWWL5aE&t=98s',
				}]
			});
		case 'next':
			const nextState = states.randomElement();
			return setSts(client, nextState);
		default:
			const gtaIv = [{ activity: 'Burak Oyunda GTA IV Series', thing: 'WATCHING' }, { activity: 'Grand Theft Auto IV', thing: 'PLAYING' }, { activity: 'The Music of Grand Theft Auto IV', thing: 'LISTENING' }].randomElement();
			return setRPC(client, 'online', gtaIv.activity, gtaIv.thing);
			return false;
	}
};

const setRPC = async (client, activityStatus, activityName, activityType) => {
	client.user.setPresence({
		status: activityStatus,
		activities: [{
			name: activityName,
			type: activityType
		}]
	});
	return true;
};

const states = ['online', 'idle', 'dnd', 'stream'];
const randomStatus = async (client) => {
	const settingsFile = await fs.readJsonSync('./deployData/settings.json', 'utf-8');
	if (settingsFile.randomStatus.state) setSts(client, states[Math.floor(Math.random() * states.length)]);
};

module.exports = {
	setSts,
	randomStatus
};
