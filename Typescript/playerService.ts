import { dataPlayer } from "./dataPlayer";
import { PlayerInterface } from "./MyInterface";
import { Player } from "./player";

export class PlayerService implements PlayerInterface{
    playerList
    data
    
    constructor(){
        this.data=new dataPlayer()
        this.playerList= []
        this.data.getPlayers().forEach(element => {
            this.playerList.push(element)
        });
    }
    getPlayers(): Player[] {
        return  this.playerList
    }
    savePlayer(Player: Player) {
      let playerNumbers=this.playerList.map(plyr=>plyr.number)
          console.log(playerNumbers.indexOf(Player.number))
          if(playerNumbers.indexOf(Player.number)==-1){
              console.log(2)
              this.playerList.push(Player)
          }
      ;
    }
    deletePlayer(player: any) {
        this.playerList.forEach((plyrs,index )=> {
            if(plyrs==player){
                console.log(index)
                this.playerList.splice(index,1)
            }
        });
        
    }
    getByID(number: number): Player {
        let player
        this.playerList.forEach((plyrs,index) => {
            if(plyrs.number==number){
                player=this.playerList[index]
               
            }
        });
        return player

        //  this.playerList.filter(p=>p.number==number)[0]
        // return 
    }

}

let service=new PlayerService()

// console.log(service.getByID(45).salary)
// service.deletePlayer(service.getByID(45))
// console.log(service.getPlayers())
 let sacha=new Player(15,'sacha','RB',0.75)
let taylan=new Player(4,'Taylan','DOS',0.7)
service.savePlayer(taylan)
service.savePlayer(sacha)
console.log(service.getPlayers())
