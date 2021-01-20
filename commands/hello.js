exports.run = async (bot,message,args) => {
        let member = message.mentions.members.first();
        if(!member) { message.channel.send('hello');} else {
            message.channel.send(`Hello ${member.user.tag}`)
        }
}

exports.help = {
    name: 'hello'
}