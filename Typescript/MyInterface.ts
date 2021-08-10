
import { Player } from "./player";

export interface PlayerInterface{
    getPlayers():Player[]
    savePlayer(Player:Player)
    deletePlayer(player)
    getByID(number:number):Player
}