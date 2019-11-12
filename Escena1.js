class Escena1 extends Phaser.Scene{

    constructor() {
        super("menu");
    }


    preload(){
        this.load.image("titulo", "assets/titulo.png");
        this.load.image("cubo_azul", "assets/cazultitulo.png");
        this.load.image("cubo_rojo", "assets/crojotitulo.png");
    }

    create() {
        this.add.text(125 ,700, "Pulsa ENTER para iniciar");

        this.add.image(250,200, "titulo").setScale(0.6);
        cuboAzul = this.add.image(120,450, "cubo_azul");
        cuboRojo = this.add.image(380,450, "cubo_rojo").setScale(0.6).setRotation(-60);

        cuboAzul.setScale(0.65).setRotation(60);
        cuboRojo.setScale(0.65).setRotation(-60);

        this.space = this.input.keyboard.addKey(13);
        gameOver=false;
    }
    
    update() {
        if(this.space.isDown){
            this.scene.start("juego");
        }
    }
}
