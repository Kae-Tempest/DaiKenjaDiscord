import {donjon} from '../../function/rpg/donjon.js';
module.exports = {
    run: async (client, message) => {
    const player = await client.getUser(message.member);
    donjon(client, message, player);
    }, help: {
        name: 'donjon',
        aliases: ["donjon","Donjon","DONJON","dj","Dj","DJ"],
        category: 'rpg',
        description: 'faire un donjon',
        cd: 10,
        usage: "",
        isUserAdmin: false,
        permissions: false,
        args: false,
        profile: true
    }
};