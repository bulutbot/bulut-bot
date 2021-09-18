const DiscordJS = require('discord.js');
const { Client } = DiscordJS;

var bot = new Client({
    intents: ['GUILDS'],
    presence: {
        activities: [{ name: 'Bulutları', type: 'WATCHING' }]
    },
});

const { Bot } = require('./src/configuration/config.json');

// Discord bot login 
bot.login(Bot.token)
.then(() => console.log(`${bot.user.tag} başarıyla giriş yaptı!`))
.catch(() => undefined);
