const { MessageEmbed, MessageAttachment } = require("discord.js");
const { capitalize } = require("../../function/other/string");

module.exports = {
    run: async (client, message, args, player) => {
        const userInventory = player.inventory;
        const userBank = player.bank;
        if (args[0] === "in") {
            q = args.slice(1).join(" ");
            const userInventoryItemPosition = userInventory.indexOf(capitalize(q));
            userBank.push(capitalize(q));
            userInventory.splice(userInventoryItemPosition);
            client.updateUserInfo(message.member,{
                "users.$.inventory": userInventory,
                "users.$.bank": userBank
            });
        }
        else if (args[0] === "out") {
            q = args.slice(1).join(" ");
            const userBankItemPosition = userBank.indexOf(capitalize(q));
            userInventory.push(capitalize(q));
            userBank.splice(userBankItemPosition);
            client.updateUserInfo(message.member,{
                "users.$.inventory": userInventory,
                "users.$.bank": userBank
            });
        } else {
            const bankIcon = new MessageAttachment(/*Link of img*/)
            const embed = new MessageEmbed()
                .setAuthor(`Bank de ${message.author.username}`)
                .setThumbnail(bankIcon)
                .addField("Banque :",`${player.banque.length !== 0 ? player.banque.join(" | ") : "La banque est vide"}`)
            message.channel.send(embed);
        }

    },help: {
        name: 'bank',
        aliases: ["bank","Bank","BANK"],
        category: 'rpg',
        description: 'Permet de gerer sa banque',
        cd: 5,
        usage: "[in/out] <object_name>",
        isUserAdmin: false,
        permissions: false,
        args: false,
        profile: true
    }
}