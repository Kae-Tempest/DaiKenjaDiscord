const tmi = require('tmi.js')
const config = require('./config.json')

const opts = {
    connection: {reconnect: true, secure: true},
    identity: {username: "Dai_Kenja", password: config.data.oauth.password},
    channels: ["daikenjabot"]
}
const client = new tmi.client(opts)
client.connect();

module.exports = client => {

}