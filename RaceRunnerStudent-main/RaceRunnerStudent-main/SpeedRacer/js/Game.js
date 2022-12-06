class Game {
  constructor() {}

  getState() {//método que irá ler o gameState do banco de dados
      var gameStateRef = database.ref("gameState");//me referindo a chave gameState criada no bd
      //criando um ouvinte que fica acompanhando a mudança no valor da variável gameState no bd.
      gameStateRef.on("value", function(data) {        
        gameState = data.val()

    });
  }

  update(state) {//método que irá atualizar o gameState no bd para um valor passado para ele como parâmetro
    database.ref("/").update({//se refere ao banco de dados principal dentro do qual gameState é criado
      
    });

  }
  start() {//método para obter o gameState e então iniciar o jogo
    //instância de um novo jogador
    player = new Player();
    playerCount = player.getCount();
    //inciando a variável playerCount
    form = new Form();
    form.display();

    //criar sprites dos jogadores
    car = createSprite(width/2-50,height-100)
    car.addImage("car1",carimg);
    car.scale = 0.07;

    car2 = createSprite(width+100,height-100)
    car2.addImage("car2",car2img);
    car2.scale = 0.07;

    //atribuindo os objetos ao vetor cars
    cars = [car,car2];

   
  }
  
  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffects");
  }

  play() {
    //função para esconder os elementos
    this.handleElements();
    //desenhar os sprites
    Player.getPlayersInfo();
    if(allPlayers!==undefined) {
      image(track,0,-height*5,width,height*6)
      var index = 0;
      for (var plr in allPlayers) {
        index = index + 1
        var x = allPlayers[plr].positionX
        var y = height - allPlayers[plr].positionY
        cars[index].position.x = x
        cars[index].position.y = y
        if(index === player.index){
          stroke(10)
          fill("yallow")
          elipse(x,y,60,60)
          camera.position.x = cars[index-1].position.x
          camera.position.y = cars[index-1].position.y

        }
      }
    }
    this.handlePlayerControls()
    drawSprites();

    
  }
    handlePlayerControls(){
      if(keyIsDown(UP_ARROW)){
        player.positionY += 10
        player.update()

      }
    }

}
