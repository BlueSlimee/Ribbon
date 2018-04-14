/*
 *   This file is part of Ribbon
 *   Copyright (C) 2017-2018 Favna
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, version 3 of the License
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *   Additional Terms 7.b and 7.c of GPLv3 apply to this file:
 *       * Requiring preservation of specified reasonable legal notices or
 *         author attributions in that material or in the Appropriate Legal
 *         Notices displayed by works containing it.
 *       * Prohibiting misrepresentation of the origin of that material,
 *         or requiring that modified versions of such material be marked in
 *         reasonable ways as different from the original version.
 */

/**
 * @file Moderation BanCommand - Ban a bad member  
 * **Aliases**: `b`, `banana`
 * @module
 * @category moderation
 * @name ban
 * @example ban MultiMegaMander
 * @param {member} AnyMember The member to ban from the server
 * @param {string} TheReason Reason for this banishment. Include `--no-delete` anywhere in the reason to prevent the bot from deleting the banned member's messages
 * @returns {MessageEmbed} Log of the ban
 */

const {MessageEmbed} = require('discord.js'),
  commando = require('discord.js-commando'),
  moment = require('moment'), 
  {oneLine} = require('common-tags'), 
  {deleteCommandMessages} = require('../../util.js');

module.exports = class banCommand extends commando.Command {
  constructor (client) {
    super(client, {
      'name': 'ban',
      'memberName': 'ban',
      'group': 'moderation',
      'aliases': ['b', 'banana'],
      'description': 'Bans a member from the server',
      'format': 'MemberID|MemberName(partial or full) [ReasonForBanning]',
      'examples': ['ban JohnDoe annoying'],
      'guildOnly': true,
      'throttling': {
        'usages': 2,
        'duration': 3
      },
      'args': [
        {
          'key': 'member',
          'prompt': 'Which member should I ban?',
          'type': 'member'
        },
        {
          'key': 'reason',
          'prompt': 'What is the reason for this banishment?',
          'type': 'string',
          'default': ''
        }
      ]
    });
  }

  hasPermission (msg) {
    return this.client.isOwner(msg.author) || msg.member.hasPermission('BAN_MEMBERS');
  }

  run (msg, args) {
    if (args.member.id === msg.author.id) {
      return msg.reply('I don\'t think you want to ban yourself.');
    }

    if (!args.member.bannable) {
      return msg.reply('I cannot ban that member, their role is probably higher than my own!');
    }

    if (/--nodelete/im.test(msg.argString)) {
      args.reason = args.reason.substring(0, args.reason.indexOf('--nodelete')) + args.reason.substring(args.reason.indexOf('--nodelete') + '--nodelete'.length + 1);
      args.keepmessages = true;
    }

    args.member.ban({
      'days': args.keepmessages ? 0 : 1,
      'reason': args.reason !== '' ? args.reason : 'No reason given by staff'
    });

    const embed = new MessageEmbed(),
      modLogs = this.client.provider.get(msg.guild, 'modlogchannel',
        msg.guild.channels.exists('name', 'mod-logs')
          ? msg.guild.channels.find('name', 'mod-logs').id
          : null);

    embed
      .setColor('#FF1900')
      .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
      .setDescription(`**Member:** ${args.member.user.tag} (${args.member.id})\n` +
        '**Action:** Ban\n' +
        `**Reason:** ${args.reason !== '' ? args.reason : 'No reason given by staff'}`)
      .setFooter(moment().format('MMMM Do YYYY [at] HH:mm:ss [UTC]Z'));

    if (this.client.provider.get(msg.guild, 'modlogs', true)) {
      if (!this.client.provider.get(msg.guild, 'hasSentModLogMessage', false)) {
        msg.reply(oneLine`📃 I can keep a log of moderator actions if you create a channel named \'mod-logs\'
					(or some other name configured by the ${msg.guild.commandPrefix}setmodlogs command) and give me access to it.
					This message will only show up this one time and never again after this so if you desire to set up mod logs make sure to do so now.`);
        this.client.provider.set(msg.guild, 'hasSentModLogMessage', true);
      }

      deleteCommandMessages(msg, this.client);

      return modLogs ? msg.guild.channels.get(modLogs).send({embed}) : msg.embed(embed);
    }
    deleteCommandMessages(msg, this.client);

    return msg.embed(embed);
  }
};