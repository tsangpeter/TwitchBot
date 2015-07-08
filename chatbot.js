var irc = require('twitch-irc');

var clientOptions = {
    options: {
        debug: true,
        debugIgnore: ['ping', 'chat', 'action']
    },
    identity: {
        username: 'username',
        password: 'oauth:password'
    },
    channels: ['channelname']
}
var client = new irc.client(clientOptions);

client.connect();

client.addListener('chat', function (channel, user, message) {
    console.log(user.username + ': ' + message);
    if (message.toLowerCase() === '!hello') {
        client.say(channel, 'Hello, ' + user.username + '!');
    }
});