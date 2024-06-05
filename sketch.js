//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2

//velocidade da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload (){
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp3")
  raquetada = loadSound ("raquetada.mp3")
}
let colidiu = false;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete (xRaquete, yRaquete);
  mostraRaquete (xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente ();
  verificaColisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar ();
  marcaPonto ();
  bolinhaNaoFicaPresa();
   }

function mostraBolinha () {
  circle (xBolinha, yBolinha, diametro);
}

function movimentaBolinha (){
  xBolinha = xBolinha + velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
}

function verificaColisaoBorda (){
  if (xBolinha + raio > width ||
    xBolinha - raio < 0){
    velocidadeXbolinha *= -1
     }
  if (yBolinha + raio > height||
     yBolinha - raio < 0){
    velocidadeYbolinha *= -1
  }
}

function mostraRaquete (x, y) {
  rect (x, y, raqueteComprimento, raqueteAltura);
  }



function movimentaMinhaRaquete () {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function verificaColisaoRaquete (){
  if(xBolinha - raio < xRaquete + raqueteComprimento
     & yBolinha - raio < yRaquete + raqueteAltura & yBolinha + raio > yRaquete) {
    velocidadeXbolinha *= -1;
    raquetada.play ();
  }
}
function verificaColisaoRaqueteBiblioteca (x, y) {
  colidiu = 
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXbolinha *= -1;
    raquetada.play();
  }
}
function movimentaRaqueteOponente() {
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)) {
    yRaqueteOponente += 10;
}
}
function incluiPlacar () {
  stroke (255);
  textAlign (CENTER);
  textSize (20);
  fill(color(0, 0, 139))
  rect (150, 10, 40, 20);
  fill (255);
  text (meusPontos, 170, 26);
  fill (color(0, 0, 139))
  rect (450, 10, 40, 20);
  fill(255);
  text (pontosOponente, 470, 26);
}
function marcaPonto () {
  if (xBolinha > 590){
    meusPontos +=1
    ponto.play()
  }
  if (xBolinha < 10) {
    pontosOponente += 1;
    ponto.play ();
  }
}
function bolinhaNaoFicaPresa() {
  if (xBolinha - raio < 0){
    xBolinha=23
  }
}



