module.exports = {
    name: 'test',
    description: "Embed",
    execute(message, args, Discord) {
     const newEmbed = new Discord.MessageEmbed()
     .setColor('0000FF')
     .setTitle('test')
     .setURL('https://giphy.com/gifs/lSsuB8fjheR2wFCVto')
     .setDescription('this a test')
     .addFields(
        {name: 'test', value: 'test'},
        {name: 'test', value: 'test'},
        {name: 'test', value: 'test'}
    )
     .setImage('https://giphy.com/gifs/lSsuB8fjheR2wFCVto')
     .setFooter('maked test')

    message.channel.send(newEmbed);
    }
}