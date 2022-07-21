class Player {
  constructor() {
    this.index = null
    this.distance = 0
    this.name = null
    this.ranking = null
  }
  getCount() {
    var playerCountRef = database.ref('playerCount')
    playerCountRef.on('value', function (data) {
      playerCount = data.val()
    })
  }
  updateCount(count) {
    database.ref('/').update({
      playerCount: count
    })
  }
  update() {
    var playerIndex = 'players/player' + this.index
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance
    })
  }
  static getPlayerInfo() {
    var PlayerInfoRef = database.ref('players')
    PlayerInfoRef.on('value', data => {
      allPlayers = data.val()
    })
  }
  getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.ranking=data.val()
    })
  }
  static updateCarsAtEnd(ranking){
    database.ref('/').update({
      CarsAtEnd:ranking
    })
  }

}
