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
 * @file Owner CustomTopUpCommand - Daniël Ocean doesn't give a crap about legality  
 * **Aliases**: `ctu`
 * @module
 * @category owner
 * @name customtopup
 * @example ctu Biscuit 1000
 * @param {member} AnyMember The member you want to give some chips
 * @param {number} ChipsAmount The amount of chips you want to give
 * @returns {MessageEmbed} New balance for the member
 */

const {MessageEmbed} = require('discord.js'),
  Database = require('better-sqlite3'),
  commando = require('discord.js-commando'),
  moment = require('moment'),
  path = require('path'), 
  {oneLine, stripIndents} = require('common-tags'), 
  {deleteCommandMessages} = require('../../util.js');

module.exports = class CustomTopUpCommand extends commando.Command {
  constructor (client) {
    super(client, {
      'name': 'customtopup',
      'memberName': 'customtopup',
      'group': 'owner',
      'aliases': ['ctu'],
      'description': 'Daniël Ocean doesn\'t give a crap about legality',
      'format': 'AnyMember ChipsAmount',
      'examples': ['ctu Biscuit 1000'],
      'guildOnly': false,
      'ownerOnly': true,
      'args': [
        {
          'key': 'player',
          'prompt': 'Which player should I give them to?',
          'type': 'member'
        },
        {
          'key': 'chips',
          'prompt': 'How many chips do you want to give?',
          'type': 'integer',
          'validate': (chips) => {
            if (/^[+]?\d+([.]\d+)?$/.test(chips) && chips >= 1 && chips <= 1000000) {
              return true;
            }

            return 'Reply with a chips amount has to be a full number (no decimals) between 1 and 10000. Example: `10`';
          }
        }
      ]
    });
  }

  run (msg, args) {
    const coinEmbed = new MessageEmbed(),
      conn = new Database(path.join(__dirname, '../../data/databases/casino.sqlite3'));

    coinEmbed
      .setAuthor(msg.member.displayName, msg.author.displayAvatarURL({'format': 'png'}))
      .setColor(msg.guild ? msg.guild.me.displayHexColor : '#A1E7B2')
      .setThumbnail('https://favna.xyz/images/ribbonhost/casinologo.png');

    try {
      const query = conn.prepare(`SELECT * FROM "${msg.guild.id}" WHERE userID = ?;`).get(args.player.id);

      if (query) {
        const prevBal = query.balance;

        query.balance += args.chips;

        conn.prepare(`UPDATE "${msg.guild.id}" SET balance=$balance WHERE userID="${args.player.id}";`).run({'balance': query.balance});
        coinEmbed
          .setTitle('Daniël Ocean has stolen chips from Benedict for you')
          .addField('Previous Balance', prevBal, true)
          .addField('New Balance', query.balance, true);

        deleteCommandMessages(msg, this.client);

        return msg.embed(coinEmbed);
      }

      return msg.reply('looks like that member has no chips yet');
    } catch (e) {
      console.error(`	 ${stripIndents`Fatal SQL Error occurred during the custom top up!
      Server: ${msg.guild.name} (${msg.guild.id})
      Author: ${msg.author.tag} (${msg.author.id})
      Time: ${moment(msg.createdTimestamp).format('MMMM Do YYYY [at] HH:mm:ss [UTC]Z')}
      Error Message:`} ${e}`);

      return msg.reply(oneLine`Fatal Error occurred that was logged on Favna\'s system.
              You can contact him on his server, get an invite by using the \`${msg.guild.commandPrefix}invite\` command `);
    }
  }
};