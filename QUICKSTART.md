# Mofucat Bot - Quick Start Guide

## What is Mofucat?

Mofucat is a Discord bot for building and managing a community of Mofucats. This bot provides basic commands to interact with your Discord server members.

## Quick Start

### Prerequisites
- Node.js 16.9.0 or higher
- A Discord account
- A Discord server (or permission to add bots to one)

### Installation Steps

1. **Clone and Install**
   ```bash
   git clone https://github.com/royalmittal/Mofucat.git
   cd Mofucat
   npm install
   ```

2. **Create Your Discord Bot**
   - Visit https://discord.com/developers/applications
   - Create a new application
   - Add a bot to your application
   - Copy your bot token
   - Enable "Message Content Intent" in the bot settings

3. **Configure Environment**
   ```bash
   cp .env.example .env
   # Edit .env and add your bot token
   ```

4. **Run the Bot**
   ```bash
   npm start
   ```

## Available Commands

| Command | Description |
|---------|-------------|
| `!ping` | Tests if the bot is responsive |
| `!mofucat` | Displays a welcome message |
| `!help` | Shows all available commands |

## Troubleshooting

### Bot doesn't respond
- Make sure you've enabled "Message Content Intent" in Discord Developer Portal
- Check that your bot token is correct in the `.env` file
- Verify the bot has permission to read and send messages in the channel

### Installation issues
- Ensure Node.js version is 16.9.0 or higher: `node --version`
- Try deleting `node_modules` and running `npm install` again

## Extending the Bot

To add new commands, edit `index.js` and add new message handlers:

```javascript
if (message.content.toLowerCase() === '!yourcommand') {
    await message.reply('Your response here');
}
```

## Support

For issues or questions, please open an issue on the GitHub repository:
https://github.com/royalmittal/Mofucat/issues
