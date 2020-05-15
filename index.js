const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'REPLACE_THIS_LINE_WITH_REAL_TOKEN';

const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is online');
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'cheeky':
            if(args[1] === '1'){
                message.channel.send('', {files: ["https://i.imgur.com/QWyacEL.png"]});
            }
            if(args[1] === '2'){
                message.channel.send('', {files: ["https://i.imgur.com/tPN4RGw.png"]});
            }
            if(args[1] === '3'){
                message.channel.send('', {files: ["https://i.imgur.com/C8vHyS8.png"]});
            }
            if(args[1] === undefined ){
                message.channel.send('', {files: ["https://i.imgur.com/QWyacEL.png"]});
            }
            break;
        case '1916':
            message.channel.send('', {files: ["https://i.imgur.com/gV6KYEy.png"]});
            break;
        case 'nonce':
            message.channel.send('', {files: ["https://i.imgur.com/x9GIBTT.png"]});
            break;
        case 'slug':
            message.channel.send('', {files: ["https://i.imgur.com/4ZP7G9v.png"]});
            break;
        case 'frank':
            message.channel.send('', {files: ["https://i.imgur.com/PRaV7pP.png"]});
            break;
        case 'F':
            message.channel.send('', {files: ["https://media.giphy.com/media/hStvd5LiWCFzYNyxR4/giphy.gif"]});
            break;
        case 'coldtake':
            message.channel.send('', {files: ["https://i.imgur.com/Y74MFfR.png"]});
            break;
    }
})

bot.login(token);

