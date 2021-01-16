const deleting = async (message, i) => {
    let b;
    let a = 0;
    if (i === 1) b = 5;
    if (i === 5) {
        a = 4;
        b += 5
        await message.channel.bulkDelete(a);
    }
    while (b === i) {
        if (i === b) {
            a = 5;
            await message.channel.bulkDelete(a);
        }
        b += 5
    }
}

module.exports = {
    deleting
}