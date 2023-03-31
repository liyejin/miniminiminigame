export default class Gauge {

    constructor(ctx) {
        this.canvas = ctx.canvas;
        this.ctx = ctx;
        canvas.width = 1150;
        canvas.height = 820;
        this.redBoxWidth = 400;
        this.blackBoxWidth = 950;
        ctx.lineWidth = 6;
        ctx.fillStyle = "red";

    }

    pressSpace() {
        document.addEventListener("keyup", (event) => {
            if (event.code === "Space") {
                this.spaceUp();
            }
        });

        document.addEventListener("keydown", this.scrollPause);

        const interval = setInterval(() => {

            if (this.redBoxWidth > 0) {
                this.ctx.clearRect(0, 750, canvas.width, canvas.height);
                this.ctx.strokeRect(100, 750, this.blackBoxWidth, 52);
                this.ctx.fillRect(103, 753, this.redBoxWidth, 46);
                this.redBoxWidth -= 20;
            }

            else {
                alert("졌다!!");
            }

        }, 500);
    }

    scrollPause(e) {
        if (e.keyCode === 32)
            e.preventDefault();
    }



    spaceUp() {
        if (0 < this.redBoxWidth) {
            if (this.redBoxWidth < this.blackBoxWidth - 6) {
                this.redBoxWidth += 15;

                this.ctx.clearRect(
                    100,
                    750,
                    this.canvas.width,
                    this.canvas.height
                );
                this.ctx.strokeRect(100, 750, this.blackBoxWidth, 52);

                this.ctx.fillStyle = "red";
                this.ctx.fillRect(103, 753, this.redBoxWidth, 46);
            } else {
                this.redBoxWidth = this.blackBoxWidth;
                clearInterval(this.interval);
                alert("이겼다!!");
            }
        }
    }
}