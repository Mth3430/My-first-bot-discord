const  Discord = require('discord.js');
const  client = new  Discord.Client ();
const  auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === '$ping') {
    message.channel.send('pong(rasciste)');
    }
});

client.on('message', message => {
    if (message.content === '$kids') {
    message.channel.send('clement arrete stp...');
    message.channel.send('https://tenor.com/bsAxL.gif');
    }
});

client.on('message', message => {
    if (message.content === '$prank') {
    message.channel.send('https://tenor.com/xDsM.gif');
    }
});

client.on('message', message => {
    if (message.content === '$ytb') {
    message.channel.send('Ma Chaine ytb: https://www.youtube.com/channel/UCShQEZGpK4Z6XtpqXjZuUuQ \n https://tenor.com/blkne.gif');
    }
});

client.on('message', message => {
    if (message.content === '$help') {
    message.channel.send('commandes dispo: $help\n$ping\n$kids\n$prank\n$add(stock les mots qui suis)\n$list(affiche les mots stockés)\n$ytb\n$solidworks');
    }
});

client.on('message', message => {
    if (message.content === '$solidworks') {
    message.channel.send("Ta besoin d'aide sur solidworks ? tiens cadeau: https://www.youtube.com/watch?v=n3lHjRHK3O4");
    }
});

var str;
client.on('message', message => {
    if (message.content.startsWith('$add ')) {
    str = message.content
    }
});

client.on('message', message => {
    if (message.content == '$list'){
        message.channel.send(str.substring(5))
        }
});

client.login(auth.token);