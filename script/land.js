const landDom = document.querySelector('.land');
const landStyle = getComputedStyle(landDom);
// 拿到landDom的所有样式

const landWidth = parseFloat(landStyle.width);
const landHeight = parseFloat(landStyle.height);
const landTop = parseFloat(landStyle.top);


class Land extends Rectangle {
    constructor(speed) {
        super(landWidth, landHeight, 0, landTop, speed, 0, landDom);
    }
    onMove(){
        if(this.left<=-landWidth/2){
            this.left=0;
        }
    }
}
// var land = new Land();

// setInterval(() => {
//     land.move(16 / 1000);
//     // 16秒除以1000表示的是16毫秒
// }, 16)






