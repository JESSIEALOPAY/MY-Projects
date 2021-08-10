import { Player } from "./player";


export class dataPlayer{
    private players

    constructor(){
        this.players=new Array<Player>(
            new Player(1,'Muslera','GK',3.75),
            new Player(45,'Marcao','ST',1.1),
            new Player(7,'Kerem','Kanat',0.5),
            new Player(4,'Taylan','DOS',0.7),
            new Player(8,'Babel','GK',2.5)
        )
    }
    getPlayers(){
        return this.players
    }


}
// let datalist= new dataPlayer()

//console.log(datalist.getPlayers())