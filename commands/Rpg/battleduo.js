const {battleduo} = require('../../function/rpg/duo');
const hostile = require('../../assets/npc/hostile.json');
const {capitalize} = require ('../../function/other/string')

module.exports.run = async (client, message, args) => {
    const player = await client.getUser(message.member);
    const user = message.guild.member(message.mentions.users.first());
    if(user === undefined) return message.reply("Cette personne n'est pas sur le serveur !");
    const mentionedUser = await client.getUser(user);
    const player2 = mentionedUser;
    if (player2.username !== player.teams) return message.replay("tu n'es pas en teams avec lui !")
    const q = args.slice(1).join(" ")
    console.log(q)
    const position = hostile.map(e => e.name).indexOf(capitalize(q));
    if (q && position === -1) return message.reply ('Ce monstre n\'existe pas !')
    const monster = hostile[position];
    battleduo(client, message,player ,player2 ,monster, user);
};

module.exports.help = {
    name: 'battleDuo',
    aliases: ["battleduo","Battleduo","BATTLEDUO","bd","Bd","BD"],
    category: 'rpg',
    description: 'Bataille avec un monstre avec votre duo !',
    cd: 1,
    usage: "<@your_teammate> <enemy_name>",
    isUserAdmin: false,
    permissions: false,
    args: true,
    profile: true
};