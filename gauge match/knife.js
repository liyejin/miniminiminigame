export default class Knife{

    #x;
    #y;
    #width;
    #height;
    #img;


    constructor(ctx){
      this.#x = 400;
      this.#y = 350;
      this.#width = 300;
      this.#height = 300;   
  
      this.#img = new Image();
      this.#img.onload = () => {
      this.draw(ctx);
      };
      this.#img.src = "img/귀여운칼_-removebg-preview.png";
  
    }
  
    draw(ctx){
      ctx.drawImage(this.#img, this.#x, this.#y, this.#width, this.#height); 
    }
  }