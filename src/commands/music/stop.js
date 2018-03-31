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
 * Stops the current queue. Bot will automatically leave the channel after this command  
 * **Aliases**: `kill`, `stfu`, `quit`, `leave`, `disconnect`
 * @module
 * @category music
 * @name stop
 * @returns {Message} Sad face about stopping the music
 */

const commando = require('discord.js-commando'),
  {deleteCommandMessages} = require('../../util.js');

module.exports = class StopMusicCommand extends commando.Command {
  constructor (client) {
    super(client, {
      'name': 'stop',
      'memberName': 'stop',
      'group': 'music',
      'aliases': ['kill', 'stfu', 'quit', 'leave', 'disconnect'],
      'description': 'Stops the music and wipes the queue.',
      'guildOnly': true,
      'throttling': {
        'usages': 2,
        'duration': 3
      }
    });
  }

  run (msg) {
    const queue = this.queue.get(msg.guild.id);

    if (!queue) {
      deleteCommandMessages(msg, this.client);
			
      return msg.reply('there isn\'t any music playing right now.');
    }
    const song = queue.songs[0]; // eslint-disable-line one-var

    queue.songs = [];
    if (song.dispatcher) {
      song.dispatcher.end();
    }
    deleteCommandMessages(msg, this.client);
		
    return msg.reply('you\'ve just killed the party. Congrats. 👏');
  }

  get queue () {
    if (!this._queue) {
      this._queue = this.client.registry.resolveCommand('music:play').queue;
    }

    return this._queue;
  }
};