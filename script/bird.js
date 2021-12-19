const birdDom = document.querySelector('.bird');
const birdStyle = getComputedStyle(birdDom);
// 拿到landDom的所有样式

const birdWidth = parseFloat(birdStyle.width);
const birdHeight = parseFloat(birdStyle.height);
const birdTop = parseFloat(birdStyle.top);
const birdLeft = parseFloat(birdStyle.left);
const gameDom = document.querySelector('.game');
const gameHeight = gameDom.clientHeight;

class Bird extends Rectangle {
    constructor() {
        super(birdWidth, birdHeight, birdLeft, birdTop, 0, 0, birdDom);
        this.g = 20; //向下的加速度,单位:像素/平方毫秒
        this.maxY = landTop - this.height;
        // 最大的y坐标    
        this.swingStatus = 1;
        // 小鸟的翅膀状态
        this.timer = null;
        // 翅膀扇动的计时器
        this.render();
    }
    move(duration) {
        super.move(duration); //调用父类的move方法
        // 根据加速度改变速度
        this.ySpeed += this.g * duration
        //v=gt;     
    }

    // 开始煽动翅膀
    startSwing() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.swingStatus++;

            if (this.swingStatus === 4) {
                this.swingStatus = 1;
            }
            this.render();
        }, 300)
    }
    render() {
        super.render();//重用父类渲染逻辑
        this.dom.className = `bird swing${this.swingStatus}`
    }
    // 停止煽动翅膀
    stopSwing() {
        clearInterval(this.timer);
        this.timer = null;
    }


    onMove() {
        if (this.top < 0) {
            this.top = 0
        } else if (this.top > this.maxY) {
            this.top = this.maxY;
        }
    }
    // 向上跳,直接给一个向上的速度
    jump() {
        this.ySpeed = -30;
    }

}
// var bird = new Bird();

// setInterval(() => {
//     bird.move(16 / 1000);

// }, 16)