const mongoose = require ('./mongoose');
const {Guild} = require ('../models/index');
module.exports = client => {
    //New Guild
    client.createGuild = async guild => {
        const merged = Object.assign(guild);
        const createGuild = await new Guild(merged);
        createGuild.save()
    };

    client.getGuild = async guild => {
        const data = await Guild.findOne({guildID: guild.id})
        if (data) return data;
    }

    client.getUser = async member => {
        const data = await client.getGuild(member.guild);
        const position = await data.users.map(e => e.id).indexOf(member.id);
        return data.users[position];
    }

    client.updateGuild = async (guild, settings) => {
        let data = await client.getGuild(guild);
        if (typeof data !== "object") data = {};
        for (const key in settings) {
            if (data[key] !== settings[key]) data[key] = settings[key];
        }
        return data.updateOne(settings);
    };

    client.createUserProfile = (member, guild) => {
        Guild.updateOne(
            {guildID: guild.id},
            {
                $push: {
                    users: {
                        id: member.id,
                        username: member.user.username,
                        race: "",
                        level: 1,
                        prestige: 0,
                        experience: 0,
                        rdc: 0,
                        daily: 0,
                        po: 200,
                        evolve: 0,
                        teams: "None",
                        attribut: [],
                        class: "",
                        stats: {},
                        statsMax: {},
                        inventory: [],
                        bank: [],
                        equipments: {
                            "Mh": "None",
                            "Oh": "None",
                            "armor": "None",
                            "broach": "None",
                            "rings": "None",
                            "earrings": "None",
                            "belt": "None"
                        }
                    }
                }
            }
        ).then(d => console.log("Profil créer !"));
    };

    client.updateUserInfo = (member, options = {}) => {
        Guild.updateOne(
            {"users.id": member.id},
            {$set: options}
        ).then();
    };

    client.createMissingInfoOnUser = (member, missingInfo = {}) => {
        Guild.updateOne({"users.id": member.id}, {$set: missingInfo}).then();
};
}