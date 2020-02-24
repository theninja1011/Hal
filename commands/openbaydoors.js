module.exports = {
	name: 'open',
	description: 'Open the pod bay doors hal',
	execute(msg, args) {
        if (args.join(' ') == 'the pod bay doors hal')
            msg.channel.send('Sorry ' + msg.author + ", I cannot do that");
	},
};