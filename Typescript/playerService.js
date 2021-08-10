"use strict";
exports.__esModule = true;
exports.PlayerService = void 0;
var dataPlayer_1 = require("./dataPlayer");
var player_1 = require("./player");
var PlayerService = /** @class */ (function () {
    function PlayerService() {
        var _this = this;
        this.data = new dataPlayer_1.dataPlayer();
        this.playerList = [];
        this.data.getPlayers().forEach(function (element) {
            _this.playerList.push(element);
        });
    }
    PlayerService.prototype.getPlayers = function () {
        return this.playerList;
    };
    PlayerService.prototype.savePlayer = function (Player) {
        var playerNumbers = this.playerList.map(function (plyr) { return plyr.number; });
        console.log(playerNumbers.indexOf(Player.number));
        if (playerNumbers.indexOf(Player.number) == -1) {
            console.log(2);
            this.playerList.push(Player);
        }
        ;
    };
    PlayerService.prototype.deletePlayer = function (player) {
        var _this = this;
        this.playerList.forEach(function (plyrs, index) {
            if (plyrs == player) {
                console.log(index);
                _this.playerList.splice(index, 1);
            }
        });
    };
    PlayerService.prototype.getByID = function (number) {
        var _this = this;
        var player;
        this.playerList.forEach(function (plyrs, index) {
            if (plyrs.number == number) {
                player = _this.playerList[index];
            }
        });
        return player;
        //  this.playerList.filter(p=>p.number==number)[0]
        // return 
    };
    return PlayerService;
}());
exports.PlayerService = PlayerService;
var service = new PlayerService();
// console.log(service.getByID(45).salary)
// service.deletePlayer(service.getByID(45))
// console.log(service.getPlayers())
var sacha = new player_1.Player(15, 'sacha', 'RB', 0.75);
var taylan = new player_1.Player(4, 'Taylan', 'DOS', 0.7);
service.savePlayer(taylan);
service.savePlayer(sacha);
console.log(service.getPlayers());
