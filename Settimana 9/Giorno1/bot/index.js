const {Client, GatewayIntentBits} = require('discord.js');
const {token} = require('./config.json')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
})
client.on('ready', () => {
    console.log('Bot online!');
})
client.on('messageCreate', async message => {
    if(message.content ==='ciao') {
        message.channel.send('ciao a te, <@' + message.author.id + '>! \nChe piacere vederti qui')
    }
    console.log(message);
})
client.login(token);

