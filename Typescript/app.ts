import { Player } from "./player";
import { PlayerService } from "./playerService";


let service=new PlayerService()

// console.log(service.getByID(45).salary)
// service.deletePlayer(service.getByID(45))
// console.log(service.getPlayers())
 let sacha=new Player(15,'sacha','RB',0.75)
let taylan=new Player(4,'Taylan','DOS',0.7)
service.savePlayer(taylan)
service.savePlayer(sacha)
console.log(service.getPlayers())


