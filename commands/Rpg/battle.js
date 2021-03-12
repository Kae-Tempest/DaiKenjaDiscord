import {battle} from '../../function/rpg/rpg';
import hostile from '../../assets/npc/hostile.json';
import {capitalize} from  '../../function/other/string';
module.exports = {
    run: async (client, message, args) => {
    const player = await client.getUser(message.member);
    const q = args.join(" ")
    const position = hostile.map(e => e.name).indexOf(capitalize(q));
    if (q && position === -1) return message.reply ('Ce monstre n\'existe pas !')
    const monster = hostile[position];
    battle(client, message, player, monster);
}, help: {
    name: 'battle',
    aliases: ["battle","Battle","BATTLE"],
    category: 'rpg',
    description: 'Bataille avec un monstre',
    cd: 20,
    usage: "<enemy_name>",
    isUserAdmin: false,
    permissions: false,
    args: true,
    profile: true
    }
};