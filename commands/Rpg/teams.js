const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const player1 = await client.getUser(message.member);
    
    if(args[0] === "create") {
        const user = message.guild.member(message.mentions.users.first());
        if(user === undefined) return message.reply("Cette personne n'est pas sur le serveur !");
        const mentionedUser = await client.getUser(user);
        const player2 = mentionedUser;
        try{
            message.channel.send(`Confirmez-vous la mise en équipe de ${message.author} (oui) (10 secondes pour répondre)`);
            const filter = m => (user.id === m.author.id);
            const userEntry = await message.channel.awaitMessages(filter, {
                max: 1, time: 10000, errors: ['time']
            });
            if (userEntry.first().content.toLowerCase() === "oui"){
                const username1 = player1.username
                const username2 = player2.username
                client.updateUserInfo(message.member, {
                    "users.$.teams": username2
                });
                client.updateUserInfo(user, {
                    "users.$.teams": username1
                });
            }
            const embed = new MessageEmbed()
            .setTitle(`Equipe de ${player1.username}`)
            .setDescription(`${player1.username} est en duo avec ***${player1.teams}***`)
            .setColor('RANDOM')
            .setFooter(`Duo`, message.author.avatarURL())
            .setTimestamp();
            message.reply(`Le duo avec ${player2.username} a été créé avec succès !!`)
            return message.channel.send(embed)
        }
    catch (e) {
        message.channel.send(`Creation de l'équipe annulé. Merci de confirmé votre la création de l'équipe en répondant \`oui\` la prochaine fois!`)
        }
    }
    if (args[0] === "delete"){
        const user = message.guild.member(message.mentions.users.first());
        if(user === undefined) return message.reply("Cette personne n'est pas sur le serveur !");
        const mentionedUser = await client.getUser(user);
        const player2 = mentionedUser;
        try{
            message.channel.send(`Confirmez-vous la dissolution de l'équipe équipe de ${message.author} (oui) (5 secondes pour répondre)`);
            const filter = m => (message.author.id === m.author.id);
            const userEntry = await message.channel.awaitMessages(filter, {
                max: 1, time: 5000, errors: ['time']
            });
            if (userEntry.first().content.toLowerCase() === "oui"){
                client.updateUserInfo(message.member, {
                    "users.$.teams": "None"
                });
                client.updateUserInfo(user, {
                    "users.$.teams": "None"
                });
            }
            message.reply(`Le duo avec ${player2.username} a bien été dissous !!`)
        }
    catch (e) {
        message.channel.send(`La dissolution de l'équipe à été annulé. Merci de confirmé la dissolution de l'équipe en répondant \`oui\` la prochaine fois!`)
        }
    }
    else{
    if (player1.teams === "None") return message.reply("tu n'as pas d'équipier !!")
    const embed1 = new MessageEmbed()
    .setTitle(`Equipe de ${player1.username}`)
    .setDescription(`${player1.username} est en duo avec ***${player1.teams}***`)
    .setColor('RANDOM')
    .setFooter(`Duo`, message.author.avatarURL())
    .setTimestamp();
    message.channel.send(embed1);
    }    
}

module.exports.help = {
    name: "teams",
    aliases: ["teams","Teams","TEAMS"],
    category: 'rpg',
    description: "affiche le duo ou créer un duo !",
    cd: 10,
    usage: "[create <mentionedUser>]",
    isUserAdmin: false,
    permission: false,
    args: false,
    profile: true
}