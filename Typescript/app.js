"use strict";
exports.__esModule = true;
var player_1 = require("./player");
var playerService_1 = require("./playerService");
var service = new playerService_1.PlayerService();
// console.log(service.getByID(45).salary)
// service.deletePlayer(service.getByID(45))
// console.log(service.getPlayers())
var sacha = new player_1.Player(15, 'sacha', 'RB', 0.75);
var taylan = new player_1.Player(4, 'Taylan', 'DOS', 0.7);
service.savePlayer(taylan);
service.savePlayer(sacha);
console.log(service.getPlayers());
