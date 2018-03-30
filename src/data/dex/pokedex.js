/* eslint-disable max-lines, max-len */

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

const BattlePokedex = {
  'bulbasaur': {
    'num': 1,
    'species': 'Bulbasaur',
    'types': ['Grass', 'Poison'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 45,
      'atk': 49,
      'def': 49,
      'spa': 65,
      'spd': 65,
      'spe': 45
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Chlorophyll'
    },
    'heightm': 0.7,
    'weightkg': 6.9,
    'color': 'Green',
    'evos': ['ivysaur'],
    'eggGroups': ['Monster', 'Grass']
  },
  'ivysaur': {
    'num': 2,
    'species': 'Ivysaur',
    'types': ['Grass', 'Poison'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 60,
      'atk': 62,
      'def': 63,
      'spa': 80,
      'spd': 80,
      'spe': 60
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Chlorophyll'
    },
    'heightm': 1,
    'weightkg': 13,
    'color': 'Green',
    'prevo': 'bulbasaur',
    'evos': ['venusaur'],
    'evoLevel': 16,
    'eggGroups': ['Monster', 'Grass']
  },
  'venusaur': {
    'num': 3,
    'species': 'Venusaur',
    'types': ['Grass', 'Poison'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 80,
      'atk': 82,
      'def': 83,
      'spa': 100,
      'spd': 100,
      'spe': 80
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Chlorophyll'
    },
    'heightm': 2,
    'weightkg': 100,
    'color': 'Green',
    'prevo': 'ivysaur',
    'evoLevel': 32,
    'eggGroups': ['Monster', 'Grass'],
    'otherFormes': ['venusaurmega']
  },
  'venusaurmega': {
    'num': 3,
    'species': 'Venusaur-Mega',
    'baseSpecies': 'Venusaur',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Grass', 'Poison'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 80,
      'atk': 100,
      'def': 123,
      'spa': 122,
      'spd': 120,
      'spe': 80
    },
    'abilities': {'0': 'Thick Fat'},
    'heightm': 2.4,
    'weightkg': 155.5,
    'color': 'Green',
    'eggGroups': ['Monster', 'Grass']
  },
  'charmander': {
    'num': 4,
    'species': 'Charmander',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 39,
      'atk': 52,
      'def': 43,
      'spa': 60,
      'spd': 50,
      'spe': 65
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Solar Power'
    },
    'heightm': 0.6,
    'weightkg': 8.5,
    'color': 'Red',
    'evos': ['charmeleon'],
    'eggGroups': ['Monster', 'Dragon']
  },
  'charmeleon': {
    'num': 5,
    'species': 'Charmeleon',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 58,
      'atk': 64,
      'def': 58,
      'spa': 80,
      'spd': 65,
      'spe': 80
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Solar Power'
    },
    'heightm': 1.1,
    'weightkg': 19,
    'color': 'Red',
    'prevo': 'charmander',
    'evos': ['charizard'],
    'evoLevel': 16,
    'eggGroups': ['Monster', 'Dragon']
  },
  'charizard': {
    'num': 6,
    'species': 'Charizard',
    'types': ['Fire', 'Flying'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 78,
      'atk': 84,
      'def': 78,
      'spa': 109,
      'spd': 85,
      'spe': 100
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Solar Power'
    },
    'heightm': 1.7,
    'weightkg': 90.5,
    'color': 'Red',
    'prevo': 'charmeleon',
    'evoLevel': 36,
    'eggGroups': ['Monster', 'Dragon'],
    'otherFormes': ['charizardmegax', 'charizardmegay']
  },
  'charizardmegax': {
    'num': 6,
    'species': 'Charizard-Mega-X',
    'baseSpecies': 'Charizard',
    'forme': 'Mega-X',
    'formeLetter': 'M',
    'types': ['Fire', 'Dragon'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 78,
      'atk': 130,
      'def': 111,
      'spa': 130,
      'spd': 85,
      'spe': 100
    },
    'abilities': {'0': 'Tough Claws'},
    'heightm': 1.7,
    'weightkg': 110.5,
    'color': 'Black',
    'eggGroups': ['Monster', 'Dragon']
  },
  'charizardmegay': {
    'num': 6,
    'species': 'Charizard-Mega-Y',
    'baseSpecies': 'Charizard',
    'forme': 'Mega-Y',
    'formeLetter': 'M',
    'types': ['Fire', 'Flying'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 78,
      'atk': 104,
      'def': 78,
      'spa': 159,
      'spd': 115,
      'spe': 100
    },
    'abilities': {'0': 'Drought'},
    'heightm': 1.7,
    'weightkg': 100.5,
    'color': 'Red',
    'eggGroups': ['Monster', 'Dragon']
  },
  'squirtle': {
    'num': 7,
    'species': 'Squirtle',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 44,
      'atk': 48,
      'def': 65,
      'spa': 50,
      'spd': 64,
      'spe': 43
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Rain Dish'
    },
    'heightm': 0.5,
    'weightkg': 9,
    'color': 'Blue',
    'evos': ['wartortle'],
    'eggGroups': ['Monster', 'Water 1']
  },
  'wartortle': {
    'num': 8,
    'species': 'Wartortle',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 59,
      'atk': 63,
      'def': 80,
      'spa': 65,
      'spd': 80,
      'spe': 58
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Rain Dish'
    },
    'heightm': 1,
    'weightkg': 22.5,
    'color': 'Blue',
    'prevo': 'squirtle',
    'evos': ['blastoise'],
    'evoLevel': 16,
    'eggGroups': ['Monster', 'Water 1']
  },
  'blastoise': {
    'num': 9,
    'species': 'Blastoise',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 79,
      'atk': 83,
      'def': 100,
      'spa': 85,
      'spd': 105,
      'spe': 78
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Rain Dish'
    },
    'heightm': 1.6,
    'weightkg': 85.5,
    'color': 'Blue',
    'prevo': 'wartortle',
    'evoLevel': 36,
    'eggGroups': ['Monster', 'Water 1'],
    'otherFormes': ['blastoisemega']
  },
  'blastoisemega': {
    'num': 9,
    'species': 'Blastoise-Mega',
    'baseSpecies': 'Blastoise',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 79,
      'atk': 103,
      'def': 120,
      'spa': 135,
      'spd': 115,
      'spe': 78
    },
    'abilities': {'0': 'Mega Launcher'},
    'heightm': 1.6,
    'weightkg': 101.1,
    'color': 'Blue',
    'eggGroups': ['Monster', 'Water 1']
  },
  'caterpie': {
    'num': 10,
    'species': 'Caterpie',
    'types': ['Bug'],
    'baseStats': {
      'hp': 45,
      'atk': 30,
      'def': 35,
      'spa': 20,
      'spd': 20,
      'spe': 45
    },
    'abilities': {
      '0': 'Shield Dust',
      'H': 'Run Away'
    },
    'heightm': 0.3,
    'weightkg': 2.9,
    'color': 'Green',
    'evos': ['metapod'],
    'eggGroups': ['Bug']
  },
  'metapod': {
    'num': 11,
    'species': 'Metapod',
    'types': ['Bug'],
    'baseStats': {
      'hp': 50,
      'atk': 20,
      'def': 55,
      'spa': 25,
      'spd': 25,
      'spe': 30
    },
    'abilities': {'0': 'Shed Skin'},
    'heightm': 0.7,
    'weightkg': 9.9,
    'color': 'Green',
    'prevo': 'caterpie',
    'evos': ['butterfree'],
    'evoLevel': 7,
    'eggGroups': ['Bug']
  },
  'butterfree': {
    'num': 12,
    'species': 'Butterfree',
    'types': ['Bug', 'Flying'],
    'baseStats': {
      'hp': 60,
      'atk': 45,
      'def': 50,
      'spa': 90,
      'spd': 80,
      'spe': 70
    },
    'abilities': {
      '0': 'Compound Eyes',
      'H': 'Tinted Lens'
    },
    'heightm': 1.1,
    'weightkg': 32,
    'color': 'White',
    'prevo': 'metapod',
    'evoLevel': 10,
    'eggGroups': ['Bug']
  },
  'weedle': {
    'num': 13,
    'species': 'Weedle',
    'types': ['Bug', 'Poison'],
    'baseStats': {
      'hp': 40,
      'atk': 35,
      'def': 30,
      'spa': 20,
      'spd': 20,
      'spe': 50
    },
    'abilities': {
      '0': 'Shield Dust',
      'H': 'Run Away'
    },
    'heightm': 0.3,
    'weightkg': 3.2,
    'color': 'Brown',
    'evos': ['kakuna'],
    'eggGroups': ['Bug']
  },
  'kakuna': {
    'num': 14,
    'species': 'Kakuna',
    'types': ['Bug', 'Poison'],
    'baseStats': {
      'hp': 45,
      'atk': 25,
      'def': 50,
      'spa': 25,
      'spd': 25,
      'spe': 35
    },
    'abilities': {'0': 'Shed Skin'},
    'heightm': 0.6,
    'weightkg': 10,
    'color': 'Yellow',
    'prevo': 'weedle',
    'evos': ['beedrill'],
    'evoLevel': 7,
    'eggGroups': ['Bug']
  },
  'beedrill': {
    'num': 15,
    'species': 'Beedrill',
    'types': ['Bug', 'Poison'],
    'baseStats': {
      'hp': 65,
      'atk': 90,
      'def': 40,
      'spa': 45,
      'spd': 80,
      'spe': 75
    },
    'abilities': {
      '0': 'Swarm',
      'H': 'Sniper'
    },
    'heightm': 1,
    'weightkg': 29.5,
    'color': 'Yellow',
    'prevo': 'kakuna',
    'evoLevel': 10,
    'eggGroups': ['Bug'],
    'otherFormes': ['beedrillmega']
  },
  'beedrillmega': {
    'num': 15,
    'species': 'Beedrill-Mega',
    'baseSpecies': 'Beedrill',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Bug', 'Poison'],
    'baseStats': {
      'hp': 65,
      'atk': 150,
      'def': 40,
      'spa': 15,
      'spd': 80,
      'spe': 145
    },
    'abilities': {'0': 'Adaptability'},
    'heightm': 1.4,
    'weightkg': 40.5,
    'color': 'Yellow',
    'eggGroups': ['Bug']
  },
  'pidgey': {
    'num': 16,
    'species': 'Pidgey',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 40,
      'atk': 45,
      'def': 40,
      'spa': 35,
      'spd': 35,
      'spe': 56
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Tangled Feet',
      'H': 'Big Pecks'
    },
    'heightm': 0.3,
    'weightkg': 1.8,
    'color': 'Brown',
    'evos': ['pidgeotto'],
    'eggGroups': ['Flying']
  },
  'pidgeotto': {
    'num': 17,
    'species': 'Pidgeotto',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 63,
      'atk': 60,
      'def': 55,
      'spa': 50,
      'spd': 50,
      'spe': 71
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Tangled Feet',
      'H': 'Big Pecks'
    },
    'heightm': 1.1,
    'weightkg': 30,
    'color': 'Brown',
    'prevo': 'pidgey',
    'evos': ['pidgeot'],
    'evoLevel': 18,
    'eggGroups': ['Flying']
  },
  'pidgeot': {
    'num': 18,
    'species': 'Pidgeot',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 83,
      'atk': 80,
      'def': 75,
      'spa': 70,
      'spd': 70,
      'spe': 101
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Tangled Feet',
      'H': 'Big Pecks'
    },
    'heightm': 1.5,
    'weightkg': 39.5,
    'color': 'Brown',
    'prevo': 'pidgeotto',
    'evoLevel': 36,
    'eggGroups': ['Flying'],
    'otherFormes': ['pidgeotmega']
  },
  'pidgeotmega': {
    'num': 18,
    'species': 'Pidgeot-Mega',
    'baseSpecies': 'Pidgeot',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 83,
      'atk': 80,
      'def': 80,
      'spa': 135,
      'spd': 80,
      'spe': 121
    },
    'abilities': {'0': 'No Guard'},
    'heightm': 2.2,
    'weightkg': 50.5,
    'color': 'Brown',
    'eggGroups': ['Flying']
  },
  'rattata': {
    'num': 19,
    'species': 'Rattata',
    'types': ['Normal'],
    'baseStats': {
      'hp': 30,
      'atk': 56,
      'def': 35,
      'spa': 25,
      'spd': 35,
      'spe': 72
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Guts',
      'H': 'Hustle'
    },
    'heightm': 0.3,
    'weightkg': 3.5,
    'color': 'Purple',
    'evos': ['raticate'],
    'eggGroups': ['Field'],
    'otherFormes': ['rattataalola']
  },
  'rattataalola': {
    'num': 19,
    'species': 'Rattata-Alola',
    'baseSpecies': 'Rattata',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Dark', 'Normal'],
    'baseStats': {
      'hp': 30,
      'atk': 56,
      'def': 35,
      'spa': 25,
      'spd': 35,
      'spe': 72
    },
    'abilities': {
      '0': 'Gluttony',
      '1': 'Hustle',
      'H': 'Thick Fat'
    },
    'heightm': 0.3,
    'weightkg': 3.8,
    'color': 'Black',
    'evos': ['raticatealola'],
    'eggGroups': ['Field']
  },
  'raticate': {
    'num': 20,
    'species': 'Raticate',
    'types': ['Normal'],
    'baseStats': {
      'hp': 55,
      'atk': 81,
      'def': 60,
      'spa': 50,
      'spd': 70,
      'spe': 97
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Guts',
      'H': 'Hustle'
    },
    'heightm': 0.7,
    'weightkg': 18.5,
    'color': 'Brown',
    'prevo': 'rattata',
    'evoLevel': 20,
    'eggGroups': ['Field'],
    'otherFormes': ['raticatealola', 'raticatealolatotem']
  },
  'raticatealola': {
    'num': 20,
    'species': 'Raticate-Alola',
    'baseSpecies': 'Raticate',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Dark', 'Normal'],
    'baseStats': {
      'hp': 75,
      'atk': 71,
      'def': 70,
      'spa': 40,
      'spd': 80,
      'spe': 77
    },
    'abilities': {
      '0': 'Gluttony',
      '1': 'Hustle',
      'H': 'Thick Fat'
    },
    'heightm': 0.7,
    'weightkg': 25.5,
    'color': 'Black',
    'prevo': 'rattataalola',
    'evoLevel': 20,
    'eggGroups': ['Field']
  },
  'raticatealolatotem': {
    'num': 20,
    'species': 'Raticate-Alola-Totem',
    'baseSpecies': 'Raticate',
    'forme': 'Alola-Totem',
    'formeLetter': 'T',
    'types': ['Dark', 'Normal'],
    'baseStats': {
      'hp': 75,
      'atk': 71,
      'def': 70,
      'spa': 40,
      'spd': 80,
      'spe': 77
    },
    'abilities': {'0': 'Thick Fat'},
    'heightm': 1.4,
    'weightkg': 105,
    'color': 'Black',
    'eggGroups': ['Field']
  },
  'spearow': {
    'num': 21,
    'species': 'Spearow',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 40,
      'atk': 60,
      'def': 30,
      'spa': 31,
      'spd': 31,
      'spe': 70
    },
    'abilities': {
      '0': 'Keen Eye',
      'H': 'Sniper'
    },
    'heightm': 0.3,
    'weightkg': 2,
    'color': 'Brown',
    'evos': ['fearow'],
    'eggGroups': ['Flying']
  },
  'fearow': {
    'num': 22,
    'species': 'Fearow',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 65,
      'atk': 90,
      'def': 65,
      'spa': 61,
      'spd': 61,
      'spe': 100
    },
    'abilities': {
      '0': 'Keen Eye',
      'H': 'Sniper'
    },
    'heightm': 1.2,
    'weightkg': 38,
    'color': 'Brown',
    'prevo': 'spearow',
    'evoLevel': 20,
    'eggGroups': ['Flying']
  },
  'ekans': {
    'num': 23,
    'species': 'Ekans',
    'types': ['Poison'],
    'baseStats': {
      'hp': 35,
      'atk': 60,
      'def': 44,
      'spa': 40,
      'spd': 54,
      'spe': 55
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Shed Skin',
      'H': 'Unnerve'
    },
    'heightm': 2,
    'weightkg': 6.9,
    'color': 'Purple',
    'evos': ['arbok'],
    'eggGroups': ['Field', 'Dragon']
  },
  'arbok': {
    'num': 24,
    'species': 'Arbok',
    'types': ['Poison'],
    'baseStats': {
      'hp': 60,
      'atk': 95,
      'def': 69,
      'spa': 65,
      'spd': 79,
      'spe': 80
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Shed Skin',
      'H': 'Unnerve'
    },
    'heightm': 3.5,
    'weightkg': 65,
    'color': 'Purple',
    'prevo': 'ekans',
    'evoLevel': 22,
    'eggGroups': ['Field', 'Dragon']
  },
  'pikachu': {
    'num': 25,
    'species': 'Pikachu',
    'types': ['Electric'],
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {
      '0': 'Static',
      'H': 'Lightning Rod'
    },
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'prevo': 'pichu',
    'evos': ['raichu', 'raichualola'],
    'evoLevel': 1,
    'eggGroups': ['Field', 'Fairy'],
    'otherFormes': ['pikachucosplay', 'pikachurockstar', 'pikachubelle', 'pikachupopstar', 'pikachuphd', 'pikachulibre', 'pikachuoriginal', 'pikachuhoenn', 'pikachusinnoh', 'pikachuunova', 'pikachukalos', 'pikachualola', 'pikachupartner']
  },
  'pikachucosplay': {
    'num': 25,
    'species': 'Pikachu-Cosplay',
    'baseSpecies': 'Pikachu',
    'forme': 'Cosplay',
    'formeLetter': 'C',
    'types': ['Electric'],
    'gender': 'F',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {'0': 'Lightning Rod'},
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'pikachurockstar': {
    'num': 25,
    'species': 'Pikachu-Rock-Star',
    'baseSpecies': 'Pikachu',
    'forme': 'Rock-Star',
    'formeLetter': 'R',
    'types': ['Electric'],
    'gender': 'F',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {'0': 'Lightning Rod'},
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'pikachubelle': {
    'num': 25,
    'species': 'Pikachu-Belle',
    'baseSpecies': 'Pikachu',
    'forme': 'Belle',
    'formeLetter': 'B',
    'types': ['Electric'],
    'gender': 'F',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {'0': 'Lightning Rod'},
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'pikachupopstar': {
    'num': 25,
    'species': 'Pikachu-Pop-Star',
    'baseSpecies': 'Pikachu',
    'forme': 'Pop-Star',
    'formeLetter': 'P',
    'types': ['Electric'],
    'gender': 'F',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {'0': 'Lightning Rod'},
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'pikachuphd': {
    'num': 25,
    'species': 'Pikachu-PhD',
    'baseSpecies': 'Pikachu',
    'forme': 'PhD',
    'formeLetter': 'D',
    'types': ['Electric'],
    'gender': 'F',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {'0': 'Lightning Rod'},
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'pikachulibre': {
    'num': 25,
    'species': 'Pikachu-Libre',
    'baseSpecies': 'Pikachu',
    'forme': 'Libre',
    'formeLetter': 'L',
    'types': ['Electric'],
    'gender': 'F',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {'0': 'Lightning Rod'},
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'pikachuoriginal': {
    'num': 25,
    'species': 'Pikachu-Original',
    'baseSpecies': 'Pikachu',
    'forme': 'Original',
    'formeLetter': 'O',
    'types': ['Electric'],
    'gender': 'M',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {'0': 'Static'},
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'pikachuhoenn': {
    'num': 25,
    'species': 'Pikachu-Hoenn',
    'baseSpecies': 'Pikachu',
    'forme': 'Hoenn',
    'formeLetter': 'H',
    'types': ['Electric'],
    'gender': 'M',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {'0': 'Static'},
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'pikachusinnoh': {
    'num': 25,
    'species': 'Pikachu-Sinnoh',
    'baseSpecies': 'Pikachu',
    'forme': 'Sinnoh',
    'formeLetter': 'S',
    'types': ['Electric'],
    'gender': 'M',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {'0': 'Static'},
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'pikachuunova': {
    'num': 25,
    'species': 'Pikachu-Unova',
    'baseSpecies': 'Pikachu',
    'forme': 'Unova',
    'formeLetter': 'U',
    'types': ['Electric'],
    'gender': 'M',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {'0': 'Static'},
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'pikachukalos': {
    'num': 25,
    'species': 'Pikachu-Kalos',
    'baseSpecies': 'Pikachu',
    'forme': 'Kalos',
    'formeLetter': 'K',
    'types': ['Electric'],
    'gender': 'M',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {'0': 'Static'},
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'pikachualola': {
    'num': 25,
    'species': 'Pikachu-Alola',
    'baseSpecies': 'Pikachu',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Electric'],
    'gender': 'M',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {'0': 'Static'},
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'pikachupartner': {
    'num': 25,
    'species': 'Pikachu-Partner',
    'baseSpecies': 'Pikachu',
    'forme': 'Partner',
    'formeLetter': 'P',
    'types': ['Electric'],
    'gender': 'M',
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {'0': 'Static'},
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'raichu': {
    'num': 26,
    'species': 'Raichu',
    'types': ['Electric'],
    'baseStats': {
      'hp': 60,
      'atk': 90,
      'def': 55,
      'spa': 90,
      'spd': 80,
      'spe': 110
    },
    'abilities': {
      '0': 'Static',
      'H': 'Lightning Rod'
    },
    'heightm': 0.8,
    'weightkg': 30,
    'color': 'Yellow',
    'prevo': 'pikachu',
    'evoLevel': 1,
    'eggGroups': ['Field', 'Fairy'],
    'otherFormes': ['raichualola']
  },
  'raichualola': {
    'num': 26,
    'species': 'Raichu-Alola',
    'baseSpecies': 'Raichu',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Electric', 'Psychic'],
    'baseStats': {
      'hp': 60,
      'atk': 85,
      'def': 50,
      'spa': 95,
      'spd': 85,
      'spe': 110
    },
    'abilities': {'0': 'Surge Surfer'},
    'heightm': 0.7,
    'weightkg': 21,
    'color': 'Brown',
    'prevo': 'pikachu',
    'evoLevel': 1,
    'eggGroups': ['Field', 'Fairy']
  },
  'sandshrew': {
    'num': 27,
    'species': 'Sandshrew',
    'types': ['Ground'],
    'baseStats': {
      'hp': 50,
      'atk': 75,
      'def': 85,
      'spa': 20,
      'spd': 30,
      'spe': 40
    },
    'abilities': {
      '0': 'Sand Veil',
      'H': 'Sand Rush'
    },
    'heightm': 0.6,
    'weightkg': 12,
    'color': 'Yellow',
    'evos': ['sandslash'],
    'eggGroups': ['Field'],
    'otherFormes': ['sandshrewalola']
  },
  'sandshrewalola': {
    'num': 27,
    'species': 'Sandshrew-Alola',
    'baseSpecies': 'Sandshrew',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Ice', 'Steel'],
    'baseStats': {
      'hp': 50,
      'atk': 75,
      'def': 90,
      'spa': 10,
      'spd': 35,
      'spe': 40
    },
    'abilities': {
      '0': 'Snow Cloak',
      'H': 'Slush Rush'
    },
    'heightm': 0.7,
    'weightkg': 40,
    'color': 'White',
    'evos': ['sandslashalola'],
    'eggGroups': ['Field']
  },
  'sandslash': {
    'num': 28,
    'species': 'Sandslash',
    'types': ['Ground'],
    'baseStats': {
      'hp': 75,
      'atk': 100,
      'def': 110,
      'spa': 45,
      'spd': 55,
      'spe': 65
    },
    'abilities': {
      '0': 'Sand Veil',
      'H': 'Sand Rush'
    },
    'heightm': 1,
    'weightkg': 29.5,
    'color': 'Yellow',
    'prevo': 'sandshrew',
    'evoLevel': 22,
    'eggGroups': ['Field'],
    'otherFormes': ['sandslashalola']
  },
  'sandslashalola': {
    'num': 28,
    'species': 'Sandslash-Alola',
    'baseSpecies': 'Sandslash',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Ice', 'Steel'],
    'baseStats': {
      'hp': 75,
      'atk': 100,
      'def': 120,
      'spa': 25,
      'spd': 65,
      'spe': 65
    },
    'abilities': {
      '0': 'Snow Cloak',
      'H': 'Slush Rush'
    },
    'heightm': 1.2,
    'weightkg': 55,
    'color': 'Blue',
    'prevo': 'sandshrewalola',
    'evoLevel': 1,
    'eggGroups': ['Field']
  },
  'nidoranf': {
    'num': 29,
    'species': 'Nidoran-F',
    'types': ['Poison'],
    'gender': 'F',
    'baseStats': {
      'hp': 55,
      'atk': 47,
      'def': 52,
      'spa': 40,
      'spd': 40,
      'spe': 41
    },
    'abilities': {
      '0': 'Poison Point',
      '1': 'Rivalry',
      'H': 'Hustle'
    },
    'heightm': 0.4,
    'weightkg': 7,
    'color': 'Blue',
    'evos': ['nidorina'],
    'eggGroups': ['Monster', 'Field']
  },
  'nidorina': {
    'num': 30,
    'species': 'Nidorina',
    'types': ['Poison'],
    'gender': 'F',
    'baseStats': {
      'hp': 70,
      'atk': 62,
      'def': 67,
      'spa': 55,
      'spd': 55,
      'spe': 56
    },
    'abilities': {
      '0': 'Poison Point',
      '1': 'Rivalry',
      'H': 'Hustle'
    },
    'heightm': 0.8,
    'weightkg': 20,
    'color': 'Blue',
    'prevo': 'nidoranf',
    'evos': ['nidoqueen'],
    'evoLevel': 16,
    'eggGroups': ['Undiscovered']
  },
  'nidoqueen': {
    'num': 31,
    'species': 'Nidoqueen',
    'types': ['Poison', 'Ground'],
    'gender': 'F',
    'baseStats': {
      'hp': 90,
      'atk': 92,
      'def': 87,
      'spa': 75,
      'spd': 85,
      'spe': 76
    },
    'abilities': {
      '0': 'Poison Point',
      '1': 'Rivalry',
      'H': 'Sheer Force'
    },
    'heightm': 1.3,
    'weightkg': 60,
    'color': 'Blue',
    'prevo': 'nidorina',
    'evoLevel': 16,
    'eggGroups': ['Undiscovered']
  },
  'nidoranm': {
    'num': 32,
    'species': 'Nidoran-M',
    'types': ['Poison'],
    'gender': 'M',
    'baseStats': {
      'hp': 46,
      'atk': 57,
      'def': 40,
      'spa': 40,
      'spd': 40,
      'spe': 50
    },
    'abilities': {
      '0': 'Poison Point',
      '1': 'Rivalry',
      'H': 'Hustle'
    },
    'heightm': 0.5,
    'weightkg': 9,
    'color': 'Purple',
    'evos': ['nidorino'],
    'eggGroups': ['Monster', 'Field']
  },
  'nidorino': {
    'num': 33,
    'species': 'Nidorino',
    'types': ['Poison'],
    'gender': 'M',
    'baseStats': {
      'hp': 61,
      'atk': 72,
      'def': 57,
      'spa': 55,
      'spd': 55,
      'spe': 65
    },
    'abilities': {
      '0': 'Poison Point',
      '1': 'Rivalry',
      'H': 'Hustle'
    },
    'heightm': 0.9,
    'weightkg': 19.5,
    'color': 'Purple',
    'prevo': 'nidoranm',
    'evos': ['nidoking'],
    'evoLevel': 16,
    'eggGroups': ['Monster', 'Field']
  },
  'nidoking': {
    'num': 34,
    'species': 'Nidoking',
    'types': ['Poison', 'Ground'],
    'gender': 'M',
    'baseStats': {
      'hp': 81,
      'atk': 102,
      'def': 77,
      'spa': 85,
      'spd': 75,
      'spe': 85
    },
    'abilities': {
      '0': 'Poison Point',
      '1': 'Rivalry',
      'H': 'Sheer Force'
    },
    'heightm': 1.4,
    'weightkg': 62,
    'color': 'Purple',
    'prevo': 'nidorino',
    'evoLevel': 16,
    'eggGroups': ['Monster', 'Field']
  },
  'clefairy': {
    'num': 35,
    'species': 'Clefairy',
    'types': ['Fairy'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 70,
      'atk': 45,
      'def': 48,
      'spa': 60,
      'spd': 65,
      'spe': 35
    },
    'abilities': {
      '0': 'Cute Charm',
      '1': 'Magic Guard',
      'H': 'Friend Guard'
    },
    'heightm': 0.6,
    'weightkg': 7.5,
    'color': 'Pink',
    'prevo': 'cleffa',
    'evos': ['clefable'],
    'evoLevel': 1,
    'eggGroups': ['Fairy']
  },
  'clefable': {
    'num': 36,
    'species': 'Clefable',
    'types': ['Fairy'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 95,
      'atk': 70,
      'def': 73,
      'spa': 95,
      'spd': 90,
      'spe': 60
    },
    'abilities': {
      '0': 'Cute Charm',
      '1': 'Magic Guard',
      'H': 'Unaware'
    },
    'heightm': 1.3,
    'weightkg': 40,
    'color': 'Pink',
    'prevo': 'clefairy',
    'evoLevel': 1,
    'eggGroups': ['Fairy']
  },
  'vulpix': {
    'num': 37,
    'species': 'Vulpix',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 38,
      'atk': 41,
      'def': 40,
      'spa': 50,
      'spd': 65,
      'spe': 65
    },
    'abilities': {
      '0': 'Flash Fire',
      'H': 'Drought'
    },
    'heightm': 0.6,
    'weightkg': 9.9,
    'color': 'Brown',
    'evos': ['ninetales'],
    'eggGroups': ['Field'],
    'otherFormes': ['vulpixalola']
  },
  'vulpixalola': {
    'num': 37,
    'species': 'Vulpix-Alola',
    'baseSpecies': 'Vulpix',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Ice'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 38,
      'atk': 41,
      'def': 40,
      'spa': 50,
      'spd': 65,
      'spe': 65
    },
    'abilities': {
      '0': 'Snow Cloak',
      'H': 'Snow Warning'
    },
    'heightm': 0.6,
    'weightkg': 9.9,
    'color': 'White',
    'evos': ['ninetalesalola'],
    'eggGroups': ['Field']
  },
  'ninetales': {
    'num': 38,
    'species': 'Ninetales',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 73,
      'atk': 76,
      'def': 75,
      'spa': 81,
      'spd': 100,
      'spe': 100
    },
    'abilities': {
      '0': 'Flash Fire',
      'H': 'Drought'
    },
    'heightm': 1.1,
    'weightkg': 19.9,
    'color': 'Yellow',
    'prevo': 'vulpix',
    'evoLevel': 1,
    'eggGroups': ['Field'],
    'otherFormes': ['ninetalesalola']
  },
  'ninetalesalola': {
    'num': 38,
    'species': 'Ninetales-Alola',
    'baseSpecies': 'Ninetales',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Ice', 'Fairy'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 73,
      'atk': 67,
      'def': 75,
      'spa': 81,
      'spd': 100,
      'spe': 109
    },
    'abilities': {
      '0': 'Snow Cloak',
      'H': 'Snow Warning'
    },
    'heightm': 1.1,
    'weightkg': 19.9,
    'color': 'Blue',
    'prevo': 'vulpixalola',
    'evoLevel': 1,
    'eggGroups': ['Field']
  },
  'jigglypuff': {
    'num': 39,
    'species': 'Jigglypuff',
    'types': ['Normal', 'Fairy'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 115,
      'atk': 45,
      'def': 20,
      'spa': 45,
      'spd': 25,
      'spe': 20
    },
    'abilities': {
      '0': 'Cute Charm',
      '1': 'Competitive',
      'H': 'Friend Guard'
    },
    'heightm': 0.5,
    'weightkg': 5.5,
    'color': 'Pink',
    'prevo': 'igglybuff',
    'evos': ['wigglytuff'],
    'evoLevel': 1,
    'eggGroups': ['Fairy']
  },
  'wigglytuff': {
    'num': 40,
    'species': 'Wigglytuff',
    'types': ['Normal', 'Fairy'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 140,
      'atk': 70,
      'def': 45,
      'spa': 85,
      'spd': 50,
      'spe': 45
    },
    'abilities': {
      '0': 'Cute Charm',
      '1': 'Competitive',
      'H': 'Frisk'
    },
    'heightm': 1,
    'weightkg': 12,
    'color': 'Pink',
    'prevo': 'jigglypuff',
    'evoLevel': 1,
    'eggGroups': ['Fairy']
  },
  'zubat': {
    'num': 41,
    'species': 'Zubat',
    'types': ['Poison', 'Flying'],
    'baseStats': {
      'hp': 40,
      'atk': 45,
      'def': 35,
      'spa': 30,
      'spd': 40,
      'spe': 55
    },
    'abilities': {
      '0': 'Inner Focus',
      'H': 'Infiltrator'
    },
    'heightm': 0.8,
    'weightkg': 7.5,
    'color': 'Purple',
    'evos': ['golbat'],
    'eggGroups': ['Flying']
  },
  'golbat': {
    'num': 42,
    'species': 'Golbat',
    'types': ['Poison', 'Flying'],
    'baseStats': {
      'hp': 75,
      'atk': 80,
      'def': 70,
      'spa': 65,
      'spd': 75,
      'spe': 90
    },
    'abilities': {
      '0': 'Inner Focus',
      'H': 'Infiltrator'
    },
    'heightm': 1.6,
    'weightkg': 55,
    'color': 'Purple',
    'prevo': 'zubat',
    'evos': ['crobat'],
    'evoLevel': 22,
    'eggGroups': ['Flying']
  },
  'oddish': {
    'num': 43,
    'species': 'Oddish',
    'types': ['Grass', 'Poison'],
    'baseStats': {
      'hp': 45,
      'atk': 50,
      'def': 55,
      'spa': 75,
      'spd': 65,
      'spe': 30
    },
    'abilities': {
      '0': 'Chlorophyll',
      'H': 'Run Away'
    },
    'heightm': 0.5,
    'weightkg': 5.4,
    'color': 'Blue',
    'evos': ['gloom'],
    'eggGroups': ['Grass']
  },
  'gloom': {
    'num': 44,
    'species': 'Gloom',
    'types': ['Grass', 'Poison'],
    'baseStats': {
      'hp': 60,
      'atk': 65,
      'def': 70,
      'spa': 85,
      'spd': 75,
      'spe': 40
    },
    'abilities': {
      '0': 'Chlorophyll',
      'H': 'Stench'
    },
    'heightm': 0.8,
    'weightkg': 8.6,
    'color': 'Blue',
    'prevo': 'oddish',
    'evos': ['vileplume', 'bellossom'],
    'evoLevel': 21,
    'eggGroups': ['Grass']
  },
  'vileplume': {
    'num': 45,
    'species': 'Vileplume',
    'types': ['Grass', 'Poison'],
    'baseStats': {
      'hp': 75,
      'atk': 80,
      'def': 85,
      'spa': 110,
      'spd': 90,
      'spe': 50
    },
    'abilities': {
      '0': 'Chlorophyll',
      'H': 'Effect Spore'
    },
    'heightm': 1.2,
    'weightkg': 18.6,
    'color': 'Red',
    'prevo': 'gloom',
    'evoLevel': 21,
    'eggGroups': ['Grass']
  },
  'paras': {
    'num': 46,
    'species': 'Paras',
    'types': ['Bug', 'Grass'],
    'baseStats': {
      'hp': 35,
      'atk': 70,
      'def': 55,
      'spa': 45,
      'spd': 55,
      'spe': 25
    },
    'abilities': {
      '0': 'Effect Spore',
      '1': 'Dry Skin',
      'H': 'Damp'
    },
    'heightm': 0.3,
    'weightkg': 5.4,
    'color': 'Red',
    'evos': ['parasect'],
    'eggGroups': ['Bug', 'Grass']
  },
  'parasect': {
    'num': 47,
    'species': 'Parasect',
    'types': ['Bug', 'Grass'],
    'baseStats': {
      'hp': 60,
      'atk': 95,
      'def': 80,
      'spa': 60,
      'spd': 80,
      'spe': 30
    },
    'abilities': {
      '0': 'Effect Spore',
      '1': 'Dry Skin',
      'H': 'Damp'
    },
    'heightm': 1,
    'weightkg': 29.5,
    'color': 'Red',
    'prevo': 'paras',
    'evoLevel': 24,
    'eggGroups': ['Bug', 'Grass']
  },
  'venonat': {
    'num': 48,
    'species': 'Venonat',
    'types': ['Bug', 'Poison'],
    'baseStats': {
      'hp': 60,
      'atk': 55,
      'def': 50,
      'spa': 40,
      'spd': 55,
      'spe': 45
    },
    'abilities': {
      '0': 'Compound Eyes',
      '1': 'Tinted Lens',
      'H': 'Run Away'
    },
    'heightm': 1,
    'weightkg': 30,
    'color': 'Purple',
    'evos': ['venomoth'],
    'eggGroups': ['Bug']
  },
  'venomoth': {
    'num': 49,
    'species': 'Venomoth',
    'types': ['Bug', 'Poison'],
    'baseStats': {
      'hp': 70,
      'atk': 65,
      'def': 60,
      'spa': 90,
      'spd': 75,
      'spe': 90
    },
    'abilities': {
      '0': 'Shield Dust',
      '1': 'Tinted Lens',
      'H': 'Wonder Skin'
    },
    'heightm': 1.5,
    'weightkg': 12.5,
    'color': 'Purple',
    'prevo': 'venonat',
    'evoLevel': 31,
    'eggGroups': ['Bug']
  },
  'diglett': {
    'num': 50,
    'species': 'Diglett',
    'types': ['Ground'],
    'baseStats': {
      'hp': 10,
      'atk': 55,
      'def': 25,
      'spa': 35,
      'spd': 45,
      'spe': 95
    },
    'abilities': {
      '0': 'Sand Veil',
      '1': 'Arena Trap',
      'H': 'Sand Force'
    },
    'heightm': 0.2,
    'weightkg': 0.8,
    'color': 'Brown',
    'evos': ['dugtrio'],
    'eggGroups': ['Field'],
    'otherFormes': ['diglettalola']
  },
  'diglettalola': {
    'num': 50,
    'species': 'Diglett-Alola',
    'baseSpecies': 'Diglett',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Ground', 'Steel'],
    'baseStats': {
      'hp': 10,
      'atk': 55,
      'def': 30,
      'spa': 35,
      'spd': 45,
      'spe': 90
    },
    'abilities': {
      '0': 'Sand Veil',
      '1': 'Tangling Hair',
      'H': 'Sand Force'
    },
    'heightm': 0.2,
    'weightkg': 1,
    'color': 'Brown',
    'evos': ['dugtrioalola'],
    'eggGroups': ['Field']
  },
  'dugtrio': {
    'num': 51,
    'species': 'Dugtrio',
    'types': ['Ground'],
    'baseStats': {
      'hp': 35,
      'atk': 100,
      'def': 50,
      'spa': 50,
      'spd': 70,
      'spe': 120
    },
    'abilities': {
      '0': 'Sand Veil',
      '1': 'Arena Trap',
      'H': 'Sand Force'
    },
    'heightm': 0.7,
    'weightkg': 33.3,
    'color': 'Brown',
    'prevo': 'diglett',
    'evoLevel': 26,
    'eggGroups': ['Field'],
    'otherFormes': ['dugtrioalola']
  },
  'dugtrioalola': {
    'num': 51,
    'species': 'Dugtrio-Alola',
    'baseSpecies': 'Dugtrio',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Ground', 'Steel'],
    'baseStats': {
      'hp': 35,
      'atk': 100,
      'def': 60,
      'spa': 50,
      'spd': 70,
      'spe': 110
    },
    'abilities': {
      '0': 'Sand Veil',
      '1': 'Tangling Hair',
      'H': 'Sand Force'
    },
    'heightm': 0.7,
    'weightkg': 66.6,
    'color': 'Brown',
    'prevo': 'diglettalola',
    'evoLevel': 26,
    'eggGroups': ['Field']
  },
  'meowth': {
    'num': 52,
    'species': 'Meowth',
    'types': ['Normal'],
    'baseStats': {
      'hp': 40,
      'atk': 45,
      'def': 35,
      'spa': 40,
      'spd': 40,
      'spe': 90
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Technician',
      'H': 'Unnerve'
    },
    'heightm': 0.4,
    'weightkg': 4.2,
    'color': 'Yellow',
    'evos': ['persian'],
    'eggGroups': ['Field'],
    'otherFormes': ['meowthalola']
  },
  'meowthalola': {
    'num': 52,
    'species': 'Meowth-Alola',
    'baseSpecies': 'Meowth',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Dark'],
    'baseStats': {
      'hp': 40,
      'atk': 35,
      'def': 35,
      'spa': 50,
      'spd': 40,
      'spe': 90
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Technician',
      'H': 'Rattled'
    },
    'heightm': 0.4,
    'weightkg': 4.2,
    'color': 'Blue',
    'evos': ['persianalola'],
    'eggGroups': ['Field']
  },
  'persian': {
    'num': 53,
    'species': 'Persian',
    'types': ['Normal'],
    'baseStats': {
      'hp': 65,
      'atk': 70,
      'def': 60,
      'spa': 65,
      'spd': 65,
      'spe': 115
    },
    'abilities': {
      '0': 'Limber',
      '1': 'Technician',
      'H': 'Unnerve'
    },
    'heightm': 1,
    'weightkg': 32,
    'color': 'Yellow',
    'prevo': 'meowth',
    'evoLevel': 28,
    'eggGroups': ['Field'],
    'otherFormes': ['persianalola']
  },
  'persianalola': {
    'num': 53,
    'species': 'Persian-Alola',
    'baseSpecies': 'Persian',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Dark'],
    'baseStats': {
      'hp': 65,
      'atk': 60,
      'def': 60,
      'spa': 75,
      'spd': 65,
      'spe': 115
    },
    'abilities': {
      '0': 'Fur Coat',
      '1': 'Technician',
      'H': 'Rattled'
    },
    'heightm': 1.1,
    'weightkg': 33,
    'color': 'Blue',
    'prevo': 'meowthalola',
    'evoLevel': 2,
    'eggGroups': ['Field']
  },
  'psyduck': {
    'num': 54,
    'species': 'Psyduck',
    'types': ['Water'],
    'baseStats': {
      'hp': 50,
      'atk': 52,
      'def': 48,
      'spa': 65,
      'spd': 50,
      'spe': 55
    },
    'abilities': {
      '0': 'Damp',
      '1': 'Cloud Nine',
      'H': 'Swift Swim'
    },
    'heightm': 0.8,
    'weightkg': 19.6,
    'color': 'Yellow',
    'evos': ['golduck'],
    'eggGroups': ['Water 1', 'Field']
  },
  'golduck': {
    'num': 55,
    'species': 'Golduck',
    'types': ['Water'],
    'baseStats': {
      'hp': 80,
      'atk': 82,
      'def': 78,
      'spa': 95,
      'spd': 80,
      'spe': 85
    },
    'abilities': {
      '0': 'Damp',
      '1': 'Cloud Nine',
      'H': 'Swift Swim'
    },
    'heightm': 1.7,
    'weightkg': 76.6,
    'color': 'Blue',
    'prevo': 'psyduck',
    'evoLevel': 33,
    'eggGroups': ['Water 1', 'Field']
  },
  'mankey': {
    'num': 56,
    'species': 'Mankey',
    'types': ['Fighting'],
    'baseStats': {
      'hp': 40,
      'atk': 80,
      'def': 35,
      'spa': 35,
      'spd': 45,
      'spe': 70
    },
    'abilities': {
      '0': 'Vital Spirit',
      '1': 'Anger Point',
      'H': 'Defiant'
    },
    'heightm': 0.5,
    'weightkg': 28,
    'color': 'Brown',
    'evos': ['primeape'],
    'eggGroups': ['Field']
  },
  'primeape': {
    'num': 57,
    'species': 'Primeape',
    'types': ['Fighting'],
    'baseStats': {
      'hp': 65,
      'atk': 105,
      'def': 60,
      'spa': 60,
      'spd': 70,
      'spe': 95
    },
    'abilities': {
      '0': 'Vital Spirit',
      '1': 'Anger Point',
      'H': 'Defiant'
    },
    'heightm': 1,
    'weightkg': 32,
    'color': 'Brown',
    'prevo': 'mankey',
    'evoLevel': 28,
    'eggGroups': ['Field']
  },
  'growlithe': {
    'num': 58,
    'species': 'Growlithe',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 55,
      'atk': 70,
      'def': 45,
      'spa': 70,
      'spd': 50,
      'spe': 60
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Flash Fire',
      'H': 'Justified'
    },
    'heightm': 0.7,
    'weightkg': 19,
    'color': 'Brown',
    'evos': ['arcanine'],
    'eggGroups': ['Field']
  },
  'arcanine': {
    'num': 59,
    'species': 'Arcanine',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 90,
      'atk': 110,
      'def': 80,
      'spa': 100,
      'spd': 80,
      'spe': 95
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Flash Fire',
      'H': 'Justified'
    },
    'heightm': 1.9,
    'weightkg': 155,
    'color': 'Brown',
    'prevo': 'growlithe',
    'evoLevel': 1,
    'eggGroups': ['Field']
  },
  'poliwag': {
    'num': 60,
    'species': 'Poliwag',
    'types': ['Water'],
    'baseStats': {
      'hp': 40,
      'atk': 50,
      'def': 40,
      'spa': 40,
      'spd': 40,
      'spe': 90
    },
    'abilities': {
      '0': 'Water Absorb',
      '1': 'Damp',
      'H': 'Swift Swim'
    },
    'heightm': 0.6,
    'weightkg': 12.4,
    'color': 'Blue',
    'evos': ['poliwhirl'],
    'eggGroups': ['Water 1']
  },
  'poliwhirl': {
    'num': 61,
    'species': 'Poliwhirl',
    'types': ['Water'],
    'baseStats': {
      'hp': 65,
      'atk': 65,
      'def': 65,
      'spa': 50,
      'spd': 50,
      'spe': 90
    },
    'abilities': {
      '0': 'Water Absorb',
      '1': 'Damp',
      'H': 'Swift Swim'
    },
    'heightm': 1,
    'weightkg': 20,
    'color': 'Blue',
    'prevo': 'poliwag',
    'evos': ['poliwrath', 'politoed'],
    'evoLevel': 25,
    'eggGroups': ['Water 1']
  },
  'poliwrath': {
    'num': 62,
    'species': 'Poliwrath',
    'types': ['Water', 'Fighting'],
    'baseStats': {
      'hp': 90,
      'atk': 95,
      'def': 95,
      'spa': 70,
      'spd': 90,
      'spe': 70
    },
    'abilities': {
      '0': 'Water Absorb',
      '1': 'Damp',
      'H': 'Swift Swim'
    },
    'heightm': 1.3,
    'weightkg': 54,
    'color': 'Blue',
    'prevo': 'poliwhirl',
    'evoLevel': 25,
    'eggGroups': ['Water 1']
  },
  'abra': {
    'num': 63,
    'species': 'Abra',
    'types': ['Psychic'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 25,
      'atk': 20,
      'def': 15,
      'spa': 105,
      'spd': 55,
      'spe': 90
    },
    'abilities': {
      '0': 'Synchronize',
      '1': 'Inner Focus',
      'H': 'Magic Guard'
    },
    'heightm': 0.9,
    'weightkg': 19.5,
    'color': 'Brown',
    'evos': ['kadabra'],
    'eggGroups': ['Human-Like']
  },
  'kadabra': {
    'num': 64,
    'species': 'Kadabra',
    'types': ['Psychic'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 40,
      'atk': 35,
      'def': 30,
      'spa': 120,
      'spd': 70,
      'spe': 105
    },
    'abilities': {
      '0': 'Synchronize',
      '1': 'Inner Focus',
      'H': 'Magic Guard'
    },
    'heightm': 1.3,
    'weightkg': 56.5,
    'color': 'Brown',
    'prevo': 'abra',
    'evos': ['alakazam'],
    'evoLevel': 16,
    'eggGroups': ['Human-Like']
  },
  'alakazam': {
    'num': 65,
    'species': 'Alakazam',
    'types': ['Psychic'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 55,
      'atk': 50,
      'def': 45,
      'spa': 135,
      'spd': 95,
      'spe': 120
    },
    'abilities': {
      '0': 'Synchronize',
      '1': 'Inner Focus',
      'H': 'Magic Guard'
    },
    'heightm': 1.5,
    'weightkg': 48,
    'color': 'Brown',
    'prevo': 'kadabra',
    'evoLevel': 16,
    'eggGroups': ['Human-Like'],
    'otherFormes': ['alakazammega']
  },
  'alakazammega': {
    'num': 65,
    'species': 'Alakazam-Mega',
    'baseSpecies': 'Alakazam',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Psychic'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 55,
      'atk': 50,
      'def': 65,
      'spa': 175,
      'spd': 105,
      'spe': 150
    },
    'abilities': {'0': 'Trace'},
    'heightm': 1.2,
    'weightkg': 48,
    'color': 'Brown',
    'eggGroups': ['Human-Like']
  },
  'machop': {
    'num': 66,
    'species': 'Machop',
    'types': ['Fighting'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 70,
      'atk': 80,
      'def': 50,
      'spa': 35,
      'spd': 35,
      'spe': 35
    },
    'abilities': {
      '0': 'Guts',
      '1': 'No Guard',
      'H': 'Steadfast'
    },
    'heightm': 0.8,
    'weightkg': 19.5,
    'color': 'Gray',
    'evos': ['machoke'],
    'eggGroups': ['Human-Like']
  },
  'machoke': {
    'num': 67,
    'species': 'Machoke',
    'types': ['Fighting'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 80,
      'atk': 100,
      'def': 70,
      'spa': 50,
      'spd': 60,
      'spe': 45
    },
    'abilities': {
      '0': 'Guts',
      '1': 'No Guard',
      'H': 'Steadfast'
    },
    'heightm': 1.5,
    'weightkg': 70.5,
    'color': 'Gray',
    'prevo': 'machop',
    'evos': ['machamp'],
    'evoLevel': 28,
    'eggGroups': ['Human-Like']
  },
  'machamp': {
    'num': 68,
    'species': 'Machamp',
    'types': ['Fighting'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 90,
      'atk': 130,
      'def': 80,
      'spa': 65,
      'spd': 85,
      'spe': 55
    },
    'abilities': {
      '0': 'Guts',
      '1': 'No Guard',
      'H': 'Steadfast'
    },
    'heightm': 1.6,
    'weightkg': 130,
    'color': 'Gray',
    'prevo': 'machoke',
    'evoLevel': 28,
    'eggGroups': ['Human-Like']
  },
  'bellsprout': {
    'num': 69,
    'species': 'Bellsprout',
    'types': ['Grass', 'Poison'],
    'baseStats': {
      'hp': 50,
      'atk': 75,
      'def': 35,
      'spa': 70,
      'spd': 30,
      'spe': 40
    },
    'abilities': {
      '0': 'Chlorophyll',
      'H': 'Gluttony'
    },
    'heightm': 0.7,
    'weightkg': 4,
    'color': 'Green',
    'evos': ['weepinbell'],
    'eggGroups': ['Grass']
  },
  'weepinbell': {
    'num': 70,
    'species': 'Weepinbell',
    'types': ['Grass', 'Poison'],
    'baseStats': {
      'hp': 65,
      'atk': 90,
      'def': 50,
      'spa': 85,
      'spd': 45,
      'spe': 55
    },
    'abilities': {
      '0': 'Chlorophyll',
      'H': 'Gluttony'
    },
    'heightm': 1,
    'weightkg': 6.4,
    'color': 'Green',
    'prevo': 'bellsprout',
    'evos': ['victreebel'],
    'evoLevel': 21,
    'eggGroups': ['Grass']
  },
  'victreebel': {
    'num': 71,
    'species': 'Victreebel',
    'types': ['Grass', 'Poison'],
    'baseStats': {
      'hp': 80,
      'atk': 105,
      'def': 65,
      'spa': 100,
      'spd': 70,
      'spe': 70
    },
    'abilities': {
      '0': 'Chlorophyll',
      'H': 'Gluttony'
    },
    'heightm': 1.7,
    'weightkg': 15.5,
    'color': 'Green',
    'prevo': 'weepinbell',
    'evoLevel': 21,
    'eggGroups': ['Grass']
  },
  'tentacool': {
    'num': 72,
    'species': 'Tentacool',
    'types': ['Water', 'Poison'],
    'baseStats': {
      'hp': 40,
      'atk': 40,
      'def': 35,
      'spa': 50,
      'spd': 100,
      'spe': 70
    },
    'abilities': {
      '0': 'Clear Body',
      '1': 'Liquid Ooze',
      'H': 'Rain Dish'
    },
    'heightm': 0.9,
    'weightkg': 45.5,
    'color': 'Blue',
    'evos': ['tentacruel'],
    'eggGroups': ['Water 3']
  },
  'tentacruel': {
    'num': 73,
    'species': 'Tentacruel',
    'types': ['Water', 'Poison'],
    'baseStats': {
      'hp': 80,
      'atk': 70,
      'def': 65,
      'spa': 80,
      'spd': 120,
      'spe': 100
    },
    'abilities': {
      '0': 'Clear Body',
      '1': 'Liquid Ooze',
      'H': 'Rain Dish'
    },
    'heightm': 1.6,
    'weightkg': 55,
    'color': 'Blue',
    'prevo': 'tentacool',
    'evoLevel': 30,
    'eggGroups': ['Water 3']
  },
  'geodude': {
    'num': 74,
    'species': 'Geodude',
    'types': ['Rock', 'Ground'],
    'baseStats': {
      'hp': 40,
      'atk': 80,
      'def': 100,
      'spa': 30,
      'spd': 30,
      'spe': 20
    },
    'abilities': {
      '0': 'Rock Head',
      '1': 'Sturdy',
      'H': 'Sand Veil'
    },
    'heightm': 0.4,
    'weightkg': 20,
    'color': 'Brown',
    'evos': ['graveler'],
    'eggGroups': ['Mineral'],
    'otherFormes': ['geodudealola']
  },
  'geodudealola': {
    'num': 74,
    'species': 'Geodude-Alola',
    'baseSpecies': 'Geodude',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Rock', 'Electric'],
    'baseStats': {
      'hp': 40,
      'atk': 80,
      'def': 100,
      'spa': 30,
      'spd': 30,
      'spe': 20
    },
    'abilities': {
      '0': 'Magnet Pull',
      '1': 'Sturdy',
      'H': 'Galvanize'
    },
    'heightm': 0.4,
    'weightkg': 20.3,
    'color': 'Gray',
    'evos': ['graveleralola'],
    'eggGroups': ['Mineral']
  },
  'graveler': {
    'num': 75,
    'species': 'Graveler',
    'types': ['Rock', 'Ground'],
    'baseStats': {
      'hp': 55,
      'atk': 95,
      'def': 115,
      'spa': 45,
      'spd': 45,
      'spe': 35
    },
    'abilities': {
      '0': 'Rock Head',
      '1': 'Sturdy',
      'H': 'Sand Veil'
    },
    'heightm': 1,
    'weightkg': 105,
    'color': 'Brown',
    'prevo': 'geodude',
    'evos': ['golem'],
    'evoLevel': 25,
    'eggGroups': ['Mineral'],
    'otherFormes': ['graveleralola']
  },
  'graveleralola': {
    'num': 75,
    'species': 'Graveler-Alola',
    'baseSpecies': 'Graveler',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Rock', 'Electric'],
    'baseStats': {
      'hp': 55,
      'atk': 95,
      'def': 115,
      'spa': 45,
      'spd': 45,
      'spe': 35
    },
    'abilities': {
      '0': 'Magnet Pull',
      '1': 'Sturdy',
      'H': 'Galvanize'
    },
    'heightm': 1,
    'weightkg': 110,
    'color': 'Gray',
    'prevo': 'geodudealola',
    'evos': ['golemalola'],
    'evoLevel': 25,
    'eggGroups': ['Mineral']
  },
  'golem': {
    'num': 76,
    'species': 'Golem',
    'types': ['Rock', 'Ground'],
    'baseStats': {
      'hp': 80,
      'atk': 120,
      'def': 130,
      'spa': 55,
      'spd': 65,
      'spe': 45
    },
    'abilities': {
      '0': 'Rock Head',
      '1': 'Sturdy',
      'H': 'Sand Veil'
    },
    'heightm': 1.4,
    'weightkg': 300,
    'color': 'Brown',
    'prevo': 'graveler',
    'evoLevel': 25,
    'eggGroups': ['Mineral'],
    'otherFormes': ['golemalola']
  },
  'golemalola': {
    'num': 76,
    'species': 'Golem-Alola',
    'baseSpecies': 'Golem',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Rock', 'Electric'],
    'baseStats': {
      'hp': 80,
      'atk': 120,
      'def': 130,
      'spa': 55,
      'spd': 65,
      'spe': 45
    },
    'abilities': {
      '0': 'Magnet Pull',
      '1': 'Sturdy',
      'H': 'Galvanize'
    },
    'heightm': 1.7,
    'weightkg': 316,
    'color': 'Gray',
    'prevo': 'graveleralola',
    'evoLevel': 25,
    'eggGroups': ['Mineral']
  },
  'ponyta': {
    'num': 77,
    'species': 'Ponyta',
    'types': ['Fire'],
    'baseStats': {
      'hp': 50,
      'atk': 85,
      'def': 55,
      'spa': 65,
      'spd': 65,
      'spe': 90
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Flash Fire',
      'H': 'Flame Body'
    },
    'heightm': 1,
    'weightkg': 30,
    'color': 'Yellow',
    'evos': ['rapidash'],
    'eggGroups': ['Field']
  },
  'rapidash': {
    'num': 78,
    'species': 'Rapidash',
    'types': ['Fire'],
    'baseStats': {
      'hp': 65,
      'atk': 100,
      'def': 70,
      'spa': 80,
      'spd': 80,
      'spe': 105
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Flash Fire',
      'H': 'Flame Body'
    },
    'heightm': 1.7,
    'weightkg': 95,
    'color': 'Yellow',
    'prevo': 'ponyta',
    'evoLevel': 40,
    'eggGroups': ['Field']
  },
  'slowpoke': {
    'num': 79,
    'species': 'Slowpoke',
    'types': ['Water', 'Psychic'],
    'baseStats': {
      'hp': 90,
      'atk': 65,
      'def': 65,
      'spa': 40,
      'spd': 40,
      'spe': 15
    },
    'abilities': {
      '0': 'Oblivious',
      '1': 'Own Tempo',
      'H': 'Regenerator'
    },
    'heightm': 1.2,
    'weightkg': 36,
    'color': 'Pink',
    'evos': ['slowbro', 'slowking'],
    'eggGroups': ['Monster', 'Water 1']
  },
  'slowbro': {
    'num': 80,
    'species': 'Slowbro',
    'types': ['Water', 'Psychic'],
    'baseStats': {
      'hp': 95,
      'atk': 75,
      'def': 110,
      'spa': 100,
      'spd': 80,
      'spe': 30
    },
    'abilities': {
      '0': 'Oblivious',
      '1': 'Own Tempo',
      'H': 'Regenerator'
    },
    'heightm': 1.6,
    'weightkg': 78.5,
    'color': 'Pink',
    'prevo': 'slowpoke',
    'evoLevel': 37,
    'eggGroups': ['Monster', 'Water 1'],
    'otherFormes': ['slowbromega']
  },
  'slowbromega': {
    'num': 80,
    'species': 'Slowbro-Mega',
    'baseSpecies': 'Slowbro',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Water', 'Psychic'],
    'baseStats': {
      'hp': 95,
      'atk': 75,
      'def': 180,
      'spa': 130,
      'spd': 80,
      'spe': 30
    },
    'abilities': {'0': 'Shell Armor'},
    'heightm': 2,
    'weightkg': 120,
    'color': 'Pink',
    'eggGroups': ['Monster', 'Water 1']
  },
  'magnemite': {
    'num': 81,
    'species': 'Magnemite',
    'types': ['Electric', 'Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 25,
      'atk': 35,
      'def': 70,
      'spa': 95,
      'spd': 55,
      'spe': 45
    },
    'abilities': {
      '0': 'Magnet Pull',
      '1': 'Sturdy',
      'H': 'Analytic'
    },
    'heightm': 0.3,
    'weightkg': 6,
    'color': 'Gray',
    'evos': ['magneton'],
    'eggGroups': ['Mineral']
  },
  'magneton': {
    'num': 82,
    'species': 'Magneton',
    'types': ['Electric', 'Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 60,
      'def': 95,
      'spa': 120,
      'spd': 70,
      'spe': 70
    },
    'abilities': {
      '0': 'Magnet Pull',
      '1': 'Sturdy',
      'H': 'Analytic'
    },
    'heightm': 1,
    'weightkg': 60,
    'color': 'Gray',
    'prevo': 'magnemite',
    'evos': ['magnezone'],
    'evoLevel': 30,
    'eggGroups': ['Mineral']
  },
  'farfetchd': {
    'num': 83,
    'species': 'Farfetch\'d',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 52,
      'atk': 90,
      'def': 55,
      'spa': 58,
      'spd': 62,
      'spe': 60
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Inner Focus',
      'H': 'Defiant'
    },
    'heightm': 0.8,
    'weightkg': 15,
    'color': 'Brown',
    'eggGroups': ['Flying', 'Field']
  },
  'doduo': {
    'num': 84,
    'species': 'Doduo',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 35,
      'atk': 85,
      'def': 45,
      'spa': 35,
      'spd': 35,
      'spe': 75
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Early Bird',
      'H': 'Tangled Feet'
    },
    'heightm': 1.4,
    'weightkg': 39.2,
    'color': 'Brown',
    'evos': ['dodrio'],
    'eggGroups': ['Flying']
  },
  'dodrio': {
    'num': 85,
    'species': 'Dodrio',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 60,
      'atk': 110,
      'def': 70,
      'spa': 60,
      'spd': 60,
      'spe': 110
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Early Bird',
      'H': 'Tangled Feet'
    },
    'heightm': 1.8,
    'weightkg': 85.2,
    'color': 'Brown',
    'prevo': 'doduo',
    'evoLevel': 31,
    'eggGroups': ['Flying']
  },
  'seel': {
    'num': 86,
    'species': 'Seel',
    'types': ['Water'],
    'baseStats': {
      'hp': 65,
      'atk': 45,
      'def': 55,
      'spa': 45,
      'spd': 70,
      'spe': 45
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Hydration',
      'H': 'Ice Body'
    },
    'heightm': 1.1,
    'weightkg': 90,
    'color': 'White',
    'evos': ['dewgong'],
    'eggGroups': ['Water 1', 'Field']
  },
  'dewgong': {
    'num': 87,
    'species': 'Dewgong',
    'types': ['Water', 'Ice'],
    'baseStats': {
      'hp': 90,
      'atk': 70,
      'def': 80,
      'spa': 70,
      'spd': 95,
      'spe': 70
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Hydration',
      'H': 'Ice Body'
    },
    'heightm': 1.7,
    'weightkg': 120,
    'color': 'White',
    'prevo': 'seel',
    'evoLevel': 34,
    'eggGroups': ['Water 1', 'Field']
  },
  'grimer': {
    'num': 88,
    'species': 'Grimer',
    'types': ['Poison'],
    'baseStats': {
      'hp': 80,
      'atk': 80,
      'def': 50,
      'spa': 40,
      'spd': 50,
      'spe': 25
    },
    'abilities': {
      '0': 'Stench',
      '1': 'Sticky Hold',
      'H': 'Poison Touch'
    },
    'heightm': 0.9,
    'weightkg': 30,
    'color': 'Purple',
    'evos': ['muk'],
    'eggGroups': ['Amorphous'],
    'otherFormes': ['grimeralola']
  },
  'grimeralola': {
    'num': 88,
    'species': 'Grimer-Alola',
    'baseSpecies': 'Grimer',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Poison', 'Dark'],
    'baseStats': {
      'hp': 80,
      'atk': 80,
      'def': 50,
      'spa': 40,
      'spd': 50,
      'spe': 25
    },
    'abilities': {
      '0': 'Poison Touch',
      '1': 'Gluttony',
      'H': 'Power of Alchemy'
    },
    'heightm': 0.7,
    'weightkg': 42,
    'color': 'Green',
    'evos': ['mukalola'],
    'eggGroups': ['Amorphous']
  },
  'muk': {
    'num': 89,
    'species': 'Muk',
    'types': ['Poison'],
    'baseStats': {
      'hp': 105,
      'atk': 105,
      'def': 75,
      'spa': 65,
      'spd': 100,
      'spe': 50
    },
    'abilities': {
      '0': 'Stench',
      '1': 'Sticky Hold',
      'H': 'Poison Touch'
    },
    'heightm': 1.2,
    'weightkg': 30,
    'color': 'Purple',
    'prevo': 'grimer',
    'evoLevel': 38,
    'eggGroups': ['Amorphous'],
    'otherFormes': ['mukalola']
  },
  'mukalola': {
    'num': 89,
    'species': 'Muk-Alola',
    'baseSpecies': 'Muk',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Poison', 'Dark'],
    'baseStats': {
      'hp': 105,
      'atk': 105,
      'def': 75,
      'spa': 65,
      'spd': 100,
      'spe': 50
    },
    'abilities': {
      '0': 'Poison Touch',
      '1': 'Gluttony',
      'H': 'Power of Alchemy'
    },
    'heightm': 1,
    'weightkg': 52,
    'color': 'Green',
    'prevo': 'grimeralola',
    'evoLevel': 38,
    'eggGroups': ['Amorphous']
  },
  'shellder': {
    'num': 90,
    'species': 'Shellder',
    'types': ['Water'],
    'baseStats': {
      'hp': 30,
      'atk': 65,
      'def': 100,
      'spa': 45,
      'spd': 25,
      'spe': 40
    },
    'abilities': {
      '0': 'Shell Armor',
      '1': 'Skill Link',
      'H': 'Overcoat'
    },
    'heightm': 0.3,
    'weightkg': 4,
    'color': 'Purple',
    'evos': ['cloyster'],
    'eggGroups': ['Water 3']
  },
  'cloyster': {
    'num': 91,
    'species': 'Cloyster',
    'types': ['Water', 'Ice'],
    'baseStats': {
      'hp': 50,
      'atk': 95,
      'def': 180,
      'spa': 85,
      'spd': 45,
      'spe': 70
    },
    'abilities': {
      '0': 'Shell Armor',
      '1': 'Skill Link',
      'H': 'Overcoat'
    },
    'heightm': 1.5,
    'weightkg': 132.5,
    'color': 'Purple',
    'prevo': 'shellder',
    'evoLevel': 1,
    'eggGroups': ['Water 3']
  },
  'gastly': {
    'num': 92,
    'species': 'Gastly',
    'types': ['Ghost', 'Poison'],
    'baseStats': {
      'hp': 30,
      'atk': 35,
      'def': 30,
      'spa': 100,
      'spd': 35,
      'spe': 80
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.3,
    'weightkg': 0.1,
    'color': 'Purple',
    'evos': ['haunter'],
    'eggGroups': ['Amorphous']
  },
  'haunter': {
    'num': 93,
    'species': 'Haunter',
    'types': ['Ghost', 'Poison'],
    'baseStats': {
      'hp': 45,
      'atk': 50,
      'def': 45,
      'spa': 115,
      'spd': 55,
      'spe': 95
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.6,
    'weightkg': 0.1,
    'color': 'Purple',
    'prevo': 'gastly',
    'evos': ['gengar'],
    'evoLevel': 25,
    'eggGroups': ['Amorphous']
  },
  'gengar': {
    'num': 94,
    'species': 'Gengar',
    'types': ['Ghost', 'Poison'],
    'baseStats': {
      'hp': 60,
      'atk': 65,
      'def': 60,
      'spa': 130,
      'spd': 75,
      'spe': 110
    },
    'abilities': {'0': 'Cursed Body'},
    'heightm': 1.5,
    'weightkg': 40.5,
    'color': 'Purple',
    'prevo': 'haunter',
    'evoLevel': 25,
    'eggGroups': ['Amorphous'],
    'otherFormes': ['gengarmega']
  },
  'gengarmega': {
    'num': 94,
    'species': 'Gengar-Mega',
    'baseSpecies': 'Gengar',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Ghost', 'Poison'],
    'baseStats': {
      'hp': 60,
      'atk': 65,
      'def': 80,
      'spa': 170,
      'spd': 95,
      'spe': 130
    },
    'abilities': {'0': 'Shadow Tag'},
    'heightm': 1.4,
    'weightkg': 40.5,
    'color': 'Purple',
    'eggGroups': ['Amorphous']
  },
  'onix': {
    'num': 95,
    'species': 'Onix',
    'types': ['Rock', 'Ground'],
    'baseStats': {
      'hp': 35,
      'atk': 45,
      'def': 160,
      'spa': 30,
      'spd': 45,
      'spe': 70
    },
    'abilities': {
      '0': 'Rock Head',
      '1': 'Sturdy',
      'H': 'Weak Armor'
    },
    'heightm': 8.8,
    'weightkg': 210,
    'color': 'Gray',
    'evos': ['steelix'],
    'eggGroups': ['Mineral']
  },
  'drowzee': {
    'num': 96,
    'species': 'Drowzee',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 60,
      'atk': 48,
      'def': 45,
      'spa': 43,
      'spd': 90,
      'spe': 42
    },
    'abilities': {
      '0': 'Insomnia',
      '1': 'Forewarn',
      'H': 'Inner Focus'
    },
    'heightm': 1,
    'weightkg': 32.4,
    'color': 'Yellow',
    'evos': ['hypno'],
    'eggGroups': ['Human-Like']
  },
  'hypno': {
    'num': 97,
    'species': 'Hypno',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 85,
      'atk': 73,
      'def': 70,
      'spa': 73,
      'spd': 115,
      'spe': 67
    },
    'abilities': {
      '0': 'Insomnia',
      '1': 'Forewarn',
      'H': 'Inner Focus'
    },
    'heightm': 1.6,
    'weightkg': 75.6,
    'color': 'Yellow',
    'prevo': 'drowzee',
    'evoLevel': 26,
    'eggGroups': ['Human-Like']
  },
  'krabby': {
    'num': 98,
    'species': 'Krabby',
    'types': ['Water'],
    'baseStats': {
      'hp': 30,
      'atk': 105,
      'def': 90,
      'spa': 25,
      'spd': 25,
      'spe': 50
    },
    'abilities': {
      '0': 'Hyper Cutter',
      '1': 'Shell Armor',
      'H': 'Sheer Force'
    },
    'heightm': 0.4,
    'weightkg': 6.5,
    'color': 'Red',
    'evos': ['kingler'],
    'eggGroups': ['Water 3']
  },
  'kingler': {
    'num': 99,
    'species': 'Kingler',
    'types': ['Water'],
    'baseStats': {
      'hp': 55,
      'atk': 130,
      'def': 115,
      'spa': 50,
      'spd': 50,
      'spe': 75
    },
    'abilities': {
      '0': 'Hyper Cutter',
      '1': 'Shell Armor',
      'H': 'Sheer Force'
    },
    'heightm': 1.3,
    'weightkg': 60,
    'color': 'Red',
    'prevo': 'krabby',
    'evoLevel': 28,
    'eggGroups': ['Water 3']
  },
  'voltorb': {
    'num': 100,
    'species': 'Voltorb',
    'types': ['Electric'],
    'gender': 'N',
    'baseStats': {
      'hp': 40,
      'atk': 30,
      'def': 50,
      'spa': 55,
      'spd': 55,
      'spe': 100
    },
    'abilities': {
      '0': 'Soundproof',
      '1': 'Static',
      'H': 'Aftermath'
    },
    'heightm': 0.5,
    'weightkg': 10.4,
    'color': 'Red',
    'evos': ['electrode'],
    'eggGroups': ['Mineral']
  },
  'electrode': {
    'num': 101,
    'species': 'Electrode',
    'types': ['Electric'],
    'gender': 'N',
    'baseStats': {
      'hp': 60,
      'atk': 50,
      'def': 70,
      'spa': 80,
      'spd': 80,
      'spe': 150
    },
    'abilities': {
      '0': 'Soundproof',
      '1': 'Static',
      'H': 'Aftermath'
    },
    'heightm': 1.2,
    'weightkg': 66.6,
    'color': 'Red',
    'prevo': 'voltorb',
    'evoLevel': 30,
    'eggGroups': ['Mineral']
  },
  'exeggcute': {
    'num': 102,
    'species': 'Exeggcute',
    'types': ['Grass', 'Psychic'],
    'baseStats': {
      'hp': 60,
      'atk': 40,
      'def': 80,
      'spa': 60,
      'spd': 45,
      'spe': 40
    },
    'abilities': {
      '0': 'Chlorophyll',
      'H': 'Harvest'
    },
    'heightm': 0.4,
    'weightkg': 2.5,
    'color': 'Pink',
    'evos': ['exeggutor', 'exeggutoralola'],
    'eggGroups': ['Grass']
  },
  'exeggutor': {
    'num': 103,
    'species': 'Exeggutor',
    'types': ['Grass', 'Psychic'],
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 85,
      'spa': 125,
      'spd': 75,
      'spe': 55
    },
    'abilities': {
      '0': 'Chlorophyll',
      'H': 'Harvest'
    },
    'heightm': 2,
    'weightkg': 120,
    'color': 'Yellow',
    'prevo': 'exeggcute',
    'evoLevel': 1,
    'eggGroups': ['Grass'],
    'otherFormes': ['exeggutoralola']
  },
  'exeggutoralola': {
    'num': 103,
    'species': 'Exeggutor-Alola',
    'baseSpecies': 'Exeggutor',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Grass', 'Dragon'],
    'baseStats': {
      'hp': 95,
      'atk': 105,
      'def': 85,
      'spa': 125,
      'spd': 75,
      'spe': 45
    },
    'abilities': {
      '0': 'Frisk',
      'H': 'Harvest'
    },
    'heightm': 10.9,
    'weightkg': 415.6,
    'color': 'Yellow',
    'prevo': 'exeggcute',
    'evoLevel': 1,
    'eggGroups': ['Grass']
  },
  'cubone': {
    'num': 104,
    'species': 'Cubone',
    'types': ['Ground'],
    'baseStats': {
      'hp': 50,
      'atk': 50,
      'def': 95,
      'spa': 40,
      'spd': 50,
      'spe': 35
    },
    'abilities': {
      '0': 'Rock Head',
      '1': 'Lightning Rod',
      'H': 'Battle Armor'
    },
    'heightm': 0.4,
    'weightkg': 6.5,
    'color': 'Brown',
    'evos': ['marowak', 'marowakalola'],
    'eggGroups': ['Monster']
  },
  'marowak': {
    'num': 105,
    'species': 'Marowak',
    'types': ['Ground'],
    'baseStats': {
      'hp': 60,
      'atk': 80,
      'def': 110,
      'spa': 50,
      'spd': 80,
      'spe': 45
    },
    'abilities': {
      '0': 'Rock Head',
      '1': 'Lightning Rod',
      'H': 'Battle Armor'
    },
    'heightm': 1,
    'weightkg': 45,
    'color': 'Brown',
    'prevo': 'cubone',
    'evoLevel': 28,
    'eggGroups': ['Monster'],
    'otherFormes': ['marowakalola', 'marowakalolatotem']
  },
  'marowakalola': {
    'num': 105,
    'species': 'Marowak-Alola',
    'baseSpecies': 'Marowak',
    'forme': 'Alola',
    'formeLetter': 'A',
    'types': ['Fire', 'Ghost'],
    'baseStats': {
      'hp': 60,
      'atk': 80,
      'def': 110,
      'spa': 50,
      'spd': 80,
      'spe': 45
    },
    'abilities': {
      '0': 'Cursed Body',
      '1': 'Lightning Rod',
      'H': 'Rock Head'
    },
    'heightm': 1,
    'weightkg': 34,
    'color': 'Purple',
    'prevo': 'cubone',
    'evoLevel': 28,
    'eggGroups': ['Monster']
  },
  'marowakalolatotem': {
    'num': 105,
    'species': 'Marowak-Alola-Totem',
    'baseSpecies': 'Marowak',
    'forme': 'Alola-Totem',
    'formeLetter': 'T',
    'types': ['Fire', 'Ghost'],
    'baseStats': {
      'hp': 60,
      'atk': 80,
      'def': 110,
      'spa': 50,
      'spd': 80,
      'spe': 45
    },
    'abilities': {'0': 'Rock Head'},
    'heightm': 1.7,
    'weightkg': 98,
    'color': 'Purple',
    'eggGroups': ['Monster']
  },
  'hitmonlee': {
    'num': 106,
    'species': 'Hitmonlee',
    'types': ['Fighting'],
    'gender': 'M',
    'baseStats': {
      'hp': 50,
      'atk': 120,
      'def': 53,
      'spa': 35,
      'spd': 110,
      'spe': 87
    },
    'abilities': {
      '0': 'Limber',
      '1': 'Reckless',
      'H': 'Unburden'
    },
    'heightm': 1.5,
    'weightkg': 49.8,
    'color': 'Brown',
    'prevo': 'tyrogue',
    'evoLevel': 20,
    'eggGroups': ['Human-Like']
  },
  'hitmonchan': {
    'num': 107,
    'species': 'Hitmonchan',
    'types': ['Fighting'],
    'gender': 'M',
    'baseStats': {
      'hp': 50,
      'atk': 105,
      'def': 79,
      'spa': 35,
      'spd': 110,
      'spe': 76
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Iron Fist',
      'H': 'Inner Focus'
    },
    'heightm': 1.4,
    'weightkg': 50.2,
    'color': 'Brown',
    'prevo': 'tyrogue',
    'evoLevel': 20,
    'eggGroups': ['Human-Like']
  },
  'lickitung': {
    'num': 108,
    'species': 'Lickitung',
    'types': ['Normal'],
    'baseStats': {
      'hp': 90,
      'atk': 55,
      'def': 75,
      'spa': 60,
      'spd': 75,
      'spe': 30
    },
    'abilities': {
      '0': 'Own Tempo',
      '1': 'Oblivious',
      'H': 'Cloud Nine'
    },
    'heightm': 1.2,
    'weightkg': 65.5,
    'color': 'Pink',
    'evos': ['lickilicky'],
    'eggGroups': ['Monster']
  },
  'koffing': {
    'num': 109,
    'species': 'Koffing',
    'types': ['Poison'],
    'baseStats': {
      'hp': 40,
      'atk': 65,
      'def': 95,
      'spa': 60,
      'spd': 45,
      'spe': 35
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.6,
    'weightkg': 1,
    'color': 'Purple',
    'evos': ['weezing'],
    'eggGroups': ['Amorphous']
  },
  'weezing': {
    'num': 110,
    'species': 'Weezing',
    'types': ['Poison'],
    'baseStats': {
      'hp': 65,
      'atk': 90,
      'def': 120,
      'spa': 85,
      'spd': 70,
      'spe': 60
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.2,
    'weightkg': 9.5,
    'color': 'Purple',
    'prevo': 'koffing',
    'evoLevel': 35,
    'eggGroups': ['Amorphous']
  },
  'rhyhorn': {
    'num': 111,
    'species': 'Rhyhorn',
    'types': ['Ground', 'Rock'],
    'baseStats': {
      'hp': 80,
      'atk': 85,
      'def': 95,
      'spa': 30,
      'spd': 30,
      'spe': 25
    },
    'abilities': {
      '0': 'Lightning Rod',
      '1': 'Rock Head',
      'H': 'Reckless'
    },
    'heightm': 1,
    'weightkg': 115,
    'color': 'Gray',
    'evos': ['rhydon'],
    'eggGroups': ['Monster', 'Field']
  },
  'rhydon': {
    'num': 112,
    'species': 'Rhydon',
    'types': ['Ground', 'Rock'],
    'baseStats': {
      'hp': 105,
      'atk': 130,
      'def': 120,
      'spa': 45,
      'spd': 45,
      'spe': 40
    },
    'abilities': {
      '0': 'Lightning Rod',
      '1': 'Rock Head',
      'H': 'Reckless'
    },
    'heightm': 1.9,
    'weightkg': 120,
    'color': 'Gray',
    'prevo': 'rhyhorn',
    'evos': ['rhyperior'],
    'evoLevel': 42,
    'eggGroups': ['Monster', 'Field']
  },
  'chansey': {
    'num': 113,
    'species': 'Chansey',
    'types': ['Normal'],
    'gender': 'F',
    'baseStats': {
      'hp': 250,
      'atk': 5,
      'def': 5,
      'spa': 35,
      'spd': 105,
      'spe': 50
    },
    'abilities': {
      '0': 'Natural Cure',
      '1': 'Serene Grace',
      'H': 'Healer'
    },
    'heightm': 1.1,
    'weightkg': 34.6,
    'color': 'Pink',
    'prevo': 'happiny',
    'evos': ['blissey'],
    'evoLevel': 1,
    'eggGroups': ['Fairy']
  },
  'tangela': {
    'num': 114,
    'species': 'Tangela',
    'types': ['Grass'],
    'baseStats': {
      'hp': 65,
      'atk': 55,
      'def': 115,
      'spa': 100,
      'spd': 40,
      'spe': 60
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Leaf Guard',
      'H': 'Regenerator'
    },
    'heightm': 1,
    'weightkg': 35,
    'color': 'Blue',
    'evos': ['tangrowth'],
    'eggGroups': ['Grass']
  },
  'kangaskhan': {
    'num': 115,
    'species': 'Kangaskhan',
    'types': ['Normal'],
    'gender': 'F',
    'baseStats': {
      'hp': 105,
      'atk': 95,
      'def': 80,
      'spa': 40,
      'spd': 80,
      'spe': 90
    },
    'abilities': {
      '0': 'Early Bird',
      '1': 'Scrappy',
      'H': 'Inner Focus'
    },
    'heightm': 2.2,
    'weightkg': 80,
    'color': 'Brown',
    'eggGroups': ['Monster'],
    'otherFormes': ['kangaskhanmega']
  },
  'kangaskhanmega': {
    'num': 115,
    'species': 'Kangaskhan-Mega',
    'baseSpecies': 'Kangaskhan',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Normal'],
    'gender': 'F',
    'baseStats': {
      'hp': 105,
      'atk': 125,
      'def': 100,
      'spa': 60,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Parental Bond'},
    'heightm': 2.2,
    'weightkg': 100,
    'color': 'Brown',
    'eggGroups': ['Monster']
  },
  'horsea': {
    'num': 116,
    'species': 'Horsea',
    'types': ['Water'],
    'baseStats': {
      'hp': 30,
      'atk': 40,
      'def': 70,
      'spa': 70,
      'spd': 25,
      'spe': 60
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Sniper',
      'H': 'Damp'
    },
    'heightm': 0.4,
    'weightkg': 8,
    'color': 'Blue',
    'evos': ['seadra'],
    'eggGroups': ['Water 1', 'Dragon']
  },
  'seadra': {
    'num': 117,
    'species': 'Seadra',
    'types': ['Water'],
    'baseStats': {
      'hp': 55,
      'atk': 65,
      'def': 95,
      'spa': 95,
      'spd': 45,
      'spe': 85
    },
    'abilities': {
      '0': 'Poison Point',
      '1': 'Sniper',
      'H': 'Damp'
    },
    'heightm': 1.2,
    'weightkg': 25,
    'color': 'Blue',
    'prevo': 'horsea',
    'evos': ['kingdra'],
    'evoLevel': 32,
    'eggGroups': ['Water 1', 'Dragon']
  },
  'goldeen': {
    'num': 118,
    'species': 'Goldeen',
    'types': ['Water'],
    'baseStats': {
      'hp': 45,
      'atk': 67,
      'def': 60,
      'spa': 35,
      'spd': 50,
      'spe': 63
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Water Veil',
      'H': 'Lightning Rod'
    },
    'heightm': 0.6,
    'weightkg': 15,
    'color': 'Red',
    'evos': ['seaking'],
    'eggGroups': ['Water 2']
  },
  'seaking': {
    'num': 119,
    'species': 'Seaking',
    'types': ['Water'],
    'baseStats': {
      'hp': 80,
      'atk': 92,
      'def': 65,
      'spa': 65,
      'spd': 80,
      'spe': 68
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Water Veil',
      'H': 'Lightning Rod'
    },
    'heightm': 1.3,
    'weightkg': 39,
    'color': 'Red',
    'prevo': 'goldeen',
    'evoLevel': 33,
    'eggGroups': ['Water 2']
  },
  'staryu': {
    'num': 120,
    'species': 'Staryu',
    'types': ['Water'],
    'gender': 'N',
    'baseStats': {
      'hp': 30,
      'atk': 45,
      'def': 55,
      'spa': 70,
      'spd': 55,
      'spe': 85
    },
    'abilities': {
      '0': 'Illuminate',
      '1': 'Natural Cure',
      'H': 'Analytic'
    },
    'heightm': 0.8,
    'weightkg': 34.5,
    'color': 'Brown',
    'evos': ['starmie'],
    'eggGroups': ['Water 3']
  },
  'starmie': {
    'num': 121,
    'species': 'Starmie',
    'types': ['Water', 'Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 60,
      'atk': 75,
      'def': 85,
      'spa': 100,
      'spd': 85,
      'spe': 115
    },
    'abilities': {
      '0': 'Illuminate',
      '1': 'Natural Cure',
      'H': 'Analytic'
    },
    'heightm': 1.1,
    'weightkg': 80,
    'color': 'Purple',
    'prevo': 'staryu',
    'evoLevel': 1,
    'eggGroups': ['Water 3']
  },
  'mrmime': {
    'num': 122,
    'species': 'Mr. Mime',
    'types': ['Psychic', 'Fairy'],
    'baseStats': {
      'hp': 40,
      'atk': 45,
      'def': 65,
      'spa': 100,
      'spd': 120,
      'spe': 90
    },
    'abilities': {
      '0': 'Soundproof',
      '1': 'Filter',
      'H': 'Technician'
    },
    'heightm': 1.3,
    'weightkg': 54.5,
    'color': 'Pink',
    'prevo': 'mimejr',
    'evoLevel': 1,
    'evoMove': 'Mimic',
    'eggGroups': ['Human-Like']
  },
  'scyther': {
    'num': 123,
    'species': 'Scyther',
    'types': ['Bug', 'Flying'],
    'baseStats': {
      'hp': 70,
      'atk': 110,
      'def': 80,
      'spa': 55,
      'spd': 80,
      'spe': 105
    },
    'abilities': {
      '0': 'Swarm',
      '1': 'Technician',
      'H': 'Steadfast'
    },
    'heightm': 1.5,
    'weightkg': 56,
    'color': 'Green',
    'evos': ['scizor'],
    'eggGroups': ['Bug']
  },
  'jynx': {
    'num': 124,
    'species': 'Jynx',
    'types': ['Ice', 'Psychic'],
    'gender': 'F',
    'baseStats': {
      'hp': 65,
      'atk': 50,
      'def': 35,
      'spa': 115,
      'spd': 95,
      'spe': 95
    },
    'abilities': {
      '0': 'Oblivious',
      '1': 'Forewarn',
      'H': 'Dry Skin'
    },
    'heightm': 1.4,
    'weightkg': 40.6,
    'color': 'Red',
    'prevo': 'smoochum',
    'evoLevel': 30,
    'eggGroups': ['Human-Like']
  },
  'electabuzz': {
    'num': 125,
    'species': 'Electabuzz',
    'types': ['Electric'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 65,
      'atk': 83,
      'def': 57,
      'spa': 95,
      'spd': 85,
      'spe': 105
    },
    'abilities': {
      '0': 'Static',
      'H': 'Vital Spirit'
    },
    'heightm': 1.1,
    'weightkg': 30,
    'color': 'Yellow',
    'prevo': 'elekid',
    'evos': ['electivire'],
    'evoLevel': 30,
    'eggGroups': ['Human-Like']
  },
  'magmar': {
    'num': 126,
    'species': 'Magmar',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 65,
      'atk': 95,
      'def': 57,
      'spa': 100,
      'spd': 85,
      'spe': 93
    },
    'abilities': {
      '0': 'Flame Body',
      'H': 'Vital Spirit'
    },
    'heightm': 1.3,
    'weightkg': 44.5,
    'color': 'Red',
    'prevo': 'magby',
    'evos': ['magmortar'],
    'evoLevel': 30,
    'eggGroups': ['Human-Like']
  },
  'pinsir': {
    'num': 127,
    'species': 'Pinsir',
    'types': ['Bug'],
    'baseStats': {
      'hp': 65,
      'atk': 125,
      'def': 100,
      'spa': 55,
      'spd': 70,
      'spe': 85
    },
    'abilities': {
      '0': 'Hyper Cutter',
      '1': 'Mold Breaker',
      'H': 'Moxie'
    },
    'heightm': 1.5,
    'weightkg': 55,
    'color': 'Brown',
    'eggGroups': ['Bug'],
    'otherFormes': ['pinsirmega']
  },
  'pinsirmega': {
    'num': 127,
    'species': 'Pinsir-Mega',
    'baseSpecies': 'Pinsir',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Bug', 'Flying'],
    'baseStats': {
      'hp': 65,
      'atk': 155,
      'def': 120,
      'spa': 65,
      'spd': 90,
      'spe': 105
    },
    'abilities': {'0': 'Aerilate'},
    'heightm': 1.7,
    'weightkg': 59,
    'color': 'Brown',
    'eggGroups': ['Bug']
  },
  'tauros': {
    'num': 128,
    'species': 'Tauros',
    'types': ['Normal'],
    'gender': 'M',
    'baseStats': {
      'hp': 75,
      'atk': 100,
      'def': 95,
      'spa': 40,
      'spd': 70,
      'spe': 110
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Anger Point',
      'H': 'Sheer Force'
    },
    'heightm': 1.4,
    'weightkg': 88.4,
    'color': 'Brown',
    'eggGroups': ['Field']
  },
  'magikarp': {
    'num': 129,
    'species': 'Magikarp',
    'types': ['Water'],
    'baseStats': {
      'hp': 20,
      'atk': 10,
      'def': 55,
      'spa': 15,
      'spd': 20,
      'spe': 80
    },
    'abilities': {
      '0': 'Swift Swim',
      'H': 'Rattled'
    },
    'heightm': 0.9,
    'weightkg': 10,
    'color': 'Red',
    'evos': ['gyarados'],
    'eggGroups': ['Water 2', 'Dragon']
  },
  'gyarados': {
    'num': 130,
    'species': 'Gyarados',
    'types': ['Water', 'Flying'],
    'baseStats': {
      'hp': 95,
      'atk': 125,
      'def': 79,
      'spa': 60,
      'spd': 100,
      'spe': 81
    },
    'abilities': {
      '0': 'Intimidate',
      'H': 'Moxie'
    },
    'heightm': 6.5,
    'weightkg': 235,
    'color': 'Blue',
    'prevo': 'magikarp',
    'evoLevel': 20,
    'eggGroups': ['Water 2', 'Dragon'],
    'otherFormes': ['gyaradosmega']
  },
  'gyaradosmega': {
    'num': 130,
    'species': 'Gyarados-Mega',
    'baseSpecies': 'Gyarados',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Water', 'Dark'],
    'baseStats': {
      'hp': 95,
      'atk': 155,
      'def': 109,
      'spa': 70,
      'spd': 130,
      'spe': 81
    },
    'abilities': {'0': 'Mold Breaker'},
    'heightm': 6.5,
    'weightkg': 305,
    'color': 'Blue',
    'eggGroups': ['Water 2', 'Dragon']
  },
  'lapras': {
    'num': 131,
    'species': 'Lapras',
    'types': ['Water', 'Ice'],
    'baseStats': {
      'hp': 130,
      'atk': 85,
      'def': 80,
      'spa': 85,
      'spd': 95,
      'spe': 60
    },
    'abilities': {
      '0': 'Water Absorb',
      '1': 'Shell Armor',
      'H': 'Hydration'
    },
    'heightm': 2.5,
    'weightkg': 220,
    'color': 'Blue',
    'eggGroups': ['Monster', 'Water 1']
  },
  'ditto': {
    'num': 132,
    'species': 'Ditto',
    'types': ['Normal'],
    'gender': 'N',
    'baseStats': {
      'hp': 48,
      'atk': 48,
      'def': 48,
      'spa': 48,
      'spd': 48,
      'spe': 48
    },
    'abilities': {
      '0': 'Limber',
      'H': 'Imposter'
    },
    'heightm': 0.3,
    'weightkg': 4,
    'color': 'Purple',
    'eggGroups': ['Ditto']
  },
  'eevee': {
    'num': 133,
    'species': 'Eevee',
    'types': ['Normal'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 55,
      'atk': 55,
      'def': 50,
      'spa': 45,
      'spd': 65,
      'spe': 55
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Adaptability',
      'H': 'Anticipation'
    },
    'heightm': 0.3,
    'weightkg': 6.5,
    'color': 'Brown',
    'evos': ['vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon', 'sylveon'],
    'eggGroups': ['Field']
  },
  'vaporeon': {
    'num': 134,
    'species': 'Vaporeon',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 130,
      'atk': 65,
      'def': 60,
      'spa': 110,
      'spd': 95,
      'spe': 65
    },
    'abilities': {
      '0': 'Water Absorb',
      'H': 'Hydration'
    },
    'heightm': 1,
    'weightkg': 29,
    'color': 'Blue',
    'prevo': 'eevee',
    'evoLevel': 1,
    'eggGroups': ['Field']
  },
  'jolteon': {
    'num': 135,
    'species': 'Jolteon',
    'types': ['Electric'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 65,
      'atk': 65,
      'def': 60,
      'spa': 110,
      'spd': 95,
      'spe': 130
    },
    'abilities': {
      '0': 'Volt Absorb',
      'H': 'Quick Feet'
    },
    'heightm': 0.8,
    'weightkg': 24.5,
    'color': 'Yellow',
    'prevo': 'eevee',
    'evoLevel': 1,
    'eggGroups': ['Field']
  },
  'flareon': {
    'num': 136,
    'species': 'Flareon',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 65,
      'atk': 130,
      'def': 60,
      'spa': 95,
      'spd': 110,
      'spe': 65
    },
    'abilities': {
      '0': 'Flash Fire',
      'H': 'Guts'
    },
    'heightm': 0.9,
    'weightkg': 25,
    'color': 'Red',
    'prevo': 'eevee',
    'evoLevel': 1,
    'eggGroups': ['Field']
  },
  'porygon': {
    'num': 137,
    'species': 'Porygon',
    'types': ['Normal'],
    'gender': 'N',
    'baseStats': {
      'hp': 65,
      'atk': 60,
      'def': 70,
      'spa': 85,
      'spd': 75,
      'spe': 40
    },
    'abilities': {
      '0': 'Trace',
      '1': 'Download',
      'H': 'Analytic'
    },
    'heightm': 0.8,
    'weightkg': 36.5,
    'color': 'Pink',
    'evos': ['porygon2'],
    'eggGroups': ['Mineral']
  },
  'omanyte': {
    'num': 138,
    'species': 'Omanyte',
    'types': ['Rock', 'Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 35,
      'atk': 40,
      'def': 100,
      'spa': 90,
      'spd': 55,
      'spe': 35
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Shell Armor',
      'H': 'Weak Armor'
    },
    'heightm': 0.4,
    'weightkg': 7.5,
    'color': 'Blue',
    'evos': ['omastar'],
    'eggGroups': ['Water 1', 'Water 3']
  },
  'omastar': {
    'num': 139,
    'species': 'Omastar',
    'types': ['Rock', 'Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 70,
      'atk': 60,
      'def': 125,
      'spa': 115,
      'spd': 70,
      'spe': 55
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Shell Armor',
      'H': 'Weak Armor'
    },
    'heightm': 1,
    'weightkg': 35,
    'color': 'Blue',
    'prevo': 'omanyte',
    'evoLevel': 40,
    'eggGroups': ['Water 1', 'Water 3']
  },
  'kabuto': {
    'num': 140,
    'species': 'Kabuto',
    'types': ['Rock', 'Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 30,
      'atk': 80,
      'def': 90,
      'spa': 55,
      'spd': 45,
      'spe': 55
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Battle Armor',
      'H': 'Weak Armor'
    },
    'heightm': 0.5,
    'weightkg': 11.5,
    'color': 'Brown',
    'evos': ['kabutops'],
    'eggGroups': ['Water 1', 'Water 3']
  },
  'kabutops': {
    'num': 141,
    'species': 'Kabutops',
    'types': ['Rock', 'Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 60,
      'atk': 115,
      'def': 105,
      'spa': 65,
      'spd': 70,
      'spe': 80
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Battle Armor',
      'H': 'Weak Armor'
    },
    'heightm': 1.3,
    'weightkg': 40.5,
    'color': 'Brown',
    'prevo': 'kabuto',
    'evoLevel': 40,
    'eggGroups': ['Water 1', 'Water 3']
  },
  'aerodactyl': {
    'num': 142,
    'species': 'Aerodactyl',
    'types': ['Rock', 'Flying'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 80,
      'atk': 105,
      'def': 65,
      'spa': 60,
      'spd': 75,
      'spe': 130
    },
    'abilities': {
      '0': 'Rock Head',
      '1': 'Pressure',
      'H': 'Unnerve'
    },
    'heightm': 1.8,
    'weightkg': 59,
    'color': 'Purple',
    'eggGroups': ['Flying'],
    'otherFormes': ['aerodactylmega']
  },
  'aerodactylmega': {
    'num': 142,
    'species': 'Aerodactyl-Mega',
    'baseSpecies': 'Aerodactyl',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Rock', 'Flying'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 80,
      'atk': 135,
      'def': 85,
      'spa': 70,
      'spd': 95,
      'spe': 150
    },
    'abilities': {'0': 'Tough Claws'},
    'heightm': 2.1,
    'weightkg': 79,
    'color': 'Purple',
    'eggGroups': ['Flying']
  },
  'snorlax': {
    'num': 143,
    'species': 'Snorlax',
    'types': ['Normal'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 160,
      'atk': 110,
      'def': 65,
      'spa': 65,
      'spd': 110,
      'spe': 30
    },
    'abilities': {
      '0': 'Immunity',
      '1': 'Thick Fat',
      'H': 'Gluttony'
    },
    'heightm': 2.1,
    'weightkg': 460,
    'color': 'Black',
    'prevo': 'munchlax',
    'evoLevel': 1,
    'eggGroups': ['Monster']
  },
  'articuno': {
    'num': 144,
    'species': 'Articuno',
    'types': ['Ice', 'Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 90,
      'atk': 85,
      'def': 100,
      'spa': 95,
      'spd': 125,
      'spe': 85
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Snow Cloak'
    },
    'heightm': 1.7,
    'weightkg': 55.4,
    'color': 'Blue',
    'eggGroups': ['Undiscovered']
  },
  'zapdos': {
    'num': 145,
    'species': 'Zapdos',
    'types': ['Electric', 'Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 90,
      'atk': 90,
      'def': 85,
      'spa': 125,
      'spd': 90,
      'spe': 100
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Static'
    },
    'heightm': 1.6,
    'weightkg': 52.6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'moltres': {
    'num': 146,
    'species': 'Moltres',
    'types': ['Fire', 'Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 90,
      'atk': 100,
      'def': 90,
      'spa': 125,
      'spd': 85,
      'spe': 90
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Flame Body'
    },
    'heightm': 2,
    'weightkg': 60,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'dratini': {
    'num': 147,
    'species': 'Dratini',
    'types': ['Dragon'],
    'baseStats': {
      'hp': 41,
      'atk': 64,
      'def': 45,
      'spa': 50,
      'spd': 50,
      'spe': 50
    },
    'abilities': {
      '0': 'Shed Skin',
      'H': 'Marvel Scale'
    },
    'heightm': 1.8,
    'weightkg': 3.3,
    'color': 'Blue',
    'evos': ['dragonair'],
    'eggGroups': ['Water 1', 'Dragon']
  },
  'dragonair': {
    'num': 148,
    'species': 'Dragonair',
    'types': ['Dragon'],
    'baseStats': {
      'hp': 61,
      'atk': 84,
      'def': 65,
      'spa': 70,
      'spd': 70,
      'spe': 70
    },
    'abilities': {
      '0': 'Shed Skin',
      'H': 'Marvel Scale'
    },
    'heightm': 4,
    'weightkg': 16.5,
    'color': 'Blue',
    'prevo': 'dratini',
    'evos': ['dragonite'],
    'evoLevel': 30,
    'eggGroups': ['Water 1', 'Dragon']
  },
  'dragonite': {
    'num': 149,
    'species': 'Dragonite',
    'types': ['Dragon', 'Flying'],
    'baseStats': {
      'hp': 91,
      'atk': 134,
      'def': 95,
      'spa': 100,
      'spd': 100,
      'spe': 80
    },
    'abilities': {
      '0': 'Inner Focus',
      'H': 'Multiscale'
    },
    'heightm': 2.2,
    'weightkg': 210,
    'color': 'Brown',
    'prevo': 'dragonair',
    'evoLevel': 55,
    'eggGroups': ['Water 1', 'Dragon']
  },
  'mewtwo': {
    'num': 150,
    'species': 'Mewtwo',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 106,
      'atk': 110,
      'def': 90,
      'spa': 154,
      'spd': 90,
      'spe': 130
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Unnerve'
    },
    'heightm': 2,
    'weightkg': 122,
    'color': 'Purple',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['mewtwomegax', 'mewtwomegay']
  },
  'mewtwomegax': {
    'num': 150,
    'species': 'Mewtwo-Mega-X',
    'baseSpecies': 'Mewtwo',
    'forme': 'Mega-X',
    'formeLetter': 'M',
    'types': ['Psychic', 'Fighting'],
    'gender': 'N',
    'baseStats': {
      'hp': 106,
      'atk': 190,
      'def': 100,
      'spa': 154,
      'spd': 100,
      'spe': 130
    },
    'abilities': {'0': 'Steadfast'},
    'heightm': 2.3,
    'weightkg': 127,
    'color': 'Purple',
    'eggGroups': ['Undiscovered']
  },
  'mewtwomegay': {
    'num': 150,
    'species': 'Mewtwo-Mega-Y',
    'baseSpecies': 'Mewtwo',
    'forme': 'Mega-Y',
    'formeLetter': 'M',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 106,
      'atk': 150,
      'def': 70,
      'spa': 194,
      'spd': 120,
      'spe': 140
    },
    'abilities': {'0': 'Insomnia'},
    'heightm': 1.5,
    'weightkg': 33,
    'color': 'Purple',
    'eggGroups': ['Undiscovered']
  },
  'mew': {
    'num': 151,
    'species': 'Mew',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Synchronize'},
    'heightm': 0.4,
    'weightkg': 4,
    'color': 'Pink',
    'eggGroups': ['Undiscovered']
  },
  'chikorita': {
    'num': 152,
    'species': 'Chikorita',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 45,
      'atk': 49,
      'def': 65,
      'spa': 49,
      'spd': 65,
      'spe': 45
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Leaf Guard'
    },
    'heightm': 0.9,
    'weightkg': 6.4,
    'color': 'Green',
    'evos': ['bayleef'],
    'eggGroups': ['Monster', 'Grass']
  },
  'bayleef': {
    'num': 153,
    'species': 'Bayleef',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 60,
      'atk': 62,
      'def': 80,
      'spa': 63,
      'spd': 80,
      'spe': 60
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Leaf Guard'
    },
    'heightm': 1.2,
    'weightkg': 15.8,
    'color': 'Green',
    'prevo': 'chikorita',
    'evos': ['meganium'],
    'evoLevel': 16,
    'eggGroups': ['Monster', 'Grass']
  },
  'meganium': {
    'num': 154,
    'species': 'Meganium',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 80,
      'atk': 82,
      'def': 100,
      'spa': 83,
      'spd': 100,
      'spe': 80
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Leaf Guard'
    },
    'heightm': 1.8,
    'weightkg': 100.5,
    'color': 'Green',
    'prevo': 'bayleef',
    'evoLevel': 32,
    'eggGroups': ['Monster', 'Grass']
  },
  'cyndaquil': {
    'num': 155,
    'species': 'Cyndaquil',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 39,
      'atk': 52,
      'def': 43,
      'spa': 60,
      'spd': 50,
      'spe': 65
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Flash Fire'
    },
    'heightm': 0.5,
    'weightkg': 7.9,
    'color': 'Yellow',
    'evos': ['quilava'],
    'eggGroups': ['Field']
  },
  'quilava': {
    'num': 156,
    'species': 'Quilava',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 58,
      'atk': 64,
      'def': 58,
      'spa': 80,
      'spd': 65,
      'spe': 80
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Flash Fire'
    },
    'heightm': 0.9,
    'weightkg': 19,
    'color': 'Yellow',
    'prevo': 'cyndaquil',
    'evos': ['typhlosion'],
    'evoLevel': 14,
    'eggGroups': ['Field']
  },
  'typhlosion': {
    'num': 157,
    'species': 'Typhlosion',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 78,
      'atk': 84,
      'def': 78,
      'spa': 109,
      'spd': 85,
      'spe': 100
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Flash Fire'
    },
    'heightm': 1.7,
    'weightkg': 79.5,
    'color': 'Yellow',
    'prevo': 'quilava',
    'evoLevel': 36,
    'eggGroups': ['Field']
  },
  'totodile': {
    'num': 158,
    'species': 'Totodile',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 50,
      'atk': 65,
      'def': 64,
      'spa': 44,
      'spd': 48,
      'spe': 43
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Sheer Force'
    },
    'heightm': 0.6,
    'weightkg': 9.5,
    'color': 'Blue',
    'evos': ['croconaw'],
    'eggGroups': ['Monster', 'Water 1']
  },
  'croconaw': {
    'num': 159,
    'species': 'Croconaw',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 65,
      'atk': 80,
      'def': 80,
      'spa': 59,
      'spd': 63,
      'spe': 58
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Sheer Force'
    },
    'heightm': 1.1,
    'weightkg': 25,
    'color': 'Blue',
    'prevo': 'totodile',
    'evos': ['feraligatr'],
    'evoLevel': 18,
    'eggGroups': ['Monster', 'Water 1']
  },
  'feraligatr': {
    'num': 160,
    'species': 'Feraligatr',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 85,
      'atk': 105,
      'def': 100,
      'spa': 79,
      'spd': 83,
      'spe': 78
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Sheer Force'
    },
    'heightm': 2.3,
    'weightkg': 88.8,
    'color': 'Blue',
    'prevo': 'croconaw',
    'evoLevel': 30,
    'eggGroups': ['Monster', 'Water 1']
  },
  'sentret': {
    'num': 161,
    'species': 'Sentret',
    'types': ['Normal'],
    'baseStats': {
      'hp': 35,
      'atk': 46,
      'def': 34,
      'spa': 35,
      'spd': 45,
      'spe': 20
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Keen Eye',
      'H': 'Frisk'
    },
    'heightm': 0.8,
    'weightkg': 6,
    'color': 'Brown',
    'evos': ['furret'],
    'eggGroups': ['Field']
  },
  'furret': {
    'num': 162,
    'species': 'Furret',
    'types': ['Normal'],
    'baseStats': {
      'hp': 85,
      'atk': 76,
      'def': 64,
      'spa': 45,
      'spd': 55,
      'spe': 90
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Keen Eye',
      'H': 'Frisk'
    },
    'heightm': 1.8,
    'weightkg': 32.5,
    'color': 'Brown',
    'prevo': 'sentret',
    'evoLevel': 15,
    'eggGroups': ['Field']
  },
  'hoothoot': {
    'num': 163,
    'species': 'Hoothoot',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 60,
      'atk': 30,
      'def': 30,
      'spa': 36,
      'spd': 56,
      'spe': 50
    },
    'abilities': {
      '0': 'Insomnia',
      '1': 'Keen Eye',
      'H': 'Tinted Lens'
    },
    'heightm': 0.7,
    'weightkg': 21.2,
    'color': 'Brown',
    'evos': ['noctowl'],
    'eggGroups': ['Flying']
  },
  'noctowl': {
    'num': 164,
    'species': 'Noctowl',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 100,
      'atk': 50,
      'def': 50,
      'spa': 86,
      'spd': 96,
      'spe': 70
    },
    'abilities': {
      '0': 'Insomnia',
      '1': 'Keen Eye',
      'H': 'Tinted Lens'
    },
    'heightm': 1.6,
    'weightkg': 40.8,
    'color': 'Brown',
    'prevo': 'hoothoot',
    'evoLevel': 20,
    'eggGroups': ['Flying']
  },
  'ledyba': {
    'num': 165,
    'species': 'Ledyba',
    'types': ['Bug', 'Flying'],
    'baseStats': {
      'hp': 40,
      'atk': 20,
      'def': 30,
      'spa': 40,
      'spd': 80,
      'spe': 55
    },
    'abilities': {
      '0': 'Swarm',
      '1': 'Early Bird',
      'H': 'Rattled'
    },
    'heightm': 1,
    'weightkg': 10.8,
    'color': 'Red',
    'evos': ['ledian'],
    'eggGroups': ['Bug']
  },
  'ledian': {
    'num': 166,
    'species': 'Ledian',
    'types': ['Bug', 'Flying'],
    'baseStats': {
      'hp': 55,
      'atk': 35,
      'def': 50,
      'spa': 55,
      'spd': 110,
      'spe': 85
    },
    'abilities': {
      '0': 'Swarm',
      '1': 'Early Bird',
      'H': 'Iron Fist'
    },
    'heightm': 1.4,
    'weightkg': 35.6,
    'color': 'Red',
    'prevo': 'ledyba',
    'evoLevel': 18,
    'eggGroups': ['Bug']
  },
  'spinarak': {
    'num': 167,
    'species': 'Spinarak',
    'types': ['Bug', 'Poison'],
    'baseStats': {
      'hp': 40,
      'atk': 60,
      'def': 40,
      'spa': 40,
      'spd': 40,
      'spe': 30
    },
    'abilities': {
      '0': 'Swarm',
      '1': 'Insomnia',
      'H': 'Sniper'
    },
    'heightm': 0.5,
    'weightkg': 8.5,
    'color': 'Green',
    'evos': ['ariados'],
    'eggGroups': ['Bug']
  },
  'ariados': {
    'num': 168,
    'species': 'Ariados',
    'types': ['Bug', 'Poison'],
    'baseStats': {
      'hp': 70,
      'atk': 90,
      'def': 70,
      'spa': 60,
      'spd': 70,
      'spe': 40
    },
    'abilities': {
      '0': 'Swarm',
      '1': 'Insomnia',
      'H': 'Sniper'
    },
    'heightm': 1.1,
    'weightkg': 33.5,
    'color': 'Red',
    'prevo': 'spinarak',
    'evoLevel': 22,
    'eggGroups': ['Bug']
  },
  'crobat': {
    'num': 169,
    'species': 'Crobat',
    'types': ['Poison', 'Flying'],
    'baseStats': {
      'hp': 85,
      'atk': 90,
      'def': 80,
      'spa': 70,
      'spd': 80,
      'spe': 130
    },
    'abilities': {
      '0': 'Inner Focus',
      'H': 'Infiltrator'
    },
    'heightm': 1.8,
    'weightkg': 75,
    'color': 'Purple',
    'prevo': 'golbat',
    'evoLevel': 23,
    'eggGroups': ['Flying']
  },
  'chinchou': {
    'num': 170,
    'species': 'Chinchou',
    'types': ['Water', 'Electric'],
    'baseStats': {
      'hp': 75,
      'atk': 38,
      'def': 38,
      'spa': 56,
      'spd': 56,
      'spe': 67
    },
    'abilities': {
      '0': 'Volt Absorb',
      '1': 'Illuminate',
      'H': 'Water Absorb'
    },
    'heightm': 0.5,
    'weightkg': 12,
    'color': 'Blue',
    'evos': ['lanturn'],
    'eggGroups': ['Water 2']
  },
  'lanturn': {
    'num': 171,
    'species': 'Lanturn',
    'types': ['Water', 'Electric'],
    'baseStats': {
      'hp': 125,
      'atk': 58,
      'def': 58,
      'spa': 76,
      'spd': 76,
      'spe': 67
    },
    'abilities': {
      '0': 'Volt Absorb',
      '1': 'Illuminate',
      'H': 'Water Absorb'
    },
    'heightm': 1.2,
    'weightkg': 22.5,
    'color': 'Blue',
    'prevo': 'chinchou',
    'evoLevel': 27,
    'eggGroups': ['Water 2']
  },
  'pichu': {
    'num': 172,
    'species': 'Pichu',
    'types': ['Electric'],
    'baseStats': {
      'hp': 20,
      'atk': 40,
      'def': 15,
      'spa': 35,
      'spd': 35,
      'spe': 60
    },
    'abilities': {
      '0': 'Static',
      'H': 'Lightning Rod'
    },
    'heightm': 0.3,
    'weightkg': 2,
    'color': 'Yellow',
    'evos': ['pikachu'],
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['pichuspikyeared']
  },
  'pichuspikyeared': {
    'num': 172,
    'species': 'Pichu-Spiky-eared',
    'baseSpecies': 'Pichu',
    'forme': 'Spiky-eared',
    'formeLetter': 'S',
    'types': ['Electric'],
    'baseStats': {
      'hp': 20,
      'atk': 40,
      'def': 15,
      'spa': 35,
      'spd': 35,
      'spe': 60
    },
    'abilities': {'0': 'Static'},
    'heightm': 0.3,
    'weightkg': 2,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'cleffa': {
    'num': 173,
    'species': 'Cleffa',
    'types': ['Fairy'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 50,
      'atk': 25,
      'def': 28,
      'spa': 45,
      'spd': 55,
      'spe': 15
    },
    'abilities': {
      '0': 'Cute Charm',
      '1': 'Magic Guard',
      'H': 'Friend Guard'
    },
    'heightm': 0.3,
    'weightkg': 3,
    'color': 'Pink',
    'evos': ['clefairy'],
    'eggGroups': ['Undiscovered']
  },
  'igglybuff': {
    'num': 174,
    'species': 'Igglybuff',
    'types': ['Normal', 'Fairy'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 90,
      'atk': 30,
      'def': 15,
      'spa': 40,
      'spd': 20,
      'spe': 15
    },
    'abilities': {
      '0': 'Cute Charm',
      '1': 'Competitive',
      'H': 'Friend Guard'
    },
    'heightm': 0.3,
    'weightkg': 1,
    'color': 'Pink',
    'evos': ['jigglypuff'],
    'eggGroups': ['Undiscovered']
  },
  'togepi': {
    'num': 175,
    'species': 'Togepi',
    'types': ['Fairy'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 35,
      'atk': 20,
      'def': 65,
      'spa': 40,
      'spd': 65,
      'spe': 20
    },
    'abilities': {
      '0': 'Hustle',
      '1': 'Serene Grace',
      'H': 'Super Luck'
    },
    'heightm': 0.3,
    'weightkg': 1.5,
    'color': 'White',
    'evos': ['togetic'],
    'eggGroups': ['Undiscovered']
  },
  'togetic': {
    'num': 176,
    'species': 'Togetic',
    'types': ['Fairy', 'Flying'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 55,
      'atk': 40,
      'def': 85,
      'spa': 80,
      'spd': 105,
      'spe': 40
    },
    'abilities': {
      '0': 'Hustle',
      '1': 'Serene Grace',
      'H': 'Super Luck'
    },
    'heightm': 0.6,
    'weightkg': 3.2,
    'color': 'White',
    'prevo': 'togepi',
    'evos': ['togekiss'],
    'evoLevel': 2,
    'eggGroups': ['Flying', 'Fairy']
  },
  'natu': {
    'num': 177,
    'species': 'Natu',
    'types': ['Psychic', 'Flying'],
    'baseStats': {
      'hp': 40,
      'atk': 50,
      'def': 45,
      'spa': 70,
      'spd': 45,
      'spe': 70
    },
    'abilities': {
      '0': 'Synchronize',
      '1': 'Early Bird',
      'H': 'Magic Bounce'
    },
    'heightm': 0.2,
    'weightkg': 2,
    'color': 'Green',
    'evos': ['xatu'],
    'eggGroups': ['Flying']
  },
  'xatu': {
    'num': 178,
    'species': 'Xatu',
    'types': ['Psychic', 'Flying'],
    'baseStats': {
      'hp': 65,
      'atk': 75,
      'def': 70,
      'spa': 95,
      'spd': 70,
      'spe': 95
    },
    'abilities': {
      '0': 'Synchronize',
      '1': 'Early Bird',
      'H': 'Magic Bounce'
    },
    'heightm': 1.5,
    'weightkg': 15,
    'color': 'Green',
    'prevo': 'natu',
    'evoLevel': 25,
    'eggGroups': ['Flying']
  },
  'mareep': {
    'num': 179,
    'species': 'Mareep',
    'types': ['Electric'],
    'baseStats': {
      'hp': 55,
      'atk': 40,
      'def': 40,
      'spa': 65,
      'spd': 45,
      'spe': 35
    },
    'abilities': {
      '0': 'Static',
      'H': 'Plus'
    },
    'heightm': 0.6,
    'weightkg': 7.8,
    'color': 'White',
    'evos': ['flaaffy'],
    'eggGroups': ['Monster', 'Field']
  },
  'flaaffy': {
    'num': 180,
    'species': 'Flaaffy',
    'types': ['Electric'],
    'baseStats': {
      'hp': 70,
      'atk': 55,
      'def': 55,
      'spa': 80,
      'spd': 60,
      'spe': 45
    },
    'abilities': {
      '0': 'Static',
      'H': 'Plus'
    },
    'heightm': 0.8,
    'weightkg': 13.3,
    'color': 'Pink',
    'prevo': 'mareep',
    'evos': ['ampharos'],
    'evoLevel': 15,
    'eggGroups': ['Monster', 'Field']
  },
  'ampharos': {
    'num': 181,
    'species': 'Ampharos',
    'types': ['Electric'],
    'baseStats': {
      'hp': 90,
      'atk': 75,
      'def': 85,
      'spa': 115,
      'spd': 90,
      'spe': 55
    },
    'abilities': {
      '0': 'Static',
      'H': 'Plus'
    },
    'heightm': 1.4,
    'weightkg': 61.5,
    'color': 'Yellow',
    'prevo': 'flaaffy',
    'evoLevel': 30,
    'eggGroups': ['Monster', 'Field'],
    'otherFormes': ['ampharosmega']
  },
  'ampharosmega': {
    'num': 181,
    'species': 'Ampharos-Mega',
    'baseSpecies': 'Ampharos',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Electric', 'Dragon'],
    'baseStats': {
      'hp': 90,
      'atk': 95,
      'def': 105,
      'spa': 165,
      'spd': 110,
      'spe': 45
    },
    'abilities': {'0': 'Mold Breaker'},
    'heightm': 1.4,
    'weightkg': 61.5,
    'color': 'Yellow',
    'eggGroups': ['Monster', 'Field']
  },
  'bellossom': {
    'num': 182,
    'species': 'Bellossom',
    'types': ['Grass'],
    'baseStats': {
      'hp': 75,
      'atk': 80,
      'def': 95,
      'spa': 90,
      'spd': 100,
      'spe': 50
    },
    'abilities': {
      '0': 'Chlorophyll',
      'H': 'Healer'
    },
    'heightm': 0.4,
    'weightkg': 5.8,
    'color': 'Green',
    'prevo': 'gloom',
    'evoLevel': 21,
    'eggGroups': ['Grass']
  },
  'marill': {
    'num': 183,
    'species': 'Marill',
    'types': ['Water', 'Fairy'],
    'baseStats': {
      'hp': 70,
      'atk': 20,
      'def': 50,
      'spa': 20,
      'spd': 50,
      'spe': 40
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Huge Power',
      'H': 'Sap Sipper'
    },
    'heightm': 0.4,
    'weightkg': 8.5,
    'color': 'Blue',
    'prevo': 'azurill',
    'evos': ['azumarill'],
    'evoLevel': 1,
    'eggGroups': ['Water 1', 'Fairy']
  },
  'azumarill': {
    'num': 184,
    'species': 'Azumarill',
    'types': ['Water', 'Fairy'],
    'baseStats': {
      'hp': 100,
      'atk': 50,
      'def': 80,
      'spa': 60,
      'spd': 80,
      'spe': 50
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Huge Power',
      'H': 'Sap Sipper'
    },
    'heightm': 0.8,
    'weightkg': 28.5,
    'color': 'Blue',
    'prevo': 'marill',
    'evoLevel': 18,
    'eggGroups': ['Water 1', 'Fairy']
  },
  'sudowoodo': {
    'num': 185,
    'species': 'Sudowoodo',
    'types': ['Rock'],
    'baseStats': {
      'hp': 70,
      'atk': 100,
      'def': 115,
      'spa': 30,
      'spd': 65,
      'spe': 30
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Rock Head',
      'H': 'Rattled'
    },
    'heightm': 1.2,
    'weightkg': 38,
    'color': 'Brown',
    'prevo': 'bonsly',
    'evoLevel': 1,
    'evoMove': 'Mimic',
    'eggGroups': ['Mineral']
  },
  'politoed': {
    'num': 186,
    'species': 'Politoed',
    'types': ['Water'],
    'baseStats': {
      'hp': 90,
      'atk': 75,
      'def': 75,
      'spa': 90,
      'spd': 100,
      'spe': 70
    },
    'abilities': {
      '0': 'Water Absorb',
      '1': 'Damp',
      'H': 'Drizzle'
    },
    'heightm': 1.1,
    'weightkg': 33.9,
    'color': 'Green',
    'prevo': 'poliwhirl',
    'evoLevel': 25,
    'eggGroups': ['Water 1']
  },
  'hoppip': {
    'num': 187,
    'species': 'Hoppip',
    'types': ['Grass', 'Flying'],
    'baseStats': {
      'hp': 35,
      'atk': 35,
      'def': 40,
      'spa': 35,
      'spd': 55,
      'spe': 50
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Leaf Guard',
      'H': 'Infiltrator'
    },
    'heightm': 0.4,
    'weightkg': 0.5,
    'color': 'Pink',
    'evos': ['skiploom'],
    'eggGroups': ['Fairy', 'Grass']
  },
  'skiploom': {
    'num': 188,
    'species': 'Skiploom',
    'types': ['Grass', 'Flying'],
    'baseStats': {
      'hp': 55,
      'atk': 45,
      'def': 50,
      'spa': 45,
      'spd': 65,
      'spe': 80
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Leaf Guard',
      'H': 'Infiltrator'
    },
    'heightm': 0.6,
    'weightkg': 1,
    'color': 'Green',
    'prevo': 'hoppip',
    'evos': ['jumpluff'],
    'evoLevel': 18,
    'eggGroups': ['Fairy', 'Grass']
  },
  'jumpluff': {
    'num': 189,
    'species': 'Jumpluff',
    'types': ['Grass', 'Flying'],
    'baseStats': {
      'hp': 75,
      'atk': 55,
      'def': 70,
      'spa': 55,
      'spd': 95,
      'spe': 110
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Leaf Guard',
      'H': 'Infiltrator'
    },
    'heightm': 0.8,
    'weightkg': 3,
    'color': 'Blue',
    'prevo': 'skiploom',
    'evoLevel': 27,
    'eggGroups': ['Fairy', 'Grass']
  },
  'aipom': {
    'num': 190,
    'species': 'Aipom',
    'types': ['Normal'],
    'baseStats': {
      'hp': 55,
      'atk': 70,
      'def': 55,
      'spa': 40,
      'spd': 55,
      'spe': 85
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Pickup',
      'H': 'Skill Link'
    },
    'heightm': 0.8,
    'weightkg': 11.5,
    'color': 'Purple',
    'evos': ['ambipom'],
    'eggGroups': ['Field']
  },
  'sunkern': {
    'num': 191,
    'species': 'Sunkern',
    'types': ['Grass'],
    'baseStats': {
      'hp': 30,
      'atk': 30,
      'def': 30,
      'spa': 30,
      'spd': 30,
      'spe': 30
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Solar Power',
      'H': 'Early Bird'
    },
    'heightm': 0.3,
    'weightkg': 1.8,
    'color': 'Yellow',
    'evos': ['sunflora'],
    'eggGroups': ['Grass']
  },
  'sunflora': {
    'num': 192,
    'species': 'Sunflora',
    'types': ['Grass'],
    'baseStats': {
      'hp': 75,
      'atk': 75,
      'def': 55,
      'spa': 105,
      'spd': 85,
      'spe': 30
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Solar Power',
      'H': 'Early Bird'
    },
    'heightm': 0.8,
    'weightkg': 8.5,
    'color': 'Yellow',
    'prevo': 'sunkern',
    'evoLevel': 1,
    'eggGroups': ['Grass']
  },
  'yanma': {
    'num': 193,
    'species': 'Yanma',
    'types': ['Bug', 'Flying'],
    'baseStats': {
      'hp': 65,
      'atk': 65,
      'def': 45,
      'spa': 75,
      'spd': 45,
      'spe': 95
    },
    'abilities': {
      '0': 'Speed Boost',
      '1': 'Compound Eyes',
      'H': 'Frisk'
    },
    'heightm': 1.2,
    'weightkg': 38,
    'color': 'Red',
    'evos': ['yanmega'],
    'eggGroups': ['Bug']
  },
  'wooper': {
    'num': 194,
    'species': 'Wooper',
    'types': ['Water', 'Ground'],
    'baseStats': {
      'hp': 55,
      'atk': 45,
      'def': 45,
      'spa': 25,
      'spd': 25,
      'spe': 15
    },
    'abilities': {
      '0': 'Damp',
      '1': 'Water Absorb',
      'H': 'Unaware'
    },
    'heightm': 0.4,
    'weightkg': 8.5,
    'color': 'Blue',
    'evos': ['quagsire'],
    'eggGroups': ['Water 1', 'Field']
  },
  'quagsire': {
    'num': 195,
    'species': 'Quagsire',
    'types': ['Water', 'Ground'],
    'baseStats': {
      'hp': 95,
      'atk': 85,
      'def': 85,
      'spa': 65,
      'spd': 65,
      'spe': 35
    },
    'abilities': {
      '0': 'Damp',
      '1': 'Water Absorb',
      'H': 'Unaware'
    },
    'heightm': 1.4,
    'weightkg': 75,
    'color': 'Blue',
    'prevo': 'wooper',
    'evoLevel': 20,
    'eggGroups': ['Water 1', 'Field']
  },
  'espeon': {
    'num': 196,
    'species': 'Espeon',
    'types': ['Psychic'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 65,
      'atk': 65,
      'def': 60,
      'spa': 130,
      'spd': 95,
      'spe': 110
    },
    'abilities': {
      '0': 'Synchronize',
      'H': 'Magic Bounce'
    },
    'heightm': 0.9,
    'weightkg': 26.5,
    'color': 'Purple',
    'prevo': 'eevee',
    'evoLevel': 2,
    'eggGroups': ['Field']
  },
  'umbreon': {
    'num': 197,
    'species': 'Umbreon',
    'types': ['Dark'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 95,
      'atk': 65,
      'def': 110,
      'spa': 60,
      'spd': 130,
      'spe': 65
    },
    'abilities': {
      '0': 'Synchronize',
      'H': 'Inner Focus'
    },
    'heightm': 1,
    'weightkg': 27,
    'color': 'Black',
    'prevo': 'eevee',
    'evoLevel': 2,
    'eggGroups': ['Field']
  },
  'murkrow': {
    'num': 198,
    'species': 'Murkrow',
    'types': ['Dark', 'Flying'],
    'baseStats': {
      'hp': 60,
      'atk': 85,
      'def': 42,
      'spa': 85,
      'spd': 42,
      'spe': 91
    },
    'abilities': {
      '0': 'Insomnia',
      '1': 'Super Luck',
      'H': 'Prankster'
    },
    'heightm': 0.5,
    'weightkg': 2.1,
    'color': 'Black',
    'evos': ['honchkrow'],
    'eggGroups': ['Flying']
  },
  'slowking': {
    'num': 199,
    'species': 'Slowking',
    'types': ['Water', 'Psychic'],
    'baseStats': {
      'hp': 95,
      'atk': 75,
      'def': 80,
      'spa': 100,
      'spd': 110,
      'spe': 30
    },
    'abilities': {
      '0': 'Oblivious',
      '1': 'Own Tempo',
      'H': 'Regenerator'
    },
    'heightm': 2,
    'weightkg': 79.5,
    'color': 'Pink',
    'prevo': 'slowpoke',
    'evoLevel': 1,
    'eggGroups': ['Monster', 'Water 1']
  },
  'misdreavus': {
    'num': 200,
    'species': 'Misdreavus',
    'types': ['Ghost'],
    'baseStats': {
      'hp': 60,
      'atk': 60,
      'def': 60,
      'spa': 85,
      'spd': 85,
      'spe': 85
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.7,
    'weightkg': 1,
    'color': 'Gray',
    'evos': ['mismagius'],
    'eggGroups': ['Amorphous']
  },
  'unown': {
    'num': 201,
    'species': 'Unown',
    'baseForme': 'A',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 48,
      'atk': 72,
      'def': 48,
      'spa': 72,
      'spd': 48,
      'spe': 48
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.5,
    'weightkg': 5,
    'color': 'Black',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['unownb', 'unownc', 'unownd', 'unowne', 'unownf', 'unowng', 'unownh', 'unowni', 'unownj', 'unownk', 'unownl', 'unownm', 'unownn', 'unowno', 'unownp', 'unownq', 'unownr', 'unowns', 'unownt', 'unownu', 'unownv', 'unownw', 'unownx', 'unowny', 'unownz', 'unownexclamation', 'unownquestion']
  },
  'wobbuffet': {
    'num': 202,
    'species': 'Wobbuffet',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 190,
      'atk': 33,
      'def': 58,
      'spa': 33,
      'spd': 58,
      'spe': 33
    },
    'abilities': {
      '0': 'Shadow Tag',
      'H': 'Telepathy'
    },
    'heightm': 1.3,
    'weightkg': 28.5,
    'color': 'Blue',
    'prevo': 'wynaut',
    'evoLevel': 15,
    'eggGroups': ['Amorphous']
  },
  'girafarig': {
    'num': 203,
    'species': 'Girafarig',
    'types': ['Normal', 'Psychic'],
    'baseStats': {
      'hp': 70,
      'atk': 80,
      'def': 65,
      'spa': 90,
      'spd': 65,
      'spe': 85
    },
    'abilities': {
      '0': 'Inner Focus',
      '1': 'Early Bird',
      'H': 'Sap Sipper'
    },
    'heightm': 1.5,
    'weightkg': 41.5,
    'color': 'Yellow',
    'eggGroups': ['Field']
  },
  'pineco': {
    'num': 204,
    'species': 'Pineco',
    'types': ['Bug'],
    'baseStats': {
      'hp': 50,
      'atk': 65,
      'def': 90,
      'spa': 35,
      'spd': 35,
      'spe': 15
    },
    'abilities': {
      '0': 'Sturdy',
      'H': 'Overcoat'
    },
    'heightm': 0.6,
    'weightkg': 7.2,
    'color': 'Gray',
    'evos': ['forretress'],
    'eggGroups': ['Bug']
  },
  'forretress': {
    'num': 205,
    'species': 'Forretress',
    'types': ['Bug', 'Steel'],
    'baseStats': {
      'hp': 75,
      'atk': 90,
      'def': 140,
      'spa': 60,
      'spd': 60,
      'spe': 40
    },
    'abilities': {
      '0': 'Sturdy',
      'H': 'Overcoat'
    },
    'heightm': 1.2,
    'weightkg': 125.8,
    'color': 'Purple',
    'prevo': 'pineco',
    'evoLevel': 31,
    'eggGroups': ['Bug']
  },
  'dunsparce': {
    'num': 206,
    'species': 'Dunsparce',
    'types': ['Normal'],
    'baseStats': {
      'hp': 100,
      'atk': 70,
      'def': 70,
      'spa': 65,
      'spd': 65,
      'spe': 45
    },
    'abilities': {
      '0': 'Serene Grace',
      '1': 'Run Away',
      'H': 'Rattled'
    },
    'heightm': 1.5,
    'weightkg': 14,
    'color': 'Yellow',
    'eggGroups': ['Field']
  },
  'gligar': {
    'num': 207,
    'species': 'Gligar',
    'types': ['Ground', 'Flying'],
    'baseStats': {
      'hp': 65,
      'atk': 75,
      'def': 105,
      'spa': 35,
      'spd': 65,
      'spe': 85
    },
    'abilities': {
      '0': 'Hyper Cutter',
      '1': 'Sand Veil',
      'H': 'Immunity'
    },
    'heightm': 1.1,
    'weightkg': 64.8,
    'color': 'Purple',
    'evos': ['gliscor'],
    'eggGroups': ['Bug']
  },
  'steelix': {
    'num': 208,
    'species': 'Steelix',
    'types': ['Steel', 'Ground'],
    'baseStats': {
      'hp': 75,
      'atk': 85,
      'def': 200,
      'spa': 55,
      'spd': 65,
      'spe': 30
    },
    'abilities': {
      '0': 'Rock Head',
      '1': 'Sturdy',
      'H': 'Sheer Force'
    },
    'heightm': 9.2,
    'weightkg': 400,
    'color': 'Gray',
    'prevo': 'onix',
    'evoLevel': 1,
    'eggGroups': ['Mineral'],
    'otherFormes': ['steelixmega']
  },
  'steelixmega': {
    'num': 208,
    'species': 'Steelix-Mega',
    'baseSpecies': 'Steelix',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Steel', 'Ground'],
    'baseStats': {
      'hp': 75,
      'atk': 125,
      'def': 230,
      'spa': 55,
      'spd': 95,
      'spe': 30
    },
    'abilities': {'0': 'Sand Force'},
    'heightm': 10.5,
    'weightkg': 740,
    'color': 'Gray',
    'eggGroups': ['Mineral']
  },
  'snubbull': {
    'num': 209,
    'species': 'Snubbull',
    'types': ['Fairy'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 60,
      'atk': 80,
      'def': 50,
      'spa': 40,
      'spd': 40,
      'spe': 30
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Run Away',
      'H': 'Rattled'
    },
    'heightm': 0.6,
    'weightkg': 7.8,
    'color': 'Pink',
    'evos': ['granbull'],
    'eggGroups': ['Field', 'Fairy']
  },
  'granbull': {
    'num': 210,
    'species': 'Granbull',
    'types': ['Fairy'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 90,
      'atk': 120,
      'def': 75,
      'spa': 60,
      'spd': 60,
      'spe': 45
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Quick Feet',
      'H': 'Rattled'
    },
    'heightm': 1.4,
    'weightkg': 48.7,
    'color': 'Purple',
    'prevo': 'snubbull',
    'evoLevel': 23,
    'eggGroups': ['Field', 'Fairy']
  },
  'qwilfish': {
    'num': 211,
    'species': 'Qwilfish',
    'types': ['Water', 'Poison'],
    'baseStats': {
      'hp': 65,
      'atk': 95,
      'def': 85,
      'spa': 55,
      'spd': 55,
      'spe': 85
    },
    'abilities': {
      '0': 'Poison Point',
      '1': 'Swift Swim',
      'H': 'Intimidate'
    },
    'heightm': 0.5,
    'weightkg': 3.9,
    'color': 'Gray',
    'eggGroups': ['Water 2']
  },
  'scizor': {
    'num': 212,
    'species': 'Scizor',
    'types': ['Bug', 'Steel'],
    'baseStats': {
      'hp': 70,
      'atk': 130,
      'def': 100,
      'spa': 55,
      'spd': 80,
      'spe': 65
    },
    'abilities': {
      '0': 'Swarm',
      '1': 'Technician',
      'H': 'Light Metal'
    },
    'heightm': 1.8,
    'weightkg': 118,
    'color': 'Red',
    'prevo': 'scyther',
    'evoLevel': 1,
    'eggGroups': ['Bug'],
    'otherFormes': ['scizormega']
  },
  'scizormega': {
    'num': 212,
    'species': 'Scizor-Mega',
    'baseSpecies': 'Scizor',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Bug', 'Steel'],
    'baseStats': {
      'hp': 70,
      'atk': 150,
      'def': 140,
      'spa': 65,
      'spd': 100,
      'spe': 75
    },
    'abilities': {'0': 'Technician'},
    'heightm': 2,
    'weightkg': 125,
    'color': 'Red',
    'eggGroups': ['Bug']
  },
  'shuckle': {
    'num': 213,
    'species': 'Shuckle',
    'types': ['Bug', 'Rock'],
    'baseStats': {
      'hp': 20,
      'atk': 10,
      'def': 230,
      'spa': 10,
      'spd': 230,
      'spe': 5
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Gluttony',
      'H': 'Contrary'
    },
    'heightm': 0.6,
    'weightkg': 20.5,
    'color': 'Yellow',
    'eggGroups': ['Bug']
  },
  'heracross': {
    'num': 214,
    'species': 'Heracross',
    'types': ['Bug', 'Fighting'],
    'baseStats': {
      'hp': 80,
      'atk': 125,
      'def': 75,
      'spa': 40,
      'spd': 95,
      'spe': 85
    },
    'abilities': {
      '0': 'Swarm',
      '1': 'Guts',
      'H': 'Moxie'
    },
    'heightm': 1.5,
    'weightkg': 54,
    'color': 'Blue',
    'eggGroups': ['Bug'],
    'otherFormes': ['heracrossmega']
  },
  'heracrossmega': {
    'num': 214,
    'species': 'Heracross-Mega',
    'baseSpecies': 'Heracross',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Bug', 'Fighting'],
    'baseStats': {
      'hp': 80,
      'atk': 185,
      'def': 115,
      'spa': 40,
      'spd': 105,
      'spe': 75
    },
    'abilities': {'0': 'Skill Link'},
    'heightm': 1.7,
    'weightkg': 62.5,
    'color': 'Blue',
    'eggGroups': ['Bug']
  },
  'sneasel': {
    'num': 215,
    'species': 'Sneasel',
    'types': ['Dark', 'Ice'],
    'baseStats': {
      'hp': 55,
      'atk': 95,
      'def': 55,
      'spa': 35,
      'spd': 75,
      'spe': 115
    },
    'abilities': {
      '0': 'Inner Focus',
      '1': 'Keen Eye',
      'H': 'Pickpocket'
    },
    'heightm': 0.9,
    'weightkg': 28,
    'color': 'Black',
    'evos': ['weavile'],
    'eggGroups': ['Field']
  },
  'teddiursa': {
    'num': 216,
    'species': 'Teddiursa',
    'types': ['Normal'],
    'baseStats': {
      'hp': 60,
      'atk': 80,
      'def': 50,
      'spa': 50,
      'spd': 50,
      'spe': 40
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Quick Feet',
      'H': 'Honey Gather'
    },
    'heightm': 0.6,
    'weightkg': 8.8,
    'color': 'Brown',
    'evos': ['ursaring'],
    'eggGroups': ['Field']
  },
  'ursaring': {
    'num': 217,
    'species': 'Ursaring',
    'types': ['Normal'],
    'baseStats': {
      'hp': 90,
      'atk': 130,
      'def': 75,
      'spa': 75,
      'spd': 75,
      'spe': 55
    },
    'abilities': {
      '0': 'Guts',
      '1': 'Quick Feet',
      'H': 'Unnerve'
    },
    'heightm': 1.8,
    'weightkg': 125.8,
    'color': 'Brown',
    'prevo': 'teddiursa',
    'evoLevel': 30,
    'eggGroups': ['Field']
  },
  'slugma': {
    'num': 218,
    'species': 'Slugma',
    'types': ['Fire'],
    'baseStats': {
      'hp': 40,
      'atk': 40,
      'def': 40,
      'spa': 70,
      'spd': 40,
      'spe': 20
    },
    'abilities': {
      '0': 'Magma Armor',
      '1': 'Flame Body',
      'H': 'Weak Armor'
    },
    'heightm': 0.7,
    'weightkg': 35,
    'color': 'Red',
    'evos': ['magcargo'],
    'eggGroups': ['Amorphous']
  },
  'magcargo': {
    'num': 219,
    'species': 'Magcargo',
    'types': ['Fire', 'Rock'],
    'baseStats': {
      'hp': 60,
      'atk': 50,
      'def': 120,
      'spa': 90,
      'spd': 80,
      'spe': 30
    },
    'abilities': {
      '0': 'Magma Armor',
      '1': 'Flame Body',
      'H': 'Weak Armor'
    },
    'heightm': 0.8,
    'weightkg': 55,
    'color': 'Red',
    'prevo': 'slugma',
    'evoLevel': 38,
    'eggGroups': ['Amorphous']
  },
  'swinub': {
    'num': 220,
    'species': 'Swinub',
    'types': ['Ice', 'Ground'],
    'baseStats': {
      'hp': 50,
      'atk': 50,
      'def': 40,
      'spa': 30,
      'spd': 30,
      'spe': 50
    },
    'abilities': {
      '0': 'Oblivious',
      '1': 'Snow Cloak',
      'H': 'Thick Fat'
    },
    'heightm': 0.4,
    'weightkg': 6.5,
    'color': 'Brown',
    'evos': ['piloswine'],
    'eggGroups': ['Field']
  },
  'piloswine': {
    'num': 221,
    'species': 'Piloswine',
    'types': ['Ice', 'Ground'],
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 80,
      'spa': 60,
      'spd': 60,
      'spe': 50
    },
    'abilities': {
      '0': 'Oblivious',
      '1': 'Snow Cloak',
      'H': 'Thick Fat'
    },
    'heightm': 1.1,
    'weightkg': 55.8,
    'color': 'Brown',
    'prevo': 'swinub',
    'evos': ['mamoswine'],
    'evoLevel': 33,
    'eggGroups': ['Field']
  },
  'corsola': {
    'num': 222,
    'species': 'Corsola',
    'types': ['Water', 'Rock'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 65,
      'atk': 55,
      'def': 95,
      'spa': 65,
      'spd': 95,
      'spe': 35
    },
    'abilities': {
      '0': 'Hustle',
      '1': 'Natural Cure',
      'H': 'Regenerator'
    },
    'heightm': 0.6,
    'weightkg': 5,
    'color': 'Pink',
    'eggGroups': ['Water 1', 'Water 3']
  },
  'remoraid': {
    'num': 223,
    'species': 'Remoraid',
    'types': ['Water'],
    'baseStats': {
      'hp': 35,
      'atk': 65,
      'def': 35,
      'spa': 65,
      'spd': 35,
      'spe': 65
    },
    'abilities': {
      '0': 'Hustle',
      '1': 'Sniper',
      'H': 'Moody'
    },
    'heightm': 0.6,
    'weightkg': 12,
    'color': 'Gray',
    'evos': ['octillery'],
    'eggGroups': ['Water 1', 'Water 2']
  },
  'octillery': {
    'num': 224,
    'species': 'Octillery',
    'types': ['Water'],
    'baseStats': {
      'hp': 75,
      'atk': 105,
      'def': 75,
      'spa': 105,
      'spd': 75,
      'spe': 45
    },
    'abilities': {
      '0': 'Suction Cups',
      '1': 'Sniper',
      'H': 'Moody'
    },
    'heightm': 0.9,
    'weightkg': 28.5,
    'color': 'Red',
    'prevo': 'remoraid',
    'evoLevel': 25,
    'eggGroups': ['Water 1', 'Water 2']
  },
  'delibird': {
    'num': 225,
    'species': 'Delibird',
    'types': ['Ice', 'Flying'],
    'baseStats': {
      'hp': 45,
      'atk': 55,
      'def': 45,
      'spa': 65,
      'spd': 45,
      'spe': 75
    },
    'abilities': {
      '0': 'Vital Spirit',
      '1': 'Hustle',
      'H': 'Insomnia'
    },
    'heightm': 0.9,
    'weightkg': 16,
    'color': 'Red',
    'eggGroups': ['Water 1', 'Field']
  },
  'mantine': {
    'num': 226,
    'species': 'Mantine',
    'types': ['Water', 'Flying'],
    'baseStats': {
      'hp': 85,
      'atk': 40,
      'def': 70,
      'spa': 80,
      'spd': 140,
      'spe': 70
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Water Absorb',
      'H': 'Water Veil'
    },
    'heightm': 2.1,
    'weightkg': 220,
    'color': 'Purple',
    'prevo': 'mantyke',
    'evoLevel': 1,
    'eggGroups': ['Water 1']
  },
  'skarmory': {
    'num': 227,
    'species': 'Skarmory',
    'types': ['Steel', 'Flying'],
    'baseStats': {
      'hp': 65,
      'atk': 80,
      'def': 140,
      'spa': 40,
      'spd': 70,
      'spe': 70
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Sturdy',
      'H': 'Weak Armor'
    },
    'heightm': 1.7,
    'weightkg': 50.5,
    'color': 'Gray',
    'eggGroups': ['Flying']
  },
  'houndour': {
    'num': 228,
    'species': 'Houndour',
    'types': ['Dark', 'Fire'],
    'baseStats': {
      'hp': 45,
      'atk': 60,
      'def': 30,
      'spa': 80,
      'spd': 50,
      'spe': 65
    },
    'abilities': {
      '0': 'Early Bird',
      '1': 'Flash Fire',
      'H': 'Unnerve'
    },
    'heightm': 0.6,
    'weightkg': 10.8,
    'color': 'Black',
    'evos': ['houndoom'],
    'eggGroups': ['Field']
  },
  'houndoom': {
    'num': 229,
    'species': 'Houndoom',
    'types': ['Dark', 'Fire'],
    'baseStats': {
      'hp': 75,
      'atk': 90,
      'def': 50,
      'spa': 110,
      'spd': 80,
      'spe': 95
    },
    'abilities': {
      '0': 'Early Bird',
      '1': 'Flash Fire',
      'H': 'Unnerve'
    },
    'heightm': 1.4,
    'weightkg': 35,
    'color': 'Black',
    'prevo': 'houndour',
    'evoLevel': 24,
    'eggGroups': ['Field'],
    'otherFormes': ['houndoommega']
  },
  'houndoommega': {
    'num': 229,
    'species': 'Houndoom-Mega',
    'baseSpecies': 'Houndoom',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Dark', 'Fire'],
    'baseStats': {
      'hp': 75,
      'atk': 90,
      'def': 90,
      'spa': 140,
      'spd': 90,
      'spe': 115
    },
    'abilities': {'0': 'Solar Power'},
    'heightm': 1.9,
    'weightkg': 49.5,
    'color': 'Black',
    'eggGroups': ['Field']
  },
  'kingdra': {
    'num': 230,
    'species': 'Kingdra',
    'types': ['Water', 'Dragon'],
    'baseStats': {
      'hp': 75,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 85
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Sniper',
      'H': 'Damp'
    },
    'heightm': 1.8,
    'weightkg': 152,
    'color': 'Blue',
    'prevo': 'seadra',
    'evoLevel': 32,
    'eggGroups': ['Water 1', 'Dragon']
  },
  'phanpy': {
    'num': 231,
    'species': 'Phanpy',
    'types': ['Ground'],
    'baseStats': {
      'hp': 90,
      'atk': 60,
      'def': 60,
      'spa': 40,
      'spd': 40,
      'spe': 40
    },
    'abilities': {
      '0': 'Pickup',
      'H': 'Sand Veil'
    },
    'heightm': 0.5,
    'weightkg': 33.5,
    'color': 'Blue',
    'evos': ['donphan'],
    'eggGroups': ['Field']
  },
  'donphan': {
    'num': 232,
    'species': 'Donphan',
    'types': ['Ground'],
    'baseStats': {
      'hp': 90,
      'atk': 120,
      'def': 120,
      'spa': 60,
      'spd': 60,
      'spe': 50
    },
    'abilities': {
      '0': 'Sturdy',
      'H': 'Sand Veil'
    },
    'heightm': 1.1,
    'weightkg': 120,
    'color': 'Gray',
    'prevo': 'phanpy',
    'evoLevel': 25,
    'eggGroups': ['Field']
  },
  'porygon2': {
    'num': 233,
    'species': 'Porygon2',
    'types': ['Normal'],
    'gender': 'N',
    'baseStats': {
      'hp': 85,
      'atk': 80,
      'def': 90,
      'spa': 105,
      'spd': 95,
      'spe': 60
    },
    'abilities': {
      '0': 'Trace',
      '1': 'Download',
      'H': 'Analytic'
    },
    'heightm': 0.6,
    'weightkg': 32.5,
    'color': 'Red',
    'prevo': 'porygon',
    'evos': ['porygonz'],
    'evoLevel': 1,
    'eggGroups': ['Mineral']
  },
  'stantler': {
    'num': 234,
    'species': 'Stantler',
    'types': ['Normal'],
    'baseStats': {
      'hp': 73,
      'atk': 95,
      'def': 62,
      'spa': 85,
      'spd': 65,
      'spe': 85
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Frisk',
      'H': 'Sap Sipper'
    },
    'heightm': 1.4,
    'weightkg': 71.2,
    'color': 'Brown',
    'eggGroups': ['Field']
  },
  'smeargle': {
    'num': 235,
    'species': 'Smeargle',
    'types': ['Normal'],
    'baseStats': {
      'hp': 55,
      'atk': 20,
      'def': 35,
      'spa': 20,
      'spd': 45,
      'spe': 75
    },
    'abilities': {
      '0': 'Own Tempo',
      '1': 'Technician',
      'H': 'Moody'
    },
    'heightm': 1.2,
    'weightkg': 58,
    'color': 'White',
    'eggGroups': ['Field'],
    'otherFormes': ['pokestarsmeargle']
  },
  'pokestarsmeargle': {
    'num': -5000,
    'species': 'Pokestar Smeargle',
    'types': ['Normal'],
    'baseStats': {
      'hp': 55,
      'atk': 20,
      'def': 35,
      'spa': 20,
      'spd': 45,
      'spe': 75
    },
    'abilities': {
      '0': 'Own Tempo',
      '1': 'Technician',
      'H': 'Moody'
    },
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Field']
  },
  'tyrogue': {
    'num': 236,
    'species': 'Tyrogue',
    'types': ['Fighting'],
    'gender': 'M',
    'baseStats': {
      'hp': 35,
      'atk': 35,
      'def': 35,
      'spa': 35,
      'spd': 35,
      'spe': 35
    },
    'abilities': {
      '0': 'Guts',
      '1': 'Steadfast',
      'H': 'Vital Spirit'
    },
    'heightm': 0.7,
    'weightkg': 21,
    'color': 'Purple',
    'evos': ['hitmonlee', 'hitmonchan', 'hitmontop'],
    'eggGroups': ['Undiscovered']
  },
  'hitmontop': {
    'num': 237,
    'species': 'Hitmontop',
    'types': ['Fighting'],
    'gender': 'M',
    'baseStats': {
      'hp': 50,
      'atk': 95,
      'def': 95,
      'spa': 35,
      'spd': 110,
      'spe': 70
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Technician',
      'H': 'Steadfast'
    },
    'heightm': 1.4,
    'weightkg': 48,
    'color': 'Brown',
    'prevo': 'tyrogue',
    'evoLevel': 20,
    'eggGroups': ['Human-Like']
  },
  'smoochum': {
    'num': 238,
    'species': 'Smoochum',
    'types': ['Ice', 'Psychic'],
    'gender': 'F',
    'baseStats': {
      'hp': 45,
      'atk': 30,
      'def': 15,
      'spa': 85,
      'spd': 65,
      'spe': 65
    },
    'abilities': {
      '0': 'Oblivious',
      '1': 'Forewarn',
      'H': 'Hydration'
    },
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Pink',
    'evos': ['jynx'],
    'eggGroups': ['Undiscovered']
  },
  'elekid': {
    'num': 239,
    'species': 'Elekid',
    'types': ['Electric'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 45,
      'atk': 63,
      'def': 37,
      'spa': 65,
      'spd': 55,
      'spe': 95
    },
    'abilities': {
      '0': 'Static',
      'H': 'Vital Spirit'
    },
    'heightm': 0.6,
    'weightkg': 23.5,
    'color': 'Yellow',
    'evos': ['electabuzz'],
    'eggGroups': ['Undiscovered']
  },
  'magby': {
    'num': 240,
    'species': 'Magby',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 45,
      'atk': 75,
      'def': 37,
      'spa': 70,
      'spd': 55,
      'spe': 83
    },
    'abilities': {
      '0': 'Flame Body',
      'H': 'Vital Spirit'
    },
    'heightm': 0.7,
    'weightkg': 21.4,
    'color': 'Red',
    'evos': ['magmar'],
    'eggGroups': ['Undiscovered']
  },
  'miltank': {
    'num': 241,
    'species': 'Miltank',
    'types': ['Normal'],
    'gender': 'F',
    'baseStats': {
      'hp': 95,
      'atk': 80,
      'def': 105,
      'spa': 40,
      'spd': 70,
      'spe': 100
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Scrappy',
      'H': 'Sap Sipper'
    },
    'heightm': 1.2,
    'weightkg': 75.5,
    'color': 'Pink',
    'eggGroups': ['Field']
  },
  'blissey': {
    'num': 242,
    'species': 'Blissey',
    'types': ['Normal'],
    'gender': 'F',
    'baseStats': {
      'hp': 255,
      'atk': 10,
      'def': 10,
      'spa': 75,
      'spd': 135,
      'spe': 55
    },
    'abilities': {
      '0': 'Natural Cure',
      '1': 'Serene Grace',
      'H': 'Healer'
    },
    'heightm': 1.5,
    'weightkg': 46.8,
    'color': 'Pink',
    'prevo': 'chansey',
    'evoLevel': 2,
    'eggGroups': ['Fairy']
  },
  'raikou': {
    'num': 243,
    'species': 'Raikou',
    'types': ['Electric'],
    'gender': 'N',
    'baseStats': {
      'hp': 90,
      'atk': 85,
      'def': 75,
      'spa': 115,
      'spd': 100,
      'spe': 115
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Inner Focus'
    },
    'heightm': 1.9,
    'weightkg': 178,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'entei': {
    'num': 244,
    'species': 'Entei',
    'types': ['Fire'],
    'gender': 'N',
    'baseStats': {
      'hp': 115,
      'atk': 115,
      'def': 85,
      'spa': 90,
      'spd': 75,
      'spe': 100
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Inner Focus'
    },
    'heightm': 2.1,
    'weightkg': 198,
    'color': 'Brown',
    'eggGroups': ['Undiscovered']
  },
  'suicune': {
    'num': 245,
    'species': 'Suicune',
    'types': ['Water'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 75,
      'def': 115,
      'spa': 90,
      'spd': 115,
      'spe': 85
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Inner Focus'
    },
    'heightm': 2,
    'weightkg': 187,
    'color': 'Blue',
    'eggGroups': ['Undiscovered']
  },
  'larvitar': {
    'num': 246,
    'species': 'Larvitar',
    'types': ['Rock', 'Ground'],
    'baseStats': {
      'hp': 50,
      'atk': 64,
      'def': 50,
      'spa': 45,
      'spd': 50,
      'spe': 41
    },
    'abilities': {
      '0': 'Guts',
      'H': 'Sand Veil'
    },
    'heightm': 0.6,
    'weightkg': 72,
    'color': 'Green',
    'evos': ['pupitar'],
    'eggGroups': ['Monster']
  },
  'pupitar': {
    'num': 247,
    'species': 'Pupitar',
    'types': ['Rock', 'Ground'],
    'baseStats': {
      'hp': 70,
      'atk': 84,
      'def': 70,
      'spa': 65,
      'spd': 70,
      'spe': 51
    },
    'abilities': {'0': 'Shed Skin'},
    'heightm': 1.2,
    'weightkg': 152,
    'color': 'Gray',
    'prevo': 'larvitar',
    'evos': ['tyranitar'],
    'evoLevel': 30,
    'eggGroups': ['Monster']
  },
  'tyranitar': {
    'num': 248,
    'species': 'Tyranitar',
    'types': ['Rock', 'Dark'],
    'baseStats': {
      'hp': 100,
      'atk': 134,
      'def': 110,
      'spa': 95,
      'spd': 100,
      'spe': 61
    },
    'abilities': {
      '0': 'Sand Stream',
      'H': 'Unnerve'
    },
    'heightm': 2,
    'weightkg': 202,
    'color': 'Green',
    'prevo': 'pupitar',
    'evoLevel': 55,
    'eggGroups': ['Monster'],
    'otherFormes': ['tyranitarmega']
  },
  'tyranitarmega': {
    'num': 248,
    'species': 'Tyranitar-Mega',
    'baseSpecies': 'Tyranitar',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Rock', 'Dark'],
    'baseStats': {
      'hp': 100,
      'atk': 164,
      'def': 150,
      'spa': 95,
      'spd': 120,
      'spe': 71
    },
    'abilities': {'0': 'Sand Stream'},
    'heightm': 2.5,
    'weightkg': 255,
    'color': 'Green',
    'eggGroups': ['Monster']
  },
  'lugia': {
    'num': 249,
    'species': 'Lugia',
    'types': ['Psychic', 'Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 106,
      'atk': 90,
      'def': 130,
      'spa': 90,
      'spd': 154,
      'spe': 110
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Multiscale'
    },
    'heightm': 5.2,
    'weightkg': 216,
    'color': 'White',
    'eggGroups': ['Undiscovered']
  },
  'hooh': {
    'num': 250,
    'species': 'Ho-Oh',
    'types': ['Fire', 'Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 106,
      'atk': 130,
      'def': 90,
      'spa': 110,
      'spd': 154,
      'spe': 90
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Regenerator'
    },
    'heightm': 3.8,
    'weightkg': 199,
    'color': 'Red',
    'eggGroups': ['Undiscovered']
  },
  'celebi': {
    'num': 251,
    'species': 'Celebi',
    'types': ['Psychic', 'Grass'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Natural Cure'},
    'heightm': 0.6,
    'weightkg': 5,
    'color': 'Green',
    'eggGroups': ['Undiscovered']
  },
  'treecko': {
    'num': 252,
    'species': 'Treecko',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 40,
      'atk': 45,
      'def': 35,
      'spa': 65,
      'spd': 55,
      'spe': 70
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Unburden'
    },
    'heightm': 0.5,
    'weightkg': 5,
    'color': 'Green',
    'evos': ['grovyle'],
    'eggGroups': ['Monster', 'Dragon']
  },
  'grovyle': {
    'num': 253,
    'species': 'Grovyle',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 50,
      'atk': 65,
      'def': 45,
      'spa': 85,
      'spd': 65,
      'spe': 95
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Unburden'
    },
    'heightm': 0.9,
    'weightkg': 21.6,
    'color': 'Green',
    'prevo': 'treecko',
    'evos': ['sceptile'],
    'evoLevel': 16,
    'eggGroups': ['Monster', 'Dragon']
  },
  'sceptile': {
    'num': 254,
    'species': 'Sceptile',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 70,
      'atk': 85,
      'def': 65,
      'spa': 105,
      'spd': 85,
      'spe': 120
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Unburden'
    },
    'heightm': 1.7,
    'weightkg': 52.2,
    'color': 'Green',
    'prevo': 'grovyle',
    'evoLevel': 36,
    'eggGroups': ['Monster', 'Dragon'],
    'otherFormes': ['sceptilemega']
  },
  'sceptilemega': {
    'num': 254,
    'species': 'Sceptile-Mega',
    'baseSpecies': 'Sceptile',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Grass', 'Dragon'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 70,
      'atk': 110,
      'def': 75,
      'spa': 145,
      'spd': 85,
      'spe': 145
    },
    'abilities': {'0': 'Lightning Rod'},
    'heightm': 1.9,
    'weightkg': 55.2,
    'color': 'Green',
    'eggGroups': ['Monster', 'Dragon']
  },
  'torchic': {
    'num': 255,
    'species': 'Torchic',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 45,
      'atk': 60,
      'def': 40,
      'spa': 70,
      'spd': 50,
      'spe': 45
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Speed Boost'
    },
    'heightm': 0.4,
    'weightkg': 2.5,
    'color': 'Red',
    'evos': ['combusken'],
    'eggGroups': ['Field']
  },
  'combusken': {
    'num': 256,
    'species': 'Combusken',
    'types': ['Fire', 'Fighting'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 60,
      'atk': 85,
      'def': 60,
      'spa': 85,
      'spd': 60,
      'spe': 55
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Speed Boost'
    },
    'heightm': 0.9,
    'weightkg': 19.5,
    'color': 'Red',
    'prevo': 'torchic',
    'evos': ['blaziken'],
    'evoLevel': 16,
    'eggGroups': ['Field']
  },
  'blaziken': {
    'num': 257,
    'species': 'Blaziken',
    'types': ['Fire', 'Fighting'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 80,
      'atk': 120,
      'def': 70,
      'spa': 110,
      'spd': 70,
      'spe': 80
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Speed Boost'
    },
    'heightm': 1.9,
    'weightkg': 52,
    'color': 'Red',
    'prevo': 'combusken',
    'evoLevel': 36,
    'eggGroups': ['Field'],
    'otherFormes': ['blazikenmega']
  },
  'blazikenmega': {
    'num': 257,
    'species': 'Blaziken-Mega',
    'baseSpecies': 'Blaziken',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Fire', 'Fighting'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 80,
      'atk': 160,
      'def': 80,
      'spa': 130,
      'spd': 80,
      'spe': 100
    },
    'abilities': {'0': 'Speed Boost'},
    'heightm': 1.9,
    'weightkg': 52,
    'color': 'Red',
    'eggGroups': ['Field']
  },
  'mudkip': {
    'num': 258,
    'species': 'Mudkip',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 50,
      'atk': 70,
      'def': 50,
      'spa': 50,
      'spd': 50,
      'spe': 40
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Damp'
    },
    'heightm': 0.4,
    'weightkg': 7.6,
    'color': 'Blue',
    'evos': ['marshtomp'],
    'eggGroups': ['Monster', 'Water 1']
  },
  'marshtomp': {
    'num': 259,
    'species': 'Marshtomp',
    'types': ['Water', 'Ground'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 70,
      'atk': 85,
      'def': 70,
      'spa': 60,
      'spd': 70,
      'spe': 50
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Damp'
    },
    'heightm': 0.7,
    'weightkg': 28,
    'color': 'Blue',
    'prevo': 'mudkip',
    'evos': ['swampert'],
    'evoLevel': 16,
    'eggGroups': ['Monster', 'Water 1']
  },
  'swampert': {
    'num': 260,
    'species': 'Swampert',
    'types': ['Water', 'Ground'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 100,
      'atk': 110,
      'def': 90,
      'spa': 85,
      'spd': 90,
      'spe': 60
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Damp'
    },
    'heightm': 1.5,
    'weightkg': 81.9,
    'color': 'Blue',
    'prevo': 'marshtomp',
    'evoLevel': 36,
    'eggGroups': ['Monster', 'Water 1'],
    'otherFormes': ['swampertmega']
  },
  'swampertmega': {
    'num': 260,
    'species': 'Swampert-Mega',
    'baseSpecies': 'Swampert',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Water', 'Ground'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 100,
      'atk': 150,
      'def': 110,
      'spa': 95,
      'spd': 110,
      'spe': 70
    },
    'abilities': {'0': 'Swift Swim'},
    'heightm': 1.9,
    'weightkg': 102,
    'color': 'Blue',
    'eggGroups': ['Monster', 'Water 1']
  },
  'poochyena': {
    'num': 261,
    'species': 'Poochyena',
    'types': ['Dark'],
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 35,
      'spa': 30,
      'spd': 30,
      'spe': 35
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Quick Feet',
      'H': 'Rattled'
    },
    'heightm': 0.5,
    'weightkg': 13.6,
    'color': 'Gray',
    'evos': ['mightyena'],
    'eggGroups': ['Field']
  },
  'mightyena': {
    'num': 262,
    'species': 'Mightyena',
    'types': ['Dark'],
    'baseStats': {
      'hp': 70,
      'atk': 90,
      'def': 70,
      'spa': 60,
      'spd': 60,
      'spe': 70
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Quick Feet',
      'H': 'Moxie'
    },
    'heightm': 1,
    'weightkg': 37,
    'color': 'Gray',
    'prevo': 'poochyena',
    'evoLevel': 18,
    'eggGroups': ['Field']
  },
  'zigzagoon': {
    'num': 263,
    'species': 'Zigzagoon',
    'types': ['Normal'],
    'baseStats': {
      'hp': 38,
      'atk': 30,
      'def': 41,
      'spa': 30,
      'spd': 41,
      'spe': 60
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Gluttony',
      'H': 'Quick Feet'
    },
    'heightm': 0.4,
    'weightkg': 17.5,
    'color': 'Brown',
    'evos': ['linoone'],
    'eggGroups': ['Field']
  },
  'linoone': {
    'num': 264,
    'species': 'Linoone',
    'types': ['Normal'],
    'baseStats': {
      'hp': 78,
      'atk': 70,
      'def': 61,
      'spa': 50,
      'spd': 61,
      'spe': 100
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Gluttony',
      'H': 'Quick Feet'
    },
    'heightm': 0.5,
    'weightkg': 32.5,
    'color': 'White',
    'prevo': 'zigzagoon',
    'evoLevel': 20,
    'eggGroups': ['Field']
  },
  'wurmple': {
    'num': 265,
    'species': 'Wurmple',
    'types': ['Bug'],
    'baseStats': {
      'hp': 45,
      'atk': 45,
      'def': 35,
      'spa': 20,
      'spd': 30,
      'spe': 20
    },
    'abilities': {
      '0': 'Shield Dust',
      'H': 'Run Away'
    },
    'heightm': 0.3,
    'weightkg': 3.6,
    'color': 'Red',
    'evos': ['silcoon', 'cascoon'],
    'eggGroups': ['Bug']
  },
  'silcoon': {
    'num': 266,
    'species': 'Silcoon',
    'types': ['Bug'],
    'baseStats': {
      'hp': 50,
      'atk': 35,
      'def': 55,
      'spa': 25,
      'spd': 25,
      'spe': 15
    },
    'abilities': {'0': 'Shed Skin'},
    'heightm': 0.6,
    'weightkg': 10,
    'color': 'White',
    'prevo': 'wurmple',
    'evos': ['beautifly'],
    'evoLevel': 7,
    'eggGroups': ['Bug']
  },
  'beautifly': {
    'num': 267,
    'species': 'Beautifly',
    'types': ['Bug', 'Flying'],
    'baseStats': {
      'hp': 60,
      'atk': 70,
      'def': 50,
      'spa': 100,
      'spd': 50,
      'spe': 65
    },
    'abilities': {
      '0': 'Swarm',
      'H': 'Rivalry'
    },
    'heightm': 1,
    'weightkg': 28.4,
    'color': 'Yellow',
    'prevo': 'silcoon',
    'evoLevel': 10,
    'eggGroups': ['Bug']
  },
  'cascoon': {
    'num': 268,
    'species': 'Cascoon',
    'types': ['Bug'],
    'baseStats': {
      'hp': 50,
      'atk': 35,
      'def': 55,
      'spa': 25,
      'spd': 25,
      'spe': 15
    },
    'abilities': {'0': 'Shed Skin'},
    'heightm': 0.7,
    'weightkg': 11.5,
    'color': 'Purple',
    'prevo': 'wurmple',
    'evos': ['dustox'],
    'evoLevel': 7,
    'eggGroups': ['Bug']
  },
  'dustox': {
    'num': 269,
    'species': 'Dustox',
    'types': ['Bug', 'Poison'],
    'baseStats': {
      'hp': 60,
      'atk': 50,
      'def': 70,
      'spa': 50,
      'spd': 90,
      'spe': 65
    },
    'abilities': {
      '0': 'Shield Dust',
      'H': 'Compound Eyes'
    },
    'heightm': 1.2,
    'weightkg': 31.6,
    'color': 'Green',
    'prevo': 'cascoon',
    'evoLevel': 10,
    'eggGroups': ['Bug']
  },
  'lotad': {
    'num': 270,
    'species': 'Lotad',
    'types': ['Water', 'Grass'],
    'baseStats': {
      'hp': 40,
      'atk': 30,
      'def': 30,
      'spa': 40,
      'spd': 50,
      'spe': 30
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Rain Dish',
      'H': 'Own Tempo'
    },
    'heightm': 0.5,
    'weightkg': 2.6,
    'color': 'Green',
    'evos': ['lombre'],
    'eggGroups': ['Water 1', 'Grass']
  },
  'lombre': {
    'num': 271,
    'species': 'Lombre',
    'types': ['Water', 'Grass'],
    'baseStats': {
      'hp': 60,
      'atk': 50,
      'def': 50,
      'spa': 60,
      'spd': 70,
      'spe': 50
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Rain Dish',
      'H': 'Own Tempo'
    },
    'heightm': 1.2,
    'weightkg': 32.5,
    'color': 'Green',
    'prevo': 'lotad',
    'evos': ['ludicolo'],
    'evoLevel': 14,
    'eggGroups': ['Water 1', 'Grass']
  },
  'ludicolo': {
    'num': 272,
    'species': 'Ludicolo',
    'types': ['Water', 'Grass'],
    'baseStats': {
      'hp': 80,
      'atk': 70,
      'def': 70,
      'spa': 90,
      'spd': 100,
      'spe': 70
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Rain Dish',
      'H': 'Own Tempo'
    },
    'heightm': 1.5,
    'weightkg': 55,
    'color': 'Green',
    'prevo': 'lombre',
    'evoLevel': 14,
    'eggGroups': ['Water 1', 'Grass']
  },
  'seedot': {
    'num': 273,
    'species': 'Seedot',
    'types': ['Grass'],
    'baseStats': {
      'hp': 40,
      'atk': 40,
      'def': 50,
      'spa': 30,
      'spd': 30,
      'spe': 30
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Early Bird',
      'H': 'Pickpocket'
    },
    'heightm': 0.5,
    'weightkg': 4,
    'color': 'Brown',
    'evos': ['nuzleaf'],
    'eggGroups': ['Field', 'Grass']
  },
  'nuzleaf': {
    'num': 274,
    'species': 'Nuzleaf',
    'types': ['Grass', 'Dark'],
    'baseStats': {
      'hp': 70,
      'atk': 70,
      'def': 40,
      'spa': 60,
      'spd': 40,
      'spe': 60
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Early Bird',
      'H': 'Pickpocket'
    },
    'heightm': 1,
    'weightkg': 28,
    'color': 'Brown',
    'prevo': 'seedot',
    'evos': ['shiftry'],
    'evoLevel': 14,
    'eggGroups': ['Field', 'Grass']
  },
  'shiftry': {
    'num': 275,
    'species': 'Shiftry',
    'types': ['Grass', 'Dark'],
    'baseStats': {
      'hp': 90,
      'atk': 100,
      'def': 60,
      'spa': 90,
      'spd': 60,
      'spe': 80
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Early Bird',
      'H': 'Pickpocket'
    },
    'heightm': 1.3,
    'weightkg': 59.6,
    'color': 'Brown',
    'prevo': 'nuzleaf',
    'evoLevel': 14,
    'eggGroups': ['Field', 'Grass']
  },
  'taillow': {
    'num': 276,
    'species': 'Taillow',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 40,
      'atk': 55,
      'def': 30,
      'spa': 30,
      'spd': 30,
      'spe': 85
    },
    'abilities': {
      '0': 'Guts',
      'H': 'Scrappy'
    },
    'heightm': 0.3,
    'weightkg': 2.3,
    'color': 'Blue',
    'evos': ['swellow'],
    'eggGroups': ['Flying']
  },
  'swellow': {
    'num': 277,
    'species': 'Swellow',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 60,
      'atk': 85,
      'def': 60,
      'spa': 75,
      'spd': 50,
      'spe': 125
    },
    'abilities': {
      '0': 'Guts',
      'H': 'Scrappy'
    },
    'heightm': 0.7,
    'weightkg': 19.8,
    'color': 'Blue',
    'prevo': 'taillow',
    'evoLevel': 22,
    'eggGroups': ['Flying']
  },
  'wingull': {
    'num': 278,
    'species': 'Wingull',
    'types': ['Water', 'Flying'],
    'baseStats': {
      'hp': 40,
      'atk': 30,
      'def': 30,
      'spa': 55,
      'spd': 30,
      'spe': 85
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Hydration',
      'H': 'Rain Dish'
    },
    'heightm': 0.6,
    'weightkg': 9.5,
    'color': 'White',
    'evos': ['pelipper'],
    'eggGroups': ['Water 1', 'Flying']
  },
  'pelipper': {
    'num': 279,
    'species': 'Pelipper',
    'types': ['Water', 'Flying'],
    'baseStats': {
      'hp': 60,
      'atk': 50,
      'def': 100,
      'spa': 95,
      'spd': 70,
      'spe': 65
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Drizzle',
      'H': 'Rain Dish'
    },
    'heightm': 1.2,
    'weightkg': 28,
    'color': 'Yellow',
    'prevo': 'wingull',
    'evoLevel': 25,
    'eggGroups': ['Water 1', 'Flying']
  },
  'ralts': {
    'num': 280,
    'species': 'Ralts',
    'types': ['Psychic', 'Fairy'],
    'baseStats': {
      'hp': 28,
      'atk': 25,
      'def': 25,
      'spa': 45,
      'spd': 35,
      'spe': 40
    },
    'abilities': {
      '0': 'Synchronize',
      '1': 'Trace',
      'H': 'Telepathy'
    },
    'heightm': 0.4,
    'weightkg': 6.6,
    'color': 'White',
    'evos': ['kirlia'],
    'eggGroups': ['Amorphous']
  },
  'kirlia': {
    'num': 281,
    'species': 'Kirlia',
    'types': ['Psychic', 'Fairy'],
    'baseStats': {
      'hp': 38,
      'atk': 35,
      'def': 35,
      'spa': 65,
      'spd': 55,
      'spe': 50
    },
    'abilities': {
      '0': 'Synchronize',
      '1': 'Trace',
      'H': 'Telepathy'
    },
    'heightm': 0.8,
    'weightkg': 20.2,
    'color': 'White',
    'prevo': 'ralts',
    'evos': ['gardevoir', 'gallade'],
    'evoLevel': 20,
    'eggGroups': ['Amorphous']
  },
  'gardevoir': {
    'num': 282,
    'species': 'Gardevoir',
    'types': ['Psychic', 'Fairy'],
    'baseStats': {
      'hp': 68,
      'atk': 65,
      'def': 65,
      'spa': 125,
      'spd': 115,
      'spe': 80
    },
    'abilities': {
      '0': 'Synchronize',
      '1': 'Trace',
      'H': 'Telepathy'
    },
    'heightm': 1.6,
    'weightkg': 48.4,
    'color': 'White',
    'prevo': 'kirlia',
    'evoLevel': 30,
    'eggGroups': ['Amorphous'],
    'otherFormes': ['gardevoirmega']
  },
  'gardevoirmega': {
    'num': 282,
    'species': 'Gardevoir-Mega',
    'baseSpecies': 'Gardevoir',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Psychic', 'Fairy'],
    'baseStats': {
      'hp': 68,
      'atk': 85,
      'def': 65,
      'spa': 165,
      'spd': 135,
      'spe': 100
    },
    'abilities': {'0': 'Pixilate'},
    'heightm': 1.6,
    'weightkg': 48.4,
    'color': 'White',
    'eggGroups': ['Amorphous']
  },
  'surskit': {
    'num': 283,
    'species': 'Surskit',
    'types': ['Bug', 'Water'],
    'baseStats': {
      'hp': 40,
      'atk': 30,
      'def': 32,
      'spa': 50,
      'spd': 52,
      'spe': 65
    },
    'abilities': {
      '0': 'Swift Swim',
      'H': 'Rain Dish'
    },
    'heightm': 0.5,
    'weightkg': 1.7,
    'color': 'Blue',
    'evos': ['masquerain'],
    'eggGroups': ['Water 1', 'Bug']
  },
  'masquerain': {
    'num': 284,
    'species': 'Masquerain',
    'types': ['Bug', 'Flying'],
    'baseStats': {
      'hp': 70,
      'atk': 60,
      'def': 62,
      'spa': 100,
      'spd': 82,
      'spe': 80
    },
    'abilities': {
      '0': 'Intimidate',
      'H': 'Unnerve'
    },
    'heightm': 0.8,
    'weightkg': 3.6,
    'color': 'Blue',
    'prevo': 'surskit',
    'evoLevel': 22,
    'eggGroups': ['Water 1', 'Bug']
  },
  'shroomish': {
    'num': 285,
    'species': 'Shroomish',
    'types': ['Grass'],
    'baseStats': {
      'hp': 60,
      'atk': 40,
      'def': 60,
      'spa': 40,
      'spd': 60,
      'spe': 35
    },
    'abilities': {
      '0': 'Effect Spore',
      '1': 'Poison Heal',
      'H': 'Quick Feet'
    },
    'heightm': 0.4,
    'weightkg': 4.5,
    'color': 'Brown',
    'evos': ['breloom'],
    'eggGroups': ['Fairy', 'Grass']
  },
  'breloom': {
    'num': 286,
    'species': 'Breloom',
    'types': ['Grass', 'Fighting'],
    'baseStats': {
      'hp': 60,
      'atk': 130,
      'def': 80,
      'spa': 60,
      'spd': 60,
      'spe': 70
    },
    'abilities': {
      '0': 'Effect Spore',
      '1': 'Poison Heal',
      'H': 'Technician'
    },
    'heightm': 1.2,
    'weightkg': 39.2,
    'color': 'Green',
    'prevo': 'shroomish',
    'evoLevel': 23,
    'eggGroups': ['Fairy', 'Grass']
  },
  'slakoth': {
    'num': 287,
    'species': 'Slakoth',
    'types': ['Normal'],
    'baseStats': {
      'hp': 60,
      'atk': 60,
      'def': 60,
      'spa': 35,
      'spd': 35,
      'spe': 30
    },
    'abilities': {'0': 'Truant'},
    'heightm': 0.8,
    'weightkg': 24,
    'color': 'Brown',
    'evos': ['vigoroth'],
    'eggGroups': ['Field']
  },
  'vigoroth': {
    'num': 288,
    'species': 'Vigoroth',
    'types': ['Normal'],
    'baseStats': {
      'hp': 80,
      'atk': 80,
      'def': 80,
      'spa': 55,
      'spd': 55,
      'spe': 90
    },
    'abilities': {'0': 'Vital Spirit'},
    'heightm': 1.4,
    'weightkg': 46.5,
    'color': 'White',
    'prevo': 'slakoth',
    'evos': ['slaking'],
    'evoLevel': 18,
    'eggGroups': ['Field']
  },
  'slaking': {
    'num': 289,
    'species': 'Slaking',
    'types': ['Normal'],
    'baseStats': {
      'hp': 150,
      'atk': 160,
      'def': 100,
      'spa': 95,
      'spd': 65,
      'spe': 100
    },
    'abilities': {'0': 'Truant'},
    'heightm': 2,
    'weightkg': 130.5,
    'color': 'Brown',
    'prevo': 'vigoroth',
    'evoLevel': 36,
    'eggGroups': ['Field']
  },
  'nincada': {
    'num': 290,
    'species': 'Nincada',
    'types': ['Bug', 'Ground'],
    'baseStats': {
      'hp': 31,
      'atk': 45,
      'def': 90,
      'spa': 30,
      'spd': 30,
      'spe': 40
    },
    'abilities': {
      '0': 'Compound Eyes',
      'H': 'Run Away'
    },
    'heightm': 0.5,
    'weightkg': 5.5,
    'color': 'Gray',
    'evos': ['ninjask', 'shedinja'],
    'eggGroups': ['Bug']
  },
  'ninjask': {
    'num': 291,
    'species': 'Ninjask',
    'types': ['Bug', 'Flying'],
    'baseStats': {
      'hp': 61,
      'atk': 90,
      'def': 45,
      'spa': 50,
      'spd': 50,
      'spe': 160
    },
    'abilities': {
      '0': 'Speed Boost',
      'H': 'Infiltrator'
    },
    'heightm': 0.8,
    'weightkg': 12,
    'color': 'Yellow',
    'prevo': 'nincada',
    'evoLevel': 20,
    'eggGroups': ['Bug']
  },
  'shedinja': {
    'num': 292,
    'species': 'Shedinja',
    'types': ['Bug', 'Ghost'],
    'gender': 'N',
    'baseStats': {
      'hp': 1,
      'atk': 90,
      'def': 45,
      'spa': 30,
      'spd': 30,
      'spe': 40
    },
    'maxHP': 1,
    'abilities': {'0': 'Wonder Guard'},
    'heightm': 0.8,
    'weightkg': 1.2,
    'color': 'Brown',
    'prevo': 'nincada',
    'evoLevel': 20,
    'eggGroups': ['Mineral']
  },
  'whismur': {
    'num': 293,
    'species': 'Whismur',
    'types': ['Normal'],
    'baseStats': {
      'hp': 64,
      'atk': 51,
      'def': 23,
      'spa': 51,
      'spd': 23,
      'spe': 28
    },
    'abilities': {
      '0': 'Soundproof',
      'H': 'Rattled'
    },
    'heightm': 0.6,
    'weightkg': 16.3,
    'color': 'Pink',
    'evos': ['loudred'],
    'eggGroups': ['Monster', 'Field']
  },
  'loudred': {
    'num': 294,
    'species': 'Loudred',
    'types': ['Normal'],
    'baseStats': {
      'hp': 84,
      'atk': 71,
      'def': 43,
      'spa': 71,
      'spd': 43,
      'spe': 48
    },
    'abilities': {
      '0': 'Soundproof',
      'H': 'Scrappy'
    },
    'heightm': 1,
    'weightkg': 40.5,
    'color': 'Blue',
    'prevo': 'whismur',
    'evos': ['exploud'],
    'evoLevel': 20,
    'eggGroups': ['Monster', 'Field']
  },
  'exploud': {
    'num': 295,
    'species': 'Exploud',
    'types': ['Normal'],
    'baseStats': {
      'hp': 104,
      'atk': 91,
      'def': 63,
      'spa': 91,
      'spd': 73,
      'spe': 68
    },
    'abilities': {
      '0': 'Soundproof',
      'H': 'Scrappy'
    },
    'heightm': 1.5,
    'weightkg': 84,
    'color': 'Blue',
    'prevo': 'loudred',
    'evoLevel': 40,
    'eggGroups': ['Monster', 'Field']
  },
  'makuhita': {
    'num': 296,
    'species': 'Makuhita',
    'types': ['Fighting'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 72,
      'atk': 60,
      'def': 30,
      'spa': 20,
      'spd': 30,
      'spe': 25
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Guts',
      'H': 'Sheer Force'
    },
    'heightm': 1,
    'weightkg': 86.4,
    'color': 'Yellow',
    'evos': ['hariyama'],
    'eggGroups': ['Human-Like']
  },
  'hariyama': {
    'num': 297,
    'species': 'Hariyama',
    'types': ['Fighting'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 144,
      'atk': 120,
      'def': 60,
      'spa': 40,
      'spd': 60,
      'spe': 50
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Guts',
      'H': 'Sheer Force'
    },
    'heightm': 2.3,
    'weightkg': 253.8,
    'color': 'Brown',
    'prevo': 'makuhita',
    'evoLevel': 24,
    'eggGroups': ['Human-Like']
  },
  'azurill': {
    'num': 298,
    'species': 'Azurill',
    'types': ['Normal', 'Fairy'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 50,
      'atk': 20,
      'def': 40,
      'spa': 20,
      'spd': 40,
      'spe': 20
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Huge Power',
      'H': 'Sap Sipper'
    },
    'heightm': 0.2,
    'weightkg': 2,
    'color': 'Blue',
    'evos': ['marill'],
    'eggGroups': ['Undiscovered']
  },
  'nosepass': {
    'num': 299,
    'species': 'Nosepass',
    'types': ['Rock'],
    'baseStats': {
      'hp': 30,
      'atk': 45,
      'def': 135,
      'spa': 45,
      'spd': 90,
      'spe': 30
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Magnet Pull',
      'H': 'Sand Force'
    },
    'heightm': 1,
    'weightkg': 97,
    'color': 'Gray',
    'evos': ['probopass'],
    'eggGroups': ['Mineral']
  },
  'skitty': {
    'num': 300,
    'species': 'Skitty',
    'types': ['Normal'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 50,
      'atk': 45,
      'def': 45,
      'spa': 35,
      'spd': 35,
      'spe': 50
    },
    'abilities': {
      '0': 'Cute Charm',
      '1': 'Normalize',
      'H': 'Wonder Skin'
    },
    'heightm': 0.6,
    'weightkg': 11,
    'color': 'Pink',
    'evos': ['delcatty'],
    'eggGroups': ['Field', 'Fairy']
  },
  'delcatty': {
    'num': 301,
    'species': 'Delcatty',
    'types': ['Normal'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 70,
      'atk': 65,
      'def': 65,
      'spa': 55,
      'spd': 55,
      'spe': 90
    },
    'abilities': {
      '0': 'Cute Charm',
      '1': 'Normalize',
      'H': 'Wonder Skin'
    },
    'heightm': 1.1,
    'weightkg': 32.6,
    'color': 'Purple',
    'prevo': 'skitty',
    'evoLevel': 1,
    'eggGroups': ['Field', 'Fairy']
  },
  'sableye': {
    'num': 302,
    'species': 'Sableye',
    'types': ['Dark', 'Ghost'],
    'baseStats': {
      'hp': 50,
      'atk': 75,
      'def': 75,
      'spa': 65,
      'spd': 65,
      'spe': 50
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Stall',
      'H': 'Prankster'
    },
    'heightm': 0.5,
    'weightkg': 11,
    'color': 'Purple',
    'eggGroups': ['Human-Like'],
    'otherFormes': ['sableyemega']
  },
  'sableyemega': {
    'num': 302,
    'species': 'Sableye-Mega',
    'baseSpecies': 'Sableye',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Dark', 'Ghost'],
    'baseStats': {
      'hp': 50,
      'atk': 85,
      'def': 125,
      'spa': 85,
      'spd': 115,
      'spe': 20
    },
    'abilities': {'0': 'Magic Bounce'},
    'heightm': 0.5,
    'weightkg': 161,
    'color': 'Purple',
    'eggGroups': ['Human-Like']
  },
  'mawile': {
    'num': 303,
    'species': 'Mawile',
    'types': ['Steel', 'Fairy'],
    'baseStats': {
      'hp': 50,
      'atk': 85,
      'def': 85,
      'spa': 55,
      'spd': 55,
      'spe': 50
    },
    'abilities': {
      '0': 'Hyper Cutter',
      '1': 'Intimidate',
      'H': 'Sheer Force'
    },
    'heightm': 0.6,
    'weightkg': 11.5,
    'color': 'Black',
    'eggGroups': ['Field', 'Fairy'],
    'otherFormes': ['mawilemega']
  },
  'mawilemega': {
    'num': 303,
    'species': 'Mawile-Mega',
    'baseSpecies': 'Mawile',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Steel', 'Fairy'],
    'baseStats': {
      'hp': 50,
      'atk': 105,
      'def': 125,
      'spa': 55,
      'spd': 95,
      'spe': 50
    },
    'abilities': {'0': 'Huge Power'},
    'heightm': 1,
    'weightkg': 23.5,
    'color': 'Black',
    'eggGroups': ['Field', 'Fairy']
  },
  'aron': {
    'num': 304,
    'species': 'Aron',
    'types': ['Steel', 'Rock'],
    'baseStats': {
      'hp': 50,
      'atk': 70,
      'def': 100,
      'spa': 40,
      'spd': 40,
      'spe': 30
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Rock Head',
      'H': 'Heavy Metal'
    },
    'heightm': 0.4,
    'weightkg': 60,
    'color': 'Gray',
    'evos': ['lairon'],
    'eggGroups': ['Monster']
  },
  'lairon': {
    'num': 305,
    'species': 'Lairon',
    'types': ['Steel', 'Rock'],
    'baseStats': {
      'hp': 60,
      'atk': 90,
      'def': 140,
      'spa': 50,
      'spd': 50,
      'spe': 40
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Rock Head',
      'H': 'Heavy Metal'
    },
    'heightm': 0.9,
    'weightkg': 120,
    'color': 'Gray',
    'prevo': 'aron',
    'evos': ['aggron'],
    'evoLevel': 32,
    'eggGroups': ['Monster']
  },
  'aggron': {
    'num': 306,
    'species': 'Aggron',
    'types': ['Steel', 'Rock'],
    'baseStats': {
      'hp': 70,
      'atk': 110,
      'def': 180,
      'spa': 60,
      'spd': 60,
      'spe': 50
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Rock Head',
      'H': 'Heavy Metal'
    },
    'heightm': 2.1,
    'weightkg': 360,
    'color': 'Gray',
    'prevo': 'lairon',
    'evoLevel': 42,
    'eggGroups': ['Monster'],
    'otherFormes': ['aggronmega']
  },
  'aggronmega': {
    'num': 306,
    'species': 'Aggron-Mega',
    'baseSpecies': 'Aggron',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Steel'],
    'baseStats': {
      'hp': 70,
      'atk': 140,
      'def': 230,
      'spa': 60,
      'spd': 80,
      'spe': 50
    },
    'abilities': {'0': 'Filter'},
    'heightm': 2.2,
    'weightkg': 395,
    'color': 'Gray',
    'eggGroups': ['Monster']
  },
  'meditite': {
    'num': 307,
    'species': 'Meditite',
    'types': ['Fighting', 'Psychic'],
    'baseStats': {
      'hp': 30,
      'atk': 40,
      'def': 55,
      'spa': 40,
      'spd': 55,
      'spe': 60
    },
    'abilities': {
      '0': 'Pure Power',
      'H': 'Telepathy'
    },
    'heightm': 0.6,
    'weightkg': 11.2,
    'color': 'Blue',
    'evos': ['medicham'],
    'eggGroups': ['Human-Like']
  },
  'medicham': {
    'num': 308,
    'species': 'Medicham',
    'types': ['Fighting', 'Psychic'],
    'baseStats': {
      'hp': 60,
      'atk': 60,
      'def': 75,
      'spa': 60,
      'spd': 75,
      'spe': 80
    },
    'abilities': {
      '0': 'Pure Power',
      'H': 'Telepathy'
    },
    'heightm': 1.3,
    'weightkg': 31.5,
    'color': 'Red',
    'prevo': 'meditite',
    'evoLevel': 37,
    'eggGroups': ['Human-Like'],
    'otherFormes': ['medichammega']
  },
  'medichammega': {
    'num': 308,
    'species': 'Medicham-Mega',
    'baseSpecies': 'Medicham',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Fighting', 'Psychic'],
    'baseStats': {
      'hp': 60,
      'atk': 100,
      'def': 85,
      'spa': 80,
      'spd': 85,
      'spe': 100
    },
    'abilities': {'0': 'Pure Power'},
    'heightm': 1.3,
    'weightkg': 31.5,
    'color': 'Red',
    'eggGroups': ['Human-Like']
  },
  'electrike': {
    'num': 309,
    'species': 'Electrike',
    'types': ['Electric'],
    'baseStats': {
      'hp': 40,
      'atk': 45,
      'def': 40,
      'spa': 65,
      'spd': 40,
      'spe': 65
    },
    'abilities': {
      '0': 'Static',
      '1': 'Lightning Rod',
      'H': 'Minus'
    },
    'heightm': 0.6,
    'weightkg': 15.2,
    'color': 'Green',
    'evos': ['manectric'],
    'eggGroups': ['Field']
  },
  'manectric': {
    'num': 310,
    'species': 'Manectric',
    'types': ['Electric'],
    'baseStats': {
      'hp': 70,
      'atk': 75,
      'def': 60,
      'spa': 105,
      'spd': 60,
      'spe': 105
    },
    'abilities': {
      '0': 'Static',
      '1': 'Lightning Rod',
      'H': 'Minus'
    },
    'heightm': 1.5,
    'weightkg': 40.2,
    'color': 'Yellow',
    'prevo': 'electrike',
    'evoLevel': 26,
    'eggGroups': ['Field'],
    'otherFormes': ['manectricmega']
  },
  'manectricmega': {
    'num': 310,
    'species': 'Manectric-Mega',
    'baseSpecies': 'Manectric',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Electric'],
    'baseStats': {
      'hp': 70,
      'atk': 75,
      'def': 80,
      'spa': 135,
      'spd': 80,
      'spe': 135
    },
    'abilities': {'0': 'Intimidate'},
    'heightm': 1.8,
    'weightkg': 44,
    'color': 'Yellow',
    'eggGroups': ['Field']
  },
  'plusle': {
    'num': 311,
    'species': 'Plusle',
    'types': ['Electric'],
    'baseStats': {
      'hp': 60,
      'atk': 50,
      'def': 40,
      'spa': 85,
      'spd': 75,
      'spe': 95
    },
    'abilities': {
      '0': 'Plus',
      'H': 'Lightning Rod'
    },
    'heightm': 0.4,
    'weightkg': 4.2,
    'color': 'Yellow',
    'eggGroups': ['Fairy']
  },
  'minun': {
    'num': 312,
    'species': 'Minun',
    'types': ['Electric'],
    'baseStats': {
      'hp': 60,
      'atk': 40,
      'def': 50,
      'spa': 75,
      'spd': 85,
      'spe': 95
    },
    'abilities': {
      '0': 'Minus',
      'H': 'Volt Absorb'
    },
    'heightm': 0.4,
    'weightkg': 4.2,
    'color': 'Yellow',
    'eggGroups': ['Fairy']
  },
  'volbeat': {
    'num': 313,
    'species': 'Volbeat',
    'types': ['Bug'],
    'gender': 'M',
    'baseStats': {
      'hp': 65,
      'atk': 73,
      'def': 75,
      'spa': 47,
      'spd': 85,
      'spe': 85
    },
    'abilities': {
      '0': 'Illuminate',
      '1': 'Swarm',
      'H': 'Prankster'
    },
    'heightm': 0.7,
    'weightkg': 17.7,
    'color': 'Gray',
    'eggGroups': ['Bug', 'Human-Like']
  },
  'illumise': {
    'num': 314,
    'species': 'Illumise',
    'types': ['Bug'],
    'gender': 'F',
    'baseStats': {
      'hp': 65,
      'atk': 47,
      'def': 75,
      'spa': 73,
      'spd': 85,
      'spe': 85
    },
    'abilities': {
      '0': 'Oblivious',
      '1': 'Tinted Lens',
      'H': 'Prankster'
    },
    'heightm': 0.6,
    'weightkg': 17.7,
    'color': 'Purple',
    'eggGroups': ['Bug', 'Human-Like']
  },
  'roselia': {
    'num': 315,
    'species': 'Roselia',
    'types': ['Grass', 'Poison'],
    'baseStats': {
      'hp': 50,
      'atk': 60,
      'def': 45,
      'spa': 100,
      'spd': 80,
      'spe': 65
    },
    'abilities': {
      '0': 'Natural Cure',
      '1': 'Poison Point',
      'H': 'Leaf Guard'
    },
    'heightm': 0.3,
    'weightkg': 2,
    'color': 'Green',
    'prevo': 'budew',
    'evos': ['roserade'],
    'evoLevel': 1,
    'eggGroups': ['Fairy', 'Grass']
  },
  'gulpin': {
    'num': 316,
    'species': 'Gulpin',
    'types': ['Poison'],
    'baseStats': {
      'hp': 70,
      'atk': 43,
      'def': 53,
      'spa': 43,
      'spd': 53,
      'spe': 40
    },
    'abilities': {
      '0': 'Liquid Ooze',
      '1': 'Sticky Hold',
      'H': 'Gluttony'
    },
    'heightm': 0.4,
    'weightkg': 10.3,
    'color': 'Green',
    'evos': ['swalot'],
    'eggGroups': ['Amorphous']
  },
  'swalot': {
    'num': 317,
    'species': 'Swalot',
    'types': ['Poison'],
    'baseStats': {
      'hp': 100,
      'atk': 73,
      'def': 83,
      'spa': 73,
      'spd': 83,
      'spe': 55
    },
    'abilities': {
      '0': 'Liquid Ooze',
      '1': 'Sticky Hold',
      'H': 'Gluttony'
    },
    'heightm': 1.7,
    'weightkg': 80,
    'color': 'Purple',
    'prevo': 'gulpin',
    'evoLevel': 26,
    'eggGroups': ['Amorphous']
  },
  'carvanha': {
    'num': 318,
    'species': 'Carvanha',
    'types': ['Water', 'Dark'],
    'baseStats': {
      'hp': 45,
      'atk': 90,
      'def': 20,
      'spa': 65,
      'spd': 20,
      'spe': 65
    },
    'abilities': {
      '0': 'Rough Skin',
      'H': 'Speed Boost'
    },
    'heightm': 0.8,
    'weightkg': 20.8,
    'color': 'Red',
    'evos': ['sharpedo'],
    'eggGroups': ['Water 2']
  },
  'sharpedo': {
    'num': 319,
    'species': 'Sharpedo',
    'types': ['Water', 'Dark'],
    'baseStats': {
      'hp': 70,
      'atk': 120,
      'def': 40,
      'spa': 95,
      'spd': 40,
      'spe': 95
    },
    'abilities': {
      '0': 'Rough Skin',
      'H': 'Speed Boost'
    },
    'heightm': 1.8,
    'weightkg': 88.8,
    'color': 'Blue',
    'prevo': 'carvanha',
    'evoLevel': 30,
    'eggGroups': ['Water 2'],
    'otherFormes': ['sharpedomega']
  },
  'sharpedomega': {
    'num': 319,
    'species': 'Sharpedo-Mega',
    'baseSpecies': 'Sharpedo',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Water', 'Dark'],
    'baseStats': {
      'hp': 70,
      'atk': 140,
      'def': 70,
      'spa': 110,
      'spd': 65,
      'spe': 105
    },
    'abilities': {'0': 'Strong Jaw'},
    'heightm': 2.5,
    'weightkg': 130.3,
    'color': 'Blue',
    'eggGroups': ['Water 2']
  },
  'wailmer': {
    'num': 320,
    'species': 'Wailmer',
    'types': ['Water'],
    'baseStats': {
      'hp': 130,
      'atk': 70,
      'def': 35,
      'spa': 70,
      'spd': 35,
      'spe': 60
    },
    'abilities': {
      '0': 'Water Veil',
      '1': 'Oblivious',
      'H': 'Pressure'
    },
    'heightm': 2,
    'weightkg': 130,
    'color': 'Blue',
    'evos': ['wailord'],
    'eggGroups': ['Field', 'Water 2']
  },
  'wailord': {
    'num': 321,
    'species': 'Wailord',
    'types': ['Water'],
    'baseStats': {
      'hp': 170,
      'atk': 90,
      'def': 45,
      'spa': 90,
      'spd': 45,
      'spe': 60
    },
    'abilities': {
      '0': 'Water Veil',
      '1': 'Oblivious',
      'H': 'Pressure'
    },
    'heightm': 14.5,
    'weightkg': 398,
    'color': 'Blue',
    'prevo': 'wailmer',
    'evoLevel': 40,
    'eggGroups': ['Field', 'Water 2']
  },
  'numel': {
    'num': 322,
    'species': 'Numel',
    'types': ['Fire', 'Ground'],
    'baseStats': {
      'hp': 60,
      'atk': 60,
      'def': 40,
      'spa': 65,
      'spd': 45,
      'spe': 35
    },
    'abilities': {
      '0': 'Oblivious',
      '1': 'Simple',
      'H': 'Own Tempo'
    },
    'heightm': 0.7,
    'weightkg': 24,
    'color': 'Yellow',
    'evos': ['camerupt'],
    'eggGroups': ['Field']
  },
  'camerupt': {
    'num': 323,
    'species': 'Camerupt',
    'types': ['Fire', 'Ground'],
    'baseStats': {
      'hp': 70,
      'atk': 100,
      'def': 70,
      'spa': 105,
      'spd': 75,
      'spe': 40
    },
    'abilities': {
      '0': 'Magma Armor',
      '1': 'Solid Rock',
      'H': 'Anger Point'
    },
    'heightm': 1.9,
    'weightkg': 220,
    'color': 'Red',
    'prevo': 'numel',
    'evoLevel': 33,
    'eggGroups': ['Field'],
    'otherFormes': ['cameruptmega']
  },
  'cameruptmega': {
    'num': 323,
    'species': 'Camerupt-Mega',
    'baseSpecies': 'Camerupt',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Fire', 'Ground'],
    'baseStats': {
      'hp': 70,
      'atk': 120,
      'def': 100,
      'spa': 145,
      'spd': 105,
      'spe': 20
    },
    'abilities': {'0': 'Sheer Force'},
    'heightm': 2.5,
    'weightkg': 320.5,
    'color': 'Red',
    'eggGroups': ['Field']
  },
  'torkoal': {
    'num': 324,
    'species': 'Torkoal',
    'types': ['Fire'],
    'baseStats': {
      'hp': 70,
      'atk': 85,
      'def': 140,
      'spa': 85,
      'spd': 70,
      'spe': 20
    },
    'abilities': {
      '0': 'White Smoke',
      '1': 'Drought',
      'H': 'Shell Armor'
    },
    'heightm': 0.5,
    'weightkg': 80.4,
    'color': 'Brown',
    'eggGroups': ['Field']
  },
  'spoink': {
    'num': 325,
    'species': 'Spoink',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 60,
      'atk': 25,
      'def': 35,
      'spa': 70,
      'spd': 80,
      'spe': 60
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Own Tempo',
      'H': 'Gluttony'
    },
    'heightm': 0.7,
    'weightkg': 30.6,
    'color': 'Black',
    'evos': ['grumpig'],
    'eggGroups': ['Field']
  },
  'grumpig': {
    'num': 326,
    'species': 'Grumpig',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 80,
      'atk': 45,
      'def': 65,
      'spa': 90,
      'spd': 110,
      'spe': 80
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Own Tempo',
      'H': 'Gluttony'
    },
    'heightm': 0.9,
    'weightkg': 71.5,
    'color': 'Purple',
    'prevo': 'spoink',
    'evoLevel': 32,
    'eggGroups': ['Field']
  },
  'spinda': {
    'num': 327,
    'species': 'Spinda',
    'types': ['Normal'],
    'baseStats': {
      'hp': 60,
      'atk': 60,
      'def': 60,
      'spa': 60,
      'spd': 60,
      'spe': 60
    },
    'abilities': {
      '0': 'Own Tempo',
      '1': 'Tangled Feet',
      'H': 'Contrary'
    },
    'heightm': 1.1,
    'weightkg': 5,
    'color': 'Brown',
    'eggGroups': ['Field', 'Human-Like']
  },
  'trapinch': {
    'num': 328,
    'species': 'Trapinch',
    'types': ['Ground'],
    'baseStats': {
      'hp': 45,
      'atk': 100,
      'def': 45,
      'spa': 45,
      'spd': 45,
      'spe': 10
    },
    'abilities': {
      '0': 'Hyper Cutter',
      '1': 'Arena Trap',
      'H': 'Sheer Force'
    },
    'heightm': 0.7,
    'weightkg': 15,
    'color': 'Brown',
    'evos': ['vibrava'],
    'eggGroups': ['Bug']
  },
  'vibrava': {
    'num': 329,
    'species': 'Vibrava',
    'types': ['Ground', 'Dragon'],
    'baseStats': {
      'hp': 50,
      'atk': 70,
      'def': 50,
      'spa': 50,
      'spd': 50,
      'spe': 70
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.1,
    'weightkg': 15.3,
    'color': 'Green',
    'prevo': 'trapinch',
    'evos': ['flygon'],
    'evoLevel': 35,
    'eggGroups': ['Bug']
  },
  'flygon': {
    'num': 330,
    'species': 'Flygon',
    'types': ['Ground', 'Dragon'],
    'baseStats': {
      'hp': 80,
      'atk': 100,
      'def': 80,
      'spa': 80,
      'spd': 80,
      'spe': 100
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 2,
    'weightkg': 82,
    'color': 'Green',
    'prevo': 'vibrava',
    'evoLevel': 45,
    'eggGroups': ['Bug']
  },
  'cacnea': {
    'num': 331,
    'species': 'Cacnea',
    'types': ['Grass'],
    'baseStats': {
      'hp': 50,
      'atk': 85,
      'def': 40,
      'spa': 85,
      'spd': 40,
      'spe': 35
    },
    'abilities': {
      '0': 'Sand Veil',
      'H': 'Water Absorb'
    },
    'heightm': 0.4,
    'weightkg': 51.3,
    'color': 'Green',
    'evos': ['cacturne'],
    'eggGroups': ['Grass', 'Human-Like']
  },
  'cacturne': {
    'num': 332,
    'species': 'Cacturne',
    'types': ['Grass', 'Dark'],
    'baseStats': {
      'hp': 70,
      'atk': 115,
      'def': 60,
      'spa': 115,
      'spd': 60,
      'spe': 55
    },
    'abilities': {
      '0': 'Sand Veil',
      'H': 'Water Absorb'
    },
    'heightm': 1.3,
    'weightkg': 77.4,
    'color': 'Green',
    'prevo': 'cacnea',
    'evoLevel': 32,
    'eggGroups': ['Grass', 'Human-Like']
  },
  'swablu': {
    'num': 333,
    'species': 'Swablu',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 45,
      'atk': 40,
      'def': 60,
      'spa': 40,
      'spd': 75,
      'spe': 50
    },
    'abilities': {
      '0': 'Natural Cure',
      'H': 'Cloud Nine'
    },
    'heightm': 0.4,
    'weightkg': 1.2,
    'color': 'Blue',
    'evos': ['altaria'],
    'eggGroups': ['Flying', 'Dragon']
  },
  'altaria': {
    'num': 334,
    'species': 'Altaria',
    'types': ['Dragon', 'Flying'],
    'baseStats': {
      'hp': 75,
      'atk': 70,
      'def': 90,
      'spa': 70,
      'spd': 105,
      'spe': 80
    },
    'abilities': {
      '0': 'Natural Cure',
      'H': 'Cloud Nine'
    },
    'heightm': 1.1,
    'weightkg': 20.6,
    'color': 'Blue',
    'prevo': 'swablu',
    'evoLevel': 35,
    'eggGroups': ['Flying', 'Dragon'],
    'otherFormes': ['altariamega']
  },
  'altariamega': {
    'num': 334,
    'species': 'Altaria-Mega',
    'baseSpecies': 'Altaria',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Dragon', 'Fairy'],
    'baseStats': {
      'hp': 75,
      'atk': 110,
      'def': 110,
      'spa': 110,
      'spd': 105,
      'spe': 80
    },
    'abilities': {'0': 'Pixilate'},
    'heightm': 1.5,
    'weightkg': 20.6,
    'color': 'Blue',
    'eggGroups': ['Flying', 'Dragon']
  },
  'zangoose': {
    'num': 335,
    'species': 'Zangoose',
    'types': ['Normal'],
    'baseStats': {
      'hp': 73,
      'atk': 115,
      'def': 60,
      'spa': 60,
      'spd': 60,
      'spe': 90
    },
    'abilities': {
      '0': 'Immunity',
      'H': 'Toxic Boost'
    },
    'heightm': 1.3,
    'weightkg': 40.3,
    'color': 'White',
    'eggGroups': ['Field']
  },
  'seviper': {
    'num': 336,
    'species': 'Seviper',
    'types': ['Poison'],
    'baseStats': {
      'hp': 73,
      'atk': 100,
      'def': 60,
      'spa': 100,
      'spd': 60,
      'spe': 65
    },
    'abilities': {
      '0': 'Shed Skin',
      'H': 'Infiltrator'
    },
    'heightm': 2.7,
    'weightkg': 52.5,
    'color': 'Black',
    'eggGroups': ['Field', 'Dragon']
  },
  'lunatone': {
    'num': 337,
    'species': 'Lunatone',
    'types': ['Rock', 'Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 90,
      'atk': 55,
      'def': 65,
      'spa': 95,
      'spd': 85,
      'spe': 70
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1,
    'weightkg': 168,
    'color': 'Yellow',
    'eggGroups': ['Mineral']
  },
  'solrock': {
    'num': 338,
    'species': 'Solrock',
    'types': ['Rock', 'Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 90,
      'atk': 95,
      'def': 85,
      'spa': 55,
      'spd': 65,
      'spe': 70
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.2,
    'weightkg': 154,
    'color': 'Red',
    'eggGroups': ['Mineral']
  },
  'barboach': {
    'num': 339,
    'species': 'Barboach',
    'types': ['Water', 'Ground'],
    'baseStats': {
      'hp': 50,
      'atk': 48,
      'def': 43,
      'spa': 46,
      'spd': 41,
      'spe': 60
    },
    'abilities': {
      '0': 'Oblivious',
      '1': 'Anticipation',
      'H': 'Hydration'
    },
    'heightm': 0.4,
    'weightkg': 1.9,
    'color': 'Gray',
    'evos': ['whiscash'],
    'eggGroups': ['Water 2']
  },
  'whiscash': {
    'num': 340,
    'species': 'Whiscash',
    'types': ['Water', 'Ground'],
    'baseStats': {
      'hp': 110,
      'atk': 78,
      'def': 73,
      'spa': 76,
      'spd': 71,
      'spe': 60
    },
    'abilities': {
      '0': 'Oblivious',
      '1': 'Anticipation',
      'H': 'Hydration'
    },
    'heightm': 0.9,
    'weightkg': 23.6,
    'color': 'Blue',
    'prevo': 'barboach',
    'evoLevel': 30,
    'eggGroups': ['Water 2']
  },
  'corphish': {
    'num': 341,
    'species': 'Corphish',
    'types': ['Water'],
    'baseStats': {
      'hp': 43,
      'atk': 80,
      'def': 65,
      'spa': 50,
      'spd': 35,
      'spe': 35
    },
    'abilities': {
      '0': 'Hyper Cutter',
      '1': 'Shell Armor',
      'H': 'Adaptability'
    },
    'heightm': 0.6,
    'weightkg': 11.5,
    'color': 'Red',
    'evos': ['crawdaunt'],
    'eggGroups': ['Water 1', 'Water 3']
  },
  'crawdaunt': {
    'num': 342,
    'species': 'Crawdaunt',
    'types': ['Water', 'Dark'],
    'baseStats': {
      'hp': 63,
      'atk': 120,
      'def': 85,
      'spa': 90,
      'spd': 55,
      'spe': 55
    },
    'abilities': {
      '0': 'Hyper Cutter',
      '1': 'Shell Armor',
      'H': 'Adaptability'
    },
    'heightm': 1.1,
    'weightkg': 32.8,
    'color': 'Red',
    'prevo': 'corphish',
    'evoLevel': 30,
    'eggGroups': ['Water 1', 'Water 3']
  },
  'baltoy': {
    'num': 343,
    'species': 'Baltoy',
    'types': ['Ground', 'Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 40,
      'atk': 40,
      'def': 55,
      'spa': 40,
      'spd': 70,
      'spe': 55
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.5,
    'weightkg': 21.5,
    'color': 'Brown',
    'evos': ['claydol'],
    'eggGroups': ['Mineral']
  },
  'claydol': {
    'num': 344,
    'species': 'Claydol',
    'types': ['Ground', 'Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 60,
      'atk': 70,
      'def': 105,
      'spa': 70,
      'spd': 120,
      'spe': 75
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.5,
    'weightkg': 108,
    'color': 'Black',
    'prevo': 'baltoy',
    'evoLevel': 36,
    'eggGroups': ['Mineral']
  },
  'lileep': {
    'num': 345,
    'species': 'Lileep',
    'types': ['Rock', 'Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 66,
      'atk': 41,
      'def': 77,
      'spa': 61,
      'spd': 87,
      'spe': 23
    },
    'abilities': {
      '0': 'Suction Cups',
      'H': 'Storm Drain'
    },
    'heightm': 1,
    'weightkg': 23.8,
    'color': 'Purple',
    'evos': ['cradily'],
    'eggGroups': ['Water 3']
  },
  'cradily': {
    'num': 346,
    'species': 'Cradily',
    'types': ['Rock', 'Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 86,
      'atk': 81,
      'def': 97,
      'spa': 81,
      'spd': 107,
      'spe': 43
    },
    'abilities': {
      '0': 'Suction Cups',
      'H': 'Storm Drain'
    },
    'heightm': 1.5,
    'weightkg': 60.4,
    'color': 'Green',
    'prevo': 'lileep',
    'evoLevel': 40,
    'eggGroups': ['Water 3']
  },
  'anorith': {
    'num': 347,
    'species': 'Anorith',
    'types': ['Rock', 'Bug'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 45,
      'atk': 95,
      'def': 50,
      'spa': 40,
      'spd': 50,
      'spe': 75
    },
    'abilities': {
      '0': 'Battle Armor',
      'H': 'Swift Swim'
    },
    'heightm': 0.7,
    'weightkg': 12.5,
    'color': 'Gray',
    'evos': ['armaldo'],
    'eggGroups': ['Water 3']
  },
  'armaldo': {
    'num': 348,
    'species': 'Armaldo',
    'types': ['Rock', 'Bug'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 75,
      'atk': 125,
      'def': 100,
      'spa': 70,
      'spd': 80,
      'spe': 45
    },
    'abilities': {
      '0': 'Battle Armor',
      'H': 'Swift Swim'
    },
    'heightm': 1.5,
    'weightkg': 68.2,
    'color': 'Gray',
    'prevo': 'anorith',
    'evoLevel': 40,
    'eggGroups': ['Water 3']
  },
  'feebas': {
    'num': 349,
    'species': 'Feebas',
    'types': ['Water'],
    'baseStats': {
      'hp': 20,
      'atk': 15,
      'def': 20,
      'spa': 10,
      'spd': 55,
      'spe': 80
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Oblivious',
      'H': 'Adaptability'
    },
    'heightm': 0.6,
    'weightkg': 7.4,
    'color': 'Brown',
    'evos': ['milotic'],
    'eggGroups': ['Water 1', 'Dragon']
  },
  'milotic': {
    'num': 350,
    'species': 'Milotic',
    'types': ['Water'],
    'baseStats': {
      'hp': 95,
      'atk': 60,
      'def': 79,
      'spa': 100,
      'spd': 125,
      'spe': 81
    },
    'abilities': {
      '0': 'Marvel Scale',
      '1': 'Competitive',
      'H': 'Cute Charm'
    },
    'heightm': 6.2,
    'weightkg': 162,
    'color': 'Pink',
    'prevo': 'feebas',
    'evoLevel': 1,
    'eggGroups': ['Water 1', 'Dragon']
  },
  'castform': {
    'num': 351,
    'species': 'Castform',
    'types': ['Normal'],
    'baseStats': {
      'hp': 70,
      'atk': 70,
      'def': 70,
      'spa': 70,
      'spd': 70,
      'spe': 70
    },
    'abilities': {'0': 'Forecast'},
    'heightm': 0.3,
    'weightkg': 0.8,
    'color': 'Gray',
    'eggGroups': ['Fairy', 'Amorphous'],
    'otherFormes': ['castformsunny', 'castformrainy', 'castformsnowy']
  },
  'castformsunny': {
    'num': 351,
    'species': 'Castform-Sunny',
    'baseSpecies': 'Castform',
    'forme': 'Sunny',
    'formeLetter': 'S',
    'types': ['Fire'],
    'baseStats': {
      'hp': 70,
      'atk': 70,
      'def': 70,
      'spa': 70,
      'spd': 70,
      'spe': 70
    },
    'abilities': {'0': 'Forecast'},
    'heightm': 0.3,
    'weightkg': 0.8,
    'color': 'Red',
    'eggGroups': ['Fairy', 'Amorphous']
  },
  'castformrainy': {
    'num': 351,
    'species': 'Castform-Rainy',
    'baseSpecies': 'Castform',
    'forme': 'Rainy',
    'formeLetter': 'R',
    'types': ['Water'],
    'baseStats': {
      'hp': 70,
      'atk': 70,
      'def': 70,
      'spa': 70,
      'spd': 70,
      'spe': 70
    },
    'abilities': {'0': 'Forecast'},
    'heightm': 0.3,
    'weightkg': 0.8,
    'color': 'Blue',
    'eggGroups': ['Fairy', 'Amorphous']
  },
  'castformsnowy': {
    'num': 351,
    'species': 'Castform-Snowy',
    'baseSpecies': 'Castform',
    'forme': 'Snowy',
    'formeLetter': 'S',
    'types': ['Ice'],
    'baseStats': {
      'hp': 70,
      'atk': 70,
      'def': 70,
      'spa': 70,
      'spd': 70,
      'spe': 70
    },
    'abilities': {'0': 'Forecast'},
    'heightm': 0.3,
    'weightkg': 0.8,
    'color': 'White',
    'eggGroups': ['Fairy', 'Amorphous']
  },
  'kecleon': {
    'num': 352,
    'species': 'Kecleon',
    'types': ['Normal'],
    'baseStats': {
      'hp': 60,
      'atk': 90,
      'def': 70,
      'spa': 60,
      'spd': 120,
      'spe': 40
    },
    'abilities': {
      '0': 'Color Change',
      'H': 'Protean'
    },
    'heightm': 1,
    'weightkg': 22,
    'color': 'Green',
    'eggGroups': ['Field']
  },
  'shuppet': {
    'num': 353,
    'species': 'Shuppet',
    'types': ['Ghost'],
    'baseStats': {
      'hp': 44,
      'atk': 75,
      'def': 35,
      'spa': 63,
      'spd': 33,
      'spe': 45
    },
    'abilities': {
      '0': 'Insomnia',
      '1': 'Frisk',
      'H': 'Cursed Body'
    },
    'heightm': 0.6,
    'weightkg': 2.3,
    'color': 'Black',
    'evos': ['banette'],
    'eggGroups': ['Amorphous']
  },
  'banette': {
    'num': 354,
    'species': 'Banette',
    'types': ['Ghost'],
    'baseStats': {
      'hp': 64,
      'atk': 115,
      'def': 65,
      'spa': 83,
      'spd': 63,
      'spe': 65
    },
    'abilities': {
      '0': 'Insomnia',
      '1': 'Frisk',
      'H': 'Cursed Body'
    },
    'heightm': 1.1,
    'weightkg': 12.5,
    'color': 'Black',
    'prevo': 'shuppet',
    'evoLevel': 37,
    'eggGroups': ['Amorphous'],
    'otherFormes': ['banettemega']
  },
  'banettemega': {
    'num': 354,
    'species': 'Banette-Mega',
    'baseSpecies': 'Banette',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Ghost'],
    'baseStats': {
      'hp': 64,
      'atk': 165,
      'def': 75,
      'spa': 93,
      'spd': 83,
      'spe': 75
    },
    'abilities': {'0': 'Prankster'},
    'heightm': 1.2,
    'weightkg': 13,
    'color': 'Black',
    'eggGroups': ['Amorphous']
  },
  'duskull': {
    'num': 355,
    'species': 'Duskull',
    'types': ['Ghost'],
    'baseStats': {
      'hp': 20,
      'atk': 40,
      'def': 90,
      'spa': 30,
      'spd': 90,
      'spe': 25
    },
    'abilities': {
      '0': 'Levitate',
      'H': 'Frisk'
    },
    'heightm': 0.8,
    'weightkg': 15,
    'color': 'Black',
    'evos': ['dusclops'],
    'eggGroups': ['Amorphous']
  },
  'dusclops': {
    'num': 356,
    'species': 'Dusclops',
    'types': ['Ghost'],
    'baseStats': {
      'hp': 40,
      'atk': 70,
      'def': 130,
      'spa': 60,
      'spd': 130,
      'spe': 25
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Frisk'
    },
    'heightm': 1.6,
    'weightkg': 30.6,
    'color': 'Black',
    'prevo': 'duskull',
    'evos': ['dusknoir'],
    'evoLevel': 37,
    'eggGroups': ['Amorphous']
  },
  'tropius': {
    'num': 357,
    'species': 'Tropius',
    'types': ['Grass', 'Flying'],
    'baseStats': {
      'hp': 99,
      'atk': 68,
      'def': 83,
      'spa': 72,
      'spd': 87,
      'spe': 51
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Solar Power',
      'H': 'Harvest'
    },
    'heightm': 2,
    'weightkg': 100,
    'color': 'Green',
    'eggGroups': ['Monster', 'Grass']
  },
  'chimecho': {
    'num': 358,
    'species': 'Chimecho',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 75,
      'atk': 50,
      'def': 80,
      'spa': 95,
      'spd': 90,
      'spe': 65
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.6,
    'weightkg': 1,
    'color': 'Blue',
    'prevo': 'chingling',
    'evoLevel': 1,
    'eggGroups': ['Amorphous']
  },
  'absol': {
    'num': 359,
    'species': 'Absol',
    'types': ['Dark'],
    'baseStats': {
      'hp': 65,
      'atk': 130,
      'def': 60,
      'spa': 75,
      'spd': 60,
      'spe': 75
    },
    'abilities': {
      '0': 'Pressure',
      '1': 'Super Luck',
      'H': 'Justified'
    },
    'heightm': 1.2,
    'weightkg': 47,
    'color': 'White',
    'eggGroups': ['Field'],
    'otherFormes': ['absolmega']
  },
  'absolmega': {
    'num': 359,
    'species': 'Absol-Mega',
    'baseSpecies': 'Absol',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Dark'],
    'baseStats': {
      'hp': 65,
      'atk': 150,
      'def': 60,
      'spa': 115,
      'spd': 60,
      'spe': 115
    },
    'abilities': {'0': 'Magic Bounce'},
    'heightm': 1.2,
    'weightkg': 49,
    'color': 'White',
    'eggGroups': ['Field']
  },
  'wynaut': {
    'num': 360,
    'species': 'Wynaut',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 95,
      'atk': 23,
      'def': 48,
      'spa': 23,
      'spd': 48,
      'spe': 23
    },
    'abilities': {
      '0': 'Shadow Tag',
      'H': 'Telepathy'
    },
    'heightm': 0.6,
    'weightkg': 14,
    'color': 'Blue',
    'evos': ['wobbuffet'],
    'eggGroups': ['Undiscovered']
  },
  'snorunt': {
    'num': 361,
    'species': 'Snorunt',
    'types': ['Ice'],
    'baseStats': {
      'hp': 50,
      'atk': 50,
      'def': 50,
      'spa': 50,
      'spd': 50,
      'spe': 50
    },
    'abilities': {
      '0': 'Inner Focus',
      '1': 'Ice Body',
      'H': 'Moody'
    },
    'heightm': 0.7,
    'weightkg': 16.8,
    'color': 'Gray',
    'evos': ['glalie', 'froslass'],
    'eggGroups': ['Fairy', 'Mineral']
  },
  'glalie': {
    'num': 362,
    'species': 'Glalie',
    'types': ['Ice'],
    'baseStats': {
      'hp': 80,
      'atk': 80,
      'def': 80,
      'spa': 80,
      'spd': 80,
      'spe': 80
    },
    'abilities': {
      '0': 'Inner Focus',
      '1': 'Ice Body',
      'H': 'Moody'
    },
    'heightm': 1.5,
    'weightkg': 256.5,
    'color': 'Gray',
    'prevo': 'snorunt',
    'evoLevel': 42,
    'eggGroups': ['Fairy', 'Mineral'],
    'otherFormes': ['glaliemega']
  },
  'glaliemega': {
    'num': 362,
    'species': 'Glalie-Mega',
    'baseSpecies': 'Glalie',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Ice'],
    'baseStats': {
      'hp': 80,
      'atk': 120,
      'def': 80,
      'spa': 120,
      'spd': 80,
      'spe': 100
    },
    'abilities': {'0': 'Refrigerate'},
    'heightm': 2.1,
    'weightkg': 350.2,
    'color': 'Gray',
    'eggGroups': ['Fairy', 'Mineral']
  },
  'spheal': {
    'num': 363,
    'species': 'Spheal',
    'types': ['Ice', 'Water'],
    'baseStats': {
      'hp': 70,
      'atk': 40,
      'def': 50,
      'spa': 55,
      'spd': 50,
      'spe': 25
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Ice Body',
      'H': 'Oblivious'
    },
    'heightm': 0.8,
    'weightkg': 39.5,
    'color': 'Blue',
    'evos': ['sealeo'],
    'eggGroups': ['Water 1', 'Field']
  },
  'sealeo': {
    'num': 364,
    'species': 'Sealeo',
    'types': ['Ice', 'Water'],
    'baseStats': {
      'hp': 90,
      'atk': 60,
      'def': 70,
      'spa': 75,
      'spd': 70,
      'spe': 45
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Ice Body',
      'H': 'Oblivious'
    },
    'heightm': 1.1,
    'weightkg': 87.6,
    'color': 'Blue',
    'prevo': 'spheal',
    'evos': ['walrein'],
    'evoLevel': 32,
    'eggGroups': ['Water 1', 'Field']
  },
  'walrein': {
    'num': 365,
    'species': 'Walrein',
    'types': ['Ice', 'Water'],
    'baseStats': {
      'hp': 110,
      'atk': 80,
      'def': 90,
      'spa': 95,
      'spd': 90,
      'spe': 65
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Ice Body',
      'H': 'Oblivious'
    },
    'heightm': 1.4,
    'weightkg': 150.6,
    'color': 'Blue',
    'prevo': 'sealeo',
    'evoLevel': 44,
    'eggGroups': ['Water 1', 'Field']
  },
  'clamperl': {
    'num': 366,
    'species': 'Clamperl',
    'types': ['Water'],
    'baseStats': {
      'hp': 35,
      'atk': 64,
      'def': 85,
      'spa': 74,
      'spd': 55,
      'spe': 32
    },
    'abilities': {
      '0': 'Shell Armor',
      'H': 'Rattled'
    },
    'heightm': 0.4,
    'weightkg': 52.5,
    'color': 'Blue',
    'evos': ['huntail', 'gorebyss'],
    'eggGroups': ['Water 1']
  },
  'huntail': {
    'num': 367,
    'species': 'Huntail',
    'types': ['Water'],
    'baseStats': {
      'hp': 55,
      'atk': 104,
      'def': 105,
      'spa': 94,
      'spd': 75,
      'spe': 52
    },
    'abilities': {
      '0': 'Swift Swim',
      'H': 'Water Veil'
    },
    'heightm': 1.7,
    'weightkg': 27,
    'color': 'Blue',
    'prevo': 'clamperl',
    'evoLevel': 1,
    'eggGroups': ['Water 1']
  },
  'gorebyss': {
    'num': 368,
    'species': 'Gorebyss',
    'types': ['Water'],
    'baseStats': {
      'hp': 55,
      'atk': 84,
      'def': 105,
      'spa': 114,
      'spd': 75,
      'spe': 52
    },
    'abilities': {
      '0': 'Swift Swim',
      'H': 'Hydration'
    },
    'heightm': 1.8,
    'weightkg': 22.6,
    'color': 'Pink',
    'prevo': 'clamperl',
    'evoLevel': 1,
    'eggGroups': ['Water 1']
  },
  'relicanth': {
    'num': 369,
    'species': 'Relicanth',
    'types': ['Water', 'Rock'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 100,
      'atk': 90,
      'def': 130,
      'spa': 45,
      'spd': 65,
      'spe': 55
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Rock Head',
      'H': 'Sturdy'
    },
    'heightm': 1,
    'weightkg': 23.4,
    'color': 'Gray',
    'eggGroups': ['Water 1', 'Water 2']
  },
  'luvdisc': {
    'num': 370,
    'species': 'Luvdisc',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 43,
      'atk': 30,
      'def': 55,
      'spa': 40,
      'spd': 65,
      'spe': 97
    },
    'abilities': {
      '0': 'Swift Swim',
      'H': 'Hydration'
    },
    'heightm': 0.6,
    'weightkg': 8.7,
    'color': 'Pink',
    'eggGroups': ['Water 2']
  },
  'bagon': {
    'num': 371,
    'species': 'Bagon',
    'types': ['Dragon'],
    'baseStats': {
      'hp': 45,
      'atk': 75,
      'def': 60,
      'spa': 40,
      'spd': 30,
      'spe': 50
    },
    'abilities': {
      '0': 'Rock Head',
      'H': 'Sheer Force'
    },
    'heightm': 0.6,
    'weightkg': 42.1,
    'color': 'Blue',
    'evos': ['shelgon'],
    'eggGroups': ['Dragon']
  },
  'shelgon': {
    'num': 372,
    'species': 'Shelgon',
    'types': ['Dragon'],
    'baseStats': {
      'hp': 65,
      'atk': 95,
      'def': 100,
      'spa': 60,
      'spd': 50,
      'spe': 50
    },
    'abilities': {
      '0': 'Rock Head',
      'H': 'Overcoat'
    },
    'heightm': 1.1,
    'weightkg': 110.5,
    'color': 'White',
    'prevo': 'bagon',
    'evos': ['salamence'],
    'evoLevel': 30,
    'eggGroups': ['Dragon']
  },
  'salamence': {
    'num': 373,
    'species': 'Salamence',
    'types': ['Dragon', 'Flying'],
    'baseStats': {
      'hp': 95,
      'atk': 135,
      'def': 80,
      'spa': 110,
      'spd': 80,
      'spe': 100
    },
    'abilities': {
      '0': 'Intimidate',
      'H': 'Moxie'
    },
    'heightm': 1.5,
    'weightkg': 102.6,
    'color': 'Blue',
    'prevo': 'shelgon',
    'evoLevel': 50,
    'eggGroups': ['Dragon'],
    'otherFormes': ['salamencemega']
  },
  'salamencemega': {
    'num': 373,
    'species': 'Salamence-Mega',
    'baseSpecies': 'Salamence',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Dragon', 'Flying'],
    'baseStats': {
      'hp': 95,
      'atk': 145,
      'def': 130,
      'spa': 120,
      'spd': 90,
      'spe': 120
    },
    'abilities': {'0': 'Aerilate'},
    'heightm': 1.8,
    'weightkg': 112.6,
    'color': 'Blue',
    'eggGroups': ['Dragon']
  },
  'beldum': {
    'num': 374,
    'species': 'Beldum',
    'types': ['Steel', 'Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 40,
      'atk': 55,
      'def': 80,
      'spa': 35,
      'spd': 60,
      'spe': 30
    },
    'abilities': {
      '0': 'Clear Body',
      'H': 'Light Metal'
    },
    'heightm': 0.6,
    'weightkg': 95.2,
    'color': 'Blue',
    'evos': ['metang'],
    'eggGroups': ['Mineral']
  },
  'metang': {
    'num': 375,
    'species': 'Metang',
    'types': ['Steel', 'Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 60,
      'atk': 75,
      'def': 100,
      'spa': 55,
      'spd': 80,
      'spe': 50
    },
    'abilities': {
      '0': 'Clear Body',
      'H': 'Light Metal'
    },
    'heightm': 1.2,
    'weightkg': 202.5,
    'color': 'Blue',
    'prevo': 'beldum',
    'evos': ['metagross'],
    'evoLevel': 20,
    'eggGroups': ['Mineral']
  },
  'metagross': {
    'num': 376,
    'species': 'Metagross',
    'types': ['Steel', 'Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 80,
      'atk': 135,
      'def': 130,
      'spa': 95,
      'spd': 90,
      'spe': 70
    },
    'abilities': {
      '0': 'Clear Body',
      'H': 'Light Metal'
    },
    'heightm': 1.6,
    'weightkg': 550,
    'color': 'Blue',
    'prevo': 'metang',
    'evoLevel': 45,
    'eggGroups': ['Mineral'],
    'otherFormes': ['metagrossmega']
  },
  'metagrossmega': {
    'num': 376,
    'species': 'Metagross-Mega',
    'baseSpecies': 'Metagross',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Steel', 'Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 80,
      'atk': 145,
      'def': 150,
      'spa': 105,
      'spd': 110,
      'spe': 110
    },
    'abilities': {'0': 'Tough Claws'},
    'heightm': 2.5,
    'weightkg': 942.9,
    'color': 'Blue',
    'eggGroups': ['Mineral']
  },
  'regirock': {
    'num': 377,
    'species': 'Regirock',
    'types': ['Rock'],
    'gender': 'N',
    'baseStats': {
      'hp': 80,
      'atk': 100,
      'def': 200,
      'spa': 50,
      'spd': 100,
      'spe': 50
    },
    'abilities': {
      '0': 'Clear Body',
      'H': 'Sturdy'
    },
    'heightm': 1.7,
    'weightkg': 230,
    'color': 'Brown',
    'eggGroups': ['Undiscovered']
  },
  'regice': {
    'num': 378,
    'species': 'Regice',
    'types': ['Ice'],
    'gender': 'N',
    'baseStats': {
      'hp': 80,
      'atk': 50,
      'def': 100,
      'spa': 100,
      'spd': 200,
      'spe': 50
    },
    'abilities': {
      '0': 'Clear Body',
      'H': 'Ice Body'
    },
    'heightm': 1.8,
    'weightkg': 175,
    'color': 'Blue',
    'eggGroups': ['Undiscovered']
  },
  'registeel': {
    'num': 379,
    'species': 'Registeel',
    'types': ['Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 80,
      'atk': 75,
      'def': 150,
      'spa': 75,
      'spd': 150,
      'spe': 50
    },
    'abilities': {
      '0': 'Clear Body',
      'H': 'Light Metal'
    },
    'heightm': 1.9,
    'weightkg': 205,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'latias': {
    'num': 380,
    'species': 'Latias',
    'types': ['Dragon', 'Psychic'],
    'gender': 'F',
    'baseStats': {
      'hp': 80,
      'atk': 80,
      'def': 90,
      'spa': 110,
      'spd': 130,
      'spe': 110
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.4,
    'weightkg': 40,
    'color': 'Red',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['latiasmega']
  },
  'latiasmega': {
    'num': 380,
    'species': 'Latias-Mega',
    'baseSpecies': 'Latias',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Dragon', 'Psychic'],
    'gender': 'F',
    'baseStats': {
      'hp': 80,
      'atk': 100,
      'def': 120,
      'spa': 140,
      'spd': 150,
      'spe': 110
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.8,
    'weightkg': 52,
    'color': 'Purple',
    'eggGroups': ['Undiscovered']
  },
  'latios': {
    'num': 381,
    'species': 'Latios',
    'types': ['Dragon', 'Psychic'],
    'gender': 'M',
    'baseStats': {
      'hp': 80,
      'atk': 90,
      'def': 80,
      'spa': 130,
      'spd': 110,
      'spe': 110
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 2,
    'weightkg': 60,
    'color': 'Blue',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['latiosmega']
  },
  'latiosmega': {
    'num': 381,
    'species': 'Latios-Mega',
    'baseSpecies': 'Latios',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Dragon', 'Psychic'],
    'gender': 'M',
    'baseStats': {
      'hp': 80,
      'atk': 130,
      'def': 100,
      'spa': 160,
      'spd': 120,
      'spe': 110
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 2.3,
    'weightkg': 70,
    'color': 'Purple',
    'eggGroups': ['Undiscovered']
  },
  'kyogre': {
    'num': 382,
    'species': 'Kyogre',
    'types': ['Water'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 90,
      'spa': 150,
      'spd': 140,
      'spe': 90
    },
    'abilities': {'0': 'Drizzle'},
    'heightm': 4.5,
    'weightkg': 352,
    'color': 'Blue',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['kyogreprimal']
  },
  'kyogreprimal': {
    'num': 382,
    'species': 'Kyogre-Primal',
    'baseSpecies': 'Kyogre',
    'forme': 'Primal',
    'formeLetter': 'P',
    'types': ['Water'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 150,
      'def': 90,
      'spa': 180,
      'spd': 160,
      'spe': 90
    },
    'abilities': {'0': 'Primordial Sea'},
    'heightm': 9.8,
    'weightkg': 430,
    'color': 'Blue',
    'eggGroups': ['Undiscovered']
  },
  'groudon': {
    'num': 383,
    'species': 'Groudon',
    'types': ['Ground'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 150,
      'def': 140,
      'spa': 100,
      'spd': 90,
      'spe': 90
    },
    'abilities': {'0': 'Drought'},
    'heightm': 3.5,
    'weightkg': 950,
    'color': 'Red',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['groudonprimal']
  },
  'groudonprimal': {
    'num': 383,
    'species': 'Groudon-Primal',
    'baseSpecies': 'Groudon',
    'forme': 'Primal',
    'formeLetter': 'P',
    'types': ['Ground', 'Fire'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 180,
      'def': 160,
      'spa': 150,
      'spd': 90,
      'spe': 90
    },
    'abilities': {'0': 'Desolate Land'},
    'heightm': 5,
    'weightkg': 999.7,
    'color': 'Red',
    'eggGroups': ['Undiscovered']
  },
  'rayquaza': {
    'num': 384,
    'species': 'Rayquaza',
    'types': ['Dragon', 'Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 105,
      'atk': 150,
      'def': 90,
      'spa': 150,
      'spd': 90,
      'spe': 95
    },
    'abilities': {'0': 'Air Lock'},
    'heightm': 7,
    'weightkg': 206.5,
    'color': 'Green',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['rayquazamega']
  },
  'rayquazamega': {
    'num': 384,
    'species': 'Rayquaza-Mega',
    'baseSpecies': 'Rayquaza',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Dragon', 'Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 105,
      'atk': 180,
      'def': 100,
      'spa': 180,
      'spd': 100,
      'spe': 115
    },
    'abilities': {'0': 'Delta Stream'},
    'heightm': 10.8,
    'weightkg': 392,
    'color': 'Green',
    'eggGroups': ['Undiscovered']
  },
  'jirachi': {
    'num': 385,
    'species': 'Jirachi',
    'types': ['Steel', 'Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Serene Grace'},
    'heightm': 0.3,
    'weightkg': 1.1,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'deoxys': {
    'num': 386,
    'species': 'Deoxys',
    'baseForme': 'Normal',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 150,
      'def': 50,
      'spa': 150,
      'spd': 50,
      'spe': 150
    },
    'abilities': {'0': 'Pressure'},
    'heightm': 1.7,
    'weightkg': 60.8,
    'color': 'Red',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['deoxysattack', 'deoxysdefense', 'deoxysspeed']
  },
  'deoxysattack': {
    'num': 386,
    'species': 'Deoxys-Attack',
    'baseSpecies': 'Deoxys',
    'forme': 'Attack',
    'formeLetter': 'A',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 180,
      'def': 20,
      'spa': 180,
      'spd': 20,
      'spe': 150
    },
    'abilities': {'0': 'Pressure'},
    'heightm': 1.7,
    'weightkg': 60.8,
    'color': 'Red',
    'eggGroups': ['Undiscovered']
  },
  'deoxysdefense': {
    'num': 386,
    'species': 'Deoxys-Defense',
    'baseSpecies': 'Deoxys',
    'forme': 'Defense',
    'formeLetter': 'D',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 70,
      'def': 160,
      'spa': 70,
      'spd': 160,
      'spe': 90
    },
    'abilities': {'0': 'Pressure'},
    'heightm': 1.7,
    'weightkg': 60.8,
    'color': 'Red',
    'eggGroups': ['Undiscovered']
  },
  'deoxysspeed': {
    'num': 386,
    'species': 'Deoxys-Speed',
    'baseSpecies': 'Deoxys',
    'forme': 'Speed',
    'formeLetter': 'S',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 95,
      'def': 90,
      'spa': 95,
      'spd': 90,
      'spe': 180
    },
    'abilities': {'0': 'Pressure'},
    'heightm': 1.7,
    'weightkg': 60.8,
    'color': 'Red',
    'eggGroups': ['Undiscovered']
  },
  'turtwig': {
    'num': 387,
    'species': 'Turtwig',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 55,
      'atk': 68,
      'def': 64,
      'spa': 45,
      'spd': 55,
      'spe': 31
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Shell Armor'
    },
    'heightm': 0.4,
    'weightkg': 10.2,
    'color': 'Green',
    'evos': ['grotle'],
    'eggGroups': ['Monster', 'Grass']
  },
  'grotle': {
    'num': 388,
    'species': 'Grotle',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 75,
      'atk': 89,
      'def': 85,
      'spa': 55,
      'spd': 65,
      'spe': 36
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Shell Armor'
    },
    'heightm': 1.1,
    'weightkg': 97,
    'color': 'Green',
    'prevo': 'turtwig',
    'evos': ['torterra'],
    'evoLevel': 18,
    'eggGroups': ['Monster', 'Grass']
  },
  'torterra': {
    'num': 389,
    'species': 'Torterra',
    'types': ['Grass', 'Ground'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 95,
      'atk': 109,
      'def': 105,
      'spa': 75,
      'spd': 85,
      'spe': 56
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Shell Armor'
    },
    'heightm': 2.2,
    'weightkg': 310,
    'color': 'Green',
    'prevo': 'grotle',
    'evoLevel': 32,
    'eggGroups': ['Monster', 'Grass']
  },
  'chimchar': {
    'num': 390,
    'species': 'Chimchar',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 44,
      'atk': 58,
      'def': 44,
      'spa': 58,
      'spd': 44,
      'spe': 61
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Iron Fist'
    },
    'heightm': 0.5,
    'weightkg': 6.2,
    'color': 'Brown',
    'evos': ['monferno'],
    'eggGroups': ['Field', 'Human-Like']
  },
  'monferno': {
    'num': 391,
    'species': 'Monferno',
    'types': ['Fire', 'Fighting'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 64,
      'atk': 78,
      'def': 52,
      'spa': 78,
      'spd': 52,
      'spe': 81
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Iron Fist'
    },
    'heightm': 0.9,
    'weightkg': 22,
    'color': 'Brown',
    'prevo': 'chimchar',
    'evos': ['infernape'],
    'evoLevel': 14,
    'eggGroups': ['Field', 'Human-Like']
  },
  'infernape': {
    'num': 392,
    'species': 'Infernape',
    'types': ['Fire', 'Fighting'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 76,
      'atk': 104,
      'def': 71,
      'spa': 104,
      'spd': 71,
      'spe': 108
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Iron Fist'
    },
    'heightm': 1.2,
    'weightkg': 55,
    'color': 'Brown',
    'prevo': 'monferno',
    'evoLevel': 36,
    'eggGroups': ['Field', 'Human-Like']
  },
  'piplup': {
    'num': 393,
    'species': 'Piplup',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 53,
      'atk': 51,
      'def': 53,
      'spa': 61,
      'spd': 56,
      'spe': 40
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Defiant'
    },
    'heightm': 0.4,
    'weightkg': 5.2,
    'color': 'Blue',
    'evos': ['prinplup'],
    'eggGroups': ['Water 1', 'Field']
  },
  'prinplup': {
    'num': 394,
    'species': 'Prinplup',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 64,
      'atk': 66,
      'def': 68,
      'spa': 81,
      'spd': 76,
      'spe': 50
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Defiant'
    },
    'heightm': 0.8,
    'weightkg': 23,
    'color': 'Blue',
    'prevo': 'piplup',
    'evos': ['empoleon'],
    'evoLevel': 16,
    'eggGroups': ['Water 1', 'Field']
  },
  'empoleon': {
    'num': 395,
    'species': 'Empoleon',
    'types': ['Water', 'Steel'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 84,
      'atk': 86,
      'def': 88,
      'spa': 111,
      'spd': 101,
      'spe': 60
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Defiant'
    },
    'heightm': 1.7,
    'weightkg': 84.5,
    'color': 'Blue',
    'prevo': 'prinplup',
    'evoLevel': 36,
    'eggGroups': ['Water 1', 'Field']
  },
  'starly': {
    'num': 396,
    'species': 'Starly',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 40,
      'atk': 55,
      'def': 30,
      'spa': 30,
      'spd': 30,
      'spe': 60
    },
    'abilities': {
      '0': 'Keen Eye',
      'H': 'Reckless'
    },
    'heightm': 0.3,
    'weightkg': 2,
    'color': 'Brown',
    'evos': ['staravia'],
    'eggGroups': ['Flying']
  },
  'staravia': {
    'num': 397,
    'species': 'Staravia',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 55,
      'atk': 75,
      'def': 50,
      'spa': 40,
      'spd': 40,
      'spe': 80
    },
    'abilities': {
      '0': 'Intimidate',
      'H': 'Reckless'
    },
    'heightm': 0.6,
    'weightkg': 15.5,
    'color': 'Brown',
    'prevo': 'starly',
    'evos': ['staraptor'],
    'evoLevel': 14,
    'eggGroups': ['Flying']
  },
  'staraptor': {
    'num': 398,
    'species': 'Staraptor',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 85,
      'atk': 120,
      'def': 70,
      'spa': 50,
      'spd': 60,
      'spe': 100
    },
    'abilities': {
      '0': 'Intimidate',
      'H': 'Reckless'
    },
    'heightm': 1.2,
    'weightkg': 24.9,
    'color': 'Brown',
    'prevo': 'staravia',
    'evoLevel': 34,
    'eggGroups': ['Flying']
  },
  'bidoof': {
    'num': 399,
    'species': 'Bidoof',
    'types': ['Normal'],
    'baseStats': {
      'hp': 59,
      'atk': 45,
      'def': 40,
      'spa': 35,
      'spd': 40,
      'spe': 31
    },
    'abilities': {
      '0': 'Simple',
      '1': 'Unaware',
      'H': 'Moody'
    },
    'heightm': 0.5,
    'weightkg': 20,
    'color': 'Brown',
    'evos': ['bibarel'],
    'eggGroups': ['Water 1', 'Field']
  },
  'bibarel': {
    'num': 400,
    'species': 'Bibarel',
    'types': ['Normal', 'Water'],
    'baseStats': {
      'hp': 79,
      'atk': 85,
      'def': 60,
      'spa': 55,
      'spd': 60,
      'spe': 71
    },
    'abilities': {
      '0': 'Simple',
      '1': 'Unaware',
      'H': 'Moody'
    },
    'heightm': 1,
    'weightkg': 31.5,
    'color': 'Brown',
    'prevo': 'bidoof',
    'evoLevel': 15,
    'eggGroups': ['Water 1', 'Field']
  },
  'kricketot': {
    'num': 401,
    'species': 'Kricketot',
    'types': ['Bug'],
    'baseStats': {
      'hp': 37,
      'atk': 25,
      'def': 41,
      'spa': 25,
      'spd': 41,
      'spe': 25
    },
    'abilities': {
      '0': 'Shed Skin',
      'H': 'Run Away'
    },
    'heightm': 0.3,
    'weightkg': 2.2,
    'color': 'Red',
    'evos': ['kricketune'],
    'eggGroups': ['Bug']
  },
  'kricketune': {
    'num': 402,
    'species': 'Kricketune',
    'types': ['Bug'],
    'baseStats': {
      'hp': 77,
      'atk': 85,
      'def': 51,
      'spa': 55,
      'spd': 51,
      'spe': 65
    },
    'abilities': {
      '0': 'Swarm',
      'H': 'Technician'
    },
    'heightm': 1,
    'weightkg': 25.5,
    'color': 'Red',
    'prevo': 'kricketot',
    'evoLevel': 10,
    'eggGroups': ['Bug']
  },
  'shinx': {
    'num': 403,
    'species': 'Shinx',
    'types': ['Electric'],
    'baseStats': {
      'hp': 45,
      'atk': 65,
      'def': 34,
      'spa': 40,
      'spd': 34,
      'spe': 45
    },
    'abilities': {
      '0': 'Rivalry',
      '1': 'Intimidate',
      'H': 'Guts'
    },
    'heightm': 0.5,
    'weightkg': 9.5,
    'color': 'Blue',
    'evos': ['luxio'],
    'eggGroups': ['Field']
  },
  'luxio': {
    'num': 404,
    'species': 'Luxio',
    'types': ['Electric'],
    'baseStats': {
      'hp': 60,
      'atk': 85,
      'def': 49,
      'spa': 60,
      'spd': 49,
      'spe': 60
    },
    'abilities': {
      '0': 'Rivalry',
      '1': 'Intimidate',
      'H': 'Guts'
    },
    'heightm': 0.9,
    'weightkg': 30.5,
    'color': 'Blue',
    'prevo': 'shinx',
    'evos': ['luxray'],
    'evoLevel': 15,
    'eggGroups': ['Field']
  },
  'luxray': {
    'num': 405,
    'species': 'Luxray',
    'types': ['Electric'],
    'baseStats': {
      'hp': 80,
      'atk': 120,
      'def': 79,
      'spa': 95,
      'spd': 79,
      'spe': 70
    },
    'abilities': {
      '0': 'Rivalry',
      '1': 'Intimidate',
      'H': 'Guts'
    },
    'heightm': 1.4,
    'weightkg': 42,
    'color': 'Blue',
    'prevo': 'luxio',
    'evoLevel': 30,
    'eggGroups': ['Field']
  },
  'budew': {
    'num': 406,
    'species': 'Budew',
    'types': ['Grass', 'Poison'],
    'baseStats': {
      'hp': 40,
      'atk': 30,
      'def': 35,
      'spa': 50,
      'spd': 70,
      'spe': 55
    },
    'abilities': {
      '0': 'Natural Cure',
      '1': 'Poison Point',
      'H': 'Leaf Guard'
    },
    'heightm': 0.2,
    'weightkg': 1.2,
    'color': 'Green',
    'evos': ['roselia'],
    'eggGroups': ['Undiscovered']
  },
  'roserade': {
    'num': 407,
    'species': 'Roserade',
    'types': ['Grass', 'Poison'],
    'baseStats': {
      'hp': 60,
      'atk': 70,
      'def': 65,
      'spa': 125,
      'spd': 105,
      'spe': 90
    },
    'abilities': {
      '0': 'Natural Cure',
      '1': 'Poison Point',
      'H': 'Technician'
    },
    'heightm': 0.9,
    'weightkg': 14.5,
    'color': 'Green',
    'prevo': 'roselia',
    'evoLevel': 1,
    'eggGroups': ['Fairy', 'Grass']
  },
  'cranidos': {
    'num': 408,
    'species': 'Cranidos',
    'types': ['Rock'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 67,
      'atk': 125,
      'def': 40,
      'spa': 30,
      'spd': 30,
      'spe': 58
    },
    'abilities': {
      '0': 'Mold Breaker',
      'H': 'Sheer Force'
    },
    'heightm': 0.9,
    'weightkg': 31.5,
    'color': 'Blue',
    'evos': ['rampardos'],
    'eggGroups': ['Monster']
  },
  'rampardos': {
    'num': 409,
    'species': 'Rampardos',
    'types': ['Rock'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 97,
      'atk': 165,
      'def': 60,
      'spa': 65,
      'spd': 50,
      'spe': 58
    },
    'abilities': {
      '0': 'Mold Breaker',
      'H': 'Sheer Force'
    },
    'heightm': 1.6,
    'weightkg': 102.5,
    'color': 'Blue',
    'prevo': 'cranidos',
    'evoLevel': 30,
    'eggGroups': ['Monster']
  },
  'shieldon': {
    'num': 410,
    'species': 'Shieldon',
    'types': ['Rock', 'Steel'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 30,
      'atk': 42,
      'def': 118,
      'spa': 42,
      'spd': 88,
      'spe': 30
    },
    'abilities': {
      '0': 'Sturdy',
      'H': 'Soundproof'
    },
    'heightm': 0.5,
    'weightkg': 57,
    'color': 'Gray',
    'evos': ['bastiodon'],
    'eggGroups': ['Monster']
  },
  'bastiodon': {
    'num': 411,
    'species': 'Bastiodon',
    'types': ['Rock', 'Steel'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 60,
      'atk': 52,
      'def': 168,
      'spa': 47,
      'spd': 138,
      'spe': 30
    },
    'abilities': {
      '0': 'Sturdy',
      'H': 'Soundproof'
    },
    'heightm': 1.3,
    'weightkg': 149.5,
    'color': 'Gray',
    'prevo': 'shieldon',
    'evoLevel': 30,
    'eggGroups': ['Monster']
  },
  'burmy': {
    'num': 412,
    'species': 'Burmy',
    'baseForme': 'Plant',
    'types': ['Bug'],
    'baseStats': {
      'hp': 40,
      'atk': 29,
      'def': 45,
      'spa': 29,
      'spd': 45,
      'spe': 36
    },
    'abilities': {
      '0': 'Shed Skin',
      'H': 'Overcoat'
    },
    'heightm': 0.2,
    'weightkg': 3.4,
    'color': 'Green',
    'evos': ['wormadam', 'wormadamsandy', 'wormadamtrash', 'mothim'],
    'eggGroups': ['Bug'],
    'otherForms': ['burmysandy', 'burmytrash']
  },
  'wormadam': {
    'num': 413,
    'species': 'Wormadam',
    'baseForme': 'Plant',
    'types': ['Bug', 'Grass'],
    'gender': 'F',
    'baseStats': {
      'hp': 60,
      'atk': 59,
      'def': 85,
      'spa': 79,
      'spd': 105,
      'spe': 36
    },
    'abilities': {
      '0': 'Anticipation',
      'H': 'Overcoat'
    },
    'heightm': 0.5,
    'weightkg': 6.5,
    'color': 'Green',
    'prevo': 'burmy',
    'evoLevel': 20,
    'eggGroups': ['Bug'],
    'otherFormes': ['wormadamsandy', 'wormadamtrash']
  },
  'wormadamsandy': {
    'num': 413,
    'species': 'Wormadam-Sandy',
    'baseSpecies': 'Wormadam',
    'forme': 'Sandy',
    'formeLetter': 'G',
    'types': ['Bug', 'Ground'],
    'gender': 'F',
    'baseStats': {
      'hp': 60,
      'atk': 79,
      'def': 105,
      'spa': 59,
      'spd': 85,
      'spe': 36
    },
    'abilities': {
      '0': 'Anticipation',
      'H': 'Overcoat'
    },
    'heightm': 0.5,
    'weightkg': 6.5,
    'color': 'Brown',
    'prevo': 'burmy',
    'evoLevel': 20,
    'eggGroups': ['Bug']
  },
  'wormadamtrash': {
    'num': 413,
    'species': 'Wormadam-Trash',
    'baseSpecies': 'Wormadam',
    'forme': 'Trash',
    'formeLetter': 'S',
    'types': ['Bug', 'Steel'],
    'gender': 'F',
    'baseStats': {
      'hp': 60,
      'atk': 69,
      'def': 95,
      'spa': 69,
      'spd': 95,
      'spe': 36
    },
    'abilities': {
      '0': 'Anticipation',
      'H': 'Overcoat'
    },
    'heightm': 0.5,
    'weightkg': 6.5,
    'color': 'Red',
    'prevo': 'burmy',
    'evoLevel': 20,
    'eggGroups': ['Bug']
  },
  'mothim': {
    'num': 414,
    'species': 'Mothim',
    'types': ['Bug', 'Flying'],
    'gender': 'M',
    'baseStats': {
      'hp': 70,
      'atk': 94,
      'def': 50,
      'spa': 94,
      'spd': 50,
      'spe': 66
    },
    'abilities': {
      '0': 'Swarm',
      'H': 'Tinted Lens'
    },
    'heightm': 0.9,
    'weightkg': 23.3,
    'color': 'Yellow',
    'prevo': 'burmy',
    'evoLevel': 20,
    'eggGroups': ['Bug']
  },
  'combee': {
    'num': 415,
    'species': 'Combee',
    'types': ['Bug', 'Flying'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 30,
      'atk': 30,
      'def': 42,
      'spa': 30,
      'spd': 42,
      'spe': 70
    },
    'abilities': {
      '0': 'Honey Gather',
      'H': 'Hustle'
    },
    'heightm': 0.3,
    'weightkg': 5.5,
    'color': 'Yellow',
    'evos': ['vespiquen'],
    'eggGroups': ['Bug']
  },
  'vespiquen': {
    'num': 416,
    'species': 'Vespiquen',
    'types': ['Bug', 'Flying'],
    'gender': 'F',
    'baseStats': {
      'hp': 70,
      'atk': 80,
      'def': 102,
      'spa': 80,
      'spd': 102,
      'spe': 40
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Unnerve'
    },
    'heightm': 1.2,
    'weightkg': 38.5,
    'color': 'Yellow',
    'prevo': 'combee',
    'evoLevel': 21,
    'eggGroups': ['Bug']
  },
  'pachirisu': {
    'num': 417,
    'species': 'Pachirisu',
    'types': ['Electric'],
    'baseStats': {
      'hp': 60,
      'atk': 45,
      'def': 70,
      'spa': 45,
      'spd': 90,
      'spe': 95
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Pickup',
      'H': 'Volt Absorb'
    },
    'heightm': 0.4,
    'weightkg': 3.9,
    'color': 'White',
    'eggGroups': ['Field', 'Fairy']
  },
  'buizel': {
    'num': 418,
    'species': 'Buizel',
    'types': ['Water'],
    'baseStats': {
      'hp': 55,
      'atk': 65,
      'def': 35,
      'spa': 60,
      'spd': 30,
      'spe': 85
    },
    'abilities': {
      '0': 'Swift Swim',
      'H': 'Water Veil'
    },
    'heightm': 0.7,
    'weightkg': 29.5,
    'color': 'Brown',
    'evos': ['floatzel'],
    'eggGroups': ['Water 1', 'Field']
  },
  'floatzel': {
    'num': 419,
    'species': 'Floatzel',
    'types': ['Water'],
    'baseStats': {
      'hp': 85,
      'atk': 105,
      'def': 55,
      'spa': 85,
      'spd': 50,
      'spe': 115
    },
    'abilities': {
      '0': 'Swift Swim',
      'H': 'Water Veil'
    },
    'heightm': 1.1,
    'weightkg': 33.5,
    'color': 'Brown',
    'prevo': 'buizel',
    'evoLevel': 26,
    'eggGroups': ['Water 1', 'Field']
  },
  'cherubi': {
    'num': 420,
    'species': 'Cherubi',
    'types': ['Grass'],
    'baseStats': {
      'hp': 45,
      'atk': 35,
      'def': 45,
      'spa': 62,
      'spd': 53,
      'spe': 35
    },
    'abilities': {'0': 'Chlorophyll'},
    'heightm': 0.4,
    'weightkg': 3.3,
    'color': 'Pink',
    'evos': ['cherrim'],
    'eggGroups': ['Fairy', 'Grass']
  },
  'cherrim': {
    'num': 421,
    'species': 'Cherrim',
    'baseForme': 'Overcast',
    'types': ['Grass'],
    'baseStats': {
      'hp': 70,
      'atk': 60,
      'def': 70,
      'spa': 87,
      'spd': 78,
      'spe': 85
    },
    'abilities': {'0': 'Flower Gift'},
    'heightm': 0.5,
    'weightkg': 9.3,
    'color': 'Purple',
    'prevo': 'cherubi',
    'evoLevel': 25,
    'eggGroups': ['Fairy', 'Grass'],
    'otherFormes': ['cherrimsunshine']
  },
  'cherrimsunshine': {
    'num': 421,
    'species': 'Cherrim-Sunshine',
    'baseSpecies': 'Cherrim',
    'forme': 'Sunshine',
    'formeLetter': 'S',
    'types': ['Grass'],
    'baseStats': {
      'hp': 70,
      'atk': 60,
      'def': 70,
      'spa': 87,
      'spd': 78,
      'spe': 85
    },
    'abilities': {'0': 'Flower Gift'},
    'heightm': 0.5,
    'weightkg': 9.3,
    'color': 'Pink',
    'prevo': 'cherubi',
    'evoLevel': 25,
    'eggGroups': ['Fairy', 'Grass']
  },
  'shellos': {
    'num': 422,
    'species': 'Shellos',
    'baseForme': 'West',
    'types': ['Water'],
    'baseStats': {
      'hp': 76,
      'atk': 48,
      'def': 48,
      'spa': 57,
      'spd': 62,
      'spe': 34
    },
    'abilities': {
      '0': 'Sticky Hold',
      '1': 'Storm Drain',
      'H': 'Sand Force'
    },
    'heightm': 0.3,
    'weightkg': 6.3,
    'color': 'Purple',
    'evos': ['gastrodon'],
    'eggGroups': ['Water 1', 'Amorphous'],
    'otherForms': ['shelloseast']
  },
  'gastrodon': {
    'num': 423,
    'species': 'Gastrodon',
    'baseForme': 'West',
    'types': ['Water', 'Ground'],
    'baseStats': {
      'hp': 111,
      'atk': 83,
      'def': 68,
      'spa': 92,
      'spd': 82,
      'spe': 39
    },
    'abilities': {
      '0': 'Sticky Hold',
      '1': 'Storm Drain',
      'H': 'Sand Force'
    },
    'heightm': 0.9,
    'weightkg': 29.9,
    'color': 'Purple',
    'prevo': 'shellos',
    'evoLevel': 30,
    'eggGroups': ['Water 1', 'Amorphous'],
    'otherForms': ['gastrodoneast']
  },
  'ambipom': {
    'num': 424,
    'species': 'Ambipom',
    'types': ['Normal'],
    'baseStats': {
      'hp': 75,
      'atk': 100,
      'def': 66,
      'spa': 60,
      'spd': 66,
      'spe': 115
    },
    'abilities': {
      '0': 'Technician',
      '1': 'Pickup',
      'H': 'Skill Link'
    },
    'heightm': 1.2,
    'weightkg': 20.3,
    'color': 'Purple',
    'prevo': 'aipom',
    'evoLevel': 2,
    'evoMove': 'Double Hit',
    'eggGroups': ['Field']
  },
  'drifloon': {
    'num': 425,
    'species': 'Drifloon',
    'types': ['Ghost', 'Flying'],
    'baseStats': {
      'hp': 90,
      'atk': 50,
      'def': 34,
      'spa': 60,
      'spd': 44,
      'spe': 70
    },
    'abilities': {
      '0': 'Aftermath',
      '1': 'Unburden',
      'H': 'Flare Boost'
    },
    'heightm': 0.4,
    'weightkg': 1.2,
    'color': 'Purple',
    'evos': ['drifblim'],
    'eggGroups': ['Amorphous']
  },
  'drifblim': {
    'num': 426,
    'species': 'Drifblim',
    'types': ['Ghost', 'Flying'],
    'baseStats': {
      'hp': 150,
      'atk': 80,
      'def': 44,
      'spa': 90,
      'spd': 54,
      'spe': 80
    },
    'abilities': {
      '0': 'Aftermath',
      '1': 'Unburden',
      'H': 'Flare Boost'
    },
    'heightm': 1.2,
    'weightkg': 15,
    'color': 'Purple',
    'prevo': 'drifloon',
    'evoLevel': 28,
    'eggGroups': ['Amorphous']
  },
  'buneary': {
    'num': 427,
    'species': 'Buneary',
    'types': ['Normal'],
    'baseStats': {
      'hp': 55,
      'atk': 66,
      'def': 44,
      'spa': 44,
      'spd': 56,
      'spe': 85
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Klutz',
      'H': 'Limber'
    },
    'heightm': 0.4,
    'weightkg': 5.5,
    'color': 'Brown',
    'evos': ['lopunny'],
    'eggGroups': ['Field', 'Human-Like']
  },
  'lopunny': {
    'num': 428,
    'species': 'Lopunny',
    'types': ['Normal'],
    'baseStats': {
      'hp': 65,
      'atk': 76,
      'def': 84,
      'spa': 54,
      'spd': 96,
      'spe': 105
    },
    'abilities': {
      '0': 'Cute Charm',
      '1': 'Klutz',
      'H': 'Limber'
    },
    'heightm': 1.2,
    'weightkg': 33.3,
    'color': 'Brown',
    'prevo': 'buneary',
    'evoLevel': 2,
    'eggGroups': ['Field', 'Human-Like'],
    'otherFormes': ['lopunnymega']
  },
  'lopunnymega': {
    'num': 428,
    'species': 'Lopunny-Mega',
    'baseSpecies': 'Lopunny',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Normal', 'Fighting'],
    'baseStats': {
      'hp': 65,
      'atk': 136,
      'def': 94,
      'spa': 54,
      'spd': 96,
      'spe': 135
    },
    'abilities': {'0': 'Scrappy'},
    'heightm': 1.3,
    'weightkg': 28.3,
    'color': 'Brown',
    'eggGroups': ['Field', 'Human-Like']
  },
  'mismagius': {
    'num': 429,
    'species': 'Mismagius',
    'types': ['Ghost'],
    'baseStats': {
      'hp': 60,
      'atk': 60,
      'def': 60,
      'spa': 105,
      'spd': 105,
      'spe': 105
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.9,
    'weightkg': 4.4,
    'color': 'Purple',
    'prevo': 'misdreavus',
    'evoLevel': 1,
    'eggGroups': ['Amorphous']
  },
  'honchkrow': {
    'num': 430,
    'species': 'Honchkrow',
    'types': ['Dark', 'Flying'],
    'baseStats': {
      'hp': 100,
      'atk': 125,
      'def': 52,
      'spa': 105,
      'spd': 52,
      'spe': 71
    },
    'abilities': {
      '0': 'Insomnia',
      '1': 'Super Luck',
      'H': 'Moxie'
    },
    'heightm': 0.9,
    'weightkg': 27.3,
    'color': 'Black',
    'prevo': 'murkrow',
    'evoLevel': 1,
    'eggGroups': ['Flying']
  },
  'glameow': {
    'num': 431,
    'species': 'Glameow',
    'types': ['Normal'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 49,
      'atk': 55,
      'def': 42,
      'spa': 42,
      'spd': 37,
      'spe': 85
    },
    'abilities': {
      '0': 'Limber',
      '1': 'Own Tempo',
      'H': 'Keen Eye'
    },
    'heightm': 0.5,
    'weightkg': 3.9,
    'color': 'Gray',
    'evos': ['purugly'],
    'eggGroups': ['Field']
  },
  'purugly': {
    'num': 432,
    'species': 'Purugly',
    'types': ['Normal'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 71,
      'atk': 82,
      'def': 64,
      'spa': 64,
      'spd': 59,
      'spe': 112
    },
    'abilities': {
      '0': 'Thick Fat',
      '1': 'Own Tempo',
      'H': 'Defiant'
    },
    'heightm': 1,
    'weightkg': 43.8,
    'color': 'Gray',
    'prevo': 'glameow',
    'evoLevel': 38,
    'eggGroups': ['Field']
  },
  'chingling': {
    'num': 433,
    'species': 'Chingling',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 45,
      'atk': 30,
      'def': 50,
      'spa': 65,
      'spd': 50,
      'spe': 45
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.2,
    'weightkg': 0.6,
    'color': 'Yellow',
    'evos': ['chimecho'],
    'eggGroups': ['Undiscovered']
  },
  'stunky': {
    'num': 434,
    'species': 'Stunky',
    'types': ['Poison', 'Dark'],
    'baseStats': {
      'hp': 63,
      'atk': 63,
      'def': 47,
      'spa': 41,
      'spd': 41,
      'spe': 74
    },
    'abilities': {
      '0': 'Stench',
      '1': 'Aftermath',
      'H': 'Keen Eye'
    },
    'heightm': 0.4,
    'weightkg': 19.2,
    'color': 'Purple',
    'evos': ['skuntank'],
    'eggGroups': ['Field']
  },
  'skuntank': {
    'num': 435,
    'species': 'Skuntank',
    'types': ['Poison', 'Dark'],
    'baseStats': {
      'hp': 103,
      'atk': 93,
      'def': 67,
      'spa': 71,
      'spd': 61,
      'spe': 84
    },
    'abilities': {
      '0': 'Stench',
      '1': 'Aftermath',
      'H': 'Keen Eye'
    },
    'heightm': 1,
    'weightkg': 38,
    'color': 'Purple',
    'prevo': 'stunky',
    'evoLevel': 34,
    'eggGroups': ['Field']
  },
  'bronzor': {
    'num': 436,
    'species': 'Bronzor',
    'types': ['Steel', 'Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 57,
      'atk': 24,
      'def': 86,
      'spa': 24,
      'spd': 86,
      'spe': 23
    },
    'abilities': {
      '0': 'Levitate',
      '1': 'Heatproof',
      'H': 'Heavy Metal'
    },
    'heightm': 0.5,
    'weightkg': 60.5,
    'color': 'Green',
    'evos': ['bronzong'],
    'eggGroups': ['Mineral']
  },
  'bronzong': {
    'num': 437,
    'species': 'Bronzong',
    'types': ['Steel', 'Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 67,
      'atk': 89,
      'def': 116,
      'spa': 79,
      'spd': 116,
      'spe': 33
    },
    'abilities': {
      '0': 'Levitate',
      '1': 'Heatproof',
      'H': 'Heavy Metal'
    },
    'heightm': 1.3,
    'weightkg': 187,
    'color': 'Green',
    'prevo': 'bronzor',
    'evoLevel': 33,
    'eggGroups': ['Mineral']
  },
  'bonsly': {
    'num': 438,
    'species': 'Bonsly',
    'types': ['Rock'],
    'baseStats': {
      'hp': 50,
      'atk': 80,
      'def': 95,
      'spa': 10,
      'spd': 45,
      'spe': 10
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Rock Head',
      'H': 'Rattled'
    },
    'heightm': 0.5,
    'weightkg': 15,
    'color': 'Brown',
    'evos': ['sudowoodo'],
    'eggGroups': ['Undiscovered']
  },
  'mimejr': {
    'num': 439,
    'species': 'Mime Jr.',
    'types': ['Psychic', 'Fairy'],
    'baseStats': {
      'hp': 20,
      'atk': 25,
      'def': 45,
      'spa': 70,
      'spd': 90,
      'spe': 60
    },
    'abilities': {
      '0': 'Soundproof',
      '1': 'Filter',
      'H': 'Technician'
    },
    'heightm': 0.6,
    'weightkg': 13,
    'color': 'Pink',
    'evos': ['mrmime'],
    'eggGroups': ['Undiscovered']
  },
  'happiny': {
    'num': 440,
    'species': 'Happiny',
    'types': ['Normal'],
    'gender': 'F',
    'baseStats': {
      'hp': 100,
      'atk': 5,
      'def': 5,
      'spa': 15,
      'spd': 65,
      'spe': 30
    },
    'abilities': {
      '0': 'Natural Cure',
      '1': 'Serene Grace',
      'H': 'Friend Guard'
    },
    'heightm': 0.6,
    'weightkg': 24.4,
    'color': 'Pink',
    'evos': ['chansey'],
    'eggGroups': ['Undiscovered']
  },
  'chatot': {
    'num': 441,
    'species': 'Chatot',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 76,
      'atk': 65,
      'def': 45,
      'spa': 92,
      'spd': 42,
      'spe': 91
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Tangled Feet',
      'H': 'Big Pecks'
    },
    'heightm': 0.5,
    'weightkg': 1.9,
    'color': 'Black',
    'eggGroups': ['Flying']
  },
  'spiritomb': {
    'num': 442,
    'species': 'Spiritomb',
    'types': ['Ghost', 'Dark'],
    'baseStats': {
      'hp': 50,
      'atk': 92,
      'def': 108,
      'spa': 92,
      'spd': 108,
      'spe': 35
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Infiltrator'
    },
    'heightm': 1,
    'weightkg': 108,
    'color': 'Purple',
    'eggGroups': ['Amorphous']
  },
  'gible': {
    'num': 443,
    'species': 'Gible',
    'types': ['Dragon', 'Ground'],
    'baseStats': {
      'hp': 58,
      'atk': 70,
      'def': 45,
      'spa': 40,
      'spd': 45,
      'spe': 42
    },
    'abilities': {
      '0': 'Sand Veil',
      'H': 'Rough Skin'
    },
    'heightm': 0.7,
    'weightkg': 20.5,
    'color': 'Blue',
    'evos': ['gabite'],
    'eggGroups': ['Monster', 'Dragon']
  },
  'gabite': {
    'num': 444,
    'species': 'Gabite',
    'types': ['Dragon', 'Ground'],
    'baseStats': {
      'hp': 68,
      'atk': 90,
      'def': 65,
      'spa': 50,
      'spd': 55,
      'spe': 82
    },
    'abilities': {
      '0': 'Sand Veil',
      'H': 'Rough Skin'
    },
    'heightm': 1.4,
    'weightkg': 56,
    'color': 'Blue',
    'prevo': 'gible',
    'evos': ['garchomp'],
    'evoLevel': 24,
    'eggGroups': ['Monster', 'Dragon']
  },
  'garchomp': {
    'num': 445,
    'species': 'Garchomp',
    'types': ['Dragon', 'Ground'],
    'baseStats': {
      'hp': 108,
      'atk': 130,
      'def': 95,
      'spa': 80,
      'spd': 85,
      'spe': 102
    },
    'abilities': {
      '0': 'Sand Veil',
      'H': 'Rough Skin'
    },
    'heightm': 1.9,
    'weightkg': 95,
    'color': 'Blue',
    'prevo': 'gabite',
    'evoLevel': 48,
    'eggGroups': ['Monster', 'Dragon'],
    'otherFormes': ['garchompmega']
  },
  'garchompmega': {
    'num': 445,
    'species': 'Garchomp-Mega',
    'baseSpecies': 'Garchomp',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Dragon', 'Ground'],
    'baseStats': {
      'hp': 108,
      'atk': 170,
      'def': 115,
      'spa': 120,
      'spd': 95,
      'spe': 92
    },
    'abilities': {'0': 'Sand Force'},
    'heightm': 1.9,
    'weightkg': 95,
    'color': 'Blue',
    'eggGroups': ['Monster', 'Dragon']
  },
  'munchlax': {
    'num': 446,
    'species': 'Munchlax',
    'types': ['Normal'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 135,
      'atk': 85,
      'def': 40,
      'spa': 40,
      'spd': 85,
      'spe': 5
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Thick Fat',
      'H': 'Gluttony'
    },
    'heightm': 0.6,
    'weightkg': 105,
    'color': 'Black',
    'evos': ['snorlax'],
    'eggGroups': ['Undiscovered']
  },
  'riolu': {
    'num': 447,
    'species': 'Riolu',
    'types': ['Fighting'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 40,
      'atk': 70,
      'def': 40,
      'spa': 35,
      'spd': 40,
      'spe': 60
    },
    'abilities': {
      '0': 'Steadfast',
      '1': 'Inner Focus',
      'H': 'Prankster'
    },
    'heightm': 0.7,
    'weightkg': 20.2,
    'color': 'Blue',
    'evos': ['lucario'],
    'eggGroups': ['Undiscovered']
  },
  'lucario': {
    'num': 448,
    'species': 'Lucario',
    'types': ['Fighting', 'Steel'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 70,
      'atk': 110,
      'def': 70,
      'spa': 115,
      'spd': 70,
      'spe': 90
    },
    'abilities': {
      '0': 'Steadfast',
      '1': 'Inner Focus',
      'H': 'Justified'
    },
    'heightm': 1.2,
    'weightkg': 54,
    'color': 'Blue',
    'prevo': 'riolu',
    'evoLevel': 2,
    'eggGroups': ['Field', 'Human-Like'],
    'otherFormes': ['lucariomega']
  },
  'lucariomega': {
    'num': 448,
    'species': 'Lucario-Mega',
    'baseSpecies': 'Lucario',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Fighting', 'Steel'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 70,
      'atk': 145,
      'def': 88,
      'spa': 140,
      'spd': 70,
      'spe': 112
    },
    'abilities': {'0': 'Adaptability'},
    'heightm': 1.3,
    'weightkg': 57.5,
    'color': 'Blue',
    'eggGroups': ['Field', 'Human-Like']
  },
  'hippopotas': {
    'num': 449,
    'species': 'Hippopotas',
    'types': ['Ground'],
    'baseStats': {
      'hp': 68,
      'atk': 72,
      'def': 78,
      'spa': 38,
      'spd': 42,
      'spe': 32
    },
    'abilities': {
      '0': 'Sand Stream',
      'H': 'Sand Force'
    },
    'heightm': 0.8,
    'weightkg': 49.5,
    'color': 'Brown',
    'evos': ['hippowdon'],
    'eggGroups': ['Field']
  },
  'hippowdon': {
    'num': 450,
    'species': 'Hippowdon',
    'types': ['Ground'],
    'baseStats': {
      'hp': 108,
      'atk': 112,
      'def': 118,
      'spa': 68,
      'spd': 72,
      'spe': 47
    },
    'abilities': {
      '0': 'Sand Stream',
      'H': 'Sand Force'
    },
    'heightm': 2,
    'weightkg': 300,
    'color': 'Brown',
    'prevo': 'hippopotas',
    'evoLevel': 34,
    'eggGroups': ['Field']
  },
  'skorupi': {
    'num': 451,
    'species': 'Skorupi',
    'types': ['Poison', 'Bug'],
    'baseStats': {
      'hp': 40,
      'atk': 50,
      'def': 90,
      'spa': 30,
      'spd': 55,
      'spe': 65
    },
    'abilities': {
      '0': 'Battle Armor',
      '1': 'Sniper',
      'H': 'Keen Eye'
    },
    'heightm': 0.8,
    'weightkg': 12,
    'color': 'Purple',
    'evos': ['drapion'],
    'eggGroups': ['Bug', 'Water 3']
  },
  'drapion': {
    'num': 452,
    'species': 'Drapion',
    'types': ['Poison', 'Dark'],
    'baseStats': {
      'hp': 70,
      'atk': 90,
      'def': 110,
      'spa': 60,
      'spd': 75,
      'spe': 95
    },
    'abilities': {
      '0': 'Battle Armor',
      '1': 'Sniper',
      'H': 'Keen Eye'
    },
    'heightm': 1.3,
    'weightkg': 61.5,
    'color': 'Purple',
    'prevo': 'skorupi',
    'evoLevel': 40,
    'eggGroups': ['Bug', 'Water 3']
  },
  'croagunk': {
    'num': 453,
    'species': 'Croagunk',
    'types': ['Poison', 'Fighting'],
    'baseStats': {
      'hp': 48,
      'atk': 61,
      'def': 40,
      'spa': 61,
      'spd': 40,
      'spe': 50
    },
    'abilities': {
      '0': 'Anticipation',
      '1': 'Dry Skin',
      'H': 'Poison Touch'
    },
    'heightm': 0.7,
    'weightkg': 23,
    'color': 'Blue',
    'evos': ['toxicroak'],
    'eggGroups': ['Human-Like']
  },
  'toxicroak': {
    'num': 454,
    'species': 'Toxicroak',
    'types': ['Poison', 'Fighting'],
    'baseStats': {
      'hp': 83,
      'atk': 106,
      'def': 65,
      'spa': 86,
      'spd': 65,
      'spe': 85
    },
    'abilities': {
      '0': 'Anticipation',
      '1': 'Dry Skin',
      'H': 'Poison Touch'
    },
    'heightm': 1.3,
    'weightkg': 44.4,
    'color': 'Blue',
    'prevo': 'croagunk',
    'evoLevel': 37,
    'eggGroups': ['Human-Like']
  },
  'carnivine': {
    'num': 455,
    'species': 'Carnivine',
    'types': ['Grass'],
    'baseStats': {
      'hp': 74,
      'atk': 100,
      'def': 72,
      'spa': 90,
      'spd': 72,
      'spe': 46
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.4,
    'weightkg': 27,
    'color': 'Green',
    'eggGroups': ['Grass']
  },
  'finneon': {
    'num': 456,
    'species': 'Finneon',
    'types': ['Water'],
    'baseStats': {
      'hp': 49,
      'atk': 49,
      'def': 56,
      'spa': 49,
      'spd': 61,
      'spe': 66
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Storm Drain',
      'H': 'Water Veil'
    },
    'heightm': 0.4,
    'weightkg': 7,
    'color': 'Blue',
    'evos': ['lumineon'],
    'eggGroups': ['Water 2']
  },
  'lumineon': {
    'num': 457,
    'species': 'Lumineon',
    'types': ['Water'],
    'baseStats': {
      'hp': 69,
      'atk': 69,
      'def': 76,
      'spa': 69,
      'spd': 86,
      'spe': 91
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Storm Drain',
      'H': 'Water Veil'
    },
    'heightm': 1.2,
    'weightkg': 24,
    'color': 'Blue',
    'prevo': 'finneon',
    'evoLevel': 31,
    'eggGroups': ['Water 2']
  },
  'mantyke': {
    'num': 458,
    'species': 'Mantyke',
    'types': ['Water', 'Flying'],
    'baseStats': {
      'hp': 45,
      'atk': 20,
      'def': 50,
      'spa': 60,
      'spd': 120,
      'spe': 50
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Water Absorb',
      'H': 'Water Veil'
    },
    'heightm': 1,
    'weightkg': 65,
    'color': 'Blue',
    'evos': ['mantine'],
    'eggGroups': ['Undiscovered']
  },
  'snover': {
    'num': 459,
    'species': 'Snover',
    'types': ['Grass', 'Ice'],
    'baseStats': {
      'hp': 60,
      'atk': 62,
      'def': 50,
      'spa': 62,
      'spd': 60,
      'spe': 40
    },
    'abilities': {
      '0': 'Snow Warning',
      'H': 'Soundproof'
    },
    'heightm': 1,
    'weightkg': 50.5,
    'color': 'White',
    'evos': ['abomasnow'],
    'eggGroups': ['Monster', 'Grass']
  },
  'abomasnow': {
    'num': 460,
    'species': 'Abomasnow',
    'types': ['Grass', 'Ice'],
    'baseStats': {
      'hp': 90,
      'atk': 92,
      'def': 75,
      'spa': 92,
      'spd': 85,
      'spe': 60
    },
    'abilities': {
      '0': 'Snow Warning',
      'H': 'Soundproof'
    },
    'heightm': 2.2,
    'weightkg': 135.5,
    'color': 'White',
    'prevo': 'snover',
    'evoLevel': 40,
    'eggGroups': ['Monster', 'Grass'],
    'otherFormes': ['abomasnowmega']
  },
  'abomasnowmega': {
    'num': 460,
    'species': 'Abomasnow-Mega',
    'baseSpecies': 'Abomasnow',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Grass', 'Ice'],
    'baseStats': {
      'hp': 90,
      'atk': 132,
      'def': 105,
      'spa': 132,
      'spd': 105,
      'spe': 30
    },
    'abilities': {'0': 'Snow Warning'},
    'heightm': 2.7,
    'weightkg': 185,
    'color': 'White',
    'eggGroups': ['Monster', 'Grass']
  },
  'weavile': {
    'num': 461,
    'species': 'Weavile',
    'types': ['Dark', 'Ice'],
    'baseStats': {
      'hp': 70,
      'atk': 120,
      'def': 65,
      'spa': 45,
      'spd': 85,
      'spe': 125
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Pickpocket'
    },
    'heightm': 1.1,
    'weightkg': 34,
    'color': 'Black',
    'prevo': 'sneasel',
    'evoLevel': 2,
    'eggGroups': ['Field']
  },
  'magnezone': {
    'num': 462,
    'species': 'Magnezone',
    'types': ['Electric', 'Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 70,
      'atk': 70,
      'def': 115,
      'spa': 130,
      'spd': 90,
      'spe': 60
    },
    'abilities': {
      '0': 'Magnet Pull',
      '1': 'Sturdy',
      'H': 'Analytic'
    },
    'heightm': 1.2,
    'weightkg': 180,
    'color': 'Gray',
    'prevo': 'magneton',
    'evoLevel': 31,
    'eggGroups': ['Mineral']
  },
  'lickilicky': {
    'num': 463,
    'species': 'Lickilicky',
    'types': ['Normal'],
    'baseStats': {
      'hp': 110,
      'atk': 85,
      'def': 95,
      'spa': 80,
      'spd': 95,
      'spe': 50
    },
    'abilities': {
      '0': 'Own Tempo',
      '1': 'Oblivious',
      'H': 'Cloud Nine'
    },
    'heightm': 1.7,
    'weightkg': 140,
    'color': 'Pink',
    'prevo': 'lickitung',
    'evoLevel': 2,
    'evoMove': 'Rollout',
    'eggGroups': ['Monster']
  },
  'rhyperior': {
    'num': 464,
    'species': 'Rhyperior',
    'types': ['Ground', 'Rock'],
    'baseStats': {
      'hp': 115,
      'atk': 140,
      'def': 130,
      'spa': 55,
      'spd': 55,
      'spe': 40
    },
    'abilities': {
      '0': 'Lightning Rod',
      '1': 'Solid Rock',
      'H': 'Reckless'
    },
    'heightm': 2.4,
    'weightkg': 282.8,
    'color': 'Gray',
    'prevo': 'rhydon',
    'evoLevel': 42,
    'eggGroups': ['Monster', 'Field']
  },
  'tangrowth': {
    'num': 465,
    'species': 'Tangrowth',
    'types': ['Grass'],
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 125,
      'spa': 110,
      'spd': 50,
      'spe': 50
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Leaf Guard',
      'H': 'Regenerator'
    },
    'heightm': 2,
    'weightkg': 128.6,
    'color': 'Blue',
    'prevo': 'tangela',
    'evoLevel': 2,
    'evoMove': 'AncientPower',
    'eggGroups': ['Grass']
  },
  'electivire': {
    'num': 466,
    'species': 'Electivire',
    'types': ['Electric'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 75,
      'atk': 123,
      'def': 67,
      'spa': 95,
      'spd': 85,
      'spe': 95
    },
    'abilities': {
      '0': 'Motor Drive',
      'H': 'Vital Spirit'
    },
    'heightm': 1.8,
    'weightkg': 138.6,
    'color': 'Yellow',
    'prevo': 'electabuzz',
    'evoLevel': 30,
    'eggGroups': ['Human-Like']
  },
  'magmortar': {
    'num': 467,
    'species': 'Magmortar',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 75,
      'atk': 95,
      'def': 67,
      'spa': 125,
      'spd': 95,
      'spe': 83
    },
    'abilities': {
      '0': 'Flame Body',
      'H': 'Vital Spirit'
    },
    'heightm': 1.6,
    'weightkg': 68,
    'color': 'Red',
    'prevo': 'magmar',
    'evoLevel': 30,
    'eggGroups': ['Human-Like']
  },
  'togekiss': {
    'num': 468,
    'species': 'Togekiss',
    'types': ['Fairy', 'Flying'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 85,
      'atk': 50,
      'def': 95,
      'spa': 120,
      'spd': 115,
      'spe': 80
    },
    'abilities': {
      '0': 'Hustle',
      '1': 'Serene Grace',
      'H': 'Super Luck'
    },
    'heightm': 1.5,
    'weightkg': 38,
    'color': 'White',
    'prevo': 'togetic',
    'evoLevel': 2,
    'eggGroups': ['Flying', 'Fairy']
  },
  'yanmega': {
    'num': 469,
    'species': 'Yanmega',
    'types': ['Bug', 'Flying'],
    'baseStats': {
      'hp': 86,
      'atk': 76,
      'def': 86,
      'spa': 116,
      'spd': 56,
      'spe': 95
    },
    'abilities': {
      '0': 'Speed Boost',
      '1': 'Tinted Lens',
      'H': 'Frisk'
    },
    'heightm': 1.9,
    'weightkg': 51.5,
    'color': 'Green',
    'prevo': 'yanma',
    'evoLevel': 2,
    'evoMove': 'AncientPower',
    'eggGroups': ['Bug']
  },
  'leafeon': {
    'num': 470,
    'species': 'Leafeon',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 65,
      'atk': 110,
      'def': 130,
      'spa': 60,
      'spd': 65,
      'spe': 95
    },
    'abilities': {
      '0': 'Leaf Guard',
      'H': 'Chlorophyll'
    },
    'heightm': 1,
    'weightkg': 25.5,
    'color': 'Green',
    'prevo': 'eevee',
    'evoLevel': 2,
    'eggGroups': ['Field']
  },
  'glaceon': {
    'num': 471,
    'species': 'Glaceon',
    'types': ['Ice'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 65,
      'atk': 60,
      'def': 110,
      'spa': 130,
      'spd': 95,
      'spe': 65
    },
    'abilities': {
      '0': 'Snow Cloak',
      'H': 'Ice Body'
    },
    'heightm': 0.8,
    'weightkg': 25.9,
    'color': 'Blue',
    'prevo': 'eevee',
    'evoLevel': 2,
    'eggGroups': ['Field']
  },
  'gliscor': {
    'num': 472,
    'species': 'Gliscor',
    'types': ['Ground', 'Flying'],
    'baseStats': {
      'hp': 75,
      'atk': 95,
      'def': 125,
      'spa': 45,
      'spd': 75,
      'spe': 95
    },
    'abilities': {
      '0': 'Hyper Cutter',
      '1': 'Sand Veil',
      'H': 'Poison Heal'
    },
    'heightm': 2,
    'weightkg': 42.5,
    'color': 'Purple',
    'prevo': 'gligar',
    'evoLevel': 2,
    'eggGroups': ['Bug']
  },
  'mamoswine': {
    'num': 473,
    'species': 'Mamoswine',
    'types': ['Ice', 'Ground'],
    'baseStats': {
      'hp': 110,
      'atk': 130,
      'def': 80,
      'spa': 70,
      'spd': 60,
      'spe': 80
    },
    'abilities': {
      '0': 'Oblivious',
      '1': 'Snow Cloak',
      'H': 'Thick Fat'
    },
    'heightm': 2.5,
    'weightkg': 291,
    'color': 'Brown',
    'prevo': 'piloswine',
    'evoLevel': 34,
    'evoMove': 'AncientPower',
    'eggGroups': ['Field']
  },
  'porygonz': {
    'num': 474,
    'species': 'Porygon-Z',
    'types': ['Normal'],
    'gender': 'N',
    'baseStats': {
      'hp': 85,
      'atk': 80,
      'def': 70,
      'spa': 135,
      'spd': 75,
      'spe': 90
    },
    'abilities': {
      '0': 'Adaptability',
      '1': 'Download',
      'H': 'Analytic'
    },
    'heightm': 0.9,
    'weightkg': 34,
    'color': 'Red',
    'prevo': 'porygon2',
    'evoLevel': 1,
    'eggGroups': ['Mineral']
  },
  'gallade': {
    'num': 475,
    'species': 'Gallade',
    'types': ['Psychic', 'Fighting'],
    'gender': 'M',
    'baseStats': {
      'hp': 68,
      'atk': 125,
      'def': 65,
      'spa': 65,
      'spd': 115,
      'spe': 80
    },
    'abilities': {
      '0': 'Steadfast',
      'H': 'Justified'
    },
    'heightm': 1.6,
    'weightkg': 52,
    'color': 'White',
    'prevo': 'kirlia',
    'evoLevel': 20,
    'eggGroups': ['Amorphous'],
    'otherFormes': ['gallademega']
  },
  'gallademega': {
    'num': 475,
    'species': 'Gallade-Mega',
    'baseSpecies': 'Gallade',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Psychic', 'Fighting'],
    'gender': 'M',
    'baseStats': {
      'hp': 68,
      'atk': 165,
      'def': 95,
      'spa': 65,
      'spd': 115,
      'spe': 110
    },
    'abilities': {'0': 'Inner Focus'},
    'heightm': 1.6,
    'weightkg': 56.4,
    'color': 'White',
    'eggGroups': ['Amorphous']
  },
  'probopass': {
    'num': 476,
    'species': 'Probopass',
    'types': ['Rock', 'Steel'],
    'baseStats': {
      'hp': 60,
      'atk': 55,
      'def': 145,
      'spa': 75,
      'spd': 150,
      'spe': 40
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Magnet Pull',
      'H': 'Sand Force'
    },
    'heightm': 1.4,
    'weightkg': 340,
    'color': 'Gray',
    'prevo': 'nosepass',
    'evoLevel': 2,
    'eggGroups': ['Mineral']
  },
  'dusknoir': {
    'num': 477,
    'species': 'Dusknoir',
    'types': ['Ghost'],
    'baseStats': {
      'hp': 45,
      'atk': 100,
      'def': 135,
      'spa': 65,
      'spd': 135,
      'spe': 45
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Frisk'
    },
    'heightm': 2.2,
    'weightkg': 106.6,
    'color': 'Black',
    'prevo': 'dusclops',
    'evoLevel': 37,
    'eggGroups': ['Amorphous']
  },
  'froslass': {
    'num': 478,
    'species': 'Froslass',
    'types': ['Ice', 'Ghost'],
    'gender': 'F',
    'baseStats': {
      'hp': 70,
      'atk': 80,
      'def': 70,
      'spa': 80,
      'spd': 70,
      'spe': 110
    },
    'abilities': {
      '0': 'Snow Cloak',
      'H': 'Cursed Body'
    },
    'heightm': 1.3,
    'weightkg': 26.6,
    'color': 'White',
    'prevo': 'snorunt',
    'evoLevel': 1,
    'eggGroups': ['Fairy', 'Mineral']
  },
  'rotom': {
    'num': 479,
    'species': 'Rotom',
    'types': ['Electric', 'Ghost'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 50,
      'def': 77,
      'spa': 95,
      'spd': 77,
      'spe': 91
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.3,
    'weightkg': 0.3,
    'color': 'Red',
    'eggGroups': ['Amorphous'],
    'otherFormes': ['rotomheat', 'rotomwash', 'rotomfrost', 'rotomfan', 'rotommow']
  },
  'rotomheat': {
    'num': 479,
    'species': 'Rotom-Heat',
    'baseSpecies': 'Rotom',
    'forme': 'Heat',
    'formeLetter': 'H',
    'types': ['Electric', 'Fire'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 65,
      'def': 107,
      'spa': 105,
      'spd': 107,
      'spe': 86
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.3,
    'weightkg': 0.3,
    'color': 'Red',
    'eggGroups': ['Amorphous']
  },
  'rotomwash': {
    'num': 479,
    'species': 'Rotom-Wash',
    'baseSpecies': 'Rotom',
    'forme': 'Wash',
    'formeLetter': 'W',
    'types': ['Electric', 'Water'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 65,
      'def': 107,
      'spa': 105,
      'spd': 107,
      'spe': 86
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.3,
    'weightkg': 0.3,
    'color': 'Red',
    'eggGroups': ['Amorphous']
  },
  'rotomfrost': {
    'num': 479,
    'species': 'Rotom-Frost',
    'baseSpecies': 'Rotom',
    'forme': 'Frost',
    'formeLetter': 'F',
    'types': ['Electric', 'Ice'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 65,
      'def': 107,
      'spa': 105,
      'spd': 107,
      'spe': 86
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.3,
    'weightkg': 0.3,
    'color': 'Red',
    'eggGroups': ['Amorphous']
  },
  'rotomfan': {
    'num': 479,
    'species': 'Rotom-Fan',
    'baseSpecies': 'Rotom',
    'forme': 'Fan',
    'formeLetter': 'S',
    'types': ['Electric', 'Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 65,
      'def': 107,
      'spa': 105,
      'spd': 107,
      'spe': 86
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.3,
    'weightkg': 0.3,
    'color': 'Red',
    'eggGroups': ['Amorphous']
  },
  'rotommow': {
    'num': 479,
    'species': 'Rotom-Mow',
    'baseSpecies': 'Rotom',
    'forme': 'Mow',
    'formeLetter': 'C',
    'types': ['Electric', 'Grass'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 65,
      'def': 107,
      'spa': 105,
      'spd': 107,
      'spe': 86
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.3,
    'weightkg': 0.3,
    'color': 'Red',
    'eggGroups': ['Amorphous']
  },
  'uxie': {
    'num': 480,
    'species': 'Uxie',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 75,
      'atk': 75,
      'def': 130,
      'spa': 75,
      'spd': 130,
      'spe': 95
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.3,
    'weightkg': 0.3,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'mesprit': {
    'num': 481,
    'species': 'Mesprit',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 80,
      'atk': 105,
      'def': 105,
      'spa': 105,
      'spd': 105,
      'spe': 80
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.3,
    'weightkg': 0.3,
    'color': 'Pink',
    'eggGroups': ['Undiscovered']
  },
  'azelf': {
    'num': 482,
    'species': 'Azelf',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 75,
      'atk': 125,
      'def': 70,
      'spa': 125,
      'spd': 70,
      'spe': 115
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.3,
    'weightkg': 0.3,
    'color': 'Blue',
    'eggGroups': ['Undiscovered']
  },
  'dialga': {
    'num': 483,
    'species': 'Dialga',
    'types': ['Steel', 'Dragon'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 120,
      'def': 120,
      'spa': 150,
      'spd': 100,
      'spe': 90
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Telepathy'
    },
    'heightm': 5.4,
    'weightkg': 683,
    'color': 'White',
    'eggGroups': ['Undiscovered']
  },
  'palkia': {
    'num': 484,
    'species': 'Palkia',
    'types': ['Water', 'Dragon'],
    'gender': 'N',
    'baseStats': {
      'hp': 90,
      'atk': 120,
      'def': 100,
      'spa': 150,
      'spd': 120,
      'spe': 100
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Telepathy'
    },
    'heightm': 4.2,
    'weightkg': 336,
    'color': 'Purple',
    'eggGroups': ['Undiscovered']
  },
  'heatran': {
    'num': 485,
    'species': 'Heatran',
    'types': ['Fire', 'Steel'],
    'baseStats': {
      'hp': 91,
      'atk': 90,
      'def': 106,
      'spa': 130,
      'spd': 106,
      'spe': 77
    },
    'abilities': {
      '0': 'Flash Fire',
      'H': 'Flame Body'
    },
    'heightm': 1.7,
    'weightkg': 430,
    'color': 'Brown',
    'eggGroups': ['Undiscovered']
  },
  'regigigas': {
    'num': 486,
    'species': 'Regigigas',
    'types': ['Normal'],
    'gender': 'N',
    'baseStats': {
      'hp': 110,
      'atk': 160,
      'def': 110,
      'spa': 80,
      'spd': 110,
      'spe': 100
    },
    'abilities': {'0': 'Slow Start'},
    'heightm': 3.7,
    'weightkg': 420,
    'color': 'White',
    'eggGroups': ['Undiscovered']
  },
  'giratina': {
    'num': 487,
    'species': 'Giratina',
    'baseForme': 'Altered',
    'types': ['Ghost', 'Dragon'],
    'gender': 'N',
    'baseStats': {
      'hp': 150,
      'atk': 100,
      'def': 120,
      'spa': 100,
      'spd': 120,
      'spe': 90
    },
    'abilities': {
      '0': 'Pressure',
      'H': 'Telepathy'
    },
    'heightm': 4.5,
    'weightkg': 750,
    'color': 'Black',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['giratinaorigin']
  },
  'giratinaorigin': {
    'num': 487,
    'species': 'Giratina-Origin',
    'baseSpecies': 'Giratina',
    'forme': 'Origin',
    'formeLetter': 'O',
    'types': ['Ghost', 'Dragon'],
    'gender': 'N',
    'baseStats': {
      'hp': 150,
      'atk': 120,
      'def': 100,
      'spa': 120,
      'spd': 100,
      'spe': 90
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 6.9,
    'weightkg': 650,
    'color': 'Black',
    'eggGroups': ['Undiscovered']
  },
  'cresselia': {
    'num': 488,
    'species': 'Cresselia',
    'types': ['Psychic'],
    'gender': 'F',
    'baseStats': {
      'hp': 120,
      'atk': 70,
      'def': 120,
      'spa': 75,
      'spd': 130,
      'spe': 85
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.5,
    'weightkg': 85.6,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'phione': {
    'num': 489,
    'species': 'Phione',
    'types': ['Water'],
    'gender': 'N',
    'baseStats': {
      'hp': 80,
      'atk': 80,
      'def': 80,
      'spa': 80,
      'spd': 80,
      'spe': 80
    },
    'abilities': {'0': 'Hydration'},
    'heightm': 0.4,
    'weightkg': 3.1,
    'color': 'Blue',
    'eggGroups': ['Water 1', 'Fairy']
  },
  'manaphy': {
    'num': 490,
    'species': 'Manaphy',
    'types': ['Water'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Hydration'},
    'heightm': 0.3,
    'weightkg': 1.4,
    'color': 'Blue',
    'eggGroups': ['Water 1', 'Fairy']
  },
  'darkrai': {
    'num': 491,
    'species': 'Darkrai',
    'types': ['Dark'],
    'gender': 'N',
    'baseStats': {
      'hp': 70,
      'atk': 90,
      'def': 90,
      'spa': 135,
      'spd': 90,
      'spe': 125
    },
    'abilities': {'0': 'Bad Dreams'},
    'heightm': 1.5,
    'weightkg': 50.5,
    'color': 'Black',
    'eggGroups': ['Undiscovered']
  },
  'shaymin': {
    'num': 492,
    'species': 'Shaymin',
    'baseForme': 'Land',
    'types': ['Grass'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Natural Cure'},
    'heightm': 0.2,
    'weightkg': 2.1,
    'color': 'Green',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['shayminsky']
  },
  'shayminsky': {
    'num': 492,
    'species': 'Shaymin-Sky',
    'baseSpecies': 'Shaymin',
    'forme': 'Sky',
    'formeLetter': 'S',
    'types': ['Grass', 'Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 103,
      'def': 75,
      'spa': 120,
      'spd': 75,
      'spe': 127
    },
    'abilities': {'0': 'Serene Grace'},
    'heightm': 0.4,
    'weightkg': 5.2,
    'color': 'Green',
    'eggGroups': ['Undiscovered']
  },
  'arceus': {
    'num': 493,
    'species': 'Arceus',
    'baseForme': 'Normal',
    'types': ['Normal'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['arceusbug', 'arceusdark', 'arceusdragon', 'arceuselectric', 'arceusfairy', 'arceusfighting', 'arceusfire', 'arceusflying', 'arceusghost', 'arceusgrass', 'arceusground', 'arceusice', 'arceuspoison', 'arceuspsychic', 'arceusrock', 'arceussteel', 'arceuswater']
  },
  'arceusbug': {
    'num': 493,
    'species': 'Arceus-Bug',
    'baseSpecies': 'Arceus',
    'forme': 'Bug',
    'formeLetter': 'B',
    'types': ['Bug'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceusdark': {
    'num': 493,
    'species': 'Arceus-Dark',
    'baseSpecies': 'Arceus',
    'forme': 'Dark',
    'formeLetter': 'D',
    'types': ['Dark'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceusdragon': {
    'num': 493,
    'species': 'Arceus-Dragon',
    'baseSpecies': 'Arceus',
    'forme': 'Dragon',
    'formeLetter': 'D',
    'types': ['Dragon'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceuselectric': {
    'num': 493,
    'species': 'Arceus-Electric',
    'baseSpecies': 'Arceus',
    'forme': 'Electric',
    'formeLetter': 'E',
    'types': ['Electric'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceusfairy': {
    'num': 493,
    'species': 'Arceus-Fairy',
    'baseSpecies': 'Arceus',
    'forme': 'Fairy',
    'formeLetter': 'F',
    'types': ['Fairy'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceusfighting': {
    'num': 493,
    'species': 'Arceus-Fighting',
    'baseSpecies': 'Arceus',
    'forme': 'Fighting',
    'formeLetter': 'F',
    'types': ['Fighting'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceusfire': {
    'num': 493,
    'species': 'Arceus-Fire',
    'baseSpecies': 'Arceus',
    'forme': 'Fire',
    'formeLetter': 'F',
    'types': ['Fire'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceusflying': {
    'num': 493,
    'species': 'Arceus-Flying',
    'baseSpecies': 'Arceus',
    'forme': 'Flying',
    'formeLetter': 'F',
    'types': ['Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceusghost': {
    'num': 493,
    'species': 'Arceus-Ghost',
    'baseSpecies': 'Arceus',
    'forme': 'Ghost',
    'formeLetter': 'G',
    'types': ['Ghost'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceusgrass': {
    'num': 493,
    'species': 'Arceus-Grass',
    'baseSpecies': 'Arceus',
    'forme': 'Grass',
    'formeLetter': 'G',
    'types': ['Grass'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceusground': {
    'num': 493,
    'species': 'Arceus-Ground',
    'baseSpecies': 'Arceus',
    'forme': 'Ground',
    'formeLetter': 'G',
    'types': ['Ground'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceusice': {
    'num': 493,
    'species': 'Arceus-Ice',
    'baseSpecies': 'Arceus',
    'forme': 'Ice',
    'formeLetter': 'I',
    'types': ['Ice'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceuspoison': {
    'num': 493,
    'species': 'Arceus-Poison',
    'baseSpecies': 'Arceus',
    'forme': 'Poison',
    'formeLetter': 'P',
    'types': ['Poison'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceuspsychic': {
    'num': 493,
    'species': 'Arceus-Psychic',
    'baseSpecies': 'Arceus',
    'forme': 'Psychic',
    'formeLetter': 'P',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceusrock': {
    'num': 493,
    'species': 'Arceus-Rock',
    'baseSpecies': 'Arceus',
    'forme': 'Rock',
    'formeLetter': 'R',
    'types': ['Rock'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceussteel': {
    'num': 493,
    'species': 'Arceus-Steel',
    'baseSpecies': 'Arceus',
    'forme': 'Steel',
    'formeLetter': 'S',
    'types': ['Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arceuswater': {
    'num': 493,
    'species': 'Arceus-Water',
    'baseSpecies': 'Arceus',
    'forme': 'Water',
    'formeLetter': 'W',
    'types': ['Water'],
    'gender': 'N',
    'baseStats': {
      'hp': 120,
      'atk': 120,
      'def': 120,
      'spa': 120,
      'spd': 120,
      'spe': 120
    },
    'abilities': {'0': 'Multitype'},
    'heightm': 3.2,
    'weightkg': 320,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'victini': {
    'num': 494,
    'species': 'Victini',
    'types': ['Psychic', 'Fire'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Victory Star'},
    'heightm': 0.4,
    'weightkg': 4,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'snivy': {
    'num': 495,
    'species': 'Snivy',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 45,
      'atk': 45,
      'def': 55,
      'spa': 45,
      'spd': 55,
      'spe': 63
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Contrary'
    },
    'heightm': 0.6,
    'weightkg': 8.1,
    'color': 'Green',
    'evos': ['servine'],
    'eggGroups': ['Field', 'Grass']
  },
  'servine': {
    'num': 496,
    'species': 'Servine',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 60,
      'atk': 60,
      'def': 75,
      'spa': 60,
      'spd': 75,
      'spe': 83
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Contrary'
    },
    'heightm': 0.8,
    'weightkg': 16,
    'color': 'Green',
    'prevo': 'snivy',
    'evos': ['serperior'],
    'evoLevel': 17,
    'eggGroups': ['Field', 'Grass']
  },
  'serperior': {
    'num': 497,
    'species': 'Serperior',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 75,
      'atk': 75,
      'def': 95,
      'spa': 75,
      'spd': 95,
      'spe': 113
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Contrary'
    },
    'heightm': 3.3,
    'weightkg': 63,
    'color': 'Green',
    'prevo': 'servine',
    'evoLevel': 36,
    'eggGroups': ['Field', 'Grass']
  },
  'tepig': {
    'num': 498,
    'species': 'Tepig',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 65,
      'atk': 63,
      'def': 45,
      'spa': 45,
      'spd': 45,
      'spe': 45
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Thick Fat'
    },
    'heightm': 0.5,
    'weightkg': 9.9,
    'color': 'Red',
    'evos': ['pignite'],
    'eggGroups': ['Field']
  },
  'pignite': {
    'num': 499,
    'species': 'Pignite',
    'types': ['Fire', 'Fighting'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 90,
      'atk': 93,
      'def': 55,
      'spa': 70,
      'spd': 55,
      'spe': 55
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Thick Fat'
    },
    'heightm': 1,
    'weightkg': 55.5,
    'color': 'Red',
    'prevo': 'tepig',
    'evos': ['emboar'],
    'evoLevel': 17,
    'eggGroups': ['Field']
  },
  'emboar': {
    'num': 500,
    'species': 'Emboar',
    'types': ['Fire', 'Fighting'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 110,
      'atk': 123,
      'def': 65,
      'spa': 100,
      'spd': 65,
      'spe': 65
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Reckless'
    },
    'heightm': 1.6,
    'weightkg': 150,
    'color': 'Red',
    'prevo': 'pignite',
    'evoLevel': 36,
    'eggGroups': ['Field']
  },
  'oshawott': {
    'num': 501,
    'species': 'Oshawott',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 55,
      'atk': 55,
      'def': 45,
      'spa': 63,
      'spd': 45,
      'spe': 45
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Shell Armor'
    },
    'heightm': 0.5,
    'weightkg': 5.9,
    'color': 'Blue',
    'evos': ['dewott'],
    'eggGroups': ['Field']
  },
  'dewott': {
    'num': 502,
    'species': 'Dewott',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 75,
      'atk': 75,
      'def': 60,
      'spa': 83,
      'spd': 60,
      'spe': 60
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Shell Armor'
    },
    'heightm': 0.8,
    'weightkg': 24.5,
    'color': 'Blue',
    'prevo': 'oshawott',
    'evos': ['samurott'],
    'evoLevel': 17,
    'eggGroups': ['Field']
  },
  'samurott': {
    'num': 503,
    'species': 'Samurott',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 95,
      'atk': 100,
      'def': 85,
      'spa': 108,
      'spd': 70,
      'spe': 70
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Shell Armor'
    },
    'heightm': 1.5,
    'weightkg': 94.6,
    'color': 'Blue',
    'prevo': 'dewott',
    'evoLevel': 36,
    'eggGroups': ['Field']
  },
  'patrat': {
    'num': 504,
    'species': 'Patrat',
    'types': ['Normal'],
    'baseStats': {
      'hp': 45,
      'atk': 55,
      'def': 39,
      'spa': 35,
      'spd': 39,
      'spe': 42
    },
    'abilities': {
      '0': 'Run Away',
      '1': 'Keen Eye',
      'H': 'Analytic'
    },
    'heightm': 0.5,
    'weightkg': 11.6,
    'color': 'Brown',
    'evos': ['watchog'],
    'eggGroups': ['Field']
  },
  'watchog': {
    'num': 505,
    'species': 'Watchog',
    'types': ['Normal'],
    'baseStats': {
      'hp': 60,
      'atk': 85,
      'def': 69,
      'spa': 60,
      'spd': 69,
      'spe': 77
    },
    'abilities': {
      '0': 'Illuminate',
      '1': 'Keen Eye',
      'H': 'Analytic'
    },
    'heightm': 1.1,
    'weightkg': 27,
    'color': 'Brown',
    'prevo': 'patrat',
    'evoLevel': 20,
    'eggGroups': ['Field']
  },
  'lillipup': {
    'num': 506,
    'species': 'Lillipup',
    'types': ['Normal'],
    'baseStats': {
      'hp': 45,
      'atk': 60,
      'def': 45,
      'spa': 25,
      'spd': 45,
      'spe': 55
    },
    'abilities': {
      '0': 'Vital Spirit',
      '1': 'Pickup',
      'H': 'Run Away'
    },
    'heightm': 0.4,
    'weightkg': 4.1,
    'color': 'Brown',
    'evos': ['herdier'],
    'eggGroups': ['Field']
  },
  'herdier': {
    'num': 507,
    'species': 'Herdier',
    'types': ['Normal'],
    'baseStats': {
      'hp': 65,
      'atk': 80,
      'def': 65,
      'spa': 35,
      'spd': 65,
      'spe': 60
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Sand Rush',
      'H': 'Scrappy'
    },
    'heightm': 0.9,
    'weightkg': 14.7,
    'color': 'Gray',
    'prevo': 'lillipup',
    'evos': ['stoutland'],
    'evoLevel': 16,
    'eggGroups': ['Field']
  },
  'stoutland': {
    'num': 508,
    'species': 'Stoutland',
    'types': ['Normal'],
    'baseStats': {
      'hp': 85,
      'atk': 110,
      'def': 90,
      'spa': 45,
      'spd': 90,
      'spe': 80
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Sand Rush',
      'H': 'Scrappy'
    },
    'heightm': 1.2,
    'weightkg': 61,
    'color': 'Gray',
    'prevo': 'herdier',
    'evoLevel': 32,
    'eggGroups': ['Field']
  },
  'purrloin': {
    'num': 509,
    'species': 'Purrloin',
    'types': ['Dark'],
    'baseStats': {
      'hp': 41,
      'atk': 50,
      'def': 37,
      'spa': 50,
      'spd': 37,
      'spe': 66
    },
    'abilities': {
      '0': 'Limber',
      '1': 'Unburden',
      'H': 'Prankster'
    },
    'heightm': 0.4,
    'weightkg': 10.1,
    'color': 'Purple',
    'evos': ['liepard'],
    'eggGroups': ['Field']
  },
  'liepard': {
    'num': 510,
    'species': 'Liepard',
    'types': ['Dark'],
    'baseStats': {
      'hp': 64,
      'atk': 88,
      'def': 50,
      'spa': 88,
      'spd': 50,
      'spe': 106
    },
    'abilities': {
      '0': 'Limber',
      '1': 'Unburden',
      'H': 'Prankster'
    },
    'heightm': 1.1,
    'weightkg': 37.5,
    'color': 'Purple',
    'prevo': 'purrloin',
    'evoLevel': 20,
    'eggGroups': ['Field']
  },
  'pansage': {
    'num': 511,
    'species': 'Pansage',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 50,
      'atk': 53,
      'def': 48,
      'spa': 53,
      'spd': 48,
      'spe': 64
    },
    'abilities': {
      '0': 'Gluttony',
      'H': 'Overgrow'
    },
    'heightm': 0.6,
    'weightkg': 10.5,
    'color': 'Green',
    'evos': ['simisage'],
    'eggGroups': ['Field']
  },
  'simisage': {
    'num': 512,
    'species': 'Simisage',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 75,
      'atk': 98,
      'def': 63,
      'spa': 98,
      'spd': 63,
      'spe': 101
    },
    'abilities': {
      '0': 'Gluttony',
      'H': 'Overgrow'
    },
    'heightm': 1.1,
    'weightkg': 30.5,
    'color': 'Green',
    'prevo': 'pansage',
    'evoLevel': 1,
    'eggGroups': ['Field']
  },
  'pansear': {
    'num': 513,
    'species': 'Pansear',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 50,
      'atk': 53,
      'def': 48,
      'spa': 53,
      'spd': 48,
      'spe': 64
    },
    'abilities': {
      '0': 'Gluttony',
      'H': 'Blaze'
    },
    'heightm': 0.6,
    'weightkg': 11,
    'color': 'Red',
    'evos': ['simisear'],
    'eggGroups': ['Field']
  },
  'simisear': {
    'num': 514,
    'species': 'Simisear',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 75,
      'atk': 98,
      'def': 63,
      'spa': 98,
      'spd': 63,
      'spe': 101
    },
    'abilities': {
      '0': 'Gluttony',
      'H': 'Blaze'
    },
    'heightm': 1,
    'weightkg': 28,
    'color': 'Red',
    'prevo': 'pansear',
    'evoLevel': 1,
    'eggGroups': ['Field']
  },
  'panpour': {
    'num': 515,
    'species': 'Panpour',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 50,
      'atk': 53,
      'def': 48,
      'spa': 53,
      'spd': 48,
      'spe': 64
    },
    'abilities': {
      '0': 'Gluttony',
      'H': 'Torrent'
    },
    'heightm': 0.6,
    'weightkg': 13.5,
    'color': 'Blue',
    'evos': ['simipour'],
    'eggGroups': ['Field']
  },
  'simipour': {
    'num': 516,
    'species': 'Simipour',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 75,
      'atk': 98,
      'def': 63,
      'spa': 98,
      'spd': 63,
      'spe': 101
    },
    'abilities': {
      '0': 'Gluttony',
      'H': 'Torrent'
    },
    'heightm': 1,
    'weightkg': 29,
    'color': 'Blue',
    'prevo': 'panpour',
    'evoLevel': 1,
    'eggGroups': ['Field']
  },
  'munna': {
    'num': 517,
    'species': 'Munna',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 76,
      'atk': 25,
      'def': 45,
      'spa': 67,
      'spd': 55,
      'spe': 24
    },
    'abilities': {
      '0': 'Forewarn',
      '1': 'Synchronize',
      'H': 'Telepathy'
    },
    'heightm': 0.6,
    'weightkg': 23.3,
    'color': 'Pink',
    'evos': ['musharna'],
    'eggGroups': ['Field']
  },
  'musharna': {
    'num': 518,
    'species': 'Musharna',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 116,
      'atk': 55,
      'def': 85,
      'spa': 107,
      'spd': 95,
      'spe': 29
    },
    'abilities': {
      '0': 'Forewarn',
      '1': 'Synchronize',
      'H': 'Telepathy'
    },
    'heightm': 1.1,
    'weightkg': 60.5,
    'color': 'Pink',
    'prevo': 'munna',
    'evoLevel': 1,
    'eggGroups': ['Field']
  },
  'pidove': {
    'num': 519,
    'species': 'Pidove',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 50,
      'atk': 55,
      'def': 50,
      'spa': 36,
      'spd': 30,
      'spe': 43
    },
    'abilities': {
      '0': 'Big Pecks',
      '1': 'Super Luck',
      'H': 'Rivalry'
    },
    'heightm': 0.3,
    'weightkg': 2.1,
    'color': 'Gray',
    'evos': ['tranquill'],
    'eggGroups': ['Flying']
  },
  'tranquill': {
    'num': 520,
    'species': 'Tranquill',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 62,
      'atk': 77,
      'def': 62,
      'spa': 50,
      'spd': 42,
      'spe': 65
    },
    'abilities': {
      '0': 'Big Pecks',
      '1': 'Super Luck',
      'H': 'Rivalry'
    },
    'heightm': 0.6,
    'weightkg': 15,
    'color': 'Gray',
    'prevo': 'pidove',
    'evos': ['unfezant'],
    'evoLevel': 21,
    'eggGroups': ['Flying']
  },
  'unfezant': {
    'num': 521,
    'species': 'Unfezant',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 80,
      'atk': 115,
      'def': 80,
      'spa': 65,
      'spd': 55,
      'spe': 93
    },
    'abilities': {
      '0': 'Big Pecks',
      '1': 'Super Luck',
      'H': 'Rivalry'
    },
    'heightm': 1.2,
    'weightkg': 29,
    'color': 'Gray',
    'prevo': 'tranquill',
    'evoLevel': 32,
    'eggGroups': ['Flying']
  },
  'blitzle': {
    'num': 522,
    'species': 'Blitzle',
    'types': ['Electric'],
    'baseStats': {
      'hp': 45,
      'atk': 60,
      'def': 32,
      'spa': 50,
      'spd': 32,
      'spe': 76
    },
    'abilities': {
      '0': 'Lightning Rod',
      '1': 'Motor Drive',
      'H': 'Sap Sipper'
    },
    'heightm': 0.8,
    'weightkg': 29.8,
    'color': 'Black',
    'evos': ['zebstrika'],
    'eggGroups': ['Field']
  },
  'zebstrika': {
    'num': 523,
    'species': 'Zebstrika',
    'types': ['Electric'],
    'baseStats': {
      'hp': 75,
      'atk': 100,
      'def': 63,
      'spa': 80,
      'spd': 63,
      'spe': 116
    },
    'abilities': {
      '0': 'Lightning Rod',
      '1': 'Motor Drive',
      'H': 'Sap Sipper'
    },
    'heightm': 1.6,
    'weightkg': 79.5,
    'color': 'Black',
    'prevo': 'blitzle',
    'evoLevel': 27,
    'eggGroups': ['Field']
  },
  'roggenrola': {
    'num': 524,
    'species': 'Roggenrola',
    'types': ['Rock'],
    'baseStats': {
      'hp': 55,
      'atk': 75,
      'def': 85,
      'spa': 25,
      'spd': 25,
      'spe': 15
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Weak Armor',
      'H': 'Sand Force'
    },
    'heightm': 0.4,
    'weightkg': 18,
    'color': 'Blue',
    'evos': ['boldore'],
    'eggGroups': ['Mineral']
  },
  'boldore': {
    'num': 525,
    'species': 'Boldore',
    'types': ['Rock'],
    'baseStats': {
      'hp': 70,
      'atk': 105,
      'def': 105,
      'spa': 50,
      'spd': 40,
      'spe': 20
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Weak Armor',
      'H': 'Sand Force'
    },
    'heightm': 0.9,
    'weightkg': 102,
    'color': 'Blue',
    'prevo': 'roggenrola',
    'evos': ['gigalith'],
    'evoLevel': 25,
    'eggGroups': ['Mineral']
  },
  'gigalith': {
    'num': 526,
    'species': 'Gigalith',
    'types': ['Rock'],
    'baseStats': {
      'hp': 85,
      'atk': 135,
      'def': 130,
      'spa': 60,
      'spd': 80,
      'spe': 25
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Sand Stream',
      'H': 'Sand Force'
    },
    'heightm': 1.7,
    'weightkg': 260,
    'color': 'Blue',
    'prevo': 'boldore',
    'evoLevel': 25,
    'eggGroups': ['Mineral']
  },
  'woobat': {
    'num': 527,
    'species': 'Woobat',
    'types': ['Psychic', 'Flying'],
    'baseStats': {
      'hp': 65,
      'atk': 45,
      'def': 43,
      'spa': 55,
      'spd': 43,
      'spe': 72
    },
    'abilities': {
      '0': 'Unaware',
      '1': 'Klutz',
      'H': 'Simple'
    },
    'heightm': 0.4,
    'weightkg': 2.1,
    'color': 'Blue',
    'evos': ['swoobat'],
    'eggGroups': ['Flying', 'Field']
  },
  'swoobat': {
    'num': 528,
    'species': 'Swoobat',
    'types': ['Psychic', 'Flying'],
    'baseStats': {
      'hp': 67,
      'atk': 57,
      'def': 55,
      'spa': 77,
      'spd': 55,
      'spe': 114
    },
    'abilities': {
      '0': 'Unaware',
      '1': 'Klutz',
      'H': 'Simple'
    },
    'heightm': 0.9,
    'weightkg': 10.5,
    'color': 'Blue',
    'prevo': 'woobat',
    'evoLevel': 2,
    'eggGroups': ['Flying', 'Field']
  },
  'drilbur': {
    'num': 529,
    'species': 'Drilbur',
    'types': ['Ground'],
    'baseStats': {
      'hp': 60,
      'atk': 85,
      'def': 40,
      'spa': 30,
      'spd': 45,
      'spe': 68
    },
    'abilities': {
      '0': 'Sand Rush',
      '1': 'Sand Force',
      'H': 'Mold Breaker'
    },
    'heightm': 0.3,
    'weightkg': 8.5,
    'color': 'Gray',
    'evos': ['excadrill'],
    'eggGroups': ['Field']
  },
  'excadrill': {
    'num': 530,
    'species': 'Excadrill',
    'types': ['Ground', 'Steel'],
    'baseStats': {
      'hp': 110,
      'atk': 135,
      'def': 60,
      'spa': 50,
      'spd': 65,
      'spe': 88
    },
    'abilities': {
      '0': 'Sand Rush',
      '1': 'Sand Force',
      'H': 'Mold Breaker'
    },
    'heightm': 0.7,
    'weightkg': 40.4,
    'color': 'Gray',
    'prevo': 'drilbur',
    'evoLevel': 31,
    'eggGroups': ['Field']
  },
  'audino': {
    'num': 531,
    'species': 'Audino',
    'types': ['Normal'],
    'baseStats': {
      'hp': 103,
      'atk': 60,
      'def': 86,
      'spa': 60,
      'spd': 86,
      'spe': 50
    },
    'abilities': {
      '0': 'Healer',
      '1': 'Regenerator',
      'H': 'Klutz'
    },
    'heightm': 1.1,
    'weightkg': 31,
    'color': 'Pink',
    'eggGroups': ['Fairy'],
    'otherFormes': ['audinomega']
  },
  'audinomega': {
    'num': 531,
    'species': 'Audino-Mega',
    'baseSpecies': 'Audino',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Normal', 'Fairy'],
    'baseStats': {
      'hp': 103,
      'atk': 60,
      'def': 126,
      'spa': 80,
      'spd': 126,
      'spe': 50
    },
    'abilities': {'0': 'Healer'},
    'heightm': 1.5,
    'weightkg': 32,
    'color': 'White',
    'eggGroups': ['Fairy']
  },
  'timburr': {
    'num': 532,
    'species': 'Timburr',
    'types': ['Fighting'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 75,
      'atk': 80,
      'def': 55,
      'spa': 25,
      'spd': 35,
      'spe': 35
    },
    'abilities': {
      '0': 'Guts',
      '1': 'Sheer Force',
      'H': 'Iron Fist'
    },
    'heightm': 0.6,
    'weightkg': 12.5,
    'color': 'Gray',
    'evos': ['gurdurr'],
    'eggGroups': ['Human-Like']
  },
  'gurdurr': {
    'num': 533,
    'species': 'Gurdurr',
    'types': ['Fighting'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 85,
      'atk': 105,
      'def': 85,
      'spa': 40,
      'spd': 50,
      'spe': 40
    },
    'abilities': {
      '0': 'Guts',
      '1': 'Sheer Force',
      'H': 'Iron Fist'
    },
    'heightm': 1.2,
    'weightkg': 40,
    'color': 'Gray',
    'prevo': 'timburr',
    'evos': ['conkeldurr'],
    'evoLevel': 25,
    'eggGroups': ['Human-Like']
  },
  'conkeldurr': {
    'num': 534,
    'species': 'Conkeldurr',
    'types': ['Fighting'],
    'genderRatio': {
      'M': 0.75,
      'F': 0.25
    },
    'baseStats': {
      'hp': 105,
      'atk': 140,
      'def': 95,
      'spa': 55,
      'spd': 65,
      'spe': 45
    },
    'abilities': {
      '0': 'Guts',
      '1': 'Sheer Force',
      'H': 'Iron Fist'
    },
    'heightm': 1.4,
    'weightkg': 87,
    'color': 'Brown',
    'prevo': 'gurdurr',
    'evoLevel': 25,
    'eggGroups': ['Human-Like']
  },
  'tympole': {
    'num': 535,
    'species': 'Tympole',
    'types': ['Water'],
    'baseStats': {
      'hp': 50,
      'atk': 50,
      'def': 40,
      'spa': 50,
      'spd': 40,
      'spe': 64
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Hydration',
      'H': 'Water Absorb'
    },
    'heightm': 0.5,
    'weightkg': 4.5,
    'color': 'Blue',
    'evos': ['palpitoad'],
    'eggGroups': ['Water 1']
  },
  'palpitoad': {
    'num': 536,
    'species': 'Palpitoad',
    'types': ['Water', 'Ground'],
    'baseStats': {
      'hp': 75,
      'atk': 65,
      'def': 55,
      'spa': 65,
      'spd': 55,
      'spe': 69
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Hydration',
      'H': 'Water Absorb'
    },
    'heightm': 0.8,
    'weightkg': 17,
    'color': 'Blue',
    'prevo': 'tympole',
    'evos': ['seismitoad'],
    'evoLevel': 25,
    'eggGroups': ['Water 1']
  },
  'seismitoad': {
    'num': 537,
    'species': 'Seismitoad',
    'types': ['Water', 'Ground'],
    'baseStats': {
      'hp': 105,
      'atk': 95,
      'def': 75,
      'spa': 85,
      'spd': 75,
      'spe': 74
    },
    'abilities': {
      '0': 'Swift Swim',
      '1': 'Poison Touch',
      'H': 'Water Absorb'
    },
    'heightm': 1.5,
    'weightkg': 62,
    'color': 'Blue',
    'prevo': 'palpitoad',
    'evoLevel': 36,
    'eggGroups': ['Water 1']
  },
  'throh': {
    'num': 538,
    'species': 'Throh',
    'types': ['Fighting'],
    'gender': 'M',
    'baseStats': {
      'hp': 120,
      'atk': 100,
      'def': 85,
      'spa': 30,
      'spd': 85,
      'spe': 45
    },
    'abilities': {
      '0': 'Guts',
      '1': 'Inner Focus',
      'H': 'Mold Breaker'
    },
    'heightm': 1.3,
    'weightkg': 55.5,
    'color': 'Red',
    'eggGroups': ['Human-Like']
  },
  'sawk': {
    'num': 539,
    'species': 'Sawk',
    'types': ['Fighting'],
    'gender': 'M',
    'baseStats': {
      'hp': 75,
      'atk': 125,
      'def': 75,
      'spa': 30,
      'spd': 75,
      'spe': 85
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Inner Focus',
      'H': 'Mold Breaker'
    },
    'heightm': 1.4,
    'weightkg': 51,
    'color': 'Blue',
    'eggGroups': ['Human-Like']
  },
  'sewaddle': {
    'num': 540,
    'species': 'Sewaddle',
    'types': ['Bug', 'Grass'],
    'baseStats': {
      'hp': 45,
      'atk': 53,
      'def': 70,
      'spa': 40,
      'spd': 60,
      'spe': 42
    },
    'abilities': {
      '0': 'Swarm',
      '1': 'Chlorophyll',
      'H': 'Overcoat'
    },
    'heightm': 0.3,
    'weightkg': 2.5,
    'color': 'Yellow',
    'evos': ['swadloon'],
    'eggGroups': ['Bug']
  },
  'swadloon': {
    'num': 541,
    'species': 'Swadloon',
    'types': ['Bug', 'Grass'],
    'baseStats': {
      'hp': 55,
      'atk': 63,
      'def': 90,
      'spa': 50,
      'spd': 80,
      'spe': 42
    },
    'abilities': {
      '0': 'Leaf Guard',
      '1': 'Chlorophyll',
      'H': 'Overcoat'
    },
    'heightm': 0.5,
    'weightkg': 7.3,
    'color': 'Green',
    'prevo': 'sewaddle',
    'evos': ['leavanny'],
    'evoLevel': 20,
    'eggGroups': ['Bug']
  },
  'leavanny': {
    'num': 542,
    'species': 'Leavanny',
    'types': ['Bug', 'Grass'],
    'baseStats': {
      'hp': 75,
      'atk': 103,
      'def': 80,
      'spa': 70,
      'spd': 80,
      'spe': 92
    },
    'abilities': {
      '0': 'Swarm',
      '1': 'Chlorophyll',
      'H': 'Overcoat'
    },
    'heightm': 1.2,
    'weightkg': 20.5,
    'color': 'Yellow',
    'prevo': 'swadloon',
    'evoLevel': 21,
    'eggGroups': ['Bug']
  },
  'venipede': {
    'num': 543,
    'species': 'Venipede',
    'types': ['Bug', 'Poison'],
    'baseStats': {
      'hp': 30,
      'atk': 45,
      'def': 59,
      'spa': 30,
      'spd': 39,
      'spe': 57
    },
    'abilities': {
      '0': 'Poison Point',
      '1': 'Swarm',
      'H': 'Speed Boost'
    },
    'heightm': 0.4,
    'weightkg': 5.3,
    'color': 'Red',
    'evos': ['whirlipede'],
    'eggGroups': ['Bug']
  },
  'whirlipede': {
    'num': 544,
    'species': 'Whirlipede',
    'types': ['Bug', 'Poison'],
    'baseStats': {
      'hp': 40,
      'atk': 55,
      'def': 99,
      'spa': 40,
      'spd': 79,
      'spe': 47
    },
    'abilities': {
      '0': 'Poison Point',
      '1': 'Swarm',
      'H': 'Speed Boost'
    },
    'heightm': 1.2,
    'weightkg': 58.5,
    'color': 'Gray',
    'prevo': 'venipede',
    'evos': ['scolipede'],
    'evoLevel': 22,
    'eggGroups': ['Bug']
  },
  'scolipede': {
    'num': 545,
    'species': 'Scolipede',
    'types': ['Bug', 'Poison'],
    'baseStats': {
      'hp': 60,
      'atk': 100,
      'def': 89,
      'spa': 55,
      'spd': 69,
      'spe': 112
    },
    'abilities': {
      '0': 'Poison Point',
      '1': 'Swarm',
      'H': 'Speed Boost'
    },
    'heightm': 2.5,
    'weightkg': 200.5,
    'color': 'Red',
    'prevo': 'whirlipede',
    'evoLevel': 30,
    'eggGroups': ['Bug']
  },
  'cottonee': {
    'num': 546,
    'species': 'Cottonee',
    'types': ['Grass', 'Fairy'],
    'baseStats': {
      'hp': 40,
      'atk': 27,
      'def': 60,
      'spa': 37,
      'spd': 50,
      'spe': 66
    },
    'abilities': {
      '0': 'Prankster',
      '1': 'Infiltrator',
      'H': 'Chlorophyll'
    },
    'heightm': 0.3,
    'weightkg': 0.6,
    'color': 'Green',
    'evos': ['whimsicott'],
    'eggGroups': ['Fairy', 'Grass']
  },
  'whimsicott': {
    'num': 547,
    'species': 'Whimsicott',
    'types': ['Grass', 'Fairy'],
    'baseStats': {
      'hp': 60,
      'atk': 67,
      'def': 85,
      'spa': 77,
      'spd': 75,
      'spe': 116
    },
    'abilities': {
      '0': 'Prankster',
      '1': 'Infiltrator',
      'H': 'Chlorophyll'
    },
    'heightm': 0.7,
    'weightkg': 6.6,
    'color': 'Green',
    'prevo': 'cottonee',
    'evoLevel': 1,
    'eggGroups': ['Fairy', 'Grass']
  },
  'petilil': {
    'num': 548,
    'species': 'Petilil',
    'types': ['Grass'],
    'gender': 'F',
    'baseStats': {
      'hp': 45,
      'atk': 35,
      'def': 50,
      'spa': 70,
      'spd': 50,
      'spe': 30
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Own Tempo',
      'H': 'Leaf Guard'
    },
    'heightm': 0.5,
    'weightkg': 6.6,
    'color': 'Green',
    'evos': ['lilligant'],
    'eggGroups': ['Grass']
  },
  'lilligant': {
    'num': 549,
    'species': 'Lilligant',
    'types': ['Grass'],
    'gender': 'F',
    'baseStats': {
      'hp': 70,
      'atk': 60,
      'def': 75,
      'spa': 110,
      'spd': 75,
      'spe': 90
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Own Tempo',
      'H': 'Leaf Guard'
    },
    'heightm': 1.1,
    'weightkg': 16.3,
    'color': 'Green',
    'prevo': 'petilil',
    'evoLevel': 1,
    'eggGroups': ['Grass']
  },
  'basculin': {
    'num': 550,
    'species': 'Basculin',
    'baseForme': 'Red-Striped',
    'types': ['Water'],
    'baseStats': {
      'hp': 70,
      'atk': 92,
      'def': 65,
      'spa': 80,
      'spd': 55,
      'spe': 98
    },
    'abilities': {
      '0': 'Reckless',
      '1': 'Adaptability',
      'H': 'Mold Breaker'
    },
    'heightm': 1,
    'weightkg': 18,
    'color': 'Green',
    'eggGroups': ['Water 2'],
    'otherFormes': ['basculinbluestriped']
  },
  'basculinbluestriped': {
    'num': 550,
    'species': 'Basculin-Blue-Striped',
    'baseSpecies': 'Basculin',
    'forme': 'Blue-Striped',
    'formeLetter': 'B',
    'types': ['Water'],
    'baseStats': {
      'hp': 70,
      'atk': 92,
      'def': 65,
      'spa': 80,
      'spd': 55,
      'spe': 98
    },
    'abilities': {
      '0': 'Rock Head',
      '1': 'Adaptability',
      'H': 'Mold Breaker'
    },
    'heightm': 1,
    'weightkg': 18,
    'color': 'Green',
    'eggGroups': ['Water 2']
  },
  'sandile': {
    'num': 551,
    'species': 'Sandile',
    'types': ['Ground', 'Dark'],
    'baseStats': {
      'hp': 50,
      'atk': 72,
      'def': 35,
      'spa': 35,
      'spd': 35,
      'spe': 65
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Moxie',
      'H': 'Anger Point'
    },
    'heightm': 0.7,
    'weightkg': 15.2,
    'color': 'Brown',
    'evos': ['krokorok'],
    'eggGroups': ['Field']
  },
  'krokorok': {
    'num': 552,
    'species': 'Krokorok',
    'types': ['Ground', 'Dark'],
    'baseStats': {
      'hp': 60,
      'atk': 82,
      'def': 45,
      'spa': 45,
      'spd': 45,
      'spe': 74
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Moxie',
      'H': 'Anger Point'
    },
    'heightm': 1,
    'weightkg': 33.4,
    'color': 'Brown',
    'prevo': 'sandile',
    'evos': ['krookodile'],
    'evoLevel': 29,
    'eggGroups': ['Field']
  },
  'krookodile': {
    'num': 553,
    'species': 'Krookodile',
    'types': ['Ground', 'Dark'],
    'baseStats': {
      'hp': 95,
      'atk': 117,
      'def': 80,
      'spa': 65,
      'spd': 70,
      'spe': 92
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Moxie',
      'H': 'Anger Point'
    },
    'heightm': 1.5,
    'weightkg': 96.3,
    'color': 'Red',
    'prevo': 'krokorok',
    'evoLevel': 40,
    'eggGroups': ['Field']
  },
  'darumaka': {
    'num': 554,
    'species': 'Darumaka',
    'types': ['Fire'],
    'baseStats': {
      'hp': 70,
      'atk': 90,
      'def': 45,
      'spa': 15,
      'spd': 45,
      'spe': 50
    },
    'abilities': {
      '0': 'Hustle',
      'H': 'Inner Focus'
    },
    'heightm': 0.6,
    'weightkg': 37.5,
    'color': 'Red',
    'evos': ['darmanitan'],
    'eggGroups': ['Field']
  },
  'darmanitan': {
    'num': 555,
    'species': 'Darmanitan',
    'baseForme': 'Standard',
    'types': ['Fire'],
    'baseStats': {
      'hp': 105,
      'atk': 140,
      'def': 55,
      'spa': 30,
      'spd': 55,
      'spe': 95
    },
    'abilities': {
      '0': 'Sheer Force',
      'H': 'Zen Mode'
    },
    'heightm': 1.3,
    'weightkg': 92.9,
    'color': 'Red',
    'prevo': 'darumaka',
    'evoLevel': 35,
    'eggGroups': ['Field'],
    'otherFormes': ['darmanitanzen']
  },
  'darmanitanzen': {
    'num': 555,
    'species': 'Darmanitan-Zen',
    'baseSpecies': 'Darmanitan',
    'forme': 'Zen',
    'formeLetter': 'Z',
    'types': ['Fire', 'Psychic'],
    'baseStats': {
      'hp': 105,
      'atk': 30,
      'def': 105,
      'spa': 140,
      'spd': 105,
      'spe': 55
    },
    'abilities': {'0': 'Zen Mode'},
    'heightm': 1.3,
    'weightkg': 92.9,
    'color': 'Blue',
    'prevo': 'darumaka',
    'evoLevel': 35,
    'eggGroups': ['Field']
  },
  'maractus': {
    'num': 556,
    'species': 'Maractus',
    'types': ['Grass'],
    'baseStats': {
      'hp': 75,
      'atk': 86,
      'def': 67,
      'spa': 106,
      'spd': 67,
      'spe': 60
    },
    'abilities': {
      '0': 'Water Absorb',
      '1': 'Chlorophyll',
      'H': 'Storm Drain'
    },
    'heightm': 1,
    'weightkg': 28,
    'color': 'Green',
    'eggGroups': ['Grass']
  },
  'dwebble': {
    'num': 557,
    'species': 'Dwebble',
    'types': ['Bug', 'Rock'],
    'baseStats': {
      'hp': 50,
      'atk': 65,
      'def': 85,
      'spa': 35,
      'spd': 35,
      'spe': 55
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Shell Armor',
      'H': 'Weak Armor'
    },
    'heightm': 0.3,
    'weightkg': 14.5,
    'color': 'Red',
    'evos': ['crustle'],
    'eggGroups': ['Bug', 'Mineral']
  },
  'crustle': {
    'num': 558,
    'species': 'Crustle',
    'types': ['Bug', 'Rock'],
    'baseStats': {
      'hp': 70,
      'atk': 105,
      'def': 125,
      'spa': 65,
      'spd': 75,
      'spe': 45
    },
    'abilities': {
      '0': 'Sturdy',
      '1': 'Shell Armor',
      'H': 'Weak Armor'
    },
    'heightm': 1.4,
    'weightkg': 200,
    'color': 'Red',
    'prevo': 'dwebble',
    'evoLevel': 34,
    'eggGroups': ['Bug', 'Mineral']
  },
  'scraggy': {
    'num': 559,
    'species': 'Scraggy',
    'types': ['Dark', 'Fighting'],
    'baseStats': {
      'hp': 50,
      'atk': 75,
      'def': 70,
      'spa': 35,
      'spd': 70,
      'spe': 48
    },
    'abilities': {
      '0': 'Shed Skin',
      '1': 'Moxie',
      'H': 'Intimidate'
    },
    'heightm': 0.6,
    'weightkg': 11.8,
    'color': 'Yellow',
    'evos': ['scrafty'],
    'eggGroups': ['Field', 'Dragon']
  },
  'scrafty': {
    'num': 560,
    'species': 'Scrafty',
    'types': ['Dark', 'Fighting'],
    'baseStats': {
      'hp': 65,
      'atk': 90,
      'def': 115,
      'spa': 45,
      'spd': 115,
      'spe': 58
    },
    'abilities': {
      '0': 'Shed Skin',
      '1': 'Moxie',
      'H': 'Intimidate'
    },
    'heightm': 1.1,
    'weightkg': 30,
    'color': 'Red',
    'prevo': 'scraggy',
    'evoLevel': 39,
    'eggGroups': ['Field', 'Dragon']
  },
  'sigilyph': {
    'num': 561,
    'species': 'Sigilyph',
    'types': ['Psychic', 'Flying'],
    'baseStats': {
      'hp': 72,
      'atk': 58,
      'def': 80,
      'spa': 103,
      'spd': 80,
      'spe': 97
    },
    'abilities': {
      '0': 'Wonder Skin',
      '1': 'Magic Guard',
      'H': 'Tinted Lens'
    },
    'heightm': 1.4,
    'weightkg': 14,
    'color': 'Black',
    'eggGroups': ['Flying']
  },
  'yamask': {
    'num': 562,
    'species': 'Yamask',
    'types': ['Ghost'],
    'baseStats': {
      'hp': 38,
      'atk': 30,
      'def': 85,
      'spa': 55,
      'spd': 65,
      'spe': 30
    },
    'abilities': {'0': 'Mummy'},
    'heightm': 0.5,
    'weightkg': 1.5,
    'color': 'Black',
    'evos': ['cofagrigus'],
    'eggGroups': ['Mineral', 'Amorphous']
  },
  'cofagrigus': {
    'num': 563,
    'species': 'Cofagrigus',
    'types': ['Ghost'],
    'baseStats': {
      'hp': 58,
      'atk': 50,
      'def': 145,
      'spa': 95,
      'spd': 105,
      'spe': 30
    },
    'abilities': {'0': 'Mummy'},
    'heightm': 1.7,
    'weightkg': 76.5,
    'color': 'Yellow',
    'prevo': 'yamask',
    'evoLevel': 34,
    'eggGroups': ['Mineral', 'Amorphous']
  },
  'tirtouga': {
    'num': 564,
    'species': 'Tirtouga',
    'types': ['Water', 'Rock'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 54,
      'atk': 78,
      'def': 103,
      'spa': 53,
      'spd': 45,
      'spe': 22
    },
    'abilities': {
      '0': 'Solid Rock',
      '1': 'Sturdy',
      'H': 'Swift Swim'
    },
    'heightm': 0.7,
    'weightkg': 16.5,
    'color': 'Blue',
    'evos': ['carracosta'],
    'eggGroups': ['Water 1', 'Water 3']
  },
  'carracosta': {
    'num': 565,
    'species': 'Carracosta',
    'types': ['Water', 'Rock'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 74,
      'atk': 108,
      'def': 133,
      'spa': 83,
      'spd': 65,
      'spe': 32
    },
    'abilities': {
      '0': 'Solid Rock',
      '1': 'Sturdy',
      'H': 'Swift Swim'
    },
    'heightm': 1.2,
    'weightkg': 81,
    'color': 'Blue',
    'prevo': 'tirtouga',
    'evoLevel': 37,
    'eggGroups': ['Water 1', 'Water 3']
  },
  'archen': {
    'num': 566,
    'species': 'Archen',
    'types': ['Rock', 'Flying'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 55,
      'atk': 112,
      'def': 45,
      'spa': 74,
      'spd': 45,
      'spe': 70
    },
    'abilities': {'0': 'Defeatist'},
    'heightm': 0.5,
    'weightkg': 9.5,
    'color': 'Yellow',
    'evos': ['archeops'],
    'eggGroups': ['Flying', 'Water 3']
  },
  'archeops': {
    'num': 567,
    'species': 'Archeops',
    'types': ['Rock', 'Flying'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 75,
      'atk': 140,
      'def': 65,
      'spa': 112,
      'spd': 65,
      'spe': 110
    },
    'abilities': {'0': 'Defeatist'},
    'heightm': 1.4,
    'weightkg': 32,
    'color': 'Yellow',
    'prevo': 'archen',
    'evoLevel': 37,
    'eggGroups': ['Flying', 'Water 3']
  },
  'trubbish': {
    'num': 568,
    'species': 'Trubbish',
    'types': ['Poison'],
    'baseStats': {
      'hp': 50,
      'atk': 50,
      'def': 62,
      'spa': 40,
      'spd': 62,
      'spe': 65
    },
    'abilities': {
      '0': 'Stench',
      '1': 'Sticky Hold',
      'H': 'Aftermath'
    },
    'heightm': 0.6,
    'weightkg': 31,
    'color': 'Green',
    'evos': ['garbodor'],
    'eggGroups': ['Mineral']
  },
  'garbodor': {
    'num': 569,
    'species': 'Garbodor',
    'types': ['Poison'],
    'baseStats': {
      'hp': 80,
      'atk': 95,
      'def': 82,
      'spa': 60,
      'spd': 82,
      'spe': 75
    },
    'abilities': {
      '0': 'Stench',
      '1': 'Weak Armor',
      'H': 'Aftermath'
    },
    'heightm': 1.9,
    'weightkg': 107.3,
    'color': 'Green',
    'prevo': 'trubbish',
    'evoLevel': 36,
    'eggGroups': ['Mineral']
  },
  'zorua': {
    'num': 570,
    'species': 'Zorua',
    'types': ['Dark'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 40,
      'atk': 65,
      'def': 40,
      'spa': 80,
      'spd': 40,
      'spe': 65
    },
    'abilities': {'0': 'Illusion'},
    'heightm': 0.7,
    'weightkg': 12.5,
    'color': 'Gray',
    'evos': ['zoroark'],
    'eggGroups': ['Field']
  },
  'zoroark': {
    'num': 571,
    'species': 'Zoroark',
    'types': ['Dark'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 60,
      'atk': 105,
      'def': 60,
      'spa': 120,
      'spd': 60,
      'spe': 105
    },
    'abilities': {'0': 'Illusion'},
    'heightm': 1.6,
    'weightkg': 81.1,
    'color': 'Gray',
    'prevo': 'zorua',
    'evoLevel': 30,
    'eggGroups': ['Field']
  },
  'minccino': {
    'num': 572,
    'species': 'Minccino',
    'types': ['Normal'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 55,
      'atk': 50,
      'def': 40,
      'spa': 40,
      'spd': 40,
      'spe': 75
    },
    'abilities': {
      '0': 'Cute Charm',
      '1': 'Technician',
      'H': 'Skill Link'
    },
    'heightm': 0.4,
    'weightkg': 5.8,
    'color': 'Gray',
    'evos': ['cinccino'],
    'eggGroups': ['Field']
  },
  'cinccino': {
    'num': 573,
    'species': 'Cinccino',
    'types': ['Normal'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 75,
      'atk': 95,
      'def': 60,
      'spa': 65,
      'spd': 60,
      'spe': 115
    },
    'abilities': {
      '0': 'Cute Charm',
      '1': 'Technician',
      'H': 'Skill Link'
    },
    'heightm': 0.5,
    'weightkg': 7.5,
    'color': 'Gray',
    'prevo': 'minccino',
    'evoLevel': 1,
    'eggGroups': ['Field']
  },
  'gothita': {
    'num': 574,
    'species': 'Gothita',
    'types': ['Psychic'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 45,
      'atk': 30,
      'def': 50,
      'spa': 55,
      'spd': 65,
      'spe': 45
    },
    'abilities': {
      '0': 'Frisk',
      '1': 'Competitive',
      'H': 'Shadow Tag'
    },
    'heightm': 0.4,
    'weightkg': 5.8,
    'color': 'Purple',
    'evos': ['gothorita'],
    'eggGroups': ['Human-Like']
  },
  'gothorita': {
    'num': 575,
    'species': 'Gothorita',
    'types': ['Psychic'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 60,
      'atk': 45,
      'def': 70,
      'spa': 75,
      'spd': 85,
      'spe': 55
    },
    'abilities': {
      '0': 'Frisk',
      '1': 'Competitive',
      'H': 'Shadow Tag'
    },
    'heightm': 0.7,
    'weightkg': 18,
    'color': 'Purple',
    'prevo': 'gothita',
    'evos': ['gothitelle'],
    'evoLevel': 32,
    'eggGroups': ['Human-Like']
  },
  'gothitelle': {
    'num': 576,
    'species': 'Gothitelle',
    'types': ['Psychic'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 70,
      'atk': 55,
      'def': 95,
      'spa': 95,
      'spd': 110,
      'spe': 65
    },
    'abilities': {
      '0': 'Frisk',
      '1': 'Competitive',
      'H': 'Shadow Tag'
    },
    'heightm': 1.5,
    'weightkg': 44,
    'color': 'Purple',
    'prevo': 'gothorita',
    'evoLevel': 41,
    'eggGroups': ['Human-Like']
  },
  'solosis': {
    'num': 577,
    'species': 'Solosis',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 45,
      'atk': 30,
      'def': 40,
      'spa': 105,
      'spd': 50,
      'spe': 20
    },
    'abilities': {
      '0': 'Overcoat',
      '1': 'Magic Guard',
      'H': 'Regenerator'
    },
    'heightm': 0.3,
    'weightkg': 1,
    'color': 'Green',
    'evos': ['duosion'],
    'eggGroups': ['Amorphous']
  },
  'duosion': {
    'num': 578,
    'species': 'Duosion',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 65,
      'atk': 40,
      'def': 50,
      'spa': 125,
      'spd': 60,
      'spe': 30
    },
    'abilities': {
      '0': 'Overcoat',
      '1': 'Magic Guard',
      'H': 'Regenerator'
    },
    'heightm': 0.6,
    'weightkg': 8,
    'color': 'Green',
    'prevo': 'solosis',
    'evos': ['reuniclus'],
    'evoLevel': 32,
    'eggGroups': ['Amorphous']
  },
  'reuniclus': {
    'num': 579,
    'species': 'Reuniclus',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 110,
      'atk': 65,
      'def': 75,
      'spa': 125,
      'spd': 85,
      'spe': 30
    },
    'abilities': {
      '0': 'Overcoat',
      '1': 'Magic Guard',
      'H': 'Regenerator'
    },
    'heightm': 1,
    'weightkg': 20.1,
    'color': 'Green',
    'prevo': 'duosion',
    'evoLevel': 41,
    'eggGroups': ['Amorphous']
  },
  'ducklett': {
    'num': 580,
    'species': 'Ducklett',
    'types': ['Water', 'Flying'],
    'baseStats': {
      'hp': 62,
      'atk': 44,
      'def': 50,
      'spa': 44,
      'spd': 50,
      'spe': 55
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Big Pecks',
      'H': 'Hydration'
    },
    'heightm': 0.5,
    'weightkg': 5.5,
    'color': 'Blue',
    'evos': ['swanna'],
    'eggGroups': ['Water 1', 'Flying']
  },
  'swanna': {
    'num': 581,
    'species': 'Swanna',
    'types': ['Water', 'Flying'],
    'baseStats': {
      'hp': 75,
      'atk': 87,
      'def': 63,
      'spa': 87,
      'spd': 63,
      'spe': 98
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Big Pecks',
      'H': 'Hydration'
    },
    'heightm': 1.3,
    'weightkg': 24.2,
    'color': 'White',
    'prevo': 'ducklett',
    'evoLevel': 35,
    'eggGroups': ['Water 1', 'Flying']
  },
  'vanillite': {
    'num': 582,
    'species': 'Vanillite',
    'types': ['Ice'],
    'baseStats': {
      'hp': 36,
      'atk': 50,
      'def': 50,
      'spa': 65,
      'spd': 60,
      'spe': 44
    },
    'abilities': {
      '0': 'Ice Body',
      '1': 'Snow Cloak',
      'H': 'Weak Armor'
    },
    'heightm': 0.4,
    'weightkg': 5.7,
    'color': 'White',
    'evos': ['vanillish'],
    'eggGroups': ['Mineral']
  },
  'vanillish': {
    'num': 583,
    'species': 'Vanillish',
    'types': ['Ice'],
    'baseStats': {
      'hp': 51,
      'atk': 65,
      'def': 65,
      'spa': 80,
      'spd': 75,
      'spe': 59
    },
    'abilities': {
      '0': 'Ice Body',
      '1': 'Snow Cloak',
      'H': 'Weak Armor'
    },
    'heightm': 1.1,
    'weightkg': 41,
    'color': 'White',
    'prevo': 'vanillite',
    'evos': ['vanilluxe'],
    'evoLevel': 35,
    'eggGroups': ['Mineral']
  },
  'vanilluxe': {
    'num': 584,
    'species': 'Vanilluxe',
    'types': ['Ice'],
    'baseStats': {
      'hp': 71,
      'atk': 95,
      'def': 85,
      'spa': 110,
      'spd': 95,
      'spe': 79
    },
    'abilities': {
      '0': 'Ice Body',
      '1': 'Snow Warning',
      'H': 'Weak Armor'
    },
    'heightm': 1.3,
    'weightkg': 57.5,
    'color': 'White',
    'prevo': 'vanillish',
    'evoLevel': 47,
    'eggGroups': ['Mineral']
  },
  'deerling': {
    'num': 585,
    'species': 'Deerling',
    'baseForme': 'Spring',
    'types': ['Normal', 'Grass'],
    'baseStats': {
      'hp': 60,
      'atk': 60,
      'def': 50,
      'spa': 40,
      'spd': 50,
      'spe': 75
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Sap Sipper',
      'H': 'Serene Grace'
    },
    'heightm': 0.6,
    'weightkg': 19.5,
    'color': 'Pink',
    'evos': ['sawsbuck'],
    'eggGroups': ['Field'],
    'otherForms': ['deerlingsummer', 'deerlingautumn', 'deerlingwinter']
  },
  'sawsbuck': {
    'num': 586,
    'species': 'Sawsbuck',
    'baseForme': 'Spring',
    'types': ['Normal', 'Grass'],
    'baseStats': {
      'hp': 80,
      'atk': 100,
      'def': 70,
      'spa': 60,
      'spd': 70,
      'spe': 95
    },
    'abilities': {
      '0': 'Chlorophyll',
      '1': 'Sap Sipper',
      'H': 'Serene Grace'
    },
    'heightm': 1.9,
    'weightkg': 92.5,
    'color': 'Brown',
    'prevo': 'deerling',
    'evoLevel': 34,
    'eggGroups': ['Field'],
    'otherForms': ['sawsbucksummer', 'sawsbuckautumn', 'sawsbuckwinter']
  },
  'emolga': {
    'num': 587,
    'species': 'Emolga',
    'types': ['Electric', 'Flying'],
    'baseStats': {
      'hp': 55,
      'atk': 75,
      'def': 60,
      'spa': 75,
      'spd': 60,
      'spe': 103
    },
    'abilities': {
      '0': 'Static',
      'H': 'Motor Drive'
    },
    'heightm': 0.4,
    'weightkg': 5,
    'color': 'White',
    'eggGroups': ['Field']
  },
  'karrablast': {
    'num': 588,
    'species': 'Karrablast',
    'types': ['Bug'],
    'baseStats': {
      'hp': 50,
      'atk': 75,
      'def': 45,
      'spa': 40,
      'spd': 45,
      'spe': 60
    },
    'abilities': {
      '0': 'Swarm',
      '1': 'Shed Skin',
      'H': 'No Guard'
    },
    'heightm': 0.5,
    'weightkg': 5.9,
    'color': 'Blue',
    'evos': ['escavalier'],
    'eggGroups': ['Bug']
  },
  'escavalier': {
    'num': 589,
    'species': 'Escavalier',
    'types': ['Bug', 'Steel'],
    'baseStats': {
      'hp': 70,
      'atk': 135,
      'def': 105,
      'spa': 60,
      'spd': 105,
      'spe': 20
    },
    'abilities': {
      '0': 'Swarm',
      '1': 'Shell Armor',
      'H': 'Overcoat'
    },
    'heightm': 1,
    'weightkg': 33,
    'color': 'Gray',
    'prevo': 'karrablast',
    'evoLevel': 1,
    'eggGroups': ['Bug']
  },
  'foongus': {
    'num': 590,
    'species': 'Foongus',
    'types': ['Grass', 'Poison'],
    'baseStats': {
      'hp': 69,
      'atk': 55,
      'def': 45,
      'spa': 55,
      'spd': 55,
      'spe': 15
    },
    'abilities': {
      '0': 'Effect Spore',
      'H': 'Regenerator'
    },
    'heightm': 0.2,
    'weightkg': 1,
    'color': 'White',
    'evos': ['amoonguss'],
    'eggGroups': ['Grass']
  },
  'amoonguss': {
    'num': 591,
    'species': 'Amoonguss',
    'types': ['Grass', 'Poison'],
    'baseStats': {
      'hp': 114,
      'atk': 85,
      'def': 70,
      'spa': 85,
      'spd': 80,
      'spe': 30
    },
    'abilities': {
      '0': 'Effect Spore',
      'H': 'Regenerator'
    },
    'heightm': 0.6,
    'weightkg': 10.5,
    'color': 'White',
    'prevo': 'foongus',
    'evoLevel': 39,
    'eggGroups': ['Grass']
  },
  'frillish': {
    'num': 592,
    'species': 'Frillish',
    'types': ['Water', 'Ghost'],
    'baseStats': {
      'hp': 55,
      'atk': 40,
      'def': 50,
      'spa': 65,
      'spd': 85,
      'spe': 40
    },
    'abilities': {
      '0': 'Water Absorb',
      '1': 'Cursed Body',
      'H': 'Damp'
    },
    'heightm': 1.2,
    'weightkg': 33,
    'color': 'White',
    'evos': ['jellicent'],
    'eggGroups': ['Amorphous']
  },
  'jellicent': {
    'num': 593,
    'species': 'Jellicent',
    'types': ['Water', 'Ghost'],
    'baseStats': {
      'hp': 100,
      'atk': 60,
      'def': 70,
      'spa': 85,
      'spd': 105,
      'spe': 60
    },
    'abilities': {
      '0': 'Water Absorb',
      '1': 'Cursed Body',
      'H': 'Damp'
    },
    'heightm': 2.2,
    'weightkg': 135,
    'color': 'White',
    'prevo': 'frillish',
    'evoLevel': 40,
    'eggGroups': ['Amorphous']
  },
  'alomomola': {
    'num': 594,
    'species': 'Alomomola',
    'types': ['Water'],
    'baseStats': {
      'hp': 165,
      'atk': 75,
      'def': 80,
      'spa': 40,
      'spd': 45,
      'spe': 65
    },
    'abilities': {
      '0': 'Healer',
      '1': 'Hydration',
      'H': 'Regenerator'
    },
    'heightm': 1.2,
    'weightkg': 31.6,
    'color': 'Pink',
    'eggGroups': ['Water 1', 'Water 2']
  },
  'joltik': {
    'num': 595,
    'species': 'Joltik',
    'types': ['Bug', 'Electric'],
    'baseStats': {
      'hp': 50,
      'atk': 47,
      'def': 50,
      'spa': 57,
      'spd': 50,
      'spe': 65
    },
    'abilities': {
      '0': 'Compound Eyes',
      '1': 'Unnerve',
      'H': 'Swarm'
    },
    'heightm': 0.1,
    'weightkg': 0.6,
    'color': 'Yellow',
    'evos': ['galvantula'],
    'eggGroups': ['Bug']
  },
  'galvantula': {
    'num': 596,
    'species': 'Galvantula',
    'types': ['Bug', 'Electric'],
    'baseStats': {
      'hp': 70,
      'atk': 77,
      'def': 60,
      'spa': 97,
      'spd': 60,
      'spe': 108
    },
    'abilities': {
      '0': 'Compound Eyes',
      '1': 'Unnerve',
      'H': 'Swarm'
    },
    'heightm': 0.8,
    'weightkg': 14.3,
    'color': 'Yellow',
    'prevo': 'joltik',
    'evoLevel': 36,
    'eggGroups': ['Bug']
  },
  'ferroseed': {
    'num': 597,
    'species': 'Ferroseed',
    'types': ['Grass', 'Steel'],
    'baseStats': {
      'hp': 44,
      'atk': 50,
      'def': 91,
      'spa': 24,
      'spd': 86,
      'spe': 10
    },
    'abilities': {'0': 'Iron Barbs'},
    'heightm': 0.6,
    'weightkg': 18.8,
    'color': 'Gray',
    'evos': ['ferrothorn'],
    'eggGroups': ['Grass', 'Mineral']
  },
  'ferrothorn': {
    'num': 598,
    'species': 'Ferrothorn',
    'types': ['Grass', 'Steel'],
    'baseStats': {
      'hp': 74,
      'atk': 94,
      'def': 131,
      'spa': 54,
      'spd': 116,
      'spe': 20
    },
    'abilities': {
      '0': 'Iron Barbs',
      'H': 'Anticipation'
    },
    'heightm': 1,
    'weightkg': 110,
    'color': 'Gray',
    'prevo': 'ferroseed',
    'evoLevel': 40,
    'eggGroups': ['Grass', 'Mineral']
  },
  'klink': {
    'num': 599,
    'species': 'Klink',
    'types': ['Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 40,
      'atk': 55,
      'def': 70,
      'spa': 45,
      'spd': 60,
      'spe': 30
    },
    'abilities': {
      '0': 'Plus',
      '1': 'Minus',
      'H': 'Clear Body'
    },
    'heightm': 0.3,
    'weightkg': 21,
    'color': 'Gray',
    'evos': ['klang'],
    'eggGroups': ['Mineral']
  },
  'klang': {
    'num': 600,
    'species': 'Klang',
    'types': ['Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 60,
      'atk': 80,
      'def': 95,
      'spa': 70,
      'spd': 85,
      'spe': 50
    },
    'abilities': {
      '0': 'Plus',
      '1': 'Minus',
      'H': 'Clear Body'
    },
    'heightm': 0.6,
    'weightkg': 51,
    'color': 'Gray',
    'prevo': 'klink',
    'evos': ['klinklang'],
    'evoLevel': 38,
    'eggGroups': ['Mineral']
  },
  'klinklang': {
    'num': 601,
    'species': 'Klinklang',
    'types': ['Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 60,
      'atk': 100,
      'def': 115,
      'spa': 70,
      'spd': 85,
      'spe': 90
    },
    'abilities': {
      '0': 'Plus',
      '1': 'Minus',
      'H': 'Clear Body'
    },
    'heightm': 0.6,
    'weightkg': 81,
    'color': 'Gray',
    'prevo': 'klang',
    'evoLevel': 49,
    'eggGroups': ['Mineral']
  },
  'tynamo': {
    'num': 602,
    'species': 'Tynamo',
    'types': ['Electric'],
    'baseStats': {
      'hp': 35,
      'atk': 55,
      'def': 40,
      'spa': 45,
      'spd': 40,
      'spe': 60
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 0.2,
    'weightkg': 0.3,
    'color': 'White',
    'evos': ['eelektrik'],
    'eggGroups': ['Amorphous']
  },
  'eelektrik': {
    'num': 603,
    'species': 'Eelektrik',
    'types': ['Electric'],
    'baseStats': {
      'hp': 65,
      'atk': 85,
      'def': 70,
      'spa': 75,
      'spd': 70,
      'spe': 40
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.2,
    'weightkg': 22,
    'color': 'Blue',
    'prevo': 'tynamo',
    'evos': ['eelektross'],
    'evoLevel': 39,
    'eggGroups': ['Amorphous']
  },
  'eelektross': {
    'num': 604,
    'species': 'Eelektross',
    'types': ['Electric'],
    'baseStats': {
      'hp': 85,
      'atk': 115,
      'def': 80,
      'spa': 105,
      'spd': 80,
      'spe': 50
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 2.1,
    'weightkg': 80.5,
    'color': 'Blue',
    'prevo': 'eelektrik',
    'evoLevel': 39,
    'eggGroups': ['Amorphous']
  },
  'elgyem': {
    'num': 605,
    'species': 'Elgyem',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 55,
      'atk': 55,
      'def': 55,
      'spa': 85,
      'spd': 55,
      'spe': 30
    },
    'abilities': {
      '0': 'Telepathy',
      '1': 'Synchronize',
      'H': 'Analytic'
    },
    'heightm': 0.5,
    'weightkg': 9,
    'color': 'Blue',
    'evos': ['beheeyem'],
    'eggGroups': ['Human-Like']
  },
  'beheeyem': {
    'num': 606,
    'species': 'Beheeyem',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 75,
      'atk': 75,
      'def': 75,
      'spa': 125,
      'spd': 95,
      'spe': 40
    },
    'abilities': {
      '0': 'Telepathy',
      '1': 'Synchronize',
      'H': 'Analytic'
    },
    'heightm': 1,
    'weightkg': 34.5,
    'color': 'Brown',
    'prevo': 'elgyem',
    'evoLevel': 42,
    'eggGroups': ['Human-Like']
  },
  'litwick': {
    'num': 607,
    'species': 'Litwick',
    'types': ['Ghost', 'Fire'],
    'baseStats': {
      'hp': 50,
      'atk': 30,
      'def': 55,
      'spa': 65,
      'spd': 55,
      'spe': 20
    },
    'abilities': {
      '0': 'Flash Fire',
      '1': 'Flame Body',
      'H': 'Infiltrator'
    },
    'heightm': 0.3,
    'weightkg': 3.1,
    'color': 'White',
    'evos': ['lampent'],
    'eggGroups': ['Amorphous']
  },
  'lampent': {
    'num': 608,
    'species': 'Lampent',
    'types': ['Ghost', 'Fire'],
    'baseStats': {
      'hp': 60,
      'atk': 40,
      'def': 60,
      'spa': 95,
      'spd': 60,
      'spe': 55
    },
    'abilities': {
      '0': 'Flash Fire',
      '1': 'Flame Body',
      'H': 'Infiltrator'
    },
    'heightm': 0.6,
    'weightkg': 13,
    'color': 'Black',
    'prevo': 'litwick',
    'evos': ['chandelure'],
    'evoLevel': 41,
    'eggGroups': ['Amorphous']
  },
  'chandelure': {
    'num': 609,
    'species': 'Chandelure',
    'types': ['Ghost', 'Fire'],
    'baseStats': {
      'hp': 60,
      'atk': 55,
      'def': 90,
      'spa': 145,
      'spd': 90,
      'spe': 80
    },
    'abilities': {
      '0': 'Flash Fire',
      '1': 'Flame Body',
      'H': 'Infiltrator'
    },
    'heightm': 1,
    'weightkg': 34.3,
    'color': 'Black',
    'prevo': 'lampent',
    'evoLevel': 41,
    'eggGroups': ['Amorphous']
  },
  'axew': {
    'num': 610,
    'species': 'Axew',
    'types': ['Dragon'],
    'baseStats': {
      'hp': 46,
      'atk': 87,
      'def': 60,
      'spa': 30,
      'spd': 40,
      'spe': 57
    },
    'abilities': {
      '0': 'Rivalry',
      '1': 'Mold Breaker',
      'H': 'Unnerve'
    },
    'heightm': 0.6,
    'weightkg': 18,
    'color': 'Green',
    'evos': ['fraxure'],
    'eggGroups': ['Monster', 'Dragon']
  },
  'fraxure': {
    'num': 611,
    'species': 'Fraxure',
    'types': ['Dragon'],
    'baseStats': {
      'hp': 66,
      'atk': 117,
      'def': 70,
      'spa': 40,
      'spd': 50,
      'spe': 67
    },
    'abilities': {
      '0': 'Rivalry',
      '1': 'Mold Breaker',
      'H': 'Unnerve'
    },
    'heightm': 1,
    'weightkg': 36,
    'color': 'Green',
    'prevo': 'axew',
    'evos': ['haxorus'],
    'evoLevel': 38,
    'eggGroups': ['Monster', 'Dragon']
  },
  'haxorus': {
    'num': 612,
    'species': 'Haxorus',
    'types': ['Dragon'],
    'baseStats': {
      'hp': 76,
      'atk': 147,
      'def': 90,
      'spa': 60,
      'spd': 70,
      'spe': 97
    },
    'abilities': {
      '0': 'Rivalry',
      '1': 'Mold Breaker',
      'H': 'Unnerve'
    },
    'heightm': 1.8,
    'weightkg': 105.5,
    'color': 'Yellow',
    'prevo': 'fraxure',
    'evoLevel': 48,
    'eggGroups': ['Monster', 'Dragon']
  },
  'cubchoo': {
    'num': 613,
    'species': 'Cubchoo',
    'types': ['Ice'],
    'baseStats': {
      'hp': 55,
      'atk': 70,
      'def': 40,
      'spa': 60,
      'spd': 40,
      'spe': 40
    },
    'abilities': {
      '0': 'Snow Cloak',
      '1': 'Slush Rush',
      'H': 'Rattled'
    },
    'heightm': 0.5,
    'weightkg': 8.5,
    'color': 'White',
    'evos': ['beartic'],
    'eggGroups': ['Field']
  },
  'beartic': {
    'num': 614,
    'species': 'Beartic',
    'types': ['Ice'],
    'baseStats': {
      'hp': 95,
      'atk': 130,
      'def': 80,
      'spa': 70,
      'spd': 80,
      'spe': 50
    },
    'abilities': {
      '0': 'Snow Cloak',
      '1': 'Slush Rush',
      'H': 'Swift Swim'
    },
    'heightm': 2.6,
    'weightkg': 260,
    'color': 'White',
    'prevo': 'cubchoo',
    'evoLevel': 37,
    'eggGroups': ['Field']
  },
  'cryogonal': {
    'num': 615,
    'species': 'Cryogonal',
    'types': ['Ice'],
    'gender': 'N',
    'baseStats': {
      'hp': 80,
      'atk': 50,
      'def': 50,
      'spa': 95,
      'spd': 135,
      'spe': 105
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.1,
    'weightkg': 148,
    'color': 'Blue',
    'eggGroups': ['Mineral']
  },
  'shelmet': {
    'num': 616,
    'species': 'Shelmet',
    'types': ['Bug'],
    'baseStats': {
      'hp': 50,
      'atk': 40,
      'def': 85,
      'spa': 40,
      'spd': 65,
      'spe': 25
    },
    'abilities': {
      '0': 'Hydration',
      '1': 'Shell Armor',
      'H': 'Overcoat'
    },
    'heightm': 0.4,
    'weightkg': 7.7,
    'color': 'Red',
    'evos': ['accelgor'],
    'eggGroups': ['Bug']
  },
  'accelgor': {
    'num': 617,
    'species': 'Accelgor',
    'types': ['Bug'],
    'baseStats': {
      'hp': 80,
      'atk': 70,
      'def': 40,
      'spa': 100,
      'spd': 60,
      'spe': 145
    },
    'abilities': {
      '0': 'Hydration',
      '1': 'Sticky Hold',
      'H': 'Unburden'
    },
    'heightm': 0.8,
    'weightkg': 25.3,
    'color': 'Red',
    'prevo': 'shelmet',
    'evoLevel': 1,
    'eggGroups': ['Bug']
  },
  'stunfisk': {
    'num': 618,
    'species': 'Stunfisk',
    'types': ['Ground', 'Electric'],
    'baseStats': {
      'hp': 109,
      'atk': 66,
      'def': 84,
      'spa': 81,
      'spd': 99,
      'spe': 32
    },
    'abilities': {
      '0': 'Static',
      '1': 'Limber',
      'H': 'Sand Veil'
    },
    'heightm': 0.7,
    'weightkg': 11,
    'color': 'Brown',
    'eggGroups': ['Water 1', 'Amorphous']
  },
  'mienfoo': {
    'num': 619,
    'species': 'Mienfoo',
    'types': ['Fighting'],
    'baseStats': {
      'hp': 45,
      'atk': 85,
      'def': 50,
      'spa': 55,
      'spd': 50,
      'spe': 65
    },
    'abilities': {
      '0': 'Inner Focus',
      '1': 'Regenerator',
      'H': 'Reckless'
    },
    'heightm': 0.9,
    'weightkg': 20,
    'color': 'Yellow',
    'evos': ['mienshao'],
    'eggGroups': ['Field', 'Human-Like']
  },
  'mienshao': {
    'num': 620,
    'species': 'Mienshao',
    'types': ['Fighting'],
    'baseStats': {
      'hp': 65,
      'atk': 125,
      'def': 60,
      'spa': 95,
      'spd': 60,
      'spe': 105
    },
    'abilities': {
      '0': 'Inner Focus',
      '1': 'Regenerator',
      'H': 'Reckless'
    },
    'heightm': 1.4,
    'weightkg': 35.5,
    'color': 'Purple',
    'prevo': 'mienfoo',
    'evoLevel': 50,
    'eggGroups': ['Field', 'Human-Like']
  },
  'druddigon': {
    'num': 621,
    'species': 'Druddigon',
    'types': ['Dragon'],
    'baseStats': {
      'hp': 77,
      'atk': 120,
      'def': 90,
      'spa': 60,
      'spd': 90,
      'spe': 48
    },
    'abilities': {
      '0': 'Rough Skin',
      '1': 'Sheer Force',
      'H': 'Mold Breaker'
    },
    'heightm': 1.6,
    'weightkg': 139,
    'color': 'Red',
    'eggGroups': ['Monster', 'Dragon']
  },
  'golett': {
    'num': 622,
    'species': 'Golett',
    'types': ['Ground', 'Ghost'],
    'gender': 'N',
    'baseStats': {
      'hp': 59,
      'atk': 74,
      'def': 50,
      'spa': 35,
      'spd': 50,
      'spe': 35
    },
    'abilities': {
      '0': 'Iron Fist',
      '1': 'Klutz',
      'H': 'No Guard'
    },
    'heightm': 1,
    'weightkg': 92,
    'color': 'Green',
    'evos': ['golurk'],
    'eggGroups': ['Mineral']
  },
  'golurk': {
    'num': 623,
    'species': 'Golurk',
    'types': ['Ground', 'Ghost'],
    'gender': 'N',
    'baseStats': {
      'hp': 89,
      'atk': 124,
      'def': 80,
      'spa': 55,
      'spd': 80,
      'spe': 55
    },
    'abilities': {
      '0': 'Iron Fist',
      '1': 'Klutz',
      'H': 'No Guard'
    },
    'heightm': 2.8,
    'weightkg': 330,
    'color': 'Green',
    'prevo': 'golett',
    'evoLevel': 43,
    'eggGroups': ['Mineral']
  },
  'pawniard': {
    'num': 624,
    'species': 'Pawniard',
    'types': ['Dark', 'Steel'],
    'baseStats': {
      'hp': 45,
      'atk': 85,
      'def': 70,
      'spa': 40,
      'spd': 40,
      'spe': 60
    },
    'abilities': {
      '0': 'Defiant',
      '1': 'Inner Focus',
      'H': 'Pressure'
    },
    'heightm': 0.5,
    'weightkg': 10.2,
    'color': 'Red',
    'evos': ['bisharp'],
    'eggGroups': ['Human-Like']
  },
  'bisharp': {
    'num': 625,
    'species': 'Bisharp',
    'types': ['Dark', 'Steel'],
    'baseStats': {
      'hp': 65,
      'atk': 125,
      'def': 100,
      'spa': 60,
      'spd': 70,
      'spe': 70
    },
    'abilities': {
      '0': 'Defiant',
      '1': 'Inner Focus',
      'H': 'Pressure'
    },
    'heightm': 1.6,
    'weightkg': 70,
    'color': 'Red',
    'prevo': 'pawniard',
    'evoLevel': 52,
    'eggGroups': ['Human-Like']
  },
  'bouffalant': {
    'num': 626,
    'species': 'Bouffalant',
    'types': ['Normal'],
    'baseStats': {
      'hp': 95,
      'atk': 110,
      'def': 95,
      'spa': 40,
      'spd': 95,
      'spe': 55
    },
    'abilities': {
      '0': 'Reckless',
      '1': 'Sap Sipper',
      'H': 'Soundproof'
    },
    'heightm': 1.6,
    'weightkg': 94.6,
    'color': 'Brown',
    'eggGroups': ['Field']
  },
  'rufflet': {
    'num': 627,
    'species': 'Rufflet',
    'types': ['Normal', 'Flying'],
    'gender': 'M',
    'baseStats': {
      'hp': 70,
      'atk': 83,
      'def': 50,
      'spa': 37,
      'spd': 50,
      'spe': 60
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Sheer Force',
      'H': 'Hustle'
    },
    'heightm': 0.5,
    'weightkg': 10.5,
    'color': 'White',
    'evos': ['braviary'],
    'eggGroups': ['Flying']
  },
  'braviary': {
    'num': 628,
    'species': 'Braviary',
    'types': ['Normal', 'Flying'],
    'gender': 'M',
    'baseStats': {
      'hp': 100,
      'atk': 123,
      'def': 75,
      'spa': 57,
      'spd': 75,
      'spe': 80
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Sheer Force',
      'H': 'Defiant'
    },
    'heightm': 1.5,
    'weightkg': 41,
    'color': 'Red',
    'prevo': 'rufflet',
    'evoLevel': 54,
    'eggGroups': ['Flying']
  },
  'vullaby': {
    'num': 629,
    'species': 'Vullaby',
    'types': ['Dark', 'Flying'],
    'gender': 'F',
    'baseStats': {
      'hp': 70,
      'atk': 55,
      'def': 75,
      'spa': 45,
      'spd': 65,
      'spe': 60
    },
    'abilities': {
      '0': 'Big Pecks',
      '1': 'Overcoat',
      'H': 'Weak Armor'
    },
    'heightm': 0.5,
    'weightkg': 9,
    'color': 'Brown',
    'evos': ['mandibuzz'],
    'eggGroups': ['Flying']
  },
  'mandibuzz': {
    'num': 630,
    'species': 'Mandibuzz',
    'types': ['Dark', 'Flying'],
    'gender': 'F',
    'baseStats': {
      'hp': 110,
      'atk': 65,
      'def': 105,
      'spa': 55,
      'spd': 95,
      'spe': 80
    },
    'abilities': {
      '0': 'Big Pecks',
      '1': 'Overcoat',
      'H': 'Weak Armor'
    },
    'heightm': 1.2,
    'weightkg': 39.5,
    'color': 'Brown',
    'prevo': 'vullaby',
    'evoLevel': 54,
    'eggGroups': ['Flying']
  },
  'heatmor': {
    'num': 631,
    'species': 'Heatmor',
    'types': ['Fire'],
    'baseStats': {
      'hp': 85,
      'atk': 97,
      'def': 66,
      'spa': 105,
      'spd': 66,
      'spe': 65
    },
    'abilities': {
      '0': 'Gluttony',
      '1': 'Flash Fire',
      'H': 'White Smoke'
    },
    'heightm': 1.4,
    'weightkg': 58,
    'color': 'Red',
    'eggGroups': ['Field']
  },
  'durant': {
    'num': 632,
    'species': 'Durant',
    'types': ['Bug', 'Steel'],
    'baseStats': {
      'hp': 58,
      'atk': 109,
      'def': 112,
      'spa': 48,
      'spd': 48,
      'spe': 109
    },
    'abilities': {
      '0': 'Swarm',
      '1': 'Hustle',
      'H': 'Truant'
    },
    'heightm': 0.3,
    'weightkg': 33,
    'color': 'Gray',
    'eggGroups': ['Bug']
  },
  'deino': {
    'num': 633,
    'species': 'Deino',
    'types': ['Dark', 'Dragon'],
    'baseStats': {
      'hp': 52,
      'atk': 65,
      'def': 50,
      'spa': 45,
      'spd': 50,
      'spe': 38
    },
    'abilities': {'0': 'Hustle'},
    'heightm': 0.8,
    'weightkg': 17.3,
    'color': 'Blue',
    'evos': ['zweilous'],
    'eggGroups': ['Dragon']
  },
  'zweilous': {
    'num': 634,
    'species': 'Zweilous',
    'types': ['Dark', 'Dragon'],
    'baseStats': {
      'hp': 72,
      'atk': 85,
      'def': 70,
      'spa': 65,
      'spd': 70,
      'spe': 58
    },
    'abilities': {'0': 'Hustle'},
    'heightm': 1.4,
    'weightkg': 50,
    'color': 'Blue',
    'prevo': 'deino',
    'evos': ['hydreigon'],
    'evoLevel': 50,
    'eggGroups': ['Dragon']
  },
  'hydreigon': {
    'num': 635,
    'species': 'Hydreigon',
    'types': ['Dark', 'Dragon'],
    'baseStats': {
      'hp': 92,
      'atk': 105,
      'def': 90,
      'spa': 125,
      'spd': 90,
      'spe': 98
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.8,
    'weightkg': 160,
    'color': 'Blue',
    'prevo': 'zweilous',
    'evoLevel': 64,
    'eggGroups': ['Dragon']
  },
  'larvesta': {
    'num': 636,
    'species': 'Larvesta',
    'types': ['Bug', 'Fire'],
    'baseStats': {
      'hp': 55,
      'atk': 85,
      'def': 55,
      'spa': 50,
      'spd': 55,
      'spe': 60
    },
    'abilities': {
      '0': 'Flame Body',
      'H': 'Swarm'
    },
    'heightm': 1.1,
    'weightkg': 28.8,
    'color': 'White',
    'evos': ['volcarona'],
    'eggGroups': ['Bug']
  },
  'volcarona': {
    'num': 637,
    'species': 'Volcarona',
    'types': ['Bug', 'Fire'],
    'baseStats': {
      'hp': 85,
      'atk': 60,
      'def': 65,
      'spa': 135,
      'spd': 105,
      'spe': 100
    },
    'abilities': {
      '0': 'Flame Body',
      'H': 'Swarm'
    },
    'heightm': 1.6,
    'weightkg': 46,
    'color': 'White',
    'prevo': 'larvesta',
    'evoLevel': 59,
    'eggGroups': ['Bug']
  },
  'cobalion': {
    'num': 638,
    'species': 'Cobalion',
    'types': ['Steel', 'Fighting'],
    'gender': 'N',
    'baseStats': {
      'hp': 91,
      'atk': 90,
      'def': 129,
      'spa': 90,
      'spd': 72,
      'spe': 108
    },
    'abilities': {'0': 'Justified'},
    'heightm': 2.1,
    'weightkg': 250,
    'color': 'Blue',
    'eggGroups': ['Undiscovered']
  },
  'terrakion': {
    'num': 639,
    'species': 'Terrakion',
    'types': ['Rock', 'Fighting'],
    'gender': 'N',
    'baseStats': {
      'hp': 91,
      'atk': 129,
      'def': 90,
      'spa': 72,
      'spd': 90,
      'spe': 108
    },
    'abilities': {'0': 'Justified'},
    'heightm': 1.9,
    'weightkg': 260,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'virizion': {
    'num': 640,
    'species': 'Virizion',
    'types': ['Grass', 'Fighting'],
    'gender': 'N',
    'baseStats': {
      'hp': 91,
      'atk': 90,
      'def': 72,
      'spa': 90,
      'spd': 129,
      'spe': 108
    },
    'abilities': {'0': 'Justified'},
    'heightm': 2,
    'weightkg': 200,
    'color': 'Green',
    'eggGroups': ['Undiscovered']
  },
  'tornadus': {
    'num': 641,
    'species': 'Tornadus',
    'baseForme': 'Incarnate',
    'types': ['Flying'],
    'gender': 'M',
    'baseStats': {
      'hp': 79,
      'atk': 115,
      'def': 70,
      'spa': 125,
      'spd': 80,
      'spe': 111
    },
    'abilities': {
      '0': 'Prankster',
      'H': 'Defiant'
    },
    'heightm': 1.5,
    'weightkg': 63,
    'color': 'Green',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['tornadustherian']
  },
  'tornadustherian': {
    'num': 641,
    'species': 'Tornadus-Therian',
    'baseSpecies': 'Tornadus',
    'forme': 'Therian',
    'formeLetter': 'T',
    'types': ['Flying'],
    'gender': 'M',
    'baseStats': {
      'hp': 79,
      'atk': 100,
      'def': 80,
      'spa': 110,
      'spd': 90,
      'spe': 121
    },
    'abilities': {'0': 'Regenerator'},
    'heightm': 1.4,
    'weightkg': 63,
    'color': 'Green',
    'eggGroups': ['Undiscovered']
  },
  'thundurus': {
    'num': 642,
    'species': 'Thundurus',
    'baseForme': 'Incarnate',
    'types': ['Electric', 'Flying'],
    'gender': 'M',
    'baseStats': {
      'hp': 79,
      'atk': 115,
      'def': 70,
      'spa': 125,
      'spd': 80,
      'spe': 111
    },
    'abilities': {
      '0': 'Prankster',
      'H': 'Defiant'
    },
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'Blue',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['thundurustherian']
  },
  'thundurustherian': {
    'num': 642,
    'species': 'Thundurus-Therian',
    'baseSpecies': 'Thundurus',
    'forme': 'Therian',
    'formeLetter': 'T',
    'types': ['Electric', 'Flying'],
    'gender': 'M',
    'baseStats': {
      'hp': 79,
      'atk': 105,
      'def': 70,
      'spa': 145,
      'spd': 80,
      'spe': 101
    },
    'abilities': {'0': 'Volt Absorb'},
    'heightm': 3,
    'weightkg': 61,
    'color': 'Blue',
    'eggGroups': ['Undiscovered']
  },
  'reshiram': {
    'num': 643,
    'species': 'Reshiram',
    'types': ['Dragon', 'Fire'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 120,
      'def': 100,
      'spa': 150,
      'spd': 120,
      'spe': 90
    },
    'abilities': {'0': 'Turboblaze'},
    'heightm': 3.2,
    'weightkg': 330,
    'color': 'White',
    'eggGroups': ['Undiscovered']
  },
  'zekrom': {
    'num': 644,
    'species': 'Zekrom',
    'types': ['Dragon', 'Electric'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 150,
      'def': 120,
      'spa': 120,
      'spd': 100,
      'spe': 90
    },
    'abilities': {'0': 'Teravolt'},
    'heightm': 2.9,
    'weightkg': 345,
    'color': 'Black',
    'eggGroups': ['Undiscovered']
  },
  'landorus': {
    'num': 645,
    'species': 'Landorus',
    'baseForme': 'Incarnate',
    'types': ['Ground', 'Flying'],
    'gender': 'M',
    'baseStats': {
      'hp': 89,
      'atk': 125,
      'def': 90,
      'spa': 115,
      'spd': 80,
      'spe': 101
    },
    'abilities': {
      '0': 'Sand Force',
      'H': 'Sheer Force'
    },
    'heightm': 1.5,
    'weightkg': 68,
    'color': 'Brown',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['landorustherian']
  },
  'landorustherian': {
    'num': 645,
    'species': 'Landorus-Therian',
    'baseSpecies': 'Landorus',
    'forme': 'Therian',
    'formeLetter': 'T',
    'types': ['Ground', 'Flying'],
    'gender': 'M',
    'baseStats': {
      'hp': 89,
      'atk': 145,
      'def': 90,
      'spa': 105,
      'spd': 80,
      'spe': 91
    },
    'abilities': {'0': 'Intimidate'},
    'heightm': 1.3,
    'weightkg': 68,
    'color': 'Brown',
    'eggGroups': ['Undiscovered']
  },
  'kyurem': {
    'num': 646,
    'species': 'Kyurem',
    'types': ['Dragon', 'Ice'],
    'gender': 'N',
    'baseStats': {
      'hp': 125,
      'atk': 130,
      'def': 90,
      'spa': 130,
      'spd': 90,
      'spe': 95
    },
    'abilities': {'0': 'Pressure'},
    'heightm': 3,
    'weightkg': 325,
    'color': 'Gray',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['kyuremblack', 'kyuremwhite']
  },
  'kyuremblack': {
    'num': 646,
    'species': 'Kyurem-Black',
    'baseSpecies': 'Kyurem',
    'forme': 'Black',
    'formeLetter': 'B',
    'types': ['Dragon', 'Ice'],
    'gender': 'N',
    'baseStats': {
      'hp': 125,
      'atk': 170,
      'def': 100,
      'spa': 120,
      'spd': 90,
      'spe': 95
    },
    'abilities': {'0': 'Teravolt'},
    'heightm': 3.3,
    'weightkg': 325,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'kyuremwhite': {
    'num': 646,
    'species': 'Kyurem-White',
    'baseSpecies': 'Kyurem',
    'forme': 'White',
    'formeLetter': 'W',
    'types': ['Dragon', 'Ice'],
    'gender': 'N',
    'baseStats': {
      'hp': 125,
      'atk': 120,
      'def': 90,
      'spa': 170,
      'spd': 100,
      'spe': 95
    },
    'abilities': {'0': 'Turboblaze'},
    'heightm': 3.6,
    'weightkg': 325,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'keldeo': {
    'num': 647,
    'species': 'Keldeo',
    'baseForme': 'Ordinary',
    'types': ['Water', 'Fighting'],
    'gender': 'N',
    'baseStats': {
      'hp': 91,
      'atk': 72,
      'def': 90,
      'spa': 129,
      'spd': 90,
      'spe': 108
    },
    'abilities': {'0': 'Justified'},
    'heightm': 1.4,
    'weightkg': 48.5,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['keldeoresolute']
  },
  'keldeoresolute': {
    'num': 647,
    'species': 'Keldeo-Resolute',
    'baseSpecies': 'Keldeo',
    'forme': 'Resolute',
    'formeLetter': 'R',
    'types': ['Water', 'Fighting'],
    'gender': 'N',
    'baseStats': {
      'hp': 91,
      'atk': 72,
      'def': 90,
      'spa': 129,
      'spd': 90,
      'spe': 108
    },
    'abilities': {'0': 'Justified'},
    'heightm': 1.4,
    'weightkg': 48.5,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'meloetta': {
    'num': 648,
    'species': 'Meloetta',
    'baseForme': 'Aria',
    'types': ['Normal', 'Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 77,
      'def': 77,
      'spa': 128,
      'spd': 128,
      'spe': 90
    },
    'abilities': {'0': 'Serene Grace'},
    'heightm': 0.6,
    'weightkg': 6.5,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['meloettapirouette']
  },
  'meloettapirouette': {
    'num': 648,
    'species': 'Meloetta-Pirouette',
    'baseSpecies': 'Meloetta',
    'forme': 'Pirouette',
    'formeLetter': 'P',
    'types': ['Normal', 'Fighting'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 128,
      'def': 90,
      'spa': 77,
      'spd': 77,
      'spe': 128
    },
    'abilities': {'0': 'Serene Grace'},
    'heightm': 0.6,
    'weightkg': 6.5,
    'color': 'White',
    'eggGroups': ['Undiscovered']
  },
  'genesect': {
    'num': 649,
    'species': 'Genesect',
    'types': ['Bug', 'Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 71,
      'atk': 120,
      'def': 95,
      'spa': 120,
      'spd': 95,
      'spe': 99
    },
    'abilities': {'0': 'Download'},
    'heightm': 1.5,
    'weightkg': 82.5,
    'color': 'Purple',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['genesectdouse', 'genesectshock', 'genesectburn', 'genesectchill']
  },
  'genesectdouse': {
    'num': 649,
    'species': 'Genesect-Douse',
    'baseSpecies': 'Genesect',
    'forme': 'Douse',
    'formeLetter': 'D',
    'types': ['Bug', 'Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 71,
      'atk': 120,
      'def': 95,
      'spa': 120,
      'spd': 95,
      'spe': 99
    },
    'abilities': {'0': 'Download'},
    'heightm': 1.5,
    'weightkg': 82.5,
    'color': 'Purple',
    'eggGroups': ['Undiscovered']
  },
  'genesectshock': {
    'num': 649,
    'species': 'Genesect-Shock',
    'baseSpecies': 'Genesect',
    'forme': 'Shock',
    'formeLetter': 'S',
    'types': ['Bug', 'Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 71,
      'atk': 120,
      'def': 95,
      'spa': 120,
      'spd': 95,
      'spe': 99
    },
    'abilities': {'0': 'Download'},
    'heightm': 1.5,
    'weightkg': 82.5,
    'color': 'Purple',
    'eggGroups': ['Undiscovered']
  },
  'genesectburn': {
    'num': 649,
    'species': 'Genesect-Burn',
    'baseSpecies': 'Genesect',
    'forme': 'Burn',
    'formeLetter': 'B',
    'types': ['Bug', 'Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 71,
      'atk': 120,
      'def': 95,
      'spa': 120,
      'spd': 95,
      'spe': 99
    },
    'abilities': {'0': 'Download'},
    'heightm': 1.5,
    'weightkg': 82.5,
    'color': 'Purple',
    'eggGroups': ['Undiscovered']
  },
  'genesectchill': {
    'num': 649,
    'species': 'Genesect-Chill',
    'baseSpecies': 'Genesect',
    'forme': 'Chill',
    'formeLetter': 'C',
    'types': ['Bug', 'Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 71,
      'atk': 120,
      'def': 95,
      'spa': 120,
      'spd': 95,
      'spe': 99
    },
    'abilities': {'0': 'Download'},
    'heightm': 1.5,
    'weightkg': 82.5,
    'color': 'Purple',
    'eggGroups': ['Undiscovered']
  },
  'chespin': {
    'num': 650,
    'species': 'Chespin',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 56,
      'atk': 61,
      'def': 65,
      'spa': 48,
      'spd': 45,
      'spe': 38
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Bulletproof'
    },
    'heightm': 0.4,
    'weightkg': 9,
    'color': 'Green',
    'evos': ['quilladin'],
    'eggGroups': ['Field']
  },
  'quilladin': {
    'num': 651,
    'species': 'Quilladin',
    'types': ['Grass'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 61,
      'atk': 78,
      'def': 95,
      'spa': 56,
      'spd': 58,
      'spe': 57
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Bulletproof'
    },
    'heightm': 0.7,
    'weightkg': 29,
    'color': 'Green',
    'prevo': 'chespin',
    'evos': ['chesnaught'],
    'evoLevel': 16,
    'eggGroups': ['Field']
  },
  'chesnaught': {
    'num': 652,
    'species': 'Chesnaught',
    'types': ['Grass', 'Fighting'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 88,
      'atk': 107,
      'def': 122,
      'spa': 74,
      'spd': 75,
      'spe': 64
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Bulletproof'
    },
    'heightm': 1.6,
    'weightkg': 90,
    'color': 'Green',
    'prevo': 'quilladin',
    'evoLevel': 36,
    'eggGroups': ['Field']
  },
  'fennekin': {
    'num': 653,
    'species': 'Fennekin',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 40,
      'atk': 45,
      'def': 40,
      'spa': 62,
      'spd': 60,
      'spe': 60
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Magician'
    },
    'heightm': 0.4,
    'weightkg': 9.4,
    'color': 'Red',
    'evos': ['braixen'],
    'eggGroups': ['Field']
  },
  'braixen': {
    'num': 654,
    'species': 'Braixen',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 59,
      'atk': 59,
      'def': 58,
      'spa': 90,
      'spd': 70,
      'spe': 73
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Magician'
    },
    'heightm': 1,
    'weightkg': 14.5,
    'color': 'Red',
    'prevo': 'fennekin',
    'evos': ['delphox'],
    'evoLevel': 16,
    'eggGroups': ['Field']
  },
  'delphox': {
    'num': 655,
    'species': 'Delphox',
    'types': ['Fire', 'Psychic'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 75,
      'atk': 69,
      'def': 72,
      'spa': 114,
      'spd': 100,
      'spe': 104
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Magician'
    },
    'heightm': 1.5,
    'weightkg': 39,
    'color': 'Red',
    'prevo': 'braixen',
    'evoLevel': 36,
    'eggGroups': ['Field']
  },
  'froakie': {
    'num': 656,
    'species': 'Froakie',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 41,
      'atk': 56,
      'def': 40,
      'spa': 62,
      'spd': 44,
      'spe': 71
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Protean'
    },
    'heightm': 0.3,
    'weightkg': 7,
    'color': 'Blue',
    'evos': ['frogadier'],
    'eggGroups': ['Water 1']
  },
  'frogadier': {
    'num': 657,
    'species': 'Frogadier',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 54,
      'atk': 63,
      'def': 52,
      'spa': 83,
      'spd': 56,
      'spe': 97
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Protean'
    },
    'heightm': 0.6,
    'weightkg': 10.9,
    'color': 'Blue',
    'prevo': 'froakie',
    'evos': ['greninja'],
    'evoLevel': 16,
    'eggGroups': ['Water 1']
  },
  'greninja': {
    'num': 658,
    'species': 'Greninja',
    'types': ['Water', 'Dark'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 72,
      'atk': 95,
      'def': 67,
      'spa': 103,
      'spd': 71,
      'spe': 122
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Protean',
      'S': 'Battle Bond'
    },
    'heightm': 1.5,
    'weightkg': 40,
    'color': 'Blue',
    'prevo': 'frogadier',
    'evoLevel': 36,
    'eggGroups': ['Water 1'],
    'otherFormes': ['greninjaash']
  },
  'greninjaash': {
    'num': 658,
    'species': 'Greninja-Ash',
    'baseSpecies': 'Greninja',
    'forme': 'Ash',
    'formeLetter': 'A',
    'types': ['Water', 'Dark'],
    'gender': 'M',
    'baseStats': {
      'hp': 72,
      'atk': 145,
      'def': 67,
      'spa': 153,
      'spd': 71,
      'spe': 132
    },
    'abilities': {'0': 'Battle Bond'},
    'heightm': 1.5,
    'weightkg': 40,
    'color': 'Blue',
    'eggGroups': ['Undiscovered']
  },
  'bunnelby': {
    'num': 659,
    'species': 'Bunnelby',
    'types': ['Normal'],
    'baseStats': {
      'hp': 38,
      'atk': 36,
      'def': 38,
      'spa': 32,
      'spd': 36,
      'spe': 57
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Cheek Pouch',
      'H': 'Huge Power'
    },
    'heightm': 0.4,
    'weightkg': 5,
    'color': 'Brown',
    'evos': ['diggersby'],
    'eggGroups': ['Field']
  },
  'diggersby': {
    'num': 660,
    'species': 'Diggersby',
    'types': ['Normal', 'Ground'],
    'baseStats': {
      'hp': 85,
      'atk': 56,
      'def': 77,
      'spa': 50,
      'spd': 77,
      'spe': 78
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Cheek Pouch',
      'H': 'Huge Power'
    },
    'heightm': 1,
    'weightkg': 42.4,
    'color': 'Brown',
    'prevo': 'bunnelby',
    'evoLevel': 20,
    'eggGroups': ['Field']
  },
  'fletchling': {
    'num': 661,
    'species': 'Fletchling',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 45,
      'atk': 50,
      'def': 43,
      'spa': 40,
      'spd': 38,
      'spe': 62
    },
    'abilities': {
      '0': 'Big Pecks',
      'H': 'Gale Wings'
    },
    'heightm': 0.3,
    'weightkg': 1.7,
    'color': 'Red',
    'evos': ['fletchinder'],
    'eggGroups': ['Flying']
  },
  'fletchinder': {
    'num': 662,
    'species': 'Fletchinder',
    'types': ['Fire', 'Flying'],
    'baseStats': {
      'hp': 62,
      'atk': 73,
      'def': 55,
      'spa': 56,
      'spd': 52,
      'spe': 84
    },
    'abilities': {
      '0': 'Flame Body',
      'H': 'Gale Wings'
    },
    'heightm': 0.7,
    'weightkg': 16,
    'color': 'Red',
    'prevo': 'fletchling',
    'evos': ['talonflame'],
    'evoLevel': 17,
    'eggGroups': ['Flying']
  },
  'talonflame': {
    'num': 663,
    'species': 'Talonflame',
    'types': ['Fire', 'Flying'],
    'baseStats': {
      'hp': 78,
      'atk': 81,
      'def': 71,
      'spa': 74,
      'spd': 69,
      'spe': 126
    },
    'abilities': {
      '0': 'Flame Body',
      'H': 'Gale Wings'
    },
    'heightm': 1.2,
    'weightkg': 24.5,
    'color': 'Red',
    'prevo': 'fletchinder',
    'evoLevel': 35,
    'eggGroups': ['Flying']
  },
  'scatterbug': {
    'num': 664,
    'species': 'Scatterbug',
    'types': ['Bug'],
    'baseStats': {
      'hp': 38,
      'atk': 35,
      'def': 40,
      'spa': 27,
      'spd': 25,
      'spe': 35
    },
    'abilities': {
      '0': 'Shield Dust',
      '1': 'Compound Eyes',
      'H': 'Friend Guard'
    },
    'heightm': 0.3,
    'weightkg': 2.5,
    'color': 'Black',
    'evos': ['spewpa'],
    'eggGroups': ['Bug']
  },
  'spewpa': {
    'num': 665,
    'species': 'Spewpa',
    'types': ['Bug'],
    'baseStats': {
      'hp': 45,
      'atk': 22,
      'def': 60,
      'spa': 27,
      'spd': 30,
      'spe': 29
    },
    'abilities': {
      '0': 'Shed Skin',
      'H': 'Friend Guard'
    },
    'heightm': 0.3,
    'weightkg': 8.4,
    'color': 'Black',
    'prevo': 'scatterbug',
    'evos': ['vivillon'],
    'evoLevel': 9,
    'eggGroups': ['Bug']
  },
  'vivillon': {
    'num': 666,
    'species': 'Vivillon',
    'types': ['Bug', 'Flying'],
    'baseStats': {
      'hp': 80,
      'atk': 52,
      'def': 50,
      'spa': 90,
      'spd': 50,
      'spe': 89
    },
    'abilities': {
      '0': 'Shield Dust',
      '1': 'Compound Eyes',
      'H': 'Friend Guard'
    },
    'heightm': 1.2,
    'weightkg': 17,
    'color': 'White',
    'prevo': 'spewpa',
    'evoLevel': 12,
    'eggGroups': ['Bug'],
    'otherForms': ['vivillonarchipelago', 'vivilloncontinental', 'vivillonelegant', 'vivillongarden', 'vivillonhighplains', 'vivillonicysnow', 'vivillonjungle', 'vivillonmarine', 'vivillonmodern', 'vivillonmonsoon', 'vivillonocean', 'vivillonpolar', 'vivillonriver', 'vivillonsandstorm', 'vivillonsavanna', 'vivillonsun', 'vivillontundra'],
    'otherFormes': ['vivillonfancy', 'vivillonpokeball']
  },
  'vivillonfancy': {
    'num': 666,
    'species': 'Vivillon-Fancy',
    'baseSpecies': 'Vivillon',
    'forme': 'Fancy',
    'formeLetter': 'F',
    'types': ['Bug', 'Flying'],
    'baseStats': {
      'hp': 80,
      'atk': 52,
      'def': 50,
      'spa': 90,
      'spd': 50,
      'spe': 89
    },
    'abilities': {
      '0': 'Shield Dust',
      '1': 'Compound Eyes'
    },
    'heightm': 1.2,
    'weightkg': 17,
    'color': 'Black',
    'eggGroups': ['Bug']
  },
  'vivillonpokeball': {
    'num': 666,
    'species': 'Vivillon-Pokeball',
    'baseSpecies': 'Vivillon',
    'forme': 'Pokeball',
    'formeLetter': 'P',
    'types': ['Bug', 'Flying'],
    'baseStats': {
      'hp': 80,
      'atk': 52,
      'def': 50,
      'spa': 90,
      'spd': 50,
      'spe': 89
    },
    'abilities': {
      '0': 'Shield Dust',
      '1': 'Compound Eyes'
    },
    'heightm': 1.2,
    'weightkg': 17,
    'color': 'Black',
    'eggGroups': ['Bug']
  },
  'litleo': {
    'num': 667,
    'species': 'Litleo',
    'types': ['Fire', 'Normal'],
    'genderRatio': {
      'M': 0.125,
      'F': 0.875
    },
    'baseStats': {
      'hp': 62,
      'atk': 50,
      'def': 58,
      'spa': 73,
      'spd': 54,
      'spe': 72
    },
    'abilities': {
      '0': 'Rivalry',
      '1': 'Unnerve',
      'H': 'Moxie'
    },
    'heightm': 0.6,
    'weightkg': 13.5,
    'color': 'Brown',
    'evos': ['pyroar'],
    'eggGroups': ['Field']
  },
  'pyroar': {
    'num': 668,
    'species': 'Pyroar',
    'types': ['Fire', 'Normal'],
    'genderRatio': {
      'M': 0.125,
      'F': 0.875
    },
    'baseStats': {
      'hp': 86,
      'atk': 68,
      'def': 72,
      'spa': 109,
      'spd': 66,
      'spe': 106
    },
    'abilities': {
      '0': 'Rivalry',
      '1': 'Unnerve',
      'H': 'Moxie'
    },
    'heightm': 1.5,
    'weightkg': 81.5,
    'color': 'Brown',
    'prevo': 'litleo',
    'evoLevel': 35,
    'eggGroups': ['Field']
  },
  'flabebe': {
    'num': 669,
    'species': 'Flabe\u0301be\u0301',
    'baseForme': 'Red',
    'types': ['Fairy'],
    'gender': 'F',
    'baseStats': {
      'hp': 44,
      'atk': 38,
      'def': 39,
      'spa': 61,
      'spd': 79,
      'spe': 42
    },
    'abilities': {
      '0': 'Flower Veil',
      'H': 'Symbiosis'
    },
    'heightm': 0.1,
    'weightkg': 0.1,
    'color': 'White',
    'evos': ['floette'],
    'eggGroups': ['Fairy'],
    'otherForms': ['flabebeblue', 'flabebeorange', 'flabebewhite', 'flabebeyellow']
  },
  'floette': {
    'num': 670,
    'species': 'Floette',
    'baseForme': 'Red',
    'types': ['Fairy'],
    'gender': 'F',
    'baseStats': {
      'hp': 54,
      'atk': 45,
      'def': 47,
      'spa': 75,
      'spd': 98,
      'spe': 52
    },
    'abilities': {
      '0': 'Flower Veil',
      'H': 'Symbiosis'
    },
    'heightm': 0.2,
    'weightkg': 0.9,
    'color': 'White',
    'prevo': 'flabebe',
    'evos': ['florges'],
    'evoLevel': 19,
    'eggGroups': ['Fairy'],
    'otherForms': ['floetteblue', 'floetteorange', 'floettewhite', 'floetteyellow'],
    'otherFormes': ['floetteeternal']
  },
  'floetteeternal': {
    'num': 670,
    'species': 'Floette-Eternal',
    'baseSpecies': 'Floette',
    'forme': 'Eternal',
    'formeLetter': 'E',
    'types': ['Fairy'],
    'gender': 'F',
    'baseStats': {
      'hp': 74,
      'atk': 65,
      'def': 67,
      'spa': 125,
      'spd': 128,
      'spe': 92
    },
    'abilities': {'0': 'Flower Veil'},
    'heightm': 0.2,
    'weightkg': 0.9,
    'color': 'White',
    'eggGroups': ['Undiscovered']
  },
  'florges': {
    'num': 671,
    'species': 'Florges',
    'baseForme': 'Red',
    'types': ['Fairy'],
    'gender': 'F',
    'baseStats': {
      'hp': 78,
      'atk': 65,
      'def': 68,
      'spa': 112,
      'spd': 154,
      'spe': 75
    },
    'abilities': {
      '0': 'Flower Veil',
      'H': 'Symbiosis'
    },
    'heightm': 1.1,
    'weightkg': 10,
    'color': 'White',
    'prevo': 'floette',
    'evoLevel': 19,
    'eggGroups': ['Fairy'],
    'otherForms': ['florgesblue', 'florgesorange', 'florgeswhite', 'florgesyellow']
  },
  'skiddo': {
    'num': 672,
    'species': 'Skiddo',
    'types': ['Grass'],
    'baseStats': {
      'hp': 66,
      'atk': 65,
      'def': 48,
      'spa': 62,
      'spd': 57,
      'spe': 52
    },
    'abilities': {
      '0': 'Sap Sipper',
      'H': 'Grass Pelt'
    },
    'heightm': 0.9,
    'weightkg': 31,
    'color': 'Brown',
    'evos': ['gogoat'],
    'eggGroups': ['Field']
  },
  'gogoat': {
    'num': 673,
    'species': 'Gogoat',
    'types': ['Grass'],
    'baseStats': {
      'hp': 123,
      'atk': 100,
      'def': 62,
      'spa': 97,
      'spd': 81,
      'spe': 68
    },
    'abilities': {
      '0': 'Sap Sipper',
      'H': 'Grass Pelt'
    },
    'heightm': 1.7,
    'weightkg': 91,
    'color': 'Brown',
    'prevo': 'skiddo',
    'evoLevel': 32,
    'eggGroups': ['Field']
  },
  'pancham': {
    'num': 674,
    'species': 'Pancham',
    'types': ['Fighting'],
    'baseStats': {
      'hp': 67,
      'atk': 82,
      'def': 62,
      'spa': 46,
      'spd': 48,
      'spe': 43
    },
    'abilities': {
      '0': 'Iron Fist',
      '1': 'Mold Breaker',
      'H': 'Scrappy'
    },
    'heightm': 0.6,
    'weightkg': 8,
    'color': 'White',
    'evos': ['pangoro'],
    'eggGroups': ['Field', 'Human-Like']
  },
  'pangoro': {
    'num': 675,
    'species': 'Pangoro',
    'types': ['Fighting', 'Dark'],
    'baseStats': {
      'hp': 95,
      'atk': 124,
      'def': 78,
      'spa': 69,
      'spd': 71,
      'spe': 58
    },
    'abilities': {
      '0': 'Iron Fist',
      '1': 'Mold Breaker',
      'H': 'Scrappy'
    },
    'heightm': 2.1,
    'weightkg': 136,
    'color': 'White',
    'prevo': 'pancham',
    'evoLevel': 32,
    'eggGroups': ['Field', 'Human-Like']
  },
  'furfrou': {
    'num': 676,
    'species': 'Furfrou',
    'types': ['Normal'],
    'baseStats': {
      'hp': 75,
      'atk': 80,
      'def': 60,
      'spa': 65,
      'spd': 90,
      'spe': 102
    },
    'abilities': {'0': 'Fur Coat'},
    'heightm': 1.2,
    'weightkg': 28,
    'color': 'White',
    'eggGroups': ['Field']
  },
  'espurr': {
    'num': 677,
    'species': 'Espurr',
    'types': ['Psychic'],
    'baseStats': {
      'hp': 62,
      'atk': 48,
      'def': 54,
      'spa': 63,
      'spd': 60,
      'spe': 68
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Infiltrator',
      'H': 'Own Tempo'
    },
    'heightm': 0.3,
    'weightkg': 3.5,
    'color': 'Gray',
    'evos': ['meowstic'],
    'eggGroups': ['Field']
  },
  'meowstic': {
    'num': 678,
    'species': 'Meowstic',
    'baseForme': 'M',
    'types': ['Psychic'],
    'gender': 'M',
    'baseStats': {
      'hp': 74,
      'atk': 48,
      'def': 76,
      'spa': 83,
      'spd': 81,
      'spe': 104
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Infiltrator',
      'H': 'Prankster'
    },
    'heightm': 0.6,
    'weightkg': 8.5,
    'color': 'Blue',
    'prevo': 'espurr',
    'evoLevel': 25,
    'eggGroups': ['Field'],
    'otherFormes': ['meowsticf']
  },
  'meowsticf': {
    'num': 678,
    'species': 'Meowstic-F',
    'baseSpecies': 'Meowstic',
    'forme': 'F',
    'formeLetter': 'F',
    'types': ['Psychic'],
    'gender': 'F',
    'baseStats': {
      'hp': 74,
      'atk': 48,
      'def': 76,
      'spa': 83,
      'spd': 81,
      'spe': 104
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Infiltrator',
      'H': 'Competitive'
    },
    'heightm': 0.6,
    'weightkg': 8.5,
    'color': 'White',
    'prevo': 'espurr',
    'evoLevel': 25,
    'eggGroups': ['Field']
  },
  'honedge': {
    'num': 679,
    'species': 'Honedge',
    'types': ['Steel', 'Ghost'],
    'baseStats': {
      'hp': 45,
      'atk': 80,
      'def': 100,
      'spa': 35,
      'spd': 37,
      'spe': 28
    },
    'abilities': {'0': 'No Guard'},
    'heightm': 0.8,
    'weightkg': 2,
    'color': 'Brown',
    'evos': ['doublade'],
    'eggGroups': ['Mineral']
  },
  'doublade': {
    'num': 680,
    'species': 'Doublade',
    'types': ['Steel', 'Ghost'],
    'baseStats': {
      'hp': 59,
      'atk': 110,
      'def': 150,
      'spa': 45,
      'spd': 49,
      'spe': 35
    },
    'abilities': {'0': 'No Guard'},
    'heightm': 0.8,
    'weightkg': 4.5,
    'color': 'Brown',
    'prevo': 'honedge',
    'evos': ['aegislash'],
    'evoLevel': 35,
    'eggGroups': ['Mineral']
  },
  'aegislash': {
    'num': 681,
    'species': 'Aegislash',
    'baseForme': 'Shield',
    'types': ['Steel', 'Ghost'],
    'baseStats': {
      'hp': 60,
      'atk': 50,
      'def': 150,
      'spa': 50,
      'spd': 150,
      'spe': 60
    },
    'abilities': {'0': 'Stance Change'},
    'heightm': 1.7,
    'weightkg': 53,
    'color': 'Brown',
    'prevo': 'doublade',
    'evoLevel': 35,
    'eggGroups': ['Mineral'],
    'otherFormes': ['aegislashblade']
  },
  'aegislashblade': {
    'num': 681,
    'species': 'Aegislash-Blade',
    'baseSpecies': 'Aegislash',
    'forme': 'Blade',
    'formeLetter': 'B',
    'types': ['Steel', 'Ghost'],
    'baseStats': {
      'hp': 60,
      'atk': 150,
      'def': 50,
      'spa': 150,
      'spd': 50,
      'spe': 60
    },
    'abilities': {'0': 'Stance Change'},
    'heightm': 1.7,
    'weightkg': 53,
    'color': 'Brown',
    'prevo': 'doublade',
    'evoLevel': 35,
    'eggGroups': ['Mineral']
  },
  'spritzee': {
    'num': 682,
    'species': 'Spritzee',
    'types': ['Fairy'],
    'baseStats': {
      'hp': 78,
      'atk': 52,
      'def': 60,
      'spa': 63,
      'spd': 65,
      'spe': 23
    },
    'abilities': {
      '0': 'Healer',
      'H': 'Aroma Veil'
    },
    'heightm': 0.2,
    'weightkg': 0.5,
    'color': 'Pink',
    'evos': ['aromatisse'],
    'eggGroups': ['Fairy']
  },
  'aromatisse': {
    'num': 683,
    'species': 'Aromatisse',
    'types': ['Fairy'],
    'baseStats': {
      'hp': 101,
      'atk': 72,
      'def': 72,
      'spa': 99,
      'spd': 89,
      'spe': 29
    },
    'abilities': {
      '0': 'Healer',
      'H': 'Aroma Veil'
    },
    'heightm': 0.8,
    'weightkg': 15.5,
    'color': 'Pink',
    'prevo': 'spritzee',
    'evoLevel': 1,
    'eggGroups': ['Fairy']
  },
  'swirlix': {
    'num': 684,
    'species': 'Swirlix',
    'types': ['Fairy'],
    'baseStats': {
      'hp': 62,
      'atk': 48,
      'def': 66,
      'spa': 59,
      'spd': 57,
      'spe': 49
    },
    'abilities': {
      '0': 'Sweet Veil',
      'H': 'Unburden'
    },
    'heightm': 0.4,
    'weightkg': 3.5,
    'color': 'White',
    'evos': ['slurpuff'],
    'eggGroups': ['Fairy']
  },
  'slurpuff': {
    'num': 685,
    'species': 'Slurpuff',
    'types': ['Fairy'],
    'baseStats': {
      'hp': 82,
      'atk': 80,
      'def': 86,
      'spa': 85,
      'spd': 75,
      'spe': 72
    },
    'abilities': {
      '0': 'Sweet Veil',
      'H': 'Unburden'
    },
    'heightm': 0.8,
    'weightkg': 5,
    'color': 'White',
    'prevo': 'swirlix',
    'evoLevel': 1,
    'eggGroups': ['Fairy']
  },
  'inkay': {
    'num': 686,
    'species': 'Inkay',
    'types': ['Dark', 'Psychic'],
    'baseStats': {
      'hp': 53,
      'atk': 54,
      'def': 53,
      'spa': 37,
      'spd': 46,
      'spe': 45
    },
    'abilities': {
      '0': 'Contrary',
      '1': 'Suction Cups',
      'H': 'Infiltrator'
    },
    'heightm': 0.4,
    'weightkg': 3.5,
    'color': 'Blue',
    'evos': ['malamar'],
    'eggGroups': ['Water 1', 'Water 2']
  },
  'malamar': {
    'num': 687,
    'species': 'Malamar',
    'types': ['Dark', 'Psychic'],
    'baseStats': {
      'hp': 86,
      'atk': 92,
      'def': 88,
      'spa': 68,
      'spd': 75,
      'spe': 73
    },
    'abilities': {
      '0': 'Contrary',
      '1': 'Suction Cups',
      'H': 'Infiltrator'
    },
    'heightm': 1.5,
    'weightkg': 47,
    'color': 'Blue',
    'prevo': 'inkay',
    'evoLevel': 30,
    'eggGroups': ['Water 1', 'Water 2']
  },
  'binacle': {
    'num': 688,
    'species': 'Binacle',
    'types': ['Rock', 'Water'],
    'baseStats': {
      'hp': 42,
      'atk': 52,
      'def': 67,
      'spa': 39,
      'spd': 56,
      'spe': 50
    },
    'abilities': {
      '0': 'Tough Claws',
      '1': 'Sniper',
      'H': 'Pickpocket'
    },
    'heightm': 0.5,
    'weightkg': 31,
    'color': 'Brown',
    'evos': ['barbaracle'],
    'eggGroups': ['Water 3']
  },
  'barbaracle': {
    'num': 689,
    'species': 'Barbaracle',
    'types': ['Rock', 'Water'],
    'baseStats': {
      'hp': 72,
      'atk': 105,
      'def': 115,
      'spa': 54,
      'spd': 86,
      'spe': 68
    },
    'abilities': {
      '0': 'Tough Claws',
      '1': 'Sniper',
      'H': 'Pickpocket'
    },
    'heightm': 1.3,
    'weightkg': 96,
    'color': 'Brown',
    'prevo': 'binacle',
    'evoLevel': 39,
    'eggGroups': ['Water 3']
  },
  'skrelp': {
    'num': 690,
    'species': 'Skrelp',
    'types': ['Poison', 'Water'],
    'baseStats': {
      'hp': 50,
      'atk': 60,
      'def': 60,
      'spa': 60,
      'spd': 60,
      'spe': 30
    },
    'abilities': {
      '0': 'Poison Point',
      '1': 'Poison Touch',
      'H': 'Adaptability'
    },
    'heightm': 0.5,
    'weightkg': 7.3,
    'color': 'Brown',
    'evos': ['dragalge'],
    'eggGroups': ['Water 1', 'Dragon']
  },
  'dragalge': {
    'num': 691,
    'species': 'Dragalge',
    'types': ['Poison', 'Dragon'],
    'baseStats': {
      'hp': 65,
      'atk': 75,
      'def': 90,
      'spa': 97,
      'spd': 123,
      'spe': 44
    },
    'abilities': {
      '0': 'Poison Point',
      '1': 'Poison Touch',
      'H': 'Adaptability'
    },
    'heightm': 1.8,
    'weightkg': 81.5,
    'color': 'Brown',
    'prevo': 'skrelp',
    'evoLevel': 48,
    'eggGroups': ['Water 1', 'Dragon']
  },
  'clauncher': {
    'num': 692,
    'species': 'Clauncher',
    'types': ['Water'],
    'baseStats': {
      'hp': 50,
      'atk': 53,
      'def': 62,
      'spa': 58,
      'spd': 63,
      'spe': 44
    },
    'abilities': {'0': 'Mega Launcher'},
    'heightm': 0.5,
    'weightkg': 8.3,
    'color': 'Blue',
    'evos': ['clawitzer'],
    'eggGroups': ['Water 1', 'Water 3']
  },
  'clawitzer': {
    'num': 693,
    'species': 'Clawitzer',
    'types': ['Water'],
    'baseStats': {
      'hp': 71,
      'atk': 73,
      'def': 88,
      'spa': 120,
      'spd': 89,
      'spe': 59
    },
    'abilities': {'0': 'Mega Launcher'},
    'heightm': 1.3,
    'weightkg': 35.3,
    'color': 'Blue',
    'prevo': 'clauncher',
    'evoLevel': 37,
    'eggGroups': ['Water 1', 'Water 3']
  },
  'helioptile': {
    'num': 694,
    'species': 'Helioptile',
    'types': ['Electric', 'Normal'],
    'baseStats': {
      'hp': 44,
      'atk': 38,
      'def': 33,
      'spa': 61,
      'spd': 43,
      'spe': 70
    },
    'abilities': {
      '0': 'Dry Skin',
      '1': 'Sand Veil',
      'H': 'Solar Power'
    },
    'heightm': 0.5,
    'weightkg': 6,
    'color': 'Yellow',
    'evos': ['heliolisk'],
    'eggGroups': ['Monster', 'Dragon']
  },
  'heliolisk': {
    'num': 695,
    'species': 'Heliolisk',
    'types': ['Electric', 'Normal'],
    'baseStats': {
      'hp': 62,
      'atk': 55,
      'def': 52,
      'spa': 109,
      'spd': 94,
      'spe': 109
    },
    'abilities': {
      '0': 'Dry Skin',
      '1': 'Sand Veil',
      'H': 'Solar Power'
    },
    'heightm': 1,
    'weightkg': 21,
    'color': 'Yellow',
    'prevo': 'helioptile',
    'evoLevel': 1,
    'eggGroups': ['Monster', 'Dragon']
  },
  'tyrunt': {
    'num': 696,
    'species': 'Tyrunt',
    'types': ['Rock', 'Dragon'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 58,
      'atk': 89,
      'def': 77,
      'spa': 45,
      'spd': 45,
      'spe': 48
    },
    'abilities': {
      '0': 'Strong Jaw',
      'H': 'Sturdy'
    },
    'heightm': 0.8,
    'weightkg': 26,
    'color': 'Brown',
    'evos': ['tyrantrum'],
    'eggGroups': ['Monster', 'Dragon']
  },
  'tyrantrum': {
    'num': 697,
    'species': 'Tyrantrum',
    'types': ['Rock', 'Dragon'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 82,
      'atk': 121,
      'def': 119,
      'spa': 69,
      'spd': 59,
      'spe': 71
    },
    'abilities': {
      '0': 'Strong Jaw',
      'H': 'Rock Head'
    },
    'heightm': 2.5,
    'weightkg': 270,
    'color': 'Red',
    'prevo': 'tyrunt',
    'evoLevel': 39,
    'eggGroups': ['Monster', 'Dragon']
  },
  'amaura': {
    'num': 698,
    'species': 'Amaura',
    'types': ['Rock', 'Ice'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 77,
      'atk': 59,
      'def': 50,
      'spa': 67,
      'spd': 63,
      'spe': 46
    },
    'abilities': {
      '0': 'Refrigerate',
      'H': 'Snow Warning'
    },
    'heightm': 1.3,
    'weightkg': 25.2,
    'color': 'Blue',
    'evos': ['aurorus'],
    'eggGroups': ['Monster']
  },
  'aurorus': {
    'num': 699,
    'species': 'Aurorus',
    'types': ['Rock', 'Ice'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 123,
      'atk': 77,
      'def': 72,
      'spa': 99,
      'spd': 92,
      'spe': 58
    },
    'abilities': {
      '0': 'Refrigerate',
      'H': 'Snow Warning'
    },
    'heightm': 2.7,
    'weightkg': 225,
    'color': 'Blue',
    'prevo': 'amaura',
    'evoLevel': 39,
    'eggGroups': ['Monster']
  },
  'sylveon': {
    'num': 700,
    'species': 'Sylveon',
    'types': ['Fairy'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 95,
      'atk': 65,
      'def': 65,
      'spa': 110,
      'spd': 130,
      'spe': 60
    },
    'abilities': {
      '0': 'Cute Charm',
      'H': 'Pixilate'
    },
    'heightm': 1,
    'weightkg': 23.5,
    'color': 'Pink',
    'prevo': 'eevee',
    'evoLevel': 2,
    'eggGroups': ['Field']
  },
  'hawlucha': {
    'num': 701,
    'species': 'Hawlucha',
    'types': ['Fighting', 'Flying'],
    'baseStats': {
      'hp': 78,
      'atk': 92,
      'def': 75,
      'spa': 74,
      'spd': 63,
      'spe': 118
    },
    'abilities': {
      '0': 'Limber',
      '1': 'Unburden',
      'H': 'Mold Breaker'
    },
    'heightm': 0.8,
    'weightkg': 21.5,
    'color': 'Green',
    'eggGroups': ['Human-Like']
  },
  'dedenne': {
    'num': 702,
    'species': 'Dedenne',
    'types': ['Electric', 'Fairy'],
    'baseStats': {
      'hp': 67,
      'atk': 58,
      'def': 57,
      'spa': 81,
      'spd': 67,
      'spe': 101
    },
    'abilities': {
      '0': 'Cheek Pouch',
      '1': 'Pickup',
      'H': 'Plus'
    },
    'heightm': 0.2,
    'weightkg': 2.2,
    'color': 'Yellow',
    'eggGroups': ['Field', 'Fairy']
  },
  'carbink': {
    'num': 703,
    'species': 'Carbink',
    'types': ['Rock', 'Fairy'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 50,
      'def': 150,
      'spa': 50,
      'spd': 150,
      'spe': 50
    },
    'abilities': {
      '0': 'Clear Body',
      'H': 'Sturdy'
    },
    'heightm': 0.3,
    'weightkg': 5.7,
    'color': 'Gray',
    'eggGroups': ['Fairy', 'Mineral']
  },
  'goomy': {
    'num': 704,
    'species': 'Goomy',
    'types': ['Dragon'],
    'baseStats': {
      'hp': 45,
      'atk': 50,
      'def': 35,
      'spa': 55,
      'spd': 75,
      'spe': 40
    },
    'abilities': {
      '0': 'Sap Sipper',
      '1': 'Hydration',
      'H': 'Gooey'
    },
    'heightm': 0.3,
    'weightkg': 2.8,
    'color': 'Purple',
    'evos': ['sliggoo'],
    'eggGroups': ['Dragon']
  },
  'sliggoo': {
    'num': 705,
    'species': 'Sliggoo',
    'types': ['Dragon'],
    'baseStats': {
      'hp': 68,
      'atk': 75,
      'def': 53,
      'spa': 83,
      'spd': 113,
      'spe': 60
    },
    'abilities': {
      '0': 'Sap Sipper',
      '1': 'Hydration',
      'H': 'Gooey'
    },
    'heightm': 0.8,
    'weightkg': 17.5,
    'color': 'Purple',
    'prevo': 'goomy',
    'evos': ['goodra'],
    'evoLevel': 40,
    'eggGroups': ['Dragon']
  },
  'goodra': {
    'num': 706,
    'species': 'Goodra',
    'types': ['Dragon'],
    'baseStats': {
      'hp': 90,
      'atk': 100,
      'def': 70,
      'spa': 110,
      'spd': 150,
      'spe': 80
    },
    'abilities': {
      '0': 'Sap Sipper',
      '1': 'Hydration',
      'H': 'Gooey'
    },
    'heightm': 2,
    'weightkg': 150.5,
    'color': 'Purple',
    'prevo': 'sliggoo',
    'evoLevel': 50,
    'eggGroups': ['Dragon']
  },
  'klefki': {
    'num': 707,
    'species': 'Klefki',
    'types': ['Steel', 'Fairy'],
    'baseStats': {
      'hp': 57,
      'atk': 80,
      'def': 91,
      'spa': 80,
      'spd': 87,
      'spe': 75
    },
    'abilities': {
      '0': 'Prankster',
      'H': 'Magician'
    },
    'heightm': 0.2,
    'weightkg': 3,
    'color': 'Gray',
    'eggGroups': ['Mineral']
  },
  'phantump': {
    'num': 708,
    'species': 'Phantump',
    'types': ['Ghost', 'Grass'],
    'baseStats': {
      'hp': 43,
      'atk': 70,
      'def': 48,
      'spa': 50,
      'spd': 60,
      'spe': 38
    },
    'abilities': {
      '0': 'Natural Cure',
      '1': 'Frisk',
      'H': 'Harvest'
    },
    'heightm': 0.4,
    'weightkg': 7,
    'color': 'Brown',
    'evos': ['trevenant'],
    'eggGroups': ['Grass', 'Amorphous']
  },
  'trevenant': {
    'num': 709,
    'species': 'Trevenant',
    'types': ['Ghost', 'Grass'],
    'baseStats': {
      'hp': 85,
      'atk': 110,
      'def': 76,
      'spa': 65,
      'spd': 82,
      'spe': 56
    },
    'abilities': {
      '0': 'Natural Cure',
      '1': 'Frisk',
      'H': 'Harvest'
    },
    'heightm': 1.5,
    'weightkg': 71,
    'color': 'Brown',
    'prevo': 'phantump',
    'evoLevel': 1,
    'eggGroups': ['Grass', 'Amorphous']
  },
  'pumpkaboo': {
    'num': 710,
    'species': 'Pumpkaboo',
    'baseForme': 'Average',
    'types': ['Ghost', 'Grass'],
    'baseStats': {
      'hp': 49,
      'atk': 66,
      'def': 70,
      'spa': 44,
      'spd': 55,
      'spe': 51
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Frisk',
      'H': 'Insomnia'
    },
    'heightm': 0.4,
    'weightkg': 5,
    'color': 'Brown',
    'evos': ['gourgeist'],
    'eggGroups': ['Amorphous'],
    'otherFormes': ['pumpkaboosmall', 'pumpkaboolarge', 'pumpkaboosuper']
  },
  'pumpkaboosmall': {
    'num': 710,
    'species': 'Pumpkaboo-Small',
    'baseSpecies': 'Pumpkaboo',
    'forme': 'Small',
    'formeLetter': 'S',
    'types': ['Ghost', 'Grass'],
    'baseStats': {
      'hp': 44,
      'atk': 66,
      'def': 70,
      'spa': 44,
      'spd': 55,
      'spe': 56
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Frisk',
      'H': 'Insomnia'
    },
    'heightm': 0.3,
    'weightkg': 3.5,
    'color': 'Brown',
    'evos': ['gourgeistsmall'],
    'eggGroups': ['Amorphous']
  },
  'pumpkaboolarge': {
    'num': 710,
    'species': 'Pumpkaboo-Large',
    'baseSpecies': 'Pumpkaboo',
    'forme': 'Large',
    'formeLetter': 'L',
    'types': ['Ghost', 'Grass'],
    'baseStats': {
      'hp': 54,
      'atk': 66,
      'def': 70,
      'spa': 44,
      'spd': 55,
      'spe': 46
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Frisk',
      'H': 'Insomnia'
    },
    'heightm': 0.5,
    'weightkg': 7.5,
    'color': 'Brown',
    'evos': ['gourgeistlarge'],
    'eggGroups': ['Amorphous']
  },
  'pumpkaboosuper': {
    'num': 710,
    'species': 'Pumpkaboo-Super',
    'baseSpecies': 'Pumpkaboo',
    'forme': 'Super',
    'formeLetter': 'S',
    'types': ['Ghost', 'Grass'],
    'baseStats': {
      'hp': 59,
      'atk': 66,
      'def': 70,
      'spa': 44,
      'spd': 55,
      'spe': 41
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Frisk',
      'H': 'Insomnia'
    },
    'heightm': 0.8,
    'weightkg': 15,
    'color': 'Brown',
    'evos': ['gourgeistsuper'],
    'eggGroups': ['Amorphous']
  },
  'gourgeist': {
    'num': 711,
    'species': 'Gourgeist',
    'baseForme': 'Average',
    'types': ['Ghost', 'Grass'],
    'baseStats': {
      'hp': 65,
      'atk': 90,
      'def': 122,
      'spa': 58,
      'spd': 75,
      'spe': 84
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Frisk',
      'H': 'Insomnia'
    },
    'heightm': 0.9,
    'weightkg': 12.5,
    'color': 'Brown',
    'prevo': 'pumpkaboo',
    'evoLevel': 1,
    'eggGroups': ['Amorphous'],
    'otherFormes': ['gourgeistsmall', 'gourgeistlarge', 'gourgeistsuper']
  },
  'gourgeistsmall': {
    'num': 711,
    'species': 'Gourgeist-Small',
    'baseSpecies': 'Gourgeist',
    'forme': 'Small',
    'formeLetter': 'S',
    'types': ['Ghost', 'Grass'],
    'baseStats': {
      'hp': 55,
      'atk': 85,
      'def': 122,
      'spa': 58,
      'spd': 75,
      'spe': 99
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Frisk',
      'H': 'Insomnia'
    },
    'heightm': 0.7,
    'weightkg': 9.5,
    'color': 'Brown',
    'prevo': 'pumpkaboosmall',
    'evoLevel': 1,
    'eggGroups': ['Amorphous']
  },
  'gourgeistlarge': {
    'num': 711,
    'species': 'Gourgeist-Large',
    'baseSpecies': 'Gourgeist',
    'forme': 'Large',
    'formeLetter': 'L',
    'types': ['Ghost', 'Grass'],
    'baseStats': {
      'hp': 75,
      'atk': 95,
      'def': 122,
      'spa': 58,
      'spd': 75,
      'spe': 69
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Frisk',
      'H': 'Insomnia'
    },
    'heightm': 1.1,
    'weightkg': 14,
    'color': 'Brown',
    'prevo': 'pumpkaboolarge',
    'evoLevel': 1,
    'eggGroups': ['Amorphous']
  },
  'gourgeistsuper': {
    'num': 711,
    'species': 'Gourgeist-Super',
    'baseSpecies': 'Gourgeist',
    'forme': 'Super',
    'formeLetter': 'S',
    'types': ['Ghost', 'Grass'],
    'baseStats': {
      'hp': 85,
      'atk': 100,
      'def': 122,
      'spa': 58,
      'spd': 75,
      'spe': 54
    },
    'abilities': {
      '0': 'Pickup',
      '1': 'Frisk',
      'H': 'Insomnia'
    },
    'heightm': 1.7,
    'weightkg': 39,
    'color': 'Brown',
    'prevo': 'pumpkaboosuper',
    'evoLevel': 1,
    'eggGroups': ['Amorphous']
  },
  'bergmite': {
    'num': 712,
    'species': 'Bergmite',
    'types': ['Ice'],
    'baseStats': {
      'hp': 55,
      'atk': 69,
      'def': 85,
      'spa': 32,
      'spd': 35,
      'spe': 28
    },
    'abilities': {
      '0': 'Own Tempo',
      '1': 'Ice Body',
      'H': 'Sturdy'
    },
    'heightm': 1,
    'weightkg': 99.5,
    'color': 'Blue',
    'evos': ['avalugg'],
    'eggGroups': ['Monster']
  },
  'avalugg': {
    'num': 713,
    'species': 'Avalugg',
    'types': ['Ice'],
    'baseStats': {
      'hp': 95,
      'atk': 117,
      'def': 184,
      'spa': 44,
      'spd': 46,
      'spe': 28
    },
    'abilities': {
      '0': 'Own Tempo',
      '1': 'Ice Body',
      'H': 'Sturdy'
    },
    'heightm': 2,
    'weightkg': 505,
    'color': 'Blue',
    'prevo': 'bergmite',
    'evoLevel': 37,
    'eggGroups': ['Monster']
  },
  'noibat': {
    'num': 714,
    'species': 'Noibat',
    'types': ['Flying', 'Dragon'],
    'baseStats': {
      'hp': 40,
      'atk': 30,
      'def': 35,
      'spa': 45,
      'spd': 40,
      'spe': 55
    },
    'abilities': {
      '0': 'Frisk',
      '1': 'Infiltrator',
      'H': 'Telepathy'
    },
    'heightm': 0.5,
    'weightkg': 8,
    'color': 'Purple',
    'evos': ['noivern'],
    'eggGroups': ['Flying']
  },
  'noivern': {
    'num': 715,
    'species': 'Noivern',
    'types': ['Flying', 'Dragon'],
    'baseStats': {
      'hp': 85,
      'atk': 70,
      'def': 80,
      'spa': 97,
      'spd': 80,
      'spe': 123
    },
    'abilities': {
      '0': 'Frisk',
      '1': 'Infiltrator',
      'H': 'Telepathy'
    },
    'heightm': 1.5,
    'weightkg': 85,
    'color': 'Purple',
    'prevo': 'noibat',
    'evoLevel': 48,
    'eggGroups': ['Flying']
  },
  'xerneas': {
    'num': 716,
    'species': 'Xerneas',
    'types': ['Fairy'],
    'gender': 'N',
    'baseStats': {
      'hp': 126,
      'atk': 131,
      'def': 95,
      'spa': 131,
      'spd': 98,
      'spe': 99
    },
    'abilities': {'0': 'Fairy Aura'},
    'heightm': 3,
    'weightkg': 215,
    'color': 'Blue',
    'eggGroups': ['Undiscovered']
  },
  'yveltal': {
    'num': 717,
    'species': 'Yveltal',
    'types': ['Dark', 'Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 126,
      'atk': 131,
      'def': 95,
      'spa': 131,
      'spd': 98,
      'spe': 99
    },
    'abilities': {'0': 'Dark Aura'},
    'heightm': 5.8,
    'weightkg': 203,
    'color': 'Red',
    'eggGroups': ['Undiscovered']
  },
  'zygarde': {
    'num': 718,
    'species': 'Zygarde',
    'baseForme': '50%',
    'types': ['Dragon', 'Ground'],
    'gender': 'N',
    'baseStats': {
      'hp': 108,
      'atk': 100,
      'def': 121,
      'spa': 81,
      'spd': 95,
      'spe': 95
    },
    'abilities': {
      '0': 'Aura Break',
      'H': 'Power Construct'
    },
    'heightm': 5,
    'weightkg': 305,
    'color': 'Green',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['zygarde10', 'zygardecomplete']
  },
  'zygarde10': {
    'num': 718,
    'species': 'Zygarde-10%',
    'baseSpecies': 'Zygarde',
    'forme': '10%',
    'formeLetter': 'T',
    'types': ['Dragon', 'Ground'],
    'gender': 'N',
    'baseStats': {
      'hp': 54,
      'atk': 100,
      'def': 71,
      'spa': 61,
      'spd': 85,
      'spe': 115
    },
    'abilities': {
      '0': 'Aura Break',
      'H': 'Power Construct'
    },
    'heightm': 1.2,
    'weightkg': 33.5,
    'color': 'Green',
    'eggGroups': ['Undiscovered']
  },
  'zygardecomplete': {
    'num': 718,
    'species': 'Zygarde-Complete',
    'baseSpecies': 'Zygarde',
    'forme': 'Complete',
    'formeLetter': 'C',
    'types': ['Dragon', 'Ground'],
    'gender': 'N',
    'baseStats': {
      'hp': 216,
      'atk': 100,
      'def': 121,
      'spa': 91,
      'spd': 95,
      'spe': 85
    },
    'abilities': {'0': 'Power Construct'},
    'heightm': 4.5,
    'weightkg': 610,
    'color': 'Green',
    'eggGroups': ['Undiscovered']
  },
  'diancie': {
    'num': 719,
    'species': 'Diancie',
    'types': ['Rock', 'Fairy'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 100,
      'def': 150,
      'spa': 100,
      'spd': 150,
      'spe': 50
    },
    'abilities': {'0': 'Clear Body'},
    'heightm': 0.7,
    'weightkg': 8.8,
    'color': 'Pink',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['dianciemega']
  },
  'dianciemega': {
    'num': 719,
    'species': 'Diancie-Mega',
    'baseSpecies': 'Diancie',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Rock', 'Fairy'],
    'gender': 'N',
    'baseStats': {
      'hp': 50,
      'atk': 160,
      'def': 110,
      'spa': 160,
      'spd': 110,
      'spe': 110
    },
    'abilities': {'0': 'Magic Bounce'},
    'heightm': 1.1,
    'weightkg': 27.8,
    'color': 'Pink',
    'eggGroups': ['Undiscovered']
  },
  'hoopa': {
    'num': 720,
    'species': 'Hoopa',
    'baseForme': 'Confined',
    'types': ['Psychic', 'Ghost'],
    'gender': 'N',
    'baseStats': {
      'hp': 80,
      'atk': 110,
      'def': 60,
      'spa': 150,
      'spd': 130,
      'spe': 70
    },
    'abilities': {'0': 'Magician'},
    'heightm': 0.5,
    'weightkg': 9,
    'color': 'Purple',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['hoopaunbound']
  },
  'hoopaunbound': {
    'num': 720,
    'species': 'Hoopa-Unbound',
    'baseSpecies': 'Hoopa',
    'forme': 'Unbound',
    'formeLetter': 'U',
    'types': ['Psychic', 'Dark'],
    'gender': 'N',
    'baseStats': {
      'hp': 80,
      'atk': 160,
      'def': 60,
      'spa': 170,
      'spd': 130,
      'spe': 80
    },
    'abilities': {'0': 'Magician'},
    'heightm': 6.5,
    'weightkg': 490,
    'color': 'Purple',
    'eggGroups': ['Undiscovered']
  },
  'volcanion': {
    'num': 721,
    'species': 'Volcanion',
    'types': ['Fire', 'Water'],
    'gender': 'N',
    'baseStats': {
      'hp': 80,
      'atk': 110,
      'def': 120,
      'spa': 130,
      'spd': 90,
      'spe': 70
    },
    'abilities': {'0': 'Water Absorb'},
    'heightm': 1.7,
    'weightkg': 195,
    'color': 'Brown',
    'eggGroups': ['Undiscovered']
  },
  'rowlet': {
    'num': 722,
    'species': 'Rowlet',
    'types': ['Grass', 'Flying'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 68,
      'atk': 55,
      'def': 55,
      'spa': 50,
      'spd': 50,
      'spe': 42
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Long Reach'
    },
    'heightm': 0.3,
    'weightkg': 1.5,
    'color': 'Brown',
    'evos': ['dartrix'],
    'eggGroups': ['Flying']
  },
  'dartrix': {
    'num': 723,
    'species': 'Dartrix',
    'types': ['Grass', 'Flying'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 78,
      'atk': 75,
      'def': 75,
      'spa': 70,
      'spd': 70,
      'spe': 52
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Long Reach'
    },
    'heightm': 0.7,
    'weightkg': 16,
    'color': 'Brown',
    'prevo': 'rowlet',
    'evos': ['decidueye'],
    'evoLevel': 17,
    'eggGroups': ['Flying']
  },
  'decidueye': {
    'num': 724,
    'species': 'Decidueye',
    'types': ['Grass', 'Ghost'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 78,
      'atk': 107,
      'def': 75,
      'spa': 100,
      'spd': 100,
      'spe': 70
    },
    'abilities': {
      '0': 'Overgrow',
      'H': 'Long Reach'
    },
    'heightm': 1.6,
    'weightkg': 36.6,
    'color': 'Brown',
    'prevo': 'dartrix',
    'evoLevel': 34,
    'eggGroups': ['Flying']
  },
  'litten': {
    'num': 725,
    'species': 'Litten',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 45,
      'atk': 65,
      'def': 40,
      'spa': 60,
      'spd': 40,
      'spe': 70
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Intimidate'
    },
    'heightm': 0.4,
    'weightkg': 4.3,
    'color': 'Red',
    'evos': ['torracat'],
    'eggGroups': ['Field']
  },
  'torracat': {
    'num': 726,
    'species': 'Torracat',
    'types': ['Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 65,
      'atk': 85,
      'def': 50,
      'spa': 80,
      'spd': 50,
      'spe': 90
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Intimidate'
    },
    'heightm': 0.7,
    'weightkg': 25,
    'color': 'Red',
    'prevo': 'litten',
    'evos': ['incineroar'],
    'evoLevel': 17,
    'eggGroups': ['Field']
  },
  'incineroar': {
    'num': 727,
    'species': 'Incineroar',
    'types': ['Fire', 'Dark'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 95,
      'atk': 115,
      'def': 90,
      'spa': 80,
      'spd': 90,
      'spe': 60
    },
    'abilities': {
      '0': 'Blaze',
      'H': 'Intimidate'
    },
    'heightm': 1.8,
    'weightkg': 83,
    'color': 'Red',
    'prevo': 'torracat',
    'evoLevel': 34,
    'eggGroups': ['Field']
  },
  'popplio': {
    'num': 728,
    'species': 'Popplio',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 50,
      'atk': 54,
      'def': 54,
      'spa': 66,
      'spd': 56,
      'spe': 40
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Liquid Voice'
    },
    'heightm': 0.4,
    'weightkg': 7.5,
    'color': 'Blue',
    'evos': ['brionne'],
    'eggGroups': ['Water 1', 'Field']
  },
  'brionne': {
    'num': 729,
    'species': 'Brionne',
    'types': ['Water'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 60,
      'atk': 69,
      'def': 69,
      'spa': 91,
      'spd': 81,
      'spe': 50
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Liquid Voice'
    },
    'heightm': 0.6,
    'weightkg': 17.5,
    'color': 'Blue',
    'prevo': 'popplio',
    'evos': ['primarina'],
    'evoLevel': 17,
    'eggGroups': ['Water 1', 'Field']
  },
  'primarina': {
    'num': 730,
    'species': 'Primarina',
    'types': ['Water', 'Fairy'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 80,
      'atk': 74,
      'def': 74,
      'spa': 126,
      'spd': 116,
      'spe': 60
    },
    'abilities': {
      '0': 'Torrent',
      'H': 'Liquid Voice'
    },
    'heightm': 1.8,
    'weightkg': 44,
    'color': 'Blue',
    'prevo': 'brionne',
    'evoLevel': 34,
    'eggGroups': ['Water 1', 'Field']
  },
  'pikipek': {
    'num': 731,
    'species': 'Pikipek',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 35,
      'atk': 75,
      'def': 30,
      'spa': 30,
      'spd': 30,
      'spe': 65
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Skill Link',
      'H': 'Pickup'
    },
    'heightm': 0.3,
    'weightkg': 1.2,
    'color': 'Black',
    'evos': ['trumbeak'],
    'eggGroups': ['Flying']
  },
  'trumbeak': {
    'num': 732,
    'species': 'Trumbeak',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 55,
      'atk': 85,
      'def': 50,
      'spa': 40,
      'spd': 50,
      'spe': 75
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Skill Link',
      'H': 'Pickup'
    },
    'heightm': 0.6,
    'weightkg': 14.8,
    'color': 'Black',
    'prevo': 'pikipek',
    'evos': ['toucannon'],
    'evoLevel': 14,
    'eggGroups': ['Flying']
  },
  'toucannon': {
    'num': 733,
    'species': 'Toucannon',
    'types': ['Normal', 'Flying'],
    'baseStats': {
      'hp': 80,
      'atk': 120,
      'def': 75,
      'spa': 75,
      'spd': 75,
      'spe': 60
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Skill Link',
      'H': 'Sheer Force'
    },
    'heightm': 1.1,
    'weightkg': 26,
    'color': 'Black',
    'prevo': 'trumbeak',
    'evoLevel': 28,
    'eggGroups': ['Flying']
  },
  'yungoos': {
    'num': 734,
    'species': 'Yungoos',
    'types': ['Normal'],
    'baseStats': {
      'hp': 48,
      'atk': 70,
      'def': 30,
      'spa': 30,
      'spd': 30,
      'spe': 45
    },
    'abilities': {
      '0': 'Stakeout',
      '1': 'Strong Jaw',
      'H': 'Adaptability'
    },
    'heightm': 0.4,
    'weightkg': 6,
    'color': 'Brown',
    'evos': ['gumshoos'],
    'eggGroups': ['Field']
  },
  'gumshoos': {
    'num': 735,
    'species': 'Gumshoos',
    'types': ['Normal'],
    'baseStats': {
      'hp': 88,
      'atk': 110,
      'def': 60,
      'spa': 55,
      'spd': 60,
      'spe': 45
    },
    'abilities': {
      '0': 'Stakeout',
      '1': 'Strong Jaw',
      'H': 'Adaptability'
    },
    'heightm': 0.7,
    'weightkg': 14.2,
    'color': 'Brown',
    'prevo': 'yungoos',
    'evoLevel': 20,
    'eggGroups': ['Field'],
    'otherFormes': ['gumshoostotem']
  },
  'gumshoostotem': {
    'num': 735,
    'species': 'Gumshoos-Totem',
    'baseSpecies': 'Gumshoos',
    'forme': 'Totem',
    'formeLetter': 'T',
    'types': ['Normal'],
    'baseStats': {
      'hp': 88,
      'atk': 110,
      'def': 60,
      'spa': 55,
      'spd': 60,
      'spe': 45
    },
    'abilities': {'0': 'Adaptability'},
    'heightm': 1.4,
    'weightkg': 60,
    'color': 'Brown',
    'eggGroups': ['Field']
  },
  'grubbin': {
    'num': 736,
    'species': 'Grubbin',
    'types': ['Bug'],
    'baseStats': {
      'hp': 47,
      'atk': 62,
      'def': 45,
      'spa': 55,
      'spd': 45,
      'spe': 46
    },
    'abilities': {'0': 'Swarm'},
    'heightm': 0.4,
    'weightkg': 4.4,
    'color': 'Gray',
    'evos': ['charjabug'],
    'eggGroups': ['Bug']
  },
  'charjabug': {
    'num': 737,
    'species': 'Charjabug',
    'types': ['Bug', 'Electric'],
    'baseStats': {
      'hp': 57,
      'atk': 82,
      'def': 95,
      'spa': 55,
      'spd': 75,
      'spe': 36
    },
    'abilities': {'0': 'Battery'},
    'heightm': 0.5,
    'weightkg': 10.5,
    'color': 'Green',
    'prevo': 'grubbin',
    'evos': ['vikavolt'],
    'evoLevel': 20,
    'eggGroups': ['Bug']
  },
  'vikavolt': {
    'num': 738,
    'species': 'Vikavolt',
    'types': ['Bug', 'Electric'],
    'baseStats': {
      'hp': 77,
      'atk': 70,
      'def': 90,
      'spa': 145,
      'spd': 75,
      'spe': 43
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.5,
    'weightkg': 45,
    'color': 'Blue',
    'prevo': 'charjabug',
    'evoLevel': 21,
    'eggGroups': ['Bug'],
    'otherFormes': ['vikavolttotem']
  },
  'vikavolttotem': {
    'num': 738,
    'species': 'Vikavolt-Totem',
    'baseSpecies': 'Vikavolt',
    'forme': 'Totem',
    'formeLetter': 'T',
    'types': ['Bug', 'Electric'],
    'baseStats': {
      'hp': 77,
      'atk': 70,
      'def': 90,
      'spa': 145,
      'spd': 75,
      'spe': 43
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 2.6,
    'weightkg': 147.5,
    'color': 'Blue',
    'eggGroups': ['Bug']
  },
  'crabrawler': {
    'num': 739,
    'species': 'Crabrawler',
    'types': ['Fighting'],
    'baseStats': {
      'hp': 47,
      'atk': 82,
      'def': 57,
      'spa': 42,
      'spd': 47,
      'spe': 63
    },
    'abilities': {
      '0': 'Hyper Cutter',
      '1': 'Iron Fist',
      'H': 'Anger Point'
    },
    'heightm': 0.6,
    'weightkg': 7,
    'color': 'Purple',
    'evos': ['crabominable'],
    'eggGroups': ['Water 3']
  },
  'crabominable': {
    'num': 740,
    'species': 'Crabominable',
    'types': ['Fighting', 'Ice'],
    'baseStats': {
      'hp': 97,
      'atk': 132,
      'def': 77,
      'spa': 62,
      'spd': 67,
      'spe': 43
    },
    'abilities': {
      '0': 'Hyper Cutter',
      '1': 'Iron Fist',
      'H': 'Anger Point'
    },
    'heightm': 1.7,
    'weightkg': 180,
    'color': 'White',
    'prevo': 'crabrawler',
    'evoLevel': 2,
    'eggGroups': ['Water 3']
  },
  'oricorio': {
    'num': 741,
    'species': 'Oricorio',
    'baseForme': 'Baile',
    'types': ['Fire', 'Flying'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 75,
      'atk': 70,
      'def': 70,
      'spa': 98,
      'spd': 70,
      'spe': 93
    },
    'abilities': {'0': 'Dancer'},
    'heightm': 0.6,
    'weightkg': 3.4,
    'color': 'Red',
    'eggGroups': ['Flying'],
    'otherFormes': ['oricoriopompom', 'oricoriopau', 'oricoriosensu']
  },
  'oricoriopompom': {
    'num': 741,
    'species': 'Oricorio-Pom-Pom',
    'baseSpecies': 'Oricorio',
    'forme': 'Pom-Pom',
    'formeLetter': 'P',
    'types': ['Electric', 'Flying'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 75,
      'atk': 70,
      'def': 70,
      'spa': 98,
      'spd': 70,
      'spe': 93
    },
    'abilities': {'0': 'Dancer'},
    'heightm': 0.6,
    'weightkg': 3.4,
    'color': 'Yellow',
    'eggGroups': ['Flying']
  },
  'oricoriopau': {
    'num': 741,
    'species': 'Oricorio-Pa\'u',
    'baseSpecies': 'Oricorio',
    'forme': 'Pa\'u',
    'formeLetter': 'P',
    'types': ['Psychic', 'Flying'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 75,
      'atk': 70,
      'def': 70,
      'spa': 98,
      'spd': 70,
      'spe': 93
    },
    'abilities': {'0': 'Dancer'},
    'heightm': 0.6,
    'weightkg': 3.4,
    'color': 'Pink',
    'eggGroups': ['Flying']
  },
  'oricoriosensu': {
    'num': 741,
    'species': 'Oricorio-Sensu',
    'baseSpecies': 'Oricorio',
    'forme': 'Sensu',
    'formeLetter': 'S',
    'types': ['Ghost', 'Flying'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 75,
      'atk': 70,
      'def': 70,
      'spa': 98,
      'spd': 70,
      'spe': 93
    },
    'abilities': {'0': 'Dancer'},
    'heightm': 0.6,
    'weightkg': 3.4,
    'color': 'Purple',
    'eggGroups': ['Flying']
  },
  'cutiefly': {
    'num': 742,
    'species': 'Cutiefly',
    'types': ['Bug', 'Fairy'],
    'baseStats': {
      'hp': 40,
      'atk': 45,
      'def': 40,
      'spa': 55,
      'spd': 40,
      'spe': 84
    },
    'abilities': {
      '0': 'Honey Gather',
      '1': 'Shield Dust',
      'H': 'Sweet Veil'
    },
    'heightm': 0.1,
    'weightkg': 0.2,
    'color': 'Yellow',
    'evos': ['ribombee'],
    'eggGroups': ['Bug', 'Fairy']
  },
  'ribombee': {
    'num': 743,
    'species': 'Ribombee',
    'types': ['Bug', 'Fairy'],
    'baseStats': {
      'hp': 60,
      'atk': 55,
      'def': 60,
      'spa': 95,
      'spd': 70,
      'spe': 124
    },
    'abilities': {
      '0': 'Honey Gather',
      '1': 'Shield Dust',
      'H': 'Sweet Veil'
    },
    'heightm': 0.2,
    'weightkg': 0.5,
    'color': 'Yellow',
    'prevo': 'cutiefly',
    'evoLevel': 25,
    'eggGroups': ['Bug', 'Fairy'],
    'otherFormes': ['ribombeetotem']
  },
  'ribombeetotem': {
    'num': 743,
    'species': 'Ribombee-Totem',
    'baseSpecies': 'Ribombee',
    'forme': 'Totem',
    'formeLetter': 'T',
    'types': ['Bug', 'Fairy'],
    'baseStats': {
      'hp': 60,
      'atk': 55,
      'def': 60,
      'spa': 95,
      'spd': 70,
      'spe': 124
    },
    'abilities': {'0': 'Sweet Veil'},
    'heightm': 0.4,
    'weightkg': 2,
    'color': 'Yellow',
    'eggGroups': ['Bug', 'Fairy']
  },
  'rockruff': {
    'num': 744,
    'species': 'Rockruff',
    'baseForme': 'Midday',
    'types': ['Rock'],
    'baseStats': {
      'hp': 45,
      'atk': 65,
      'def': 40,
      'spa': 30,
      'spd': 40,
      'spe': 60
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Vital Spirit',
      'H': 'Steadfast',
      'S': 'Own Tempo'
    },
    'heightm': 0.5,
    'weightkg': 9.2,
    'color': 'Brown',
    'evos': ['lycanroc', 'lycanrocmidnight', 'lycanrocdusk'],
    'eggGroups': ['Field']
  },
  'lycanroc': {
    'num': 745,
    'species': 'Lycanroc',
    'baseForme': 'Midday',
    'types': ['Rock'],
    'baseStats': {
      'hp': 75,
      'atk': 115,
      'def': 65,
      'spa': 55,
      'spd': 65,
      'spe': 112
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Sand Rush',
      'H': 'Steadfast'
    },
    'heightm': 0.8,
    'weightkg': 25,
    'color': 'Brown',
    'prevo': 'rockruff',
    'evoLevel': 25,
    'eggGroups': ['Field'],
    'otherFormes': ['lycanrocmidnight', 'lycanrocdusk']
  },
  'lycanrocmidnight': {
    'num': 745,
    'species': 'Lycanroc-Midnight',
    'baseSpecies': 'Lycanroc',
    'forme': 'Midnight',
    'formeLetter': 'M',
    'types': ['Rock'],
    'baseStats': {
      'hp': 85,
      'atk': 115,
      'def': 75,
      'spa': 55,
      'spd': 75,
      'spe': 82
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Vital Spirit',
      'H': 'No Guard'
    },
    'heightm': 1.1,
    'weightkg': 25,
    'color': 'Red',
    'prevo': 'rockruff',
    'evoLevel': 25,
    'eggGroups': ['Field']
  },
  'lycanrocdusk': {
    'num': 745,
    'species': 'Lycanroc-Dusk',
    'baseSpecies': 'Lycanroc',
    'forme': 'Dusk',
    'formeLetter': 'D',
    'types': ['Rock'],
    'baseStats': {
      'hp': 75,
      'atk': 117,
      'def': 65,
      'spa': 55,
      'spd': 65,
      'spe': 110
    },
    'abilities': {'0': 'Tough Claws'},
    'heightm': 0.8,
    'weightkg': 25,
    'color': 'Brown',
    'prevo': 'rockruff',
    'evoLevel': 25,
    'eggGroups': ['Field']
  },
  'wishiwashi': {
    'num': 746,
    'species': 'Wishiwashi',
    'baseForme': 'Solo',
    'types': ['Water'],
    'baseStats': {
      'hp': 45,
      'atk': 20,
      'def': 20,
      'spa': 25,
      'spd': 25,
      'spe': 40
    },
    'abilities': {'0': 'Schooling'},
    'heightm': 0.2,
    'weightkg': 0.3,
    'color': 'Blue',
    'eggGroups': ['Water 2'],
    'otherFormes': ['wishiwashischool']
  },
  'wishiwashischool': {
    'num': 746,
    'species': 'Wishiwashi-School',
    'baseSpecies': 'Wishiwashi',
    'forme': 'School',
    'formeLetter': 'S',
    'types': ['Water'],
    'baseStats': {
      'hp': 45,
      'atk': 140,
      'def': 130,
      'spa': 140,
      'spd': 135,
      'spe': 30
    },
    'abilities': {'0': 'Schooling'},
    'heightm': 8.2,
    'weightkg': 78.6,
    'color': 'Blue',
    'eggGroups': ['Water 2']
  },
  'mareanie': {
    'num': 747,
    'species': 'Mareanie',
    'types': ['Poison', 'Water'],
    'baseStats': {
      'hp': 50,
      'atk': 53,
      'def': 62,
      'spa': 43,
      'spd': 52,
      'spe': 45
    },
    'abilities': {
      '0': 'Merciless',
      '1': 'Limber',
      'H': 'Regenerator'
    },
    'heightm': 0.4,
    'weightkg': 8,
    'color': 'Blue',
    'evos': ['toxapex'],
    'eggGroups': ['Water 1']
  },
  'toxapex': {
    'num': 748,
    'species': 'Toxapex',
    'types': ['Poison', 'Water'],
    'baseStats': {
      'hp': 50,
      'atk': 63,
      'def': 152,
      'spa': 53,
      'spd': 142,
      'spe': 35
    },
    'abilities': {
      '0': 'Merciless',
      '1': 'Limber',
      'H': 'Regenerator'
    },
    'heightm': 0.7,
    'weightkg': 14.5,
    'color': 'Blue',
    'prevo': 'mareanie',
    'evoLevel': 38,
    'eggGroups': ['Water 1']
  },
  'mudbray': {
    'num': 749,
    'species': 'Mudbray',
    'types': ['Ground'],
    'baseStats': {
      'hp': 70,
      'atk': 100,
      'def': 70,
      'spa': 45,
      'spd': 55,
      'spe': 45
    },
    'abilities': {
      '0': 'Own Tempo',
      '1': 'Stamina',
      'H': 'Inner Focus'
    },
    'heightm': 1,
    'weightkg': 110,
    'color': 'Brown',
    'evos': ['mudsdale'],
    'eggGroups': ['Field']
  },
  'mudsdale': {
    'num': 750,
    'species': 'Mudsdale',
    'types': ['Ground'],
    'baseStats': {
      'hp': 100,
      'atk': 125,
      'def': 100,
      'spa': 55,
      'spd': 85,
      'spe': 35
    },
    'abilities': {
      '0': 'Own Tempo',
      '1': 'Stamina',
      'H': 'Inner Focus'
    },
    'heightm': 2.5,
    'weightkg': 920,
    'color': 'Brown',
    'prevo': 'mudbray',
    'evoLevel': 30,
    'eggGroups': ['Field']
  },
  'dewpider': {
    'num': 751,
    'species': 'Dewpider',
    'types': ['Water', 'Bug'],
    'baseStats': {
      'hp': 38,
      'atk': 40,
      'def': 52,
      'spa': 40,
      'spd': 72,
      'spe': 27
    },
    'abilities': {
      '0': 'Water Bubble',
      'H': 'Water Absorb'
    },
    'heightm': 0.3,
    'weightkg': 4,
    'color': 'Green',
    'evos': ['araquanid'],
    'eggGroups': ['Water 1', 'Bug']
  },
  'araquanid': {
    'num': 752,
    'species': 'Araquanid',
    'types': ['Water', 'Bug'],
    'baseStats': {
      'hp': 68,
      'atk': 70,
      'def': 92,
      'spa': 50,
      'spd': 132,
      'spe': 42
    },
    'abilities': {
      '0': 'Water Bubble',
      'H': 'Water Absorb'
    },
    'heightm': 1.8,
    'weightkg': 82,
    'color': 'Green',
    'prevo': 'dewpider',
    'evoLevel': 22,
    'eggGroups': ['Water 1', 'Bug'],
    'otherFormes': ['araquanidtotem']
  },
  'araquanidtotem': {
    'num': 752,
    'species': 'Araquanid-Totem',
    'baseSpecies': 'Araquanid',
    'forme': 'Totem',
    'formeLetter': 'T',
    'types': ['Water', 'Bug'],
    'baseStats': {
      'hp': 68,
      'atk': 70,
      'def': 92,
      'spa': 50,
      'spd': 132,
      'spe': 42
    },
    'abilities': {'0': 'Water Bubble'},
    'heightm': 3.1,
    'weightkg': 217.5,
    'color': 'Green',
    'eggGroups': ['Water 1', 'Bug']
  },
  'fomantis': {
    'num': 753,
    'species': 'Fomantis',
    'types': ['Grass'],
    'baseStats': {
      'hp': 40,
      'atk': 55,
      'def': 35,
      'spa': 50,
      'spd': 35,
      'spe': 35
    },
    'abilities': {
      '0': 'Leaf Guard',
      'H': 'Contrary'
    },
    'heightm': 0.3,
    'weightkg': 1.5,
    'color': 'Pink',
    'evos': ['lurantis'],
    'eggGroups': ['Grass']
  },
  'lurantis': {
    'num': 754,
    'species': 'Lurantis',
    'types': ['Grass'],
    'baseStats': {
      'hp': 70,
      'atk': 105,
      'def': 90,
      'spa': 80,
      'spd': 90,
      'spe': 45
    },
    'abilities': {
      '0': 'Leaf Guard',
      'H': 'Contrary'
    },
    'heightm': 0.9,
    'weightkg': 18.5,
    'color': 'Pink',
    'prevo': 'fomantis',
    'evoLevel': 34,
    'eggGroups': ['Grass'],
    'otherFormes': ['lurantistotem']
  },
  'lurantistotem': {
    'num': 754,
    'species': 'Lurantis-Totem',
    'baseSpecies': 'Lurantis',
    'forme': 'Totem',
    'formeLetter': 'T',
    'types': ['Grass'],
    'baseStats': {
      'hp': 70,
      'atk': 105,
      'def': 90,
      'spa': 80,
      'spd': 90,
      'spe': 45
    },
    'abilities': {'0': 'Leaf Guard'},
    'heightm': 1.5,
    'weightkg': 58,
    'color': 'Pink',
    'eggGroups': ['Grass']
  },
  'morelull': {
    'num': 755,
    'species': 'Morelull',
    'types': ['Grass', 'Fairy'],
    'baseStats': {
      'hp': 40,
      'atk': 35,
      'def': 55,
      'spa': 65,
      'spd': 75,
      'spe': 15
    },
    'abilities': {
      '0': 'Illuminate',
      '1': 'Effect Spore',
      'H': 'Rain Dish'
    },
    'heightm': 0.2,
    'weightkg': 1.5,
    'color': 'Purple',
    'evos': ['shiinotic'],
    'eggGroups': ['Grass']
  },
  'shiinotic': {
    'num': 756,
    'species': 'Shiinotic',
    'types': ['Grass', 'Fairy'],
    'baseStats': {
      'hp': 60,
      'atk': 45,
      'def': 80,
      'spa': 90,
      'spd': 100,
      'spe': 30
    },
    'abilities': {
      '0': 'Illuminate',
      '1': 'Effect Spore',
      'H': 'Rain Dish'
    },
    'heightm': 1,
    'weightkg': 11.5,
    'color': 'Purple',
    'prevo': 'morelull',
    'evoLevel': 24,
    'eggGroups': ['Grass']
  },
  'salandit': {
    'num': 757,
    'species': 'Salandit',
    'types': ['Poison', 'Fire'],
    'genderRatio': {
      'M': 0.875,
      'F': 0.125
    },
    'baseStats': {
      'hp': 48,
      'atk': 44,
      'def': 40,
      'spa': 71,
      'spd': 40,
      'spe': 77
    },
    'abilities': {
      '0': 'Corrosion',
      'H': 'Oblivious'
    },
    'heightm': 0.6,
    'weightkg': 4.8,
    'color': 'Black',
    'evos': ['salazzle'],
    'eggGroups': ['Monster', 'Dragon']
  },
  'salazzle': {
    'num': 758,
    'species': 'Salazzle',
    'types': ['Poison', 'Fire'],
    'gender': 'F',
    'baseStats': {
      'hp': 68,
      'atk': 64,
      'def': 60,
      'spa': 111,
      'spd': 60,
      'spe': 117
    },
    'abilities': {
      '0': 'Corrosion',
      'H': 'Oblivious'
    },
    'heightm': 1.2,
    'weightkg': 22.2,
    'color': 'Black',
    'prevo': 'salandit',
    'evoLevel': 33,
    'eggGroups': ['Monster', 'Dragon'],
    'otherFormes': ['salazzletotem']
  },
  'salazzletotem': {
    'num': 758,
    'species': 'Salazzle-Totem',
    'baseSpecies': 'Salazzle',
    'forme': 'Totem',
    'formeLetter': 'T',
    'types': ['Poison', 'Fire'],
    'gender': 'F',
    'baseStats': {
      'hp': 68,
      'atk': 64,
      'def': 60,
      'spa': 111,
      'spd': 60,
      'spe': 117
    },
    'abilities': {'0': 'Corrosion'},
    'heightm': 2.1,
    'weightkg': 81,
    'color': 'Black',
    'eggGroups': ['Monster', 'Dragon']
  },
  'stufful': {
    'num': 759,
    'species': 'Stufful',
    'types': ['Normal', 'Fighting'],
    'baseStats': {
      'hp': 70,
      'atk': 75,
      'def': 50,
      'spa': 45,
      'spd': 50,
      'spe': 50
    },
    'abilities': {
      '0': 'Fluffy',
      '1': 'Klutz',
      'H': 'Cute Charm'
    },
    'heightm': 0.5,
    'weightkg': 6.8,
    'color': 'Pink',
    'evos': ['bewear'],
    'eggGroups': ['Field']
  },
  'bewear': {
    'num': 760,
    'species': 'Bewear',
    'types': ['Normal', 'Fighting'],
    'baseStats': {
      'hp': 120,
      'atk': 125,
      'def': 80,
      'spa': 55,
      'spd': 60,
      'spe': 60
    },
    'abilities': {
      '0': 'Fluffy',
      '1': 'Klutz',
      'H': 'Unnerve'
    },
    'heightm': 2.1,
    'weightkg': 135,
    'color': 'Pink',
    'prevo': 'stufful',
    'evoLevel': 27,
    'eggGroups': ['Field']
  },
  'bounsweet': {
    'num': 761,
    'species': 'Bounsweet',
    'types': ['Grass'],
    'gender': 'F',
    'baseStats': {
      'hp': 42,
      'atk': 30,
      'def': 38,
      'spa': 30,
      'spd': 38,
      'spe': 32
    },
    'abilities': {
      '0': 'Leaf Guard',
      '1': 'Oblivious',
      'H': 'Sweet Veil'
    },
    'heightm': 0.3,
    'weightkg': 3.2,
    'color': 'Purple',
    'evos': ['steenee'],
    'eggGroups': ['Grass']
  },
  'steenee': {
    'num': 762,
    'species': 'Steenee',
    'types': ['Grass'],
    'gender': 'F',
    'baseStats': {
      'hp': 52,
      'atk': 40,
      'def': 48,
      'spa': 40,
      'spd': 48,
      'spe': 62
    },
    'abilities': {
      '0': 'Leaf Guard',
      '1': 'Oblivious',
      'H': 'Sweet Veil'
    },
    'heightm': 0.7,
    'weightkg': 8.2,
    'color': 'Purple',
    'prevo': 'bounsweet',
    'evos': ['tsareena'],
    'evoLevel': 18,
    'eggGroups': ['Grass']
  },
  'tsareena': {
    'num': 763,
    'species': 'Tsareena',
    'types': ['Grass'],
    'gender': 'F',
    'baseStats': {
      'hp': 72,
      'atk': 120,
      'def': 98,
      'spa': 50,
      'spd': 98,
      'spe': 72
    },
    'abilities': {
      '0': 'Leaf Guard',
      '1': 'Queenly Majesty',
      'H': 'Sweet Veil'
    },
    'heightm': 1.2,
    'weightkg': 21.4,
    'color': 'Purple',
    'prevo': 'steenee',
    'evoLevel': 19,
    'evoMove': 'Stomp',
    'eggGroups': ['Grass']
  },
  'comfey': {
    'num': 764,
    'species': 'Comfey',
    'types': ['Fairy'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 51,
      'atk': 52,
      'def': 90,
      'spa': 82,
      'spd': 110,
      'spe': 100
    },
    'abilities': {
      '0': 'Flower Veil',
      '1': 'Triage',
      'H': 'Natural Cure'
    },
    'heightm': 0.1,
    'weightkg': 0.3,
    'color': 'Green',
    'eggGroups': ['Grass']
  },
  'oranguru': {
    'num': 765,
    'species': 'Oranguru',
    'types': ['Normal', 'Psychic'],
    'baseStats': {
      'hp': 90,
      'atk': 60,
      'def': 80,
      'spa': 90,
      'spd': 110,
      'spe': 60
    },
    'abilities': {
      '0': 'Inner Focus',
      '1': 'Telepathy',
      'H': 'Symbiosis'
    },
    'heightm': 1.5,
    'weightkg': 76,
    'color': 'White',
    'eggGroups': ['Field']
  },
  'passimian': {
    'num': 766,
    'species': 'Passimian',
    'types': ['Fighting'],
    'baseStats': {
      'hp': 100,
      'atk': 120,
      'def': 90,
      'spa': 40,
      'spd': 60,
      'spe': 80
    },
    'abilities': {
      '0': 'Receiver',
      'H': 'Defiant'
    },
    'heightm': 2,
    'weightkg': 82.8,
    'color': 'White',
    'eggGroups': ['Field']
  },
  'wimpod': {
    'num': 767,
    'species': 'Wimpod',
    'types': ['Bug', 'Water'],
    'baseStats': {
      'hp': 25,
      'atk': 35,
      'def': 40,
      'spa': 20,
      'spd': 30,
      'spe': 80
    },
    'abilities': {'0': 'Wimp Out'},
    'heightm': 0.5,
    'weightkg': 12,
    'color': 'Gray',
    'evos': ['golisopod'],
    'eggGroups': ['Bug', 'Water 3']
  },
  'golisopod': {
    'num': 768,
    'species': 'Golisopod',
    'types': ['Bug', 'Water'],
    'baseStats': {
      'hp': 75,
      'atk': 125,
      'def': 140,
      'spa': 60,
      'spd': 90,
      'spe': 40
    },
    'abilities': {'0': 'Emergency Exit'},
    'heightm': 2,
    'weightkg': 108,
    'color': 'Gray',
    'prevo': 'wimpod',
    'evoLevel': 30,
    'eggGroups': ['Bug', 'Water 3']
  },
  'sandygast': {
    'num': 769,
    'species': 'Sandygast',
    'types': ['Ghost', 'Ground'],
    'baseStats': {
      'hp': 55,
      'atk': 55,
      'def': 80,
      'spa': 70,
      'spd': 45,
      'spe': 15
    },
    'abilities': {
      '0': 'Water Compaction',
      'H': 'Sand Veil'
    },
    'heightm': 0.5,
    'weightkg': 70,
    'color': 'Brown',
    'evos': ['palossand'],
    'eggGroups': ['Amorphous']
  },
  'palossand': {
    'num': 770,
    'species': 'Palossand',
    'types': ['Ghost', 'Ground'],
    'baseStats': {
      'hp': 85,
      'atk': 75,
      'def': 110,
      'spa': 100,
      'spd': 75,
      'spe': 35
    },
    'abilities': {
      '0': 'Water Compaction',
      'H': 'Sand Veil'
    },
    'heightm': 1.3,
    'weightkg': 250,
    'color': 'Brown',
    'prevo': 'sandygast',
    'evoLevel': 42,
    'eggGroups': ['Amorphous']
  },
  'pyukumuku': {
    'num': 771,
    'species': 'Pyukumuku',
    'types': ['Water'],
    'baseStats': {
      'hp': 55,
      'atk': 60,
      'def': 130,
      'spa': 30,
      'spd': 130,
      'spe': 5
    },
    'abilities': {
      '0': 'Innards Out',
      'H': 'Unaware'
    },
    'heightm': 0.3,
    'weightkg': 1.2,
    'color': 'Black',
    'eggGroups': ['Water 1']
  },
  'typenull': {
    'num': 772,
    'species': 'Type: Null',
    'types': ['Normal'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 59
    },
    'abilities': {'0': 'Battle Armor'},
    'heightm': 1.9,
    'weightkg': 120.5,
    'color': 'Gray',
    'evos': ['silvally'],
    'eggGroups': ['Undiscovered']
  },
  'silvally': {
    'num': 773,
    'species': 'Silvally',
    'types': ['Normal'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 41,
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['silvallybug', 'silvallydark', 'silvallydragon', 'silvallyelectric', 'silvallyfairy', 'silvallyfighting', 'silvallyfire', 'silvallyflying', 'silvallyghost', 'silvallygrass', 'silvallyground', 'silvallyice', 'silvallypoison', 'silvallypsychic', 'silvallyrock', 'silvallysteel', 'silvallywater']
  },
  'silvallybug': {
    'num': 773,
    'species': 'Silvally-Bug',
    'baseSpecies': 'Silvally',
    'forme': 'Bug',
    'formeLetter': 'B',
    'types': ['Bug'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallydark': {
    'num': 773,
    'species': 'Silvally-Dark',
    'baseSpecies': 'Silvally',
    'forme': 'Dark',
    'formeLetter': 'D',
    'types': ['Dark'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallydragon': {
    'num': 773,
    'species': 'Silvally-Dragon',
    'baseSpecies': 'Silvally',
    'forme': 'Dragon',
    'formeLetter': 'D',
    'types': ['Dragon'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallyelectric': {
    'num': 773,
    'species': 'Silvally-Electric',
    'baseSpecies': 'Silvally',
    'forme': 'Electric',
    'formeLetter': 'E',
    'types': ['Electric'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallyfairy': {
    'num': 773,
    'species': 'Silvally-Fairy',
    'baseSpecies': 'Silvally',
    'forme': 'Fairy',
    'formeLetter': 'F',
    'types': ['Fairy'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallyfighting': {
    'num': 773,
    'species': 'Silvally-Fighting',
    'baseSpecies': 'Silvally',
    'forme': 'Fighting',
    'formeLetter': 'F',
    'types': ['Fighting'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallyfire': {
    'num': 773,
    'species': 'Silvally-Fire',
    'baseSpecies': 'Silvally',
    'forme': 'Fire',
    'formeLetter': 'F',
    'types': ['Fire'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallyflying': {
    'num': 773,
    'species': 'Silvally-Flying',
    'baseSpecies': 'Silvally',
    'forme': 'Flying',
    'formeLetter': 'F',
    'types': ['Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallyghost': {
    'num': 773,
    'species': 'Silvally-Ghost',
    'baseSpecies': 'Silvally',
    'forme': 'Ghost',
    'formeLetter': 'G',
    'types': ['Ghost'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallygrass': {
    'num': 773,
    'species': 'Silvally-Grass',
    'baseSpecies': 'Silvally',
    'forme': 'Grass',
    'formeLetter': 'G',
    'types': ['Grass'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallyground': {
    'num': 773,
    'species': 'Silvally-Ground',
    'baseSpecies': 'Silvally',
    'forme': 'Ground',
    'formeLetter': 'G',
    'types': ['Ground'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallyice': {
    'num': 773,
    'species': 'Silvally-Ice',
    'baseSpecies': 'Silvally',
    'forme': 'Ice',
    'formeLetter': 'I',
    'types': ['Ice'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallypoison': {
    'num': 773,
    'species': 'Silvally-Poison',
    'baseSpecies': 'Silvally',
    'forme': 'Poison',
    'formeLetter': 'P',
    'types': ['Poison'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallypsychic': {
    'num': 773,
    'species': 'Silvally-Psychic',
    'baseSpecies': 'Silvally',
    'forme': 'Psychic',
    'formeLetter': 'P',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallyrock': {
    'num': 773,
    'species': 'Silvally-Rock',
    'baseSpecies': 'Silvally',
    'forme': 'Rock',
    'formeLetter': 'R',
    'types': ['Rock'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallysteel': {
    'num': 773,
    'species': 'Silvally-Steel',
    'baseSpecies': 'Silvally',
    'forme': 'Steel',
    'formeLetter': 'S',
    'types': ['Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'silvallywater': {
    'num': 773,
    'species': 'Silvally-Water',
    'baseSpecies': 'Silvally',
    'forme': 'Water',
    'formeLetter': 'W',
    'types': ['Water'],
    'gender': 'N',
    'baseStats': {
      'hp': 95,
      'atk': 95,
      'def': 95,
      'spa': 95,
      'spd': 95,
      'spe': 95
    },
    'abilities': {'0': 'RKS System'},
    'heightm': 2.3,
    'weightkg': 100.5,
    'color': 'Gray',
    'prevo': 'typenull',
    'evoLevel': 2,
    'eggGroups': ['Undiscovered']
  },
  'minior': {
    'num': 774,
    'species': 'Minior',
    'baseForme': 'Red',
    'types': ['Rock', 'Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 60,
      'atk': 100,
      'def': 60,
      'spa': 100,
      'spd': 60,
      'spe': 120
    },
    'abilities': {'0': 'Shields Down'},
    'heightm': 0.3,
    'weightkg': 0.3,
    'color': 'Red',
    'eggGroups': ['Mineral'],
    'otherFormes': ['miniormeteor'],
    'otherForms': ['miniororange', 'minioryellow', 'miniorgreen', 'miniorblue', 'miniorindigo', 'miniorviolet']
  },
  'miniormeteor': {
    'num': 774,
    'species': 'Minior-Meteor',
    'baseSpecies': 'Minior',
    'forme': 'Meteor',
    'formeLetter': 'M',
    'types': ['Rock', 'Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 60,
      'atk': 60,
      'def': 100,
      'spa': 60,
      'spd': 100,
      'spe': 60
    },
    'abilities': {'0': 'Shields Down'},
    'heightm': 0.3,
    'weightkg': 40,
    'color': 'Brown',
    'eggGroups': ['Mineral']
  },
  'komala': {
    'num': 775,
    'species': 'Komala',
    'types': ['Normal'],
    'baseStats': {
      'hp': 65,
      'atk': 115,
      'def': 65,
      'spa': 75,
      'spd': 95,
      'spe': 65
    },
    'abilities': {'0': 'Comatose'},
    'heightm': 0.4,
    'weightkg': 19.9,
    'color': 'Blue',
    'eggGroups': ['Field']
  },
  'turtonator': {
    'num': 776,
    'species': 'Turtonator',
    'types': ['Fire', 'Dragon'],
    'baseStats': {
      'hp': 60,
      'atk': 78,
      'def': 135,
      'spa': 91,
      'spd': 85,
      'spe': 36
    },
    'abilities': {'0': 'Shell Armor'},
    'heightm': 2,
    'weightkg': 212,
    'color': 'Red',
    'eggGroups': ['Monster', 'Dragon']
  },
  'togedemaru': {
    'num': 777,
    'species': 'Togedemaru',
    'types': ['Electric', 'Steel'],
    'baseStats': {
      'hp': 65,
      'atk': 98,
      'def': 63,
      'spa': 40,
      'spd': 73,
      'spe': 96
    },
    'abilities': {
      '0': 'Iron Barbs',
      '1': 'Lightning Rod',
      'H': 'Sturdy'
    },
    'heightm': 0.3,
    'weightkg': 3.3,
    'color': 'Gray',
    'eggGroups': ['Field', 'Fairy'],
    'otherFormes': ['togedemarutotem']
  },
  'togedemarutotem': {
    'num': 777,
    'species': 'Togedemaru-Totem',
    'baseSpecies': 'Togedemaru',
    'forme': 'Totem',
    'formeLetter': 'T',
    'types': ['Electric', 'Steel'],
    'baseStats': {
      'hp': 65,
      'atk': 98,
      'def': 63,
      'spa': 40,
      'spd': 73,
      'spe': 96
    },
    'abilities': {'0': 'Sturdy'},
    'heightm': 0.6,
    'weightkg': 13,
    'color': 'Gray',
    'eggGroups': ['Field', 'Fairy']
  },
  'mimikyu': {
    'num': 778,
    'species': 'Mimikyu',
    'types': ['Ghost', 'Fairy'],
    'baseStats': {
      'hp': 55,
      'atk': 90,
      'def': 80,
      'spa': 50,
      'spd': 105,
      'spe': 96
    },
    'abilities': {'0': 'Disguise'},
    'heightm': 0.2,
    'weightkg': 0.7,
    'color': 'Yellow',
    'eggGroups': ['Amorphous'],
    'otherFormes': ['mimikyubusted', 'mimikyutotem', 'mimikyubustedtotem']
  },
  'mimikyubusted': {
    'num': 778,
    'species': 'Mimikyu-Busted',
    'baseSpecies': 'Mimikyu',
    'forme': 'Busted',
    'formeLetter': 'B',
    'types': ['Ghost', 'Fairy'],
    'baseStats': {
      'hp': 55,
      'atk': 90,
      'def': 80,
      'spa': 50,
      'spd': 105,
      'spe': 96
    },
    'abilities': {'0': 'Disguise'},
    'heightm': 0.2,
    'weightkg': 0.7,
    'color': 'Yellow',
    'eggGroups': ['Amorphous']
  },
  'mimikyutotem': {
    'num': 778,
    'species': 'Mimikyu-Totem',
    'baseSpecies': 'Mimikyu',
    'forme': 'Totem',
    'formeLetter': 'T',
    'types': ['Ghost', 'Fairy'],
    'baseStats': {
      'hp': 55,
      'atk': 90,
      'def': 80,
      'spa': 50,
      'spd': 105,
      'spe': 96
    },
    'abilities': {'0': 'Disguise'},
    'heightm': 0.4,
    'weightkg': 2.8,
    'color': 'Yellow',
    'eggGroups': ['Amorphous']
  },
  'mimikyubustedtotem': {
    'num': 778,
    'species': 'Mimikyu-Busted-Totem',
    'baseSpecies': 'Mimikyu',
    'forme': 'Busted-Totem',
    'formeLetter': 'T',
    'types': ['Ghost', 'Fairy'],
    'baseStats': {
      'hp': 55,
      'atk': 90,
      'def': 80,
      'spa': 50,
      'spd': 105,
      'spe': 96
    },
    'abilities': {'0': 'Disguise'},
    'heightm': 0.4,
    'weightkg': 2.8,
    'color': 'Yellow',
    'eggGroups': ['Amorphous']
  },
  'bruxish': {
    'num': 779,
    'species': 'Bruxish',
    'types': ['Water', 'Psychic'],
    'baseStats': {
      'hp': 68,
      'atk': 105,
      'def': 70,
      'spa': 70,
      'spd': 70,
      'spe': 92
    },
    'abilities': {
      '0': 'Dazzling',
      '1': 'Strong Jaw',
      'H': 'Wonder Skin'
    },
    'heightm': 0.9,
    'weightkg': 19,
    'color': 'Pink',
    'eggGroups': ['Water 2']
  },
  'drampa': {
    'num': 780,
    'species': 'Drampa',
    'types': ['Normal', 'Dragon'],
    'baseStats': {
      'hp': 78,
      'atk': 60,
      'def': 85,
      'spa': 135,
      'spd': 91,
      'spe': 36
    },
    'abilities': {
      '0': 'Berserk',
      '1': 'Sap Sipper',
      'H': 'Cloud Nine'
    },
    'heightm': 3,
    'weightkg': 185,
    'color': 'White',
    'eggGroups': ['Monster', 'Dragon']
  },
  'dhelmise': {
    'num': 781,
    'species': 'Dhelmise',
    'types': ['Ghost', 'Grass'],
    'gender': 'N',
    'baseStats': {
      'hp': 70,
      'atk': 131,
      'def': 100,
      'spa': 86,
      'spd': 90,
      'spe': 40
    },
    'abilities': {'0': 'Steelworker'},
    'heightm': 3.9,
    'weightkg': 210,
    'color': 'Green',
    'eggGroups': ['Mineral']
  },
  'jangmoo': {
    'num': 782,
    'species': 'Jangmo-o',
    'types': ['Dragon'],
    'baseStats': {
      'hp': 45,
      'atk': 55,
      'def': 65,
      'spa': 45,
      'spd': 45,
      'spe': 45
    },
    'abilities': {
      '0': 'Bulletproof',
      '1': 'Soundproof',
      'H': 'Overcoat'
    },
    'heightm': 0.6,
    'weightkg': 29.7,
    'color': 'Gray',
    'evos': ['hakamoo'],
    'eggGroups': ['Dragon']
  },
  'hakamoo': {
    'num': 783,
    'species': 'Hakamo-o',
    'types': ['Dragon', 'Fighting'],
    'baseStats': {
      'hp': 55,
      'atk': 75,
      'def': 90,
      'spa': 65,
      'spd': 70,
      'spe': 65
    },
    'abilities': {
      '0': 'Bulletproof',
      '1': 'Soundproof',
      'H': 'Overcoat'
    },
    'heightm': 1.2,
    'weightkg': 47,
    'color': 'Gray',
    'prevo': 'jangmoo',
    'evos': ['kommoo'],
    'evoLevel': 35,
    'eggGroups': ['Dragon']
  },
  'kommoo': {
    'num': 784,
    'species': 'Kommo-o',
    'types': ['Dragon', 'Fighting'],
    'baseStats': {
      'hp': 75,
      'atk': 110,
      'def': 125,
      'spa': 100,
      'spd': 105,
      'spe': 85
    },
    'abilities': {
      '0': 'Bulletproof',
      '1': 'Soundproof',
      'H': 'Overcoat'
    },
    'heightm': 1.6,
    'weightkg': 78.2,
    'color': 'Gray',
    'prevo': 'hakamoo',
    'evoLevel': 45,
    'eggGroups': ['Dragon'],
    'otherFormes': ['kommoototem']
  },
  'kommoototem': {
    'num': 784,
    'species': 'Kommo-o-Totem',
    'baseSpecies': 'Kommo-o',
    'forme': 'Totem',
    'formeLetter': 'T',
    'types': ['Dragon', 'Fighting'],
    'baseStats': {
      'hp': 75,
      'atk': 110,
      'def': 125,
      'spa': 100,
      'spd': 105,
      'spe': 85
    },
    'abilities': {'0': 'Overcoat'},
    'heightm': 2.4,
    'weightkg': 207.5,
    'color': 'Gray',
    'eggGroups': ['Dragon']
  },
  'tapukoko': {
    'num': 785,
    'species': 'Tapu Koko',
    'types': ['Electric', 'Fairy'],
    'gender': 'N',
    'baseStats': {
      'hp': 70,
      'atk': 115,
      'def': 85,
      'spa': 95,
      'spd': 75,
      'spe': 130
    },
    'abilities': {
      '0': 'Electric Surge',
      'H': 'Telepathy'
    },
    'heightm': 1.8,
    'weightkg': 20.5,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'tapulele': {
    'num': 786,
    'species': 'Tapu Lele',
    'types': ['Psychic', 'Fairy'],
    'gender': 'N',
    'baseStats': {
      'hp': 70,
      'atk': 85,
      'def': 75,
      'spa': 130,
      'spd': 115,
      'spe': 95
    },
    'abilities': {
      '0': 'Psychic Surge',
      'H': 'Telepathy'
    },
    'heightm': 1.2,
    'weightkg': 18.6,
    'color': 'Pink',
    'eggGroups': ['Undiscovered']
  },
  'tapubulu': {
    'num': 787,
    'species': 'Tapu Bulu',
    'types': ['Grass', 'Fairy'],
    'gender': 'N',
    'baseStats': {
      'hp': 70,
      'atk': 130,
      'def': 115,
      'spa': 85,
      'spd': 95,
      'spe': 75
    },
    'abilities': {
      '0': 'Grassy Surge',
      'H': 'Telepathy'
    },
    'heightm': 1.9,
    'weightkg': 45.5,
    'color': 'Red',
    'eggGroups': ['Undiscovered']
  },
  'tapufini': {
    'num': 788,
    'species': 'Tapu Fini',
    'types': ['Water', 'Fairy'],
    'gender': 'N',
    'baseStats': {
      'hp': 70,
      'atk': 75,
      'def': 115,
      'spa': 95,
      'spd': 130,
      'spe': 85
    },
    'abilities': {
      '0': 'Misty Surge',
      'H': 'Telepathy'
    },
    'heightm': 1.3,
    'weightkg': 21.2,
    'color': 'Purple',
    'eggGroups': ['Undiscovered']
  },
  'cosmog': {
    'num': 789,
    'species': 'Cosmog',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 43,
      'atk': 29,
      'def': 31,
      'spa': 29,
      'spd': 31,
      'spe': 37
    },
    'abilities': {'0': 'Unaware'},
    'heightm': 0.2,
    'weightkg': 0.1,
    'color': 'Blue',
    'evos': ['cosmoem'],
    'eggGroups': ['Undiscovered']
  },
  'cosmoem': {
    'num': 790,
    'species': 'Cosmoem',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 43,
      'atk': 29,
      'def': 131,
      'spa': 29,
      'spd': 131,
      'spe': 37
    },
    'abilities': {'0': 'Sturdy'},
    'heightm': 0.1,
    'weightkg': 999.9,
    'color': 'Blue',
    'prevo': 'cosmog',
    'evos': ['solgaleo', 'lunala'],
    'evoLevel': 43,
    'eggGroups': ['Undiscovered']
  },
  'solgaleo': {
    'num': 791,
    'species': 'Solgaleo',
    'types': ['Psychic', 'Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 137,
      'atk': 137,
      'def': 107,
      'spa': 113,
      'spd': 89,
      'spe': 97
    },
    'abilities': {'0': 'Full Metal Body'},
    'heightm': 3.4,
    'weightkg': 230,
    'color': 'White',
    'prevo': 'cosmoem',
    'evoLevel': 53,
    'eggGroups': ['Undiscovered']
  },
  'lunala': {
    'num': 792,
    'species': 'Lunala',
    'types': ['Psychic', 'Ghost'],
    'gender': 'N',
    'baseStats': {
      'hp': 137,
      'atk': 113,
      'def': 89,
      'spa': 137,
      'spd': 107,
      'spe': 97
    },
    'abilities': {'0': 'Shadow Shield'},
    'heightm': 4,
    'weightkg': 120,
    'color': 'Purple',
    'prevo': 'cosmoem',
    'evoLevel': 53,
    'eggGroups': ['Undiscovered']
  },
  'nihilego': {
    'num': 793,
    'species': 'Nihilego',
    'types': ['Rock', 'Poison'],
    'gender': 'N',
    'baseStats': {
      'hp': 109,
      'atk': 53,
      'def': 47,
      'spa': 127,
      'spd': 131,
      'spe': 103
    },
    'abilities': {'0': 'Beast Boost'},
    'heightm': 1.2,
    'weightkg': 55.5,
    'color': 'White',
    'eggGroups': ['Undiscovered']
  },
  'buzzwole': {
    'num': 794,
    'species': 'Buzzwole',
    'types': ['Bug', 'Fighting'],
    'gender': 'N',
    'baseStats': {
      'hp': 107,
      'atk': 139,
      'def': 139,
      'spa': 53,
      'spd': 53,
      'spe': 79
    },
    'abilities': {'0': 'Beast Boost'},
    'heightm': 2.4,
    'weightkg': 333.6,
    'color': 'Red',
    'eggGroups': ['Undiscovered']
  },
  'pheromosa': {
    'num': 795,
    'species': 'Pheromosa',
    'types': ['Bug', 'Fighting'],
    'gender': 'N',
    'baseStats': {
      'hp': 71,
      'atk': 137,
      'def': 37,
      'spa': 137,
      'spd': 37,
      'spe': 151
    },
    'abilities': {'0': 'Beast Boost'},
    'heightm': 1.8,
    'weightkg': 25,
    'color': 'White',
    'eggGroups': ['Undiscovered']
  },
  'xurkitree': {
    'num': 796,
    'species': 'Xurkitree',
    'types': ['Electric'],
    'gender': 'N',
    'baseStats': {
      'hp': 83,
      'atk': 89,
      'def': 71,
      'spa': 173,
      'spd': 71,
      'spe': 83
    },
    'abilities': {'0': 'Beast Boost'},
    'heightm': 3.8,
    'weightkg': 100,
    'color': 'Black',
    'eggGroups': ['Undiscovered']
  },
  'celesteela': {
    'num': 797,
    'species': 'Celesteela',
    'types': ['Steel', 'Flying'],
    'gender': 'N',
    'baseStats': {
      'hp': 97,
      'atk': 101,
      'def': 103,
      'spa': 107,
      'spd': 101,
      'spe': 61
    },
    'abilities': {'0': 'Beast Boost'},
    'heightm': 9.2,
    'weightkg': 999.9,
    'color': 'Green',
    'eggGroups': ['Undiscovered']
  },
  'kartana': {
    'num': 798,
    'species': 'Kartana',
    'types': ['Grass', 'Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 59,
      'atk': 181,
      'def': 131,
      'spa': 59,
      'spd': 31,
      'spe': 109
    },
    'abilities': {'0': 'Beast Boost'},
    'heightm': 0.3,
    'weightkg': 0.1,
    'color': 'White',
    'eggGroups': ['Undiscovered']
  },
  'guzzlord': {
    'num': 799,
    'species': 'Guzzlord',
    'types': ['Dark', 'Dragon'],
    'gender': 'N',
    'baseStats': {
      'hp': 223,
      'atk': 101,
      'def': 53,
      'spa': 97,
      'spd': 53,
      'spe': 43
    },
    'abilities': {'0': 'Beast Boost'},
    'heightm': 5.5,
    'weightkg': 888,
    'color': 'Black',
    'eggGroups': ['Undiscovered']
  },
  'necrozma': {
    'num': 800,
    'species': 'Necrozma',
    'types': ['Psychic'],
    'gender': 'N',
    'baseStats': {
      'hp': 97,
      'atk': 107,
      'def': 101,
      'spa': 127,
      'spd': 89,
      'spe': 79
    },
    'abilities': {'0': 'Prism Armor'},
    'heightm': 2.4,
    'weightkg': 230,
    'color': 'Black',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['necrozmaduskmane', 'necrozmadawnwings', 'necrozmaultra']
  },
  'necrozmaduskmane': {
    'num': 800,
    'species': 'Necrozma-Dusk-Mane',
    'baseSpecies': 'Necrozma',
    'forme': 'Dusk-Mane',
    'formeLetter': 'D',
    'types': ['Psychic', 'Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 97,
      'atk': 157,
      'def': 127,
      'spa': 113,
      'spd': 109,
      'spe': 77
    },
    'abilities': {'0': 'Prism Armor'},
    'heightm': 3.8,
    'weightkg': 460,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'necrozmadawnwings': {
    'num': 800,
    'species': 'Necrozma-Dawn-Wings',
    'baseSpecies': 'Necrozma',
    'forme': 'Dawn-Wings',
    'formeLetter': 'D',
    'types': ['Psychic', 'Ghost'],
    'gender': 'N',
    'baseStats': {
      'hp': 97,
      'atk': 113,
      'def': 109,
      'spa': 157,
      'spd': 127,
      'spe': 77
    },
    'abilities': {'0': 'Prism Armor'},
    'heightm': 4.2,
    'weightkg': 350,
    'color': 'Blue',
    'eggGroups': ['Undiscovered']
  },
  'necrozmaultra': {
    'num': 800,
    'species': 'Necrozma-Ultra',
    'baseSpecies': 'Necrozma',
    'forme': 'Ultra',
    'formeLetter': 'U',
    'types': ['Psychic', 'Dragon'],
    'gender': 'N',
    'baseStats': {
      'hp': 97,
      'atk': 167,
      'def': 97,
      'spa': 167,
      'spd': 97,
      'spe': 129
    },
    'abilities': {'0': 'Neuroforce'},
    'heightm': 7.5,
    'weightkg': 230,
    'color': 'Blue',
    'eggGroups': ['Undiscovered']
  },
  'magearna': {
    'num': 801,
    'species': 'Magearna',
    'types': ['Steel', 'Fairy'],
    'gender': 'N',
    'baseStats': {
      'hp': 80,
      'atk': 95,
      'def': 115,
      'spa': 130,
      'spd': 115,
      'spe': 65
    },
    'abilities': {'0': 'Soul-Heart'},
    'heightm': 1,
    'weightkg': 80.5,
    'color': 'Gray',
    'eggGroups': ['Undiscovered'],
    'otherFormes': ['magearnaoriginal']
  },
  'magearnaoriginal': {
    'num': 801,
    'species': 'Magearna-Original',
    'baseSpecies': 'Magearna',
    'forme': 'Original',
    'formeLetter': 'O',
    'types': ['Steel', 'Fairy'],
    'gender': 'N',
    'baseStats': {
      'hp': 80,
      'atk': 95,
      'def': 115,
      'spa': 130,
      'spd': 115,
      'spe': 65
    },
    'abilities': {'0': 'Soul-Heart'},
    'heightm': 1,
    'weightkg': 80.5,
    'color': 'Red',
    'eggGroups': ['Undiscovered']
  },
  'marshadow': {
    'num': 802,
    'species': 'Marshadow',
    'types': ['Fighting', 'Ghost'],
    'gender': 'N',
    'baseStats': {
      'hp': 90,
      'atk': 125,
      'def': 80,
      'spa': 90,
      'spd': 90,
      'spe': 125
    },
    'abilities': {'0': 'Technician'},
    'heightm': 0.7,
    'weightkg': 22.2,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'poipole': {
    'num': 803,
    'species': 'Poipole',
    'types': ['Poison'],
    'gender': 'N',
    'baseStats': {
      'hp': 67,
      'atk': 73,
      'def': 67,
      'spa': 73,
      'spd': 67,
      'spe': 73
    },
    'abilities': {'0': 'Beast Boost'},
    'heightm': 0.6,
    'weightkg': 1.8,
    'color': 'Purple',
    'evos': ['naganadel'],
    'eggGroups': ['Undiscovered']
  },
  'naganadel': {
    'num': 804,
    'species': 'Naganadel',
    'types': ['Poison', 'Dragon'],
    'gender': 'N',
    'baseStats': {
      'hp': 73,
      'atk': 73,
      'def': 73,
      'spa': 127,
      'spd': 73,
      'spe': 121
    },
    'abilities': {'0': 'Beast Boost'},
    'heightm': 3.6,
    'weightkg': 150,
    'color': 'Purple',
    'prevo': 'poipole',
    'evoLevel': 41,
    'eggGroups': ['Undiscovered']
  },
  'stakataka': {
    'num': 805,
    'species': 'Stakataka',
    'types': ['Rock', 'Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 61,
      'atk': 131,
      'def': 211,
      'spa': 53,
      'spd': 101,
      'spe': 13
    },
    'abilities': {'0': 'Beast Boost'},
    'heightm': 5.5,
    'weightkg': 820,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'blacephalon': {
    'num': 806,
    'species': 'Blacephalon',
    'types': ['Fire', 'Ghost'],
    'gender': 'N',
    'baseStats': {
      'hp': 53,
      'atk': 127,
      'def': 53,
      'spa': 151,
      'spd': 79,
      'spe': 107
    },
    'abilities': {'0': 'Beast Boost'},
    'heightm': 1.8,
    'weightkg': 13,
    'color': 'White',
    'eggGroups': ['Undiscovered']
  },
  'zeraora': {
    'num': 807,
    'species': 'Zeraora',
    'types': ['Electric'],
    'gender': 'N',
    'baseStats': {
      'hp': 88,
      'atk': 112,
      'def': 75,
      'spa': 102,
      'spd': 80,
      'spe': 143
    },
    'abilities': {'0': 'Volt Absorb'},
    'heightm': 1.5,
    'weightkg': 44.5,
    'color': 'Yellow',
    'eggGroups': ['Undiscovered']
  },
  'missingno': {
    'num': 0,
    'species': 'Missingno.',
    'types': ['Bird', 'Normal'],
    'baseStats': {
      'hp': 33,
      'atk': 136,
      'def': 0,
      'spa': 6,
      'spd': 6,
      'spe': 29
    },
    'abilities': {'0': ''},
    'heightm': 3,
    'weightkg': 1590.8,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'tomohawk': {
    'num': -1,
    'species': 'Tomohawk',
    'types': ['Flying', 'Fighting'],
    'baseStats': {
      'hp': 105,
      'atk': 60,
      'def': 90,
      'spa': 115,
      'spd': 80,
      'spe': 85
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Prankster',
      'H': 'Justified'
    },
    'heightm': 1.27,
    'weightkg': 37.2,
    'color': 'Red',
    'prevo': 'scratchet',
    'evoLevel': 23,
    'eggGroups': ['Field', 'Flying']
  },
  'necturna': {
    'num': -2,
    'species': 'Necturna',
    'types': ['Grass', 'Ghost'],
    'gender': 'F',
    'baseStats': {
      'hp': 64,
      'atk': 120,
      'def': 100,
      'spa': 85,
      'spd': 120,
      'spe': 81
    },
    'abilities': {
      '0': 'Forewarn',
      'H': 'Telepathy'
    },
    'heightm': 1.65,
    'weightkg': 49.6,
    'color': 'Black',
    'prevo': 'necturine',
    'evoLevel': 31,
    'eggGroups': ['Grass', 'Field']
  },
  'mollux': {
    'num': -3,
    'species': 'Mollux',
    'types': ['Fire', 'Poison'],
    'baseStats': {
      'hp': 95,
      'atk': 45,
      'def': 83,
      'spa': 131,
      'spd': 105,
      'spe': 76
    },
    'abilities': {
      '0': 'Dry Skin',
      'H': 'Illuminate'
    },
    'heightm': 1.2,
    'weightkg': 41,
    'color': 'Pink',
    'eggGroups': ['Fairy', 'Field']
  },
  'aurumoth': {
    'num': -4,
    'species': 'Aurumoth',
    'types': ['Bug', 'Psychic'],
    'baseStats': {
      'hp': 110,
      'atk': 120,
      'def': 99,
      'spa': 117,
      'spd': 60,
      'spe': 94
    },
    'abilities': {
      '0': 'Weak Armor',
      '1': 'No Guard',
      'H': 'Light Metal'
    },
    'heightm': 2.1,
    'weightkg': 193,
    'color': 'Purple',
    'prevo': 'argalis',
    'evoLevel': 50,
    'eggGroups': ['Bug']
  },
  'malaconda': {
    'num': -5,
    'species': 'Malaconda',
    'types': ['Dark', 'Grass'],
    'baseStats': {
      'hp': 115,
      'atk': 100,
      'def': 60,
      'spa': 40,
      'spd': 130,
      'spe': 55
    },
    'abilities': {
      '0': 'Harvest',
      '1': 'Infiltrator',
      'H': 'Drought'
    },
    'heightm': 5.5,
    'weightkg': 108.8,
    'color': 'Brown',
    'prevo': 'brattler',
    'evoLevel': 33,
    'eggGroups': ['Grass', 'Dragon']
  },
  'cawmodore': {
    'num': -6,
    'species': 'Cawmodore',
    'types': ['Steel', 'Flying'],
    'baseStats': {
      'hp': 50,
      'atk': 92,
      'def': 130,
      'spa': 65,
      'spd': 75,
      'spe': 118
    },
    'abilities': {
      '0': 'Intimidate',
      '1': 'Volt Absorb',
      'H': 'Big Pecks'
    },
    'heightm': 1.7,
    'weightkg': 37,
    'color': 'Black',
    'prevo': 'cawdet',
    'evoLevel': 33,
    'eggGroups': ['Flying']
  },
  'volkraken': {
    'num': -7,
    'species': 'Volkraken',
    'types': ['Water', 'Fire'],
    'baseStats': {
      'hp': 100,
      'atk': 45,
      'def': 80,
      'spa': 135,
      'spd': 100,
      'spe': 95
    },
    'abilities': {
      '0': 'Analytic',
      '1': 'Infiltrator',
      'H': 'Pressure'
    },
    'heightm': 1.3,
    'weightkg': 44.5,
    'color': 'Red',
    'prevo': 'volkritter',
    'evoLevel': 34,
    'eggGroups': ['Water 1', 'Water 2']
  },
  'plasmanta': {
    'num': -8,
    'species': 'Plasmanta',
    'types': ['Electric', 'Poison'],
    'baseStats': {
      'hp': 60,
      'atk': 57,
      'def': 119,
      'spa': 131,
      'spd': 98,
      'spe': 100
    },
    'abilities': {
      '0': 'Storm Drain',
      '1': 'Vital Spirit',
      'H': 'Telepathy'
    },
    'heightm': 7,
    'weightkg': 460,
    'color': 'Purple',
    'prevo': 'snugglow',
    'evoLevel': 29,
    'eggGroups': ['Water 1', 'Water 2']
  },
  'naviathan': {
    'num': -9,
    'species': 'Naviathan',
    'types': ['Water', 'Steel'],
    'baseStats': {
      'hp': 103,
      'atk': 110,
      'def': 90,
      'spa': 95,
      'spd': 65,
      'spe': 97
    },
    'abilities': {
      '0': 'Guts',
      '1': 'Heatproof',
      'H': 'Light Metal'
    },
    'heightm': 3,
    'weightkg': 510,
    'color': 'Gray',
    'prevo': 'caimanoe',
    'evoLevel': 40,
    'eggGroups': ['Water 1', 'Field']
  },
  'crucibelle': {
    'num': -10,
    'species': 'Crucibelle',
    'types': ['Rock', 'Poison'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 106,
      'atk': 105,
      'def': 65,
      'spa': 75,
      'spd': 85,
      'spe': 104
    },
    'abilities': {
      '0': 'Regenerator',
      '1': 'Mold Breaker',
      'H': 'Liquid Ooze'
    },
    'heightm': 1.3,
    'weightkg': 23.6,
    'color': 'Purple',
    'eggGroups': ['Amorphous', 'Mineral'],
    'otherFormes': ['crucibellemega']
  },
  'crucibellemega': {
    'num': -10,
    'species': 'Crucibelle-Mega',
    'baseSpecies': 'Crucibelle',
    'forme': 'Mega',
    'formeLetter': 'M',
    'types': ['Rock', 'Poison'],
    'genderRatio': {
      'M': 0.25,
      'F': 0.75
    },
    'baseStats': {
      'hp': 106,
      'atk': 135,
      'def': 75,
      'spa': 85,
      'spd': 125,
      'spe': 114
    },
    'abilities': {'0': 'Magic Guard'},
    'heightm': 1.4,
    'weightkg': 22.5,
    'color': 'Purple',
    'eggGroups': ['Amorphous', 'Mineral']
  },
  'kerfluffle': {
    'num': -11,
    'species': 'Kerfluffle',
    'types': ['Fairy', 'Fighting'],
    'baseStats': {
      'hp': 84,
      'atk': 78,
      'def': 86,
      'spa': 115,
      'spd': 88,
      'spe': 119
    },
    'abilities': {
      '0': 'Natural Cure',
      '1': 'Aroma Veil',
      'H': 'Friend Guard'
    },
    'heightm': 2.1,
    'weightkg': 24.2,
    'color': 'Pink',
    'prevo': 'pluffle',
    'evoLevel': 2,
    'eggGroups': ['Fairy', 'Human-Like']
  },
  'pajantom': {
    'num': -12,
    'species': 'Pajantom',
    'types': ['Dragon', 'Ghost'],
    'baseStats': {
      'hp': 84,
      'atk': 133,
      'def': 71,
      'spa': 51,
      'spd': 111,
      'spe': 101
    },
    'abilities': {'0': 'Comatose'},
    'heightm': 1.1,
    'weightkg': 3.1,
    'color': 'Purple',
    'eggGroups': ['Dragon', 'Monster']
  },
  'syclant': {
    'num': -51,
    'species': 'Syclant',
    'types': ['Ice', 'Bug'],
    'baseStats': {
      'hp': 70,
      'atk': 116,
      'def': 70,
      'spa': 114,
      'spd': 64,
      'spe': 121
    },
    'abilities': {
      '0': 'Compound Eyes',
      '1': 'Mountaineer',
      'H': 'Ice Body'
    },
    'heightm': 1.7,
    'weightkg': 52,
    'color': 'Blue',
    'prevo': 'syclar',
    'evoLevel': 30,
    'eggGroups': ['Bug']
  },
  'revenankh': {
    'num': -52,
    'species': 'Revenankh',
    'types': ['Ghost', 'Fighting'],
    'baseStats': {
      'hp': 90,
      'atk': 105,
      'def': 90,
      'spa': 65,
      'spd': 110,
      'spe': 65
    },
    'abilities': {
      '0': 'Shed Skin',
      '1': 'Air Lock',
      'H': 'Triage'
    },
    'heightm': 1.8,
    'weightkg': 44,
    'color': 'White',
    'eggGroups': ['Amorphous', 'Human-Like']
  },
  'pyroak': {
    'num': -53,
    'species': 'Pyroak',
    'types': ['Fire', 'Grass'],
    'baseStats': {
      'hp': 120,
      'atk': 70,
      'def': 105,
      'spa': 95,
      'spd': 90,
      'spe': 60
    },
    'abilities': {
      '0': 'Rock Head',
      '1': 'Battle Armor',
      'H': 'White Smoke'
    },
    'heightm': 2.1,
    'weightkg': 168,
    'color': 'Brown',
    'prevo': 'flarelm',
    'evoLevel': 38,
    'eggGroups': ['Monster', 'Dragon']
  },
  'fidgit': {
    'num': -54,
    'species': 'Fidgit',
    'types': ['Poison', 'Ground'],
    'baseStats': {
      'hp': 95,
      'atk': 76,
      'def': 109,
      'spa': 90,
      'spd': 80,
      'spe': 105
    },
    'abilities': {
      '0': 'Persistent',
      '1': 'Vital Spirit',
      'H': 'Frisk'
    },
    'heightm': 0.9,
    'weightkg': 53,
    'color': 'Purple',
    'prevo': 'breezi',
    'evoLevel': 33,
    'eggGroups': ['Field']
  },
  'stratagem': {
    'num': -55,
    'species': 'Stratagem',
    'types': ['Rock'],
    'gender': 'N',
    'baseStats': {
      'hp': 90,
      'atk': 60,
      'def': 65,
      'spa': 120,
      'spd': 70,
      'spe': 130
    },
    'abilities': {
      '0': 'Levitate',
      '1': 'Technician',
      'H': 'Sniper'
    },
    'heightm': 0.9,
    'weightkg': 45,
    'color': 'Gray',
    'eggGroups': ['Undiscovered']
  },
  'arghonaut': {
    'num': -56,
    'species': 'Arghonaut',
    'types': ['Water', 'Fighting'],
    'baseStats': {
      'hp': 105,
      'atk': 110,
      'def': 95,
      'spa': 70,
      'spd': 100,
      'spe': 75
    },
    'abilities': {
      '0': 'Unaware',
      'H': 'Technician'
    },
    'heightm': 1.7,
    'weightkg': 151,
    'color': 'Green',
    'eggGroups': ['Water 1', 'Water 3']
  },
  'kitsunoh': {
    'num': -57,
    'species': 'Kitsunoh',
    'types': ['Steel', 'Ghost'],
    'baseStats': {
      'hp': 80,
      'atk': 103,
      'def': 85,
      'spa': 55,
      'spd': 80,
      'spe': 110
    },
    'abilities': {
      '0': 'Frisk',
      '1': 'Limber',
      'H': 'Iron Fist'
    },
    'heightm': 1.1,
    'weightkg': 51,
    'color': 'Gray',
    'eggGroups': ['Field']
  },
  'cyclohm': {
    'num': -58,
    'species': 'Cyclohm',
    'types': ['Electric', 'Dragon'],
    'baseStats': {
      'hp': 108,
      'atk': 60,
      'def': 118,
      'spa': 112,
      'spd': 70,
      'spe': 80
    },
    'abilities': {
      '0': 'Shield Dust',
      '1': 'Static',
      'H': 'Damp'
    },
    'heightm': 1.6,
    'weightkg': 59,
    'color': 'Yellow',
    'eggGroups': ['Dragon', 'Monster']
  },
  'colossoil': {
    'num': -59,
    'species': 'Colossoil',
    'types': ['Dark', 'Ground'],
    'baseStats': {
      'hp': 133,
      'atk': 122,
      'def': 72,
      'spa': 71,
      'spd': 72,
      'spe': 95
    },
    'abilities': {
      '0': 'Rebound',
      '1': 'Guts',
      'H': 'Unnerve'
    },
    'heightm': 2.6,
    'weightkg': 683.6,
    'color': 'Brown',
    'eggGroups': ['Water 2', 'Field']
  },
  'krilowatt': {
    'num': -60,
    'species': 'Krilowatt',
    'types': ['Electric', 'Water'],
    'baseStats': {
      'hp': 151,
      'atk': 84,
      'def': 73,
      'spa': 83,
      'spd': 74,
      'spe': 105
    },
    'abilities': {
      '0': 'Trace',
      '1': 'Magic Guard',
      'H': 'Minus'
    },
    'heightm': 0.7,
    'weightkg': 10.6,
    'color': 'Red',
    'eggGroups': ['Water 1', 'Fairy']
  },
  'voodoom': {
    'num': -61,
    'species': 'Voodoom',
    'types': ['Fighting', 'Dark'],
    'baseStats': {
      'hp': 90,
      'atk': 85,
      'def': 80,
      'spa': 105,
      'spd': 80,
      'spe': 110
    },
    'abilities': {
      '0': 'Volt Absorb',
      '1': 'Lightning Rod',
      'H': 'Cursed Body'
    },
    'heightm': 2,
    'weightkg': 75.5,
    'color': 'Brown',
    'eggGroups': ['Human-Like', 'Ground']
  },
  'syclar': {
    'num': -101,
    'species': 'Syclar',
    'types': ['Ice', 'Bug'],
    'baseStats': {
      'hp': 40,
      'atk': 76,
      'def': 45,
      'spa': 74,
      'spd': 39,
      'spe': 91
    },
    'abilities': {
      '0': 'Compound Eyes',
      '1': 'Snow Cloak'
    },
    'heightm': 0.2,
    'weightkg': 4.0,
    'color': 'Blue',
    'evos': ['syclant'],
    'eggGroups': ['Bug']
  },
  'embirch': {
    'num': -102,
    'species': 'Embirch',
    'types': ['Fire', 'Grass'],
    'baseStats': {
      'hp': 60,
      'atk': 40,
      'def': 55,
      'spa': 65,
      'spd': 40,
      'spe': 60
    },
    'abilities': {
      '0': 'Reckless',
      '1': 'Leaf Guard'
    },
    'heightm': 0.6,
    'weightkg': 15,
    'color': 'Brown',
    'evos': ['flarelm'],
    'eggGroups': ['Monster', 'Dragon']
  },
  'flarelm': {
    'num': -103,
    'species': 'Flarelm',
    'types': ['Fire', 'Grass'],
    'baseStats': {
      'hp': 90,
      'atk': 50,
      'def': 95,
      'spa': 75,
      'spd': 70,
      'spe': 40
    },
    'abilities': {
      '0': 'Rock Head',
      '1': 'Battle Armor'
    },
    'heightm': 1.4,
    'weightkg': 73,
    'color': 'Brown',
    'prevo': 'embirch',
    'evos': ['pyroak'],
    'evoLevel': 24,
    'eggGroups': ['Monster', 'Dragon']
  },
  'breezi': {
    'num': -104,
    'species': 'Breezi',
    'types': ['Poison', 'Flying'],
    'baseStats': {
      'hp': 50,
      'atk': 46,
      'def': 69,
      'spa': 60,
      'spd': 50,
      'spe': 75
    },
    'abilities': {
      '0': 'Unburden',
      '1': 'Own Tempo'
    },
    'heightm': 0.4,
    'weightkg': 0.6,
    'color': 'Purple',
    'evos': ['fidgit'],
    'eggGroups': ['Field']
  },
  'scratchet': {
    'num': -105,
    'species': 'Scratchet',
    'types': ['Normal', 'Fighting'],
    'baseStats': {
      'hp': 55,
      'atk': 85,
      'def': 80,
      'spa': 20,
      'spd': 70,
      'spe': 40
    },
    'abilities': {
      '0': 'Scrappy',
      '1': 'Prankster',
      'H': 'Vital Spirit'
    },
    'heightm': 0.5,
    'weightkg': 20,
    'color': 'Brown',
    'evos': ['tomohawk'],
    'eggGroups': ['Field', 'Flying']
  },
  'necturine': {
    'num': -106,
    'species': 'Necturine',
    'types': ['Grass', 'Ghost'],
    'gender': 'F',
    'baseStats': {
      'hp': 49,
      'atk': 55,
      'def': 60,
      'spa': 50,
      'spd': 75,
      'spe': 51
    },
    'abilities': {
      '0': 'Anticipation',
      'H': 'Telepathy'
    },
    'heightm': 0.3,
    'weightkg': 1.8,
    'color': 'White',
    'evos': ['necturna'],
    'eggGroups': ['Grass', 'Field']
  },
  'cupra': {
    'num': -107,
    'species': 'Cupra',
    'types': ['Bug', 'Psychic'],
    'baseStats': {
      'hp': 50,
      'atk': 60,
      'def': 49,
      'spa': 67,
      'spd': 30,
      'spe': 44
    },
    'abilities': {
      '0': 'Shield Dust',
      '1': 'Keen Eye'
    },
    'heightm': 0.5,
    'weightkg': 4.8,
    'color': 'Brown',
    'evos': ['argalis'],
    'eggGroups': ['Bug']
  },
  'argalis': {
    'num': -108,
    'species': 'Argalis',
    'types': ['Bug', 'Psychic'],
    'baseStats': {
      'hp': 60,
      'atk': 90,
      'def': 89,
      'spa': 87,
      'spd': 40,
      'spe': 54
    },
    'abilities': {
      '0': 'Shed Skin',
      '1': 'Compound Eyes'
    },
    'heightm': 1.3,
    'weightkg': 341.4,
    'color': 'Gray',
    'prevo': 'cupra',
    'evos': ['aurumoth'],
    'evoLevel': 30,
    'eggGroups': ['Bug']
  },
  'brattler': {
    'num': -109,
    'species': 'Brattler',
    'types': ['Dark', 'Grass'],
    'baseStats': {
      'hp': 80,
      'atk': 70,
      'def': 40,
      'spa': 20,
      'spd': 90,
      'spe': 30
    },
    'abilities': {
      '0': 'Harvest',
      '1': 'Infiltrator'
    },
    'heightm': 1.8,
    'weightkg': 11.5,
    'color': 'Brown',
    'evos': ['malaconda'],
    'eggGroups': ['Grass', 'Dragon']
  },
  'cawdet': {
    'num': -110,
    'species': 'Cawdet',
    'types': ['Steel', 'Flying'],
    'baseStats': {
      'hp': 35,
      'atk': 72,
      'def': 85,
      'spa': 40,
      'spd': 55,
      'spe': 88
    },
    'abilities': {
      '0': 'Keen Eye',
      '1': 'Volt Absorb',
      'H': 'Big Pecks'
    },
    'heightm': 0.76,
    'weightkg': 25.0,
    'color': 'Gray',
    'evos': ['cawmodore'],
    'eggGroups': ['Flying']
  },
  'volkritter': {
    'num': -111,
    'species': 'Volkritter',
    'types': ['Water', 'Fire'],
    'baseStats': {
      'hp': 60,
      'atk': 30,
      'def': 50,
      'spa': 80,
      'spd': 60,
      'spe': 70
    },
    'abilities': {
      '0': 'Anticipation',
      '1': 'Infiltrator',
      'H': 'Unnerve'
    },
    'heightm': 0.3,
    'weightkg': 15,
    'color': 'Red',
    'evos': ['volkraken'],
    'eggGroups': ['Water 1', 'Water 2']
  },
  'snugglow': {
    'num': -112,
    'species': 'Snugglow',
    'types': ['Electric', 'Poison'],
    'baseStats': {
      'hp': 40,
      'atk': 37,
      'def': 79,
      'spa': 91,
      'spd': 68,
      'spe': 70
    },
    'abilities': {
      '0': 'Storm Drain',
      '1': 'Vital Spirit',
      'H': 'Telepathy'
    },
    'heightm': 1.2,
    'weightkg': 6,
    'color': 'Purple',
    'evos': ['plasmanta'],
    'eggGroups': ['Water 1', 'Water 2']
  },
  'floatoy': {
    'num': -113,
    'species': 'Floatoy',
    'types': ['Water'],
    'baseStats': {
      'hp': 48,
      'atk': 70,
      'def': 40,
      'spa': 70,
      'spd': 30,
      'spe': 77
    },
    'abilities': {
      '0': 'Water Veil',
      '1': 'Heatproof',
      'H': 'Swift Swim'
    },
    'heightm': 0.8,
    'weightkg': 1.9,
    'color': 'White',
    'evos': ['caimanoe'],
    'eggGroups': ['Water 1', 'Field']
  },
  'caimanoe': {
    'num': -114,
    'species': 'Caimanoe',
    'types': ['Water', 'Steel'],
    'baseStats': {
      'hp': 73,
      'atk': 85,
      'def': 65,
      'spa': 80,
      'spd': 40,
      'spe': 87
    },
    'abilities': {
      '0': 'Water Veil',
      '1': 'Heatproof',
      'H': 'Light Metal'
    },
    'heightm': 1.4,
    'weightkg': 72.5,
    'color': 'Gray',
    'prevo': 'floatoy',
    'evos': ['naviathan'],
    'evoLevel': 21,
    'eggGroups': ['Water 1', 'Field']
  },
  'pluffle': {
    'num': -115,
    'species': 'Pluffle',
    'types': ['Fairy'],
    'baseStats': {
      'hp': 74,
      'atk': 38,
      'def': 51,
      'spa': 65,
      'spd': 78,
      'spe': 49
    },
    'abilities': {
      '0': 'Natural Cure',
      '1': 'Aroma Veil',
      'H': 'Friend Guard'
    },
    'heightm': 0.8,
    'weightkg': 1.8,
    'color': 'Pink',
    'evos': ['kerfluffle'],
    'eggGroups': ['Fairy', 'Human-Like']
  },
  'pokestarufo': {
    'num': -5001,
    'species': 'Pokestar UFO',
    'types': ['Flying', 'Electric'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestarufopropu1'],
    'otherFormes': ['pokestarufo2', 'pokestarufopropu2']
  },
  'pokestarufo2': {
    'num': -5001,
    'species': 'Pokestar UFO-2',
    'baseSpecies': 'Pokestar UFO',
    'forme': '2',
    'formeLetter': '2',
    'types': ['Psychic', 'Electric'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered']
  },
  'pokestarbrycenman': {
    'num': -5002,
    'species': 'Pokestar Brycen-Man',
    'types': ['Dark', 'Psychic'],
    'gender': 'M',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestarbrycenmanprop']
  },
  'pokestarmt': {
    'num': -5003,
    'species': 'Pokestar MT',
    'types': ['Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Analytic'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestarmtprop']
  },
  'pokestarmt2': {
    'num': -5004,
    'species': 'Pokestar MT2',
    'types': ['Steel', 'Electric'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Flash Fire'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestarmt2prop']
  },
  'pokestartransport': {
    'num': -5005,
    'species': 'Pokestar Transport',
    'types': ['Steel'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Motor Drive'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestartransportprop']
  },
  'pokestargiant': {
    'num': -5006,
    'species': 'Pokestar Giant',
    'types': ['Normal'],
    'gender': 'F',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Huge Power'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestargiant2', 'pokestargiantpropo1', 'pokestargiantpropo2']
  },
  'pokestarhumanoid': {
    'num': -5007,
    'species': 'Pokestar Humanoid',
    'types': ['Normal'],
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Insomnia'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestarhumanoidprop']
  },
  'pokestarmonster': {
    'num': -5008,
    'species': 'Pokestar Monster',
    'types': ['Dark'],
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Pressure'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestarmonsterprop']
  },
  'pokestarf00': {
    'num': -5009,
    'species': 'Pokestar F-00',
    'types': ['Steel', 'Normal'],
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Volt Absorb'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestarf00prop']
  },
  'pokestarf002': {
    'num': -5010,
    'species': 'Pokestar F-002',
    'types': ['Steel', 'Normal'],
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Reckless'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestarf002prop']
  },
  'pokestarspirit': {
    'num': -5011,
    'species': 'Pokestar Spirit',
    'types': ['Dark', 'Ghost'],
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Wonder Guard'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestarspiritprop']
  },
  'pokestarblackdoor': {
    'num': -5012,
    'species': 'Pokestar Black Door',
    'types': ['Grass'],
    'gender': 'F',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Early Bird'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestarblackdoorprop']
  },
  'pokestarwhitedoor': {
    'num': -5013,
    'species': 'Pokestar White Door',
    'types': ['Fire'],
    'gender': 'M',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Blaze'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestarwhitedoorprop']
  },
  'pokestarblackbelt': {
    'num': -5014,
    'species': 'Pokestar Black Belt',
    'types': ['Fighting'],
    'gender': 'M',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Huge Power'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered'],
    'otherForms': ['pokestarblackbeltprop']
  },
  'pokestarufopropu2': {
    'num': -5001,
    'species': 'Pokestar UFO-PropU2',
    'baseForme': 'Pokestar UFO',
    'forme': 'PropU2',
    'types': ['Psychic', 'Electric'],
    'gender': 'N',
    'baseStats': {
      'hp': 100,
      'atk': 100,
      'def': 100,
      'spa': 100,
      'spd': 100,
      'spe': 100
    },
    'abilities': {'0': 'Levitate'},
    'heightm': 1.5,
    'weightkg': 61,
    'color': 'White',
    'eggGroups': ['Undiscovered']
  }
};

module.exports = {BattlePokedex};