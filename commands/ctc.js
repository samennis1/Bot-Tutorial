exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member) return message.channel.send("No member found!");
    let role = await message.guild.roles.create({
        data: {
          name: 'Private Text Channel',
          color: 'RED',
        }
      })

    let channel = await message.guild.channels.create(`${message.author.username}-${member.user.username}`, {
        type: 'text',
        permissionOverwrites: [
            {
                id: role.id,
                allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
            },
            {
                id: message.guild.roles.everyone.id,
                deny: ['SEND_MESSAGES', 'VIEW_CHANNEL']
            }
        ]
    })

    member.roles.add(role);
    message.member.roles.add(role);
    message.channel.send(`Channel has been created! Get talking at ${channel}`)
}

exports.help = {
name: 'ctc'
}