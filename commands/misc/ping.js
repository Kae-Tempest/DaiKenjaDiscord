module.exports = {
    run: async (client, message) => {
    const msg = await message.channel.send("Ping!");
    msg.edit(
        `Pong!
        Latence du serveur: ${msg.createdTimestamp - message.createdTimestamp}ms
        Latende du bot: ${Math.round(client.ws.ping)}ms`
    )
    }, help: {
        name: "ping",
        aliases: ["ping","Ping","PING"],
        category: 'misc',
        description: "affiche le ping",
        cd: 10,
        usage: "",
        isUserAdmin: false,
        permission: false,
        args: false,
        profile: false
    }
};