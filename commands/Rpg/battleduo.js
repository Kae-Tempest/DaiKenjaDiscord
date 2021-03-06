const {battleduo} = require ('../../function/rpg/duo');
const hostile = require ('../../assets/npc/hostile.json');
const {capitalize} = require  ('../../function/other/string');
module.exports = {
    run: async (client, message, args) => {
    const player = await client.getUser(message.member);
    if(args[0] === "tm") user = message.guild.member(player.teams[1]);
    if(user === undefined) return message.reply("Cette personne n'est pas sur le serveur !");
    const mentionedUser = await client.getUser(user);
    const player2 = mentionedUser;
    if (player2.username !== player.teams[0]) return message.reply("tu n'es pas en teams avec lui !")
    const q = args.slice(1).join(" ")
    const position = hostile.map(e => e.name).indexOf(capitalize(q));
    if (q && position === -1) return message.reply ('Ce monstre n\'existe pas !')
    const monster = hostile[position];
    battleduo(client, message,player ,player2 ,monster, user);
}, help: {
    name: 'battleDuo',
    aliases: ["battleduo","Battleduo","BATTLEDUO","bd","Bd","BD"],
    category: 'rpg',
    description: 'Bataille avec un monstre avec votre duo !',
    cd: 20  ,
    usage: "tm <enemy_name>",
    isUserAdmin: false,
    permissions: false,
    args: true,
    profile: true
    }
}