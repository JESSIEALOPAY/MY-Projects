"use strict";
exports.__esModule = true;
exports.dataPlayer = void 0;
var player_1 = require("./player");
var dataPlayer = /** @class */ (function () {
    function dataPlayer() {
        this.players = new Array(new player_1.Player(1, 'Muslera', 'GK', 3.75), new player_1.Player(45, 'Marcao', 'ST', 1.1), new player_1.Player(7, 'Kerem', 'Kanat', 0.5), new player_1.Player(4, 'Taylan', 'DOS', 0.7), new player_1.Player(8, 'Babel', 'GK', 2.5));
    }
    dataPlayer.prototype.getPlayers = function () {
        return this.players;
    };
    return dataPlayer;
}());
exports.dataPlayer = dataPlayer;
// let datalist= new dataPlayer()
//console.log(datalist.getPlayers())
