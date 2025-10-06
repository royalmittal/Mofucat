# Mofucat 😺

A Discord Community Bot for Mofucats!

## Description

Mofucat is a friendly Discord bot designed to help manage and engage with your Discord community. Built with Discord.js, it provides essential commands and features for community interaction.

## Features

- 🏓 Ping/Pong responsiveness check
- 😺 Welcome messages for the Mofucat community
- 📝 Built-in help command
- 🔧 Easy to extend and customize

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16.9.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A Discord account and a Discord server where you can test the bot

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/royalmittal/Mofucat.git
cd Mofucat
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a Discord Bot

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Go to the "Bot" section and click "Add Bot"
4. Under the bot's username, click "Reset Token" to get your bot token (keep this secret!)
5. Enable the following Privileged Gateway Intents:
   - Message Content Intent
   - Server Members Intent
6. Go to the "OAuth2" > "URL Generator" section
7. Select the following scopes:
   - `bot`
8. Select the following bot permissions:
   - Send Messages
   - Read Message History
   - Read Messages/View Channels
9. Copy the generated URL and open it in your browser to invite the bot to your server

### 4. Configure environment variables

Copy the example environment file and add your bot token:

```bash
cp .env.example .env
```

Edit `.env` and add your Discord bot token:

```
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here
GUILD_ID=your_guild_id_here
```

### 5. Run the bot

```bash
npm start
```

For development with auto-restart:

```bash
npm run dev
```

## Commands

- `!ping` - Check if the bot is responsive (responds with "Pong!")
- `!mofucat` - Get a welcome message from the Mofucat community
- `!help` - Display all available commands

## Project Structure

```
Mofucat/
├── index.js          # Main bot file
├── package.json      # Project dependencies and scripts
├── .env.example      # Example environment variables
├── .gitignore        # Git ignore rules
├── LICENSE           # Apache 2.0 License
└── README.md         # This file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/royalmittal/Mofucat/issues).
