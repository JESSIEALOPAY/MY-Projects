let players = [
    { id: 1, name: 'burak', problem: 'felt in love' },
    { id: 2, name: 'jessie', problem: 'bipolar' }
    //{id:3,name:'chris',problem:'hopeless'}
]

let a={name:'chris'}
players[1]={...players[1],...a}

players.forEach(element => {
    if(element.id==1){
        element={...element,...a}
    }
});

console.log(players[1])
















































