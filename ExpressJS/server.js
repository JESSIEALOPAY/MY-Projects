const { json } = require("express")
const express = require("express")
const { accesscontrol, defaultMiddleware } = require('./middleware')

let players = [
    { id: 1, name: 'burak', problem: 'felt in love' },
    { id: 2, name: 'jessie', problem: 'bipolar' }
    //{id:3,name:'chris',problem:'hopeless'}
]

const app = express()
const PORT = 5000
app.use(accesscontrol)
app.use(express.json())

app.get('/players', (req, res, next) => {
    //res.send('hi welcome to my page')
    //  res.json(players)
    res.json({
        success: true,
        data: players
    })
})

app.post('/players', (req, res, next) => {
    console.log(req.body)//gönderilen requestin bodysi
    const player=req.body
    players.push(player)

    res.json({
        success: true,
        data: players
    })
})
// id 
app.put('/players/:id', (req, res, next) => {
    const id= Number(req.params.id)
    players.forEach((player,index) => {
        if(player.id==id){
            players[index]={...player,...req.body}
        }     
    });
    res.json({
        success: true,
        data: players
    })
})

// id 
app.delete('/players/:id', (req, res, next) => {
    const id= Number(req.params.id)
    players.forEach((player,index) => {
        if(player.id==id){
            players.splice(index,1)
        }     
    });
    res.json({
        success: true,
        data: players
    })
})






app.get('/users', defaultMiddleware, (req, res, next) => {
    //res.send('hi welcome to my page')
    res.send('users')
})

app.listen(PORT, () => {
    console.log('Server Started')
})






















