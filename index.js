require('dotenv').config();
const { Client, GatewayIntentBits, Events } = require('discord.js');

// Create a new Discord client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

// When the client is ready, run this code once
client.once(Events.ClientReady, (readyClient) => {
    console.log(`✅ Mofucat bot is online!`);
    console.log(`🤖 Logged in as ${readyClient.user.tag}`);
    console.log(`📊 Serving ${readyClient.guilds.cache.size} server(s)`);
});

// Listen for messages
client.on(Events.MessageCreate, async (message) => {
    // Ignore messages from bots
    if (message.author.bot) return;

    // Simple ping-pong command
    if (message.content.toLowerCase() === '!ping') {
        await message.reply('🏓 Pong!');
    }

    // Welcome command
    if (message.content.toLowerCase() === '!mofucat') {
        await message.reply('😺 Welcome to the Mofucat Discord Community! Meow! 🐱');
    }

    // Help command
    if (message.content.toLowerCase() === '!help') {
        const helpMessage = `
**Mofucat Bot Commands:**
\`!ping\` - Check if the bot is responsive
\`!mofucat\` - Get a welcome message
\`!help\` - Show this help message
        `;
        await message.reply(helpMessage);
    }
});

// Handle errors
client.on(Events.Error, (error) => {
    console.error('Discord client error:', error);
});

// Login to Discord with your bot token
client.login(process.env.DISCORD_TOKEN).catch((error) => {
    console.error('Failed to login to Discord:', error);
    process.exit(1);
});
