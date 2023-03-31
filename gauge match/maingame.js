import Knife from './knife.js';
import Gauge from './gauge.js';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width= 1150; 
canvas.height= 820;

const img = new Image();
img.src = "img/최재혁.png";
img.onload = function(){
    ctx.drawImage(img, 0, 0); 
};

  class Noodle {
    #x;
    #y;
    #width;
    #height;
    #img;

    constructor() {
      this.#x = 400;
      this.#y = 300;
      this.#width = 500;
      this.#height = 280;

      this.#img = new Image();
      this.#img.src = "img/칼국수면예시-removebg-preview.png";
      this.#img.onload = () => {
        ctx.drawImage(this.#img,this.#x,this.#y,this.#width,this.#height)
      };
      }
    }
    
  const noodle = new Noodle();

  const knife = new Knife(ctx);

  const gauge = new Gauge(ctx,canvas); // 사용자에게 스페이스바 입력
  

  gauge.pressSpace();

