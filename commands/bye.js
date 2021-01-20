exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('Bye');} else {
        message.channel.send(`Bye ${member.user.tag}`)
    }
}

exports.help = {
name: 'bye'
}