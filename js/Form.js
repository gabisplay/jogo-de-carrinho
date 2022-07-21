class Form {
  constructor() {
    this.input = createInput('name')
    this.button = createButton('play')
    this.greeting = createElement('h1')
    this.title = createElement('h1')
    this.reset = createButton('reset')
  }
  hide() {
    this.button.hide()
    this.input.hide()
    this.greeting.hide()
    this.title.hide()
  }
  display() {
    this.title.html('corrida de carrinhos :o ')
    this.title.position(displayWidth / 2 - 500, 200)

    this.input.position(displayWidth / 2 + 350, displayHeight / 2 - 80)
    this.button.position(displayWidth / 2 + 350, displayHeight / 2)
    this.reset.position(displayWidth - 100, 20)
    this.button.mousePressed(() => {
      this.input.hide()
      this.button.hide()

      player.name = this.input.value()

      playerCount += 1
      player.index = playerCount
      player.update()
      player.updateCount(playerCount)

      this.greeting.html('bem-vindo :o  ' + player.name)
      this.greeting.position(displayWidth / 2 - 500, displayHeight / 2 - 100)
    })
    this.reset.mousePressed(() => {
      player.updateCount(0)
      game.update(0)
    })
  }
}
