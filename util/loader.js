const {readdirSync} = require('fs');

//Find commands
const loadCommands = (client) => {
    recursiveCommandsLoading(client);
};
function recursiveCommandsLoading(client, dir = __dirname.substring(0, __dirname.length-5) + '/commands/') {
    readdirSync(dir, {withFileTypes: true}).forEach((file) => {
        if(file.isDirectory()) recursiveCommandsLoading(client, `${dir}/${file.name}`);
        else {
            if(file.name.endsWith('.js')) {
                const getFileName = require(`${dir}/${file.name}`);
                client.commands.set(getFileName.help.name, getFileName);
                //console.log(`Commande chargée: ${getFileName.help.name}`);
            }
        }
    });
}

//Find Events
const loadEvents = (client) => {
    recursiveEventsLoading(client);
};

function recursiveEventsLoading (client, dir = __dirname.substring(0, __dirname.length-5) + '/events/') {
    readdirSync(dir, {withFileTypes: true}).forEach((file) => {
        if(file.isDirectory()) recursiveEventsLoading(client, `${dir}${file.name}/`);
        else {
            if(file.name.endsWith('.js')) {
                const evt = require(`${dir}${file.name}`);
                const evtName = file.name.split(".")[0];
                client.on(evtName, evt.bind(null, client));
            }
        }
    });
}

module.exports = {
    loadCommands,
    loadEvents,
}